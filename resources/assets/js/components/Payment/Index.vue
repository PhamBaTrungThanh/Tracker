<template>
    <div class="payment_index--wrapper">
        <div class="container">
            <div class="card">
                <h3 class="card-header">Thống kê</h3>
                <div class="card-body">
                    <h4 class="card-title">
                        <span @click="changeReportMonth(-1)" class="choose-month"><i class="material-icons">keyboard_arrow_left</i></span>
                        <span>Tháng {{reportForMonth}} năm {{reportForYear}}</span>
                        <span @click="changeReportMonth(1)" class="choose-month"><i class="material-icons">keyboard_arrow_right</i></span>
                    </h4>
                    <div class="card-text text-center position-relative">
                        <div class="loading-text">
                            <spinner  v-if="reportData === 'loading'"></spinner>
                            <span v-if="reportData === 'no-data'">Không có dữ liệu của tháng này.</span>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="canvas-container position-relative" style="height: 250px;">
                                    <canvas id="reporter_1_by_works"></canvas>
                                </div>
                                
                            </div>
                            <div class="col"></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        reportFor: "",
        payments: [],
        reportData: "loading",
        works: [],
        invoices: [],
    }),
    computed: {
        reportForMonth() {
            if (this.reportFor) {
                return this.reportFor.split("-")[1]; 
            }
            
        },
        reportForYear() {
            if (this.reportFor) {
                return this.reportFor.split("-")[0]; 
            }
        },
    },

    methods: {
        guard() {
            if (this.$route.query.archive) {
                this.reportFor = this.$route.query.archive;
            } else {
                this.reportFor = (new Date()).toISOString().substr(0, 7);
            }
            this.getDataForMonth();
        },
        changeReportMonth(month) {
            if (this.reportData !== 'loading') {
                if (typeof month === "number") {
                    let date = new Date(this.reportFor);
                    date.setMonth(date.getMonth() + month);
                    this.reportFor = date.toISOString().substr(0, 7);
                    this.getDataForMonth();
                    this.$router.replace({
                        "query": {
                            'archive': this.reportFor,
                        }
                    });
                }
            }

        },
        getDataForMonth() {
            this.reportData = 'loading';
            this.axios.post(`payment/archive`, {
                "from": this.reportFor,
            }).then( response => {
                if (response.data.data.length === 0) {
                    this.reportData = "no-data";
                } else {
                    this.reportData = response.data.data;
                    this.works = this._concat(this.works, response.data.related.works);
                    this.invoices = this._concat(this.invoices, response.data.related.invoices);
                    this.updateReports();
                }
                
            });
        },
        updateReports() {
            const total_paid_of_month = this.reportData.reduce( (sum, payment) => {
                return sum + parseFloat(payment.amount);
            }, 0);

            let works_data = [];
            let works_label = [];
            this.reportData.forEach(payment => {
                const invoice = this.getById(this.invoices, payment.invoice_id);
                let work_index = works_data.findIndex( work => work.id === invoice.work_id);
                if (work_index === -1) { //not found
                    works_data.push({
                        'id': invoice.work_id,
                        'amount': parseFloat(payment.amount),
                    });
                    works_label.push(this.getById(this.works, invoice.work_id).name)
                } else {
                    works_data[work_index].amount += parseFloat(payment.amount);
                }
            });
            console.log('total_paid_of_month', total_paid_of_month);
            console.log('works_data', works_data);
            console.log('works_label', works_label);

            // Make charts

            const by_works = new this.Chart(document.getElementById('reporter_1_by_works').getContext("2d"), {
                'type': "pie",
                'data': {
                    'labels': works_label,
                    'datasets': [{
                        'data': works_data.map( item => item.amount ),
                    }]
                },
                'options': {
                    'title': {
                        'display': true,
                        'text': "Theo công trường"
                    }
                }
            })
        }
    },
    beforeRouteEnter( to, from, next) {
        next(vm => vm.guard());
    },
}
</script>


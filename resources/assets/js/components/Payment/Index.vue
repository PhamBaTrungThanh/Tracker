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
                    <p class="card-text text-center" >
                        <spinner  v-if="reportData === 'loading'"></spinner>
                        <span v-if="reportData === 'no-data'">Không có dữ liệu của tháng này.</span>
                    </p>
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
            if (this.$route.query.for_month) {
                this.reportFor = this.$route.query.for_month;
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
                            'for_month': this.reportFor,
                        }
                    });
                }
            }

        },
        getDataForMonth() {
            this.reportData = 'loading';
            this.axios.get(`payment`, {
                params: {
                    'do': "by_month",
                    "from": this.reportFor,
                }
            }).then( response => {
                if (response.data.data.length === 0) {
                    this.reportData = "no-data";
                } else {
                    this.reportData = response.data.data;
                }
                
            });
        }
    },
    beforeRouteEnter( to, from, next) {
        next(vm => vm.guard());
    },
}
</script>


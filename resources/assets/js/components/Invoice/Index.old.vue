<template>
    <div id="accounting-wraper">
        <div class="selection--panel">
            <div class="row">
                <div class="col-12">
                    <div class="form-group">
                        <treeselect :load-root-options="loadWorks" v-model="work_id" placeholder="Chọn công trình"></treeselect>
                    </div>
                    <div class="form-group">
                        <treeselect :load-root-options="loadProviders" v-model="provider_id" :disabled="!work_id" placeholder="Chọn nhà cung cấp"></treeselect>
                    </div>
                </div>
            </div>
            <div class="row" v-if="work_id && provider_id && !list">
                <div class="col">
                    <h4 class="text-center">Loading</h4>
                </div>
            </div>
            <div class="row" v-if="list">
                <div class="col">
                    <table class="table invoices-table">
                        <thead class="thead-light">
                            <tr>
                                <th class="number-col">#</th>
                                <th class="date-col">Ngày</th>
                                <th class="name-col">Tên</th>
                                <th class="receives-col">Số lần nhận hàng</th>
                                <th class="payments-col">Số lần thanh toán</th>
                                <th class="total-col">Tổng tiền</th>
                                <th class="payment-total-col">Đã thanh toán</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, index) in list" :key="row.id" @click="showDetail(row.id)">
                                <td class="number-col">{{ (index + 1) }}</td>
                                <td class="date-col">{{row.signed_at}}</td>
                                <td class="name-col">{{row.name}}</td>
                                <td class="receives-col">{{row.receives_count}}</td>
                                <td class="payments-col">{{row.payment_count}}</td>
                                <td class="total-col">{{commafly(row.total)}}</td>          
                                <td class="payment-total-col">{{commafly(row.payment_total)}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {
            work_id: null,
            provider_id: null,
        }
    },
    asyncComputed: {
        list() {
            return new Promise( (resolve, reject) => {
                if (this.work_id && this.provider_id) {
                    axios.get(`${this.$store.state.apiBase}/invoice`, {
                        params: {
                            work_id: this.work_id,
                            provider_id: this.provider_id,
                        }
                    }).then( response => {
                        resolve(response.data.data);
                    });           
                }
                
            });

        }
    },
    methods: {
        commafly(number) {
            return window.commafly(number);
        },
        loadWorks(callback) {
            axios.get(`${this.$store.state.apiBase}/work`).then( response => {

                const works = response.data.data.map( work => {
                    return {
                        id: work.id,
                        label: work.name,
                    }
                
                });
                callback(null, works);
            }).catch( error => {
                console.log(error);
            });
        },
        loadProviders(callback) {
            axios.get(`${this.$store.state.apiBase}/provider`).then( response => {

                const providers = response.data.map( provider => {
                    return {
                        id: provider.id,
                        label: provider.name,
                    }
                
                });
                callback(null, providers);       
            });
        },
        showDetail(invoice_id) {
            this.$router.push({
                name: "invoice.show",
                params: { id: invoice_id },
            });
        },
        mounted(){
            if (this.$route.query.work_id) {
                this.work_id = this.$route.query.work_id;
            }
            if (this.$route.query.provider_id) {
                this.provider_id = this.$route.query.provider_id;
            }
        }
    }
}
</script>

<style>

</style>

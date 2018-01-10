<template>
    <div class="invoice_show--wrapper">
        <transition v-if="ready">
            <div class="card">
                <h3 class="text-center card-header">{{invoice.name}}</h3>
                <div class="card-body">
                    <h5 class="card-title">Thông tin chi tiết</h5>
                    <div class="row">
                        <div class="col">
                            <p class="card-text">
                                <b>Dự án:</b> <router-link :to="{name: 'work.show', params: {id: work.id}}">{{work.name}}</router-link>
                            </p>
                            <p class="card-text">
                                <b>Nhà cung cấp:</b> <a>{{provider.name}}</a>
                            </p>
                        </div>
                        <div class="col">
                            <p class="card-text">
                                <b>Ngày ký:</b> <a>{{invoice.signed_at}}</a>
                            </p>
                            <p class="card-text">
                                <b>% thanh toán:</b> <a>{{percentComplete}}</a>
                            </p>                           
                        </div>
                        <div class="col">
                            <p class="card-text">
                                <b>Tổng số tiền:</b> <a>{{$comma(invoice.total)}} </a>
                            </p>    
                            <p class="card-text">
                                <b>Đã thanh toán:</b> <a>{{$comma(invoice.payment_total)}} </a>
                            </p>          

                        </div>
                    </div>                                              
                </div>
                <div class="card-body">
                    <p class="card-text text-center">
                        <button class="btn btn-primary" @click="editInvoice" v-if="user.can_edit_invoice">Sửa đơn hàng</button>
                        <button class="btn btn-secondary" @click="deleteInvoice" v-if="user.can_delete_invoice">Xóa đơn hàng</button>
                    </p>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Thanh toán</h5>
                    <table class="table">
                        <thead class="thead-light">
                            <tr>
                                <th style="width: 50px">#</th>
                                <th class="left" style="width: 200px">Tên</th>
                                <th style="width: 100px;">Ngày</th>
                                <th style="width: 120px;">Hình thức</th>
                                <th style="width: 150px;">Số tiền</th>
                                <th>Nội dung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, index) in payments" :key="row.id" @click="gotoPayment(row.id)">
                                <td>{{ (index + 1) }}</td>
                                <td class="left">{{row.name}}</td>
                                <td>{{row.paid_on}}</td>
                                <td>{{__(row.method)}}</td>
                                <td>{{$comma(row.amount)}}</td>
                                <td>{{row.content}}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="4">Tổng cộng</td>
                                <td colspan="2">{{$comma(invoice.payment_total)}}</td> 
                            </tr>
                            <tr>
                                <td colspan="4">Còn lại</td>
                                <td colspan="2">{{$comma(invoice.total - invoice.payment_total)}}</td> 
                            </tr>
                        </tfoot>
                    </table>
                    <br>
                    <div class="form-group text-center">
                        <button class="btn btn-primary" @click="newPayment" v-if="user.can_add_payment">Thêm thanh toán</button>
                    </div>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Vật tư</h5>
                    <table class="table receive-table scrollable-y">
                        <thead class="thead-light">
                            <tr>
                                <th class="number-col">#</th>
                                <th class="name-col">Tên</th>
                                <th class="unit-col">Số lượng đặt hàng</th>
                                <template v-for="index in receives.length">
                                    <th class="received-col" :key="index">Nhận đợt {{(index + 1)}}</th>
                                </template>
                                <th class="total-received-col">Thực nhận</th>
                                <th class="left-col">Còn lại</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, index) in trackers" :key="row.id">
                                <td class="number-col">{{ (index + 1) }}</td>
                                <td class="name-col">{{ row.material.name }}</td>
                                <td class="unit-col">{{ row.unit }}</td>
                                    <template v-for="(receive) in receives">
                                    <td class="received-col" :key="receive.id">{{getFromMatrix(receive.id, row.id)}}</td>
                                </template>      
                                <td class="total-received-col">{{row.received_unit}}</td>
                                <td class="left-col">{{ row.unit - row.received_unit}}</td>                                                                 
                            </tr>
                        </tbody>
                    </table>
                    <br>
                    <div class="form-group text-center" >
                        <button class="btn btn-primary" @click="newReceive" v-if="user.can_add_receive">Nhận hàng</button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
    
        
</template>

<script>
export default {
    data() {
        return {
            ready: false,
            invoice: null,
            provider: null,
            payments: null,
            receives: null,
            trackers: null,
            received_list: [],
            total_paid: 0,

        }
    },
    computed: {
        percentComplete() {
            return parseFloat(this.invoice.payment_total/this.invoice.total*100).toFixed(2);
        },
        user() {
            return this.$store.state.user;
        },
        work() {
            return this.$store.state.currentWork;
        }
    },

    methods: {
        fetchData() {
            axios.get(`${this.$store.state.apiBase}/invoice/${this.$route.params.id}`).then( result => {
                this.invoice = result.data.data;
                this.payments = result.data.meta.payments;
                this.provider = result.data.meta.provider;
                this.receives = result.data.meta.receives;
                this.trackers = result.data.meta.trackers;
                this.received_list = result.data.meta.received_list;
                this.total_paid = (this.payments.length > 0) ? this.payments.reduce( payment => payment.amount ) : [];
                this.$store.dispatch('setWorkId', this.invoice.work_id);
                this.ready = true;
            });
        },
        getFromMatrix(receive_id, tracker_id) {
            const receive = this.received_list.find( r => r.receive_id === receive_id);
            const content = receive.trackers.find( t => t.tracker_id === tracker_id);
            if (!content) {
                return "-";
            } else {
                return content.unit;
            }
           
        },

        goBack() {
            this.$router.push({
                name: "invoice.index",

            });
        },
        newReceive() {
            this.$router.push({
                name: "invoice.edit",
                query: {
                    action: "new_receive",
                    index: this.invoice.receives.length + 1,
                }
            })
        },
        newPayment() {
            this.$router.push({
                name: "payment.create",
                query: {
                    index: this.payments.length + 1,
                    invoice_id: this.invoice.id,
                }
            })
        },
        editInvoice() {
             this.$router.push({
                name: "invoice.edit",
                query: {
                    action: "new_payment",
                    index: this.payments.length + 1,
                }
            });           
        },
        gotoPayment(payment_id) {
             this.$router.push({
                name: "payment.show",
                params: {
                    id: payment_id,
                }
            });    
        },  
        deleteInvoice() {
            this.$swal({
                title:"Xóa đơn hàng",
                content: "Bạn có chắc chắn muốn xóa đơn hàng này?",
                icon: "warning",
                buttons: {
                    cancel: "Hủy",
                    catch: "Đồng ý",
                }
            }).then( result => {
                if (result) {
                    axios.delete(`${this.$store.state.apiBase}/invoice/${this.$route.params.id}`).then( response => {
                        this.$store.commit('RELOAD_WORK');
                        this.$swal("Hoàn thành", "Đã xóa đơn hàng", "success").then( _catch => {
                            this.$router.push({
                                "name": "work.show",
                                "params": {
                                    "id": this.work.id,
                                }
                            });
                        });
                    });
                }
            });
        }
    },
    created() {
        this.fetchData();
    }
}
</script>

<style>

</style>

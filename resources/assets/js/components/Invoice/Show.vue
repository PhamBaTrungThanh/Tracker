<template>
    <div v-if="invoice">
        <h3 class="text-center">{{invoice.name}}</h3>
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Thông tin chi tiết</h5>
                        <div class="row">
                            <div class="col">
                                <p class="card-text">
                                    <b>Dự án:</b> <router-link :to="{name: 'work.show', params: {id: invoice.work.id}}">{{invoice.work.name}}</router-link>
                                </p>
                                <p class="card-text">
                                    <b>Nhà cung cấp:</b> <a>{{invoice.provider.name}}</a>
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
                        <table class="table payment-table">
                            <thead class="thead-light">
                                <tr>
                                    <th class="number-col">#</th>
                                    <th class="name-col">Tên</th>
                                    <th class="date-col">Ngày</th>
                                    <th class="method-col">Hình thức</th>
                                    <th class="pay-col">Số tiền</th>
                                    <th class="note-col">Ghi chú</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(row, index) in invoice.payments" :key="row.id">
                                    <td class="number-col">{{ (index + 1) }}</td>
                                    <td class="name-col">{{row.name}}</td>
                                    <td class="date-col">{{row.pay_at}}</td>
                                    <td class="method-col">{{row.method}}</td>
                                    <td class="pay-col">{{$comma(row.amount)}}</td>
                                    <td class="note-col">{{row.note}}</td>
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
                                    <template v-for="(row, index) in invoice.receives">
                                        <th class="received-col" :key="index">Nhận đợt {{(index + 1)}}</th>
                                    </template>
                                    <th class="total-received-col">Thực nhận</th>
                                    <th class="left-col">Còn lại</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(row, index) in invoice.trackers" :key="row.id">
                                    <td class="number-col">{{ (index + 1) }}</td>
                                    <td class="name-col">{{ row.material.name }}</td>
                                    <td class="unit-col">{{ row.unit }}</td>
                                     <template v-for="(receive) in invoice.receives">
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
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            invoice: null,
            received_list: [],
            total_paid: 0,
            mew_payment: false,
            payment_methods: [
                {
                    label: "Chuyển khoản",
                    id: "bank_transfer"
                },
                {
                    label: "Tiền mặt",
                    id: "cash"
                }
            ]
        }
    },
    computed: {
        percentComplete() {
            return parseFloat(this.invoice.payment_total/this.invoice.total*100).toFixed(2);
        },
        user() {
            return this.$store.state.user;
        },
    },

    methods: {
        fetchData() {
            axios.get(`${this.$store.state.apiBase}/invoice/${this.$route.params.id}`).then( result => {
                this.invoice = result.data.data;
                this.received_list = result.data.meta.received_list;
                this.total_paid = (this.invoice.payments.length > 0) ? this.invoice.payments.reduce( payment => payment.amount ) : [];
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
        cancel() {
            this.$close(false);
        },
        submit() {

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
                name: "invoice.edit",
                query: {
                    action: "new_payment",
                    index: this.invoice.payments.length + 1,
                }
            })
        },
        editInvoice() {
             this.$router.push({
                name: "invoice.edit",
                query: {
                    action: "new_payment",
                    index: this.invoice.payments.length + 1,
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
                                    "id": this.invoice.work.id,
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

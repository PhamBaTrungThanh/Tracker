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
                                    <b>Dự án:</b> <a>{{invoice.work.name}}</a>
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
                                    <b>Tổng giá trị:</b> <a>{{invoice.total}}</a>
                                </p>                      
                            </div>
                        </div>                                              
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
                                    <td class="pay-col">{{row.amount}}</td>
                                    <td class="note-col">{{row.note}}</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="4">Tổng cộng</td>
                                    <td colspan="2"></td> 
                                </tr>
                                <tr>
                                    <td colspan="4">Còn lại</td>
                                    <td colspan="2"></td> 
                                </tr>
                            </tfoot>
                        </table>
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
                                    <td class="total-received-col">{{row.total_received}}</td>
                                    <td class="left-col">{{ row.unit - row.total_received}}</td>                                                                 
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" v-if="on === 'new_receive'">
            <div class="col">
                <div class="payment--container">
                    <div class="form-group">
                        <input type="input" v-model="new_receive.name" class="form-control hide-border">
                    </div>
                    <div class="form-row">
                        <div class="form-group col-6">
                            <label for="receive_date">Ngày nhận</label>
                            <input type="date" v-model="new_receive.date" class="form-control" id="receive_date">
                        </div>
                        <div class="form-group col-6">
                            <label for="receive_note">Ghi chú</label>
                            <input type="input" v-model="new_receive.note" class="form-control" id="receive_note" placeholder="Nhập ghi chú">
                        </div>
                    </div>
                    <div class="form-group">
                        
                    </div>
                    <div class="form-group">
                        <h5>Chi tiết vật tư</h5>

                    </div>
                    <div class="form-group text-center">
                        <button class="btn btn-primary" @click="submitInvoice">Cập nhật</button>
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
            on: false,
            new_receive: {
                name: "",
                date: "",
                note: "",
            },
            received_list: [],
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
    },

    methods: {
        fetchData() {
            axios.get(`${this.$store.state.apiBase}/invoice/${this.$route.params.id}`).then( result => {
                this.invoice = result.data.data;
                this.received_list = result.data.meta.received_list;
            });
        },
        comma(number) {
            return window.commafly(number);
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
        newReceive() {
            this.on = 'new_receive';
            this.new_receive = {
                date: new Date().toLocaleDateString("vi-VN"),
                name: `Nhận hàng đợt ${this.invoice.receives_count + 1}`,
                note: "",
                receiving_list: [].fill(0, 0, this.invoice.trackers.length),
            };
        },
        newPayment() {
            this.new_payment = {
                name: `Thanh toán đợt ${this.invoice.payment_count + 1}`,
                type: "",
            }
        }
    },
    created() {
        this.fetchData();
    }
}
</script>

<style>

</style>

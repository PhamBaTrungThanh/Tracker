<template>
    <div class="payment_create--wrapper">
        <div class="card">
            <h3 class="card-header text-center">Thêm thanh toán</h3>
            <div class="card-body">
                <div class="card-text">
                    <div class="form-row">
                        <div class="form-group col-6 row">
                            <label for="invoice_id" class="col-3 col-form-label">Mã đơn hàng:</label>
                            <div class="col-9">
                                <input type="text" name="invoice_id" readonly :value="$route.query.invoice_id" :class="{'form-control' :true, 'text-right': true, 'is-invalid': errors.has('invoice_id')}" v-validate.initial="'required'">
                                <span class="invalid-feedback">Mã đơn hàng không hợp lệ</span>
                            </div>
                        </div>
                        <div class="form-group col-6 row">
                            <label for="payment_made_by" class="col-4 col-form-label text-right">Người thanh toán:</label>
                            <div class="col-8">
                                <input type="text" name="invoice_id" readonly :value="$store.state.user.name" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="payment_name">Tên</label>
                        <input type="input" v-model="new_payment.name" :class="{'form-control': true, 'is-invalid': errors.has('payment_name')}" v-validate="'required'" name="payment_name">
                        <span class="invalid-feedback">Xin nhập tên</span>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-12">
                            <label>Hình thức thanh toán</label>
                            <div :class="{'is-invalid': errors.has('payment_method'), 'form-control': errors.has('payment_method')}">
                                <treeselect :options="payment_methods" v-model="new_payment.method" name="payment_method" v-validate.initial="'required'"></treeselect>
                            </div>
                            <span class="invalid-feedback">Xin chọn hình thức thanh toán</span>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-6">
                            <label for="payment_date">Ngày thanh toán</label>
                            <input type="date" v-model="new_payment.pay_at" :class="{'form-control': true, 'is-invalid': errors.has('payment_date')}" name="payment_date" v-validate.initial="'required'">
                            <span class="invalid-feedback">Xin nhập ngày thanh toán</span>
                        </div>
                        <div class="form-group col-6">
                            <label for="receive_note">Ghi chú</label>
                            <input type="input" v-model="new_payment.note" class="form-control" id="payment_note" placeholder="Nhập ghi chú">
                        </div>
                    </div>
                    <div class="form-row">
                        
                        <div class="form-group col">
                            <label for="payment_amount">Số tiền</label>
                            <cleave v-model="new_payment.amount" :options="price_option" :class="{'form-control': true, 'is-invalid': errors.has('payment_amount')}" name="payment_amount" placeholder="Số tiền" v-validate.initial="'required'"></cleave>
                            <span class="invalid-feedback">Xin nhập số tiền</span>
                        </div>
                    </div>
                    <div class="form-group">
                        
                    </div>
                    <div class="form-group text-center">
                        <submit :on-submit="submitPayment" :on-success="goToInvoice">Thêm thanh toán</submit>
                        <button class="btn btn-secondary" @click="goToInvoice">Hủy</button>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    data: () => ({
            payment_methods: [
                {
                    label: "Chuyển khoản",
                    id: "bank_transfer"
                },
                {
                    label: "Tiền mặt",
                    id: "cash"
                }
            ],
            price_option: {
                numeral: true,
                numeralThousandsGroupStyle: 'thousand'
            },
            new_payment: {
                name: "",
                pay_at: "",
                note: "",
                amount: "",
                method: "",
            },
    }),
    methods: {
        submitPayment() {
            if (this.errors.any()) {
                return false;
            } else {
                return {
                    "method": "POST",
                    "url": "payment",
                    "data": {
                        "name": this.new_payment.name,
                        "pay_at": this.new_payment.pay_at,
                        "note": this.new_payment.note,
                        "amount": this.new_payment.amount,
                        "method": this.new_payment.method,
                    }
                }
            }
        },
        goToInvoice() {
            this.$router.push({
                "name": "invoice.show",
                "params": {
                    "id": this.$route.query.invoice_id,
                }

            });
        }
    },
    mounted() {
        this.new_payment.name = `Thanh toán lần ${this.$route.query.index}`;
    }
}
</script>

<style>

</style>

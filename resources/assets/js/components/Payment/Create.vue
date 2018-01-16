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
                        <div class="form-group col">
                            <label for="payment_date">Ngày thanh toán</label>
                            <cleave :options="cleave.date" v-model="new_payment.paid_on" :class="{'form-control': true, 'is-invalid': errors.has('payment_date')}" name="payment_date" v-validate.initial="'required|date_format:DD/MM/YYYY'" :raw="false"></cleave>
                            <span class="invalid-feedback" v-show="errors.firstByRule('payment_date', 'required')">
                                Ngày không được để trống.
                            </span>   
                            <span class="invalid-feedback" v-show="errors.firstByRule('payment_date', 'date_format')">
                                Ngày không hợp lệ. Nhập ngày theo dạng DD/MM/YYYY
                            </span>      
                        </div>
                        <div class="form-group col">
                            <label for="payment_amount">Số tiền</label>
                            <cleave v-model="new_payment.amount" :options="cleave.price" :class="{'form-control': true, 'is-invalid': errors.has('payment_amount')}" name="payment_amount" placeholder="Số tiền" v-validate.initial="'required'"></cleave>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="payment_content">Nội dung</label>
                        <textarea v-model="new_payment.content" :class="{'form-control': true, 'is-invalid': errors.has('payment_content')}" v-validate.initial="'required'" name="payment_content" placeholder="Nội dung thanh toán"></textarea>
                    </div>

                    <div class="card-footer text-center">
                        <submit :on-submit="submitPayment" :on-success="goToInvoice">Thêm thanh toán</submit>
                        <button class="btn" @click="goToInvoice">Hủy</button>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    data: () => ({
        new_payment: {
            name: "",
            paid_on: "",
            content: "",
            amount: "",
            method: "",
        },
    }),
    computed: {
        cleave() {
            return this.$store.state.cleaveOptions;
        },
        payment_methods() {
            return this.$store.state.paymentMethods;
        }
    },
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
                        "paid_on": this.toISODate(this.new_payment.paid_on),
                        "content": this.new_payment.content,
                        "amount": this.new_payment.amount,
                        "method": this.new_payment.method,
                        "invoice_id": this.$route.query.invoice_id,
                        "user_id": this.$store.state.user.id,
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

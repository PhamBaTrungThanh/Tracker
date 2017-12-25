<template>
    <div class="dialog-wrapper" @click.self="cancel">

        <div class="dialog-content big">
            <div class="row" v-if="new_payment">
                <div class="col">
                    <div class="payment--container">
                        <div class="form-group">
                            <input type="text" v-model="new_payment.name" class="form-control hide-border">
                        </div>
                        <div class="form-group">
                            <treeselect placeholder="Hình thức thanh toán" :options="payment_methods"></treeselect>
                        </div>
                        <div class="form-group">
                            <input type="text" v-model="new_payment.note" class="form-control" placeholder="Ghi chú">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-group text-center">
                        <button class="btn btn-primary" @click="newPayment">Thêm thanh toán</button>
                    </div>
                </div>
            </div>

            <div class="form-group text-center" >
                <button class="btn" @click="cancel">Đóng</button>
            </div>
        </div>           
    </div>
</template>

<script>
export default {
    data() {
        return {
            invoice: null,
            new_payment: false,
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
    methods: {
        fetchData() {
            axios.get(`${this.$store.state.apiBase}/invoice/${this.invoice_id}`).then( result => {
                this.invoice = result.data.data;
            });
        },
        cancel() {
            this.$close(false);
        },
        submit() {

        },
        newPayment() {
            this.new_payment = {
                name: `Thanh toán đợt ${this.invoice.payment_count + 1}`,
                type: "",
            }
        }
    },
    mounted() {
        this.fetchData();
    }
}
</script>

<style>

</style>

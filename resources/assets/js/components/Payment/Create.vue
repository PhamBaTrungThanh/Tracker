<template>
    <div class="payment_create--wrapper">
        <div class="card">
            <h3 class="card-title text-center">Thêm thanh toán</h3>
            <div class="card-body">
                <div class="payment--container">
                    <div class="form-group">
                        <input type="input" v-model="new_payment.name" class="form-control hide-border">
                    </div>
                    <div class="form-row">
                        <div class="form-group col-12">
                            <label>Hình thức thanh toán</label>
                            <treeselect :options="payment_methods" v-model="new_payment.method"></treeselect>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-6">
                            <label for="receive_date">Ngày thanh toán</label>
                            <input type="date" v-model="new_payment.pay_at" class="form-control" id="payment_date">
                        </div>
                        <div class="form-group col-6">
                            <label for="receive_note">Ghi chú</label>
                            <input type="input" v-model="new_payment.note" class="form-control" id="payment_note" placeholder="Nhập ghi chú">
                        </div>
                    </div>
                    <div class="form-row">
                        
                        <div class="form-group col">
                            <label for="receive_note">Số tiền</label>
                            <input type="input" v-model="new_payment.amount" class="form-control" id="payment_amount" placeholder="Số tiền">
                        </div>
                    </div>
                    <div class="form-group">
                        
                    </div>
                    <div class="form-group text-center">
                        <button class="btn btn-primary" @click="submitPayment">Cập nhật</button>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>

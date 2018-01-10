<template>
    <div class="payment_show--wrapper">
        <transition v-if="payment">
                
            <div class="card">
                <h4 class="card-header text-center">Chi tiết thanh toán</h4>
                <div class="card-body">
                    <h5 class="card-title"><b>Đơn hàng: </b><router-link :to="{'name': 'invoice.show', 'params': { 'id': payment.invoice.id } }">{{payment.invoice.name}}</router-link></h5>
                    <div class="row">
                        <div class="col">
                            <p class="card-text"><b>Tiêu đề: </b>{{payment.name}}</p>
                            <p class="card-text"><b>Nguời tạo: </b>{{payment.creator.name}}</p>
                        </div>
                        <div class="col">
                            <p class="card-text"><b>Ngày thanh toán: </b>{{payment.paid_on}}</p>
                            <p class="card-text"><b>Hình thức thanh toán: </b>{{__(payment.method)}}</p>
                        </div>
                        <div class="col">
                            <p class="card-text"><b>Số tiền: </b>{{$comma(payment.amount)}}</p>
                            <p class="card-text"><b>Nội dung: </b>{{payment.content}}</p>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Lịch sử:</h5>
                    <table class="card-text table"  v-if="payment.notes.length">
                        <thead class="thead-light">
                            <th class="index-col">#</th>
                            <th style="width: 250px">Người sửa</th>
                            <th class="date-col">Ngày sửa</th> 
                            <th class="content-col">Lý do</th>

                        </thead>
                        <tbody>
                            <tr v-for="(note, index) in payment.notes" :key="note.id">
                                <td class="index-col">{{index + 1}}</td>
                                <td>{{note.actor_name}}</td>
                                <td class="date-col">{{note.created_at}}</td>
                                <td>{{note.content}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="card-footer">
                    <p class="card-text text-center">
                        <router-link v-if="user.can_edit_payment" :to="{'name': 'payment.edit', 'params': {'id': payment.id} }" class="btn btn-primary" tag="button">Sửa thanh toán</router-link>
                        <button class="btn btn-secondary" v-if="user.can_delete_payment">Xóa</button>
                    </p>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    computed: {
        user() {
            return this.$store.state.user
        }
    },
    data: () => ({
        "payment": false,
    }),
    created() {
        this.axios.get(`payment/${this.$route.params.id}`).then( response => {
            this.payment = response.data;
        });
    }
}
</script>

<style>

</style>

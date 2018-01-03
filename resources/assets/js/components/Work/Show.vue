<template>
    <transition v-if="work">
        <div class="show_work--container">
            <div class="card">
                <img class="card-img limit-img" :src="work.image_cover">
                <div class="card-img-overlay  text-white">
                    <h3 class="card-title">Công trình {{work.name}}</h3>
                    <p class="card-text">{{work.description}}</p>
                    <p class="card-text"><em>Cập nhật lần cuối: </em>{{work.updated_at}}</p>
                    <p class="card-text text-center">
                        <button class="btn btn-primary" @click="viewReport()">Xem báo cáo</button>
                    </p>
                </div>
                <div class="card-body">
                    <h5 class="text-center">Thông tin chung</h5>
                    <div class="row">
                        <div class="col">
                            <p class="card-text"><b>Khởi công: </b>{{ work.started_at }}</p>
                            <p class="card-text"><b>Số người công tác: </b>Chưa có thông tin</p>
                        </div>
                        <div class="col">
                            <p class="card-text"><b>Hợp đồng nguyên tắc: </b>{{work.contracts.length}}</p>
                            <p class="card-text"><b>Danh mục / vật tư: </b>{{work.category_count}} / {{work.material_count}}</p>
                        </div>
                        <div class="col">
                            <p class="card-text"><b>Hóa đơn: </b>{{work.invoices.length}}</p>
                            <p class="card-text"><b>Giá trị đơn hàng: </b>{{ $comma(work.total_sum) }}</p>
                        </div>
                        <div class="col">
                            <p class="card-text"><b>Tổng giá trị BOQ: </b>{{ $comma(work.boq_sum) }}</p>
                            <p class="card-text"><b>Giá trị thanh toán: </b>{{ $comma(work.paid_sum) }}</p>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <h5 class="text-center">Danh sách hóa đơn</h5>
                    <table class="table">
                        <thead class="thead-light">
                            <tr>
                                <th>#</th>
                                <th>Tên</th>
                                <th>Ngày ký</th>
                                <th>Nhà cung cấp</th>
                                <th>Giá trị đơn hàng</th>
                                <th>Số lần nhận hàng</th>
                                <th>Số lần thanh toán</th>
                                <th>Giá trị thanh toán</th>
                                <th>Ghi chú</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(invoice, index) in work.invoices">
                                <tr :key="index" @click="showInvoice(invoice.id)">
                                    <td>{{ (index + 1) }}</td>
                                    <td>{{ invoice.name }}</td>
                                    <td>{{ invoice.signed_at }}</td>
                                    <td>{{ invoice.provider.name }}</td>
                                    <td>{{ $comma(invoice.total * 1.1) }}</td>
                                    <td>{{ invoice.receives.length }}</td>
                                    <td>{{ invoice.payments.length }}</td>
                                    <td>{{ $comma(invoice.payment_total) }}</td>
                                    <td></td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                    <br>
                    <p class="card-text text-center" v-if="user.can_add_invoice">
                        <button class="btn btn-primary" @click="newInvoice()">Thêm đơn hàng</button>
                    </p>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            work: false,
        }
    },
    methods: {
        viewReport() {
            this.$router.push({
                name: "work.report",
            });
        },
        showInvoice(invoice_id) {
            this.$router.push({
                name: "invoice.show",
                params: {
                    id: invoice_id,
                }
            })
        },
        newInvoice() {
            this.$router.push({
                name: "invoice.create",
                query: {
                    work_id: this.work.id,
                }
            });
        }
    },
    computed: {
        user() {
            return this.$store.state.user;
        }
    },
    created() {
        if (typeof this.$store.state.currentWork.id === "number") {
            if (this.$store.state.currentWork.id === this.$route.params.id) {
                this.work = this.$store.state.currentWork;
            }
        }
        if (!this.work) {
            axios.get(`${this.$store.state.apiBase}/work/${this.$route.params.id}`).then( response => {    
                if (response.status === 200) {
                    this.$store.commit('SET_CURRENT_WORK', response.data.data);
                    this.work = response.data.data;
                }
            }).catch( error => {
                console.log(error)
            });
        }
    },
}
</script>

<style>

</style>

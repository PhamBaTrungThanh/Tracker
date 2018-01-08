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
                            <p class="card-text"><b>Đơn hàng: </b>{{work.invoices.length}}</p>
                            <p class="card-text"><b>Giá trị đơn hàng: </b>{{ $comma(work.total_sum) }}</p>
                        </div>
                        <div class="col">
                            <p class="card-text"><b>Tổng giá trị BOQ: </b>{{ $comma(work.boq_sum) }}</p>
                            <p class="card-text"><b>Giá trị thanh toán: </b>{{ $comma(work.paid_sum) }}</p>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <h5 class="text-center">Danh sách đơn hàng</h5>
                    <table class="table">
                        <thead class="thead-light">
                            <tr>
                                <th class="text-center">#</th>
                                <th>Tên</th>
                                <th class="text-center">Ngày ký</th>
                                <th>Nhà cung cấp</th>
                                <th class="text-center">Giá trị đơn hàng</th>

                                <th class="text-center">Giá trị thanh toán</th>
                                <th class="text-center">Ghi chú</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(invoice, index) in work.invoices">
                                <tr :key="index" @click="showInvoice(invoice.id)">
                                    <td class="text-center">{{ (index + 1) }}</td>
                                    <td>{{ invoice.name }}</td>
                                    <td class="text-center">{{ invoice.signed_at }}</td>
                                    <td class="provider-col">{{ invoice.provider.name }}</td>
                                    <td>{{ $comma(invoice.total * 1.1) }}</td>
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
        },
        fetchData() {
            axios.get(`${this.$store.state.apiBase}/work/${this.$route.params.id}`).then( response => {    
                if (response.status === 200) {
                    this.$store.commit('SET_CURRENT_WORK', response.data.data);
                    this.work = response.data.data;
                }
            }).catch( error => {
                console.log(error)
            });
        },
        guard() {

            if (typeof this.$store.state.currentWork.id === "number") {
                if (this.$store.state.currentWork.id === this.$route.params.id) {
                    this.work = this.$store.state.currentWork;
                }
            }
            if (!this.work) {
                this.fetchData();
            }
            if (this.$store.state.reload === "reload_work") {
                console.log("reloading work");
                this.fetchData();
                this.$store.commit("RELOAD_WORK_COMPLETE");
            }
        }
    },
    computed: {
        user() {
            return this.$store.state.user;
        }
    },
    beforeRouteEnter( to, from, next) {
        next(vm => vm.guard());
    },

}
</script>

<style>

</style>

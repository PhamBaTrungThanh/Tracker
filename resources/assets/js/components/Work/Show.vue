<template>
    <transition v-if="work" name="slide-fade">
        <div class="show_work--container">
            <h1 class="title">Công trình {{work.name}}</h1>
            <h3 class="subtitle"><em>Cập nhật lần cuối: </em>{{work.updated_at}}</h3>
            <hr>
            <div class="level">
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">Khởi công</p>
                        <p class="title">{{ work.started_at }}</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">Số hợp đồng</p>
                        <p class="title">0</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">Giá trị đơn hàng</p>
                        <p class="title">0</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">Giá trị BOQ</p>
                        <p class="title">0</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">Đã thanh toán</p>
                        <p class="title">0</p>
                    </div>
                </div>                
            </div>
            <hr>
            <div class="content">
                <table class="table is-bordered is-striped is-hoverable">
                    <thead>
                        <h3 class="title">Danh sách đơn hàng</h3>
                    </thead>
                    <tbody>
                        <tr>
                            <th>#</th>
                            <th>Tên</th>
                            <th>Ngày ký</th>
                            <th>Nhà cung cấp</th>
                            <th>Giá trị đơn hàng</th>
                            <th>Giá trị thanh toán</th>
                            <th>Ghi chú</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!---
            <div class="card">
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
            -->
        </div>
    </transition>
</template>

<script>
import {mapState} from 'vuex';
export default {
    data() {
        return {
        }
    },
    computed: {
         ...mapState([
            'user',
        ]),
    },
    asyncComputed: {
        work() {
            return this.$store.dispatch("getWork", this.$route.params.id).then( result => result);
        },/*
        invoices: {
            get() {
                return this.$store.dispatch("getRelatedInvoices", this.$route.params.id, 'work').then( result => result);
            },
            default() {
                return [];
            }
        },*/
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
        updatePageMeta(work) {
            const page = {
                'title': `Công trình ${work.name}`,
                'description': work.description,
                'background': work.image_cover,
                'isBigHero': true,
            }
            this.$store.dispatch("setPageMeta", page);
        },

        guard2() {

            if (typeof this.$store.state.currentWork.id === "number") {
                if (this.$store.state.currentWork.id === this.$route.params.id) {
                    this.work = this.$store.state.currentWork;
                }
            }

            if (this.$store.state.reload === "reload_work") {
                console.log("reloading work");
                this.fetchData();
                this.$store.commit("RELOAD_WORK_COMPLETE");
            }
        }
    },

}
</script>

<style>

</style>

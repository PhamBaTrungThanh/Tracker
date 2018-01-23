<template>
    <transition name="slide-fade">
        <div class="payment_show--wrapper" v-if="payment">        
            <hero-header :page="pageMeta" />
            <div class="navbar has-shadow">
                <div class="container">
                    <div class="navbar-tabs" v-if="invoice">
                        <router-link :to="{'name': 'invoice.show', 'params': {'id': invoice.id}}" class="navbar-item is-tab">
                            <span class="icon">
                                <i class="mdi mdi-chevron-left"></i>
                            </span>
                            <span>Về đơn hàng</span>
                        </router-link>
                    </div>
                </div>
            </div>
            <section class="section">
                <div class="container">
                    <div class="columns">
                        <div class="column">
                            <div class="box">
                                <div class="media">
                                    <figure class="media-left">
                                        <span class="icon is-large has-text-success">
                                            <i class="mdi mdi-48px mdi-account-outline"></i>
                                        </span>
                                    </figure>
                                    <div class="media-content">
                                        <div class="content">
                                            <p class="title is-5">{{payment.creator.name}}</p>
                                            <p class="heading">Người tạo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="box">
                                <div class="media">
                                    <figure class="media-left">
                                        <span class="icon is-large has-text-link">
                                            <i class="mdi mdi-48px mdi-calendar"></i>
                                        </span>
                                    </figure>
                                    <div class="media-content">
                                        <div class="content">
                                            <p class="title is-5">{{payment.paid_on}}</p>
                                            <p class="heading">Ngày tạo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="box">
                                <div class="media">
                                    <figure class="media-left">
                                        <span class="icon is-large has-text-info">
                                            <i class="mdi mdi-48px mdi-currency-usd"></i>
                                        </span>
                                    </figure>
                                    <div class="media-content">
                                        <div class="content">
                                            <p class="title is-5">{{comma(payment.amount)}}</p>
                                            <p class="heading">Số tiền</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="box">
                                <div class="media">
                                    <figure class="media-left">
                                        <span class="icon is-large has-text-success">
                                            <i class="mdi mdi-48px mdi-cash-multiple"></i>
                                        </span>
                                    </figure>
                                    <div class="media-content">
                                        <div class="content">
                                            <p class="title is-5">{{__(payment.method)}}</p>
                                            <p class="heading">Hình thức thanh toán</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns is-stretch">
                        <div class="column">
                            <div class="box" style="height: 100%">
                                <p class="title is-5">Nội dung thanh toán</p>
                                <div class="media">
                                    <figure class="media-left">
                                        <span class="icon is-large has-text-warning">
                                            <i class="mdi mdi-48px mdi-format-page-break"></i>
                                        </span>
                                    </figure>
                                    <div class="media-content">
                                        <p>
                                            {{payment.content}}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="box">
                                <p class="title is-5">Lịch sử</p>
                                <div class="content" v-if="payment.notes">
                                    <table class="table is-striped is-hoverable is-fullwidth">
                                        <tbody>
                                            <tr>
                                                <th style="width: 50px">#</th>
                                                <th style="width: 125px">Ngày sửa</th>
                                                <th style="width: 190px">Người sửa</th>
                                                <th>Nội dung</th>
                                            </tr>
                                            <tr v-for="(note, index) in payment.notes" :key="note.index">
                                                <td>{{(index +1)}}</td>
                                                <td>{{note.created_at}}</td>
                                                <td>{{note.actor_name}}</td>
                                                <td>{{note.content}}</td>
                                            </tr>
                                        </tbody>

                                    </table>
                                </div>                           
                            </div>
                        </div>
                    </div>

                </div>

            </section>

        </div>    
    </transition>
    
</template>

<script>
export default {
    data: () => ({
        
    }),
    computed: {
        user() {
            return this.$store.state.user
        },
        pageMeta() {
            return {
                title: (this.payment) ? ` ${this.payment.name}` : "",
                description: (this.invoice) ? `Đơn hàng: ${this.invoice.name}` : "Đơn hàng",
            }
        }
    },
    asyncComputed: {
        payment: {
            default: false,
            get() {
                return this.$store.dispatch("getPayment", {payment_id: this.$route.params.id, fetchNew: true});
            }
        },
        invoice: {
            default: false,
            lazy: true,
            get() {
                return this.$store.dispatch("getInvoice", {invoice_id: this.payment.invoice_id});
            }
        }
    }


}
</script>

<style>

</style>

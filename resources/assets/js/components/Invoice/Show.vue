<template>
    <transition v-if="invoice">
        <div class="invoice_show--wrapper">
            <hero-header :page="page" />
            <div class="navbar has-shadow">
                <div class="container">
                    <div class="navbar-tabs">
                        <router-link :to="{'name': 'work.show', 'params': {'id': invoice.work_id}}" class="navbar-item is-tab">
                            <span class="icon">
                                <i class="mdi mdi-chevron-left"></i>
                            </span>
                            <span>Trở về công trình</span>
                        </router-link>
                        <a class="navbar-item is-tab" href="#general"> 
                            Thông tin chung
                        </a>
                        <a class="navbar-item is-tab">
                            Thanh toán
                        </a>
                        <a class="navbar-item is-tab">
                            Nhận hàng
                        </a>
                    </div>
                </div>
            </div>
            <section class="section">
                <div class="content">
                    <div class="container">
                        <a name="general"></a>
                        <div class="columns">
                            <div class="column">
                                <div class="box">
                                    <figure class="image is-2by1 canvas-container">
                                        <canvas class="canvas-holder" id="pie_chart_payments"></canvas>
                                    </figure>
                                </div>
                            </div>
                            <div class="column">
                                <div class="box">
                                    <figure class="image is-2by1 canvas-container">
                                        <canvas class="canvas-holder" id="pie_chart_receives"></canvas>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <a name="payments"></a>
                        <div class="columns" >
                            <div class="column">
                                <div class="box">
                                    <nav class="level">
                                        <div class="level-left">
                                            <div class="level-item">
                                                <p class="title is-4">Thanh toán</p>
                                            </div>
                                        </div>
                                        <div class="level-right">
                                            <div class="level-item">
                                                <router-link :to="{'name': 'payment.create', 'query': {'index': payments.length + 1, 'invoice_id': invoice.id}}" class="button is-link" v-if="user.can_add_payment">
                                                    <span class="icon">
                                                        <i class="mdi mdi-credit-card-plus"></i>
                                                    </span>
                                                    <span>Thêm thanh toán</span>
                                                </router-link>
                                            </div>
                                        </div>
                                    </nav>
                                    
                                    <table class="table is-striped is-hoverable" v-if="payments">
                                        <tbody>
                                            <tr>
                                                <th style="width: 50px">#</th>
                                                <th style="width: 175px">Tên</th>
                                                <th style="width: 110px">Ngày</th>
                                                <th style="width: 110px">Hình thức</th>
                                                <th>Số tiền</th>
                                                <th>Nội dung</th>
                                                <th>Ghi chú</th>
                                            </tr>
                                            <tr v-for="(payment, index) in payments" :key="payment.id">
                                                <td><b>{{index + 1}}</b></td>
                                                <td><router-link :to="{'name': 'payment.show', 'params': {'id': payment.id}}">{{payment.name}}</router-link></td>
                                                <td>{{payment.paid_on}}</td>
                                                <td>{{__(payment.method)}}</td>
                                                <td>{{comma(payment.amount)}}</td>
                                                <td>{{payment.content}}</td>
                                                <td><span v-if="payment.count_notes > 0">{{payment.count_notes}} ghi chú</span></td>
                                            </tr>
                                            <tr>
                                                <td colspan="4"><span class="is-size-5">Tổng cộng</span></td>
                                                <td colspan="3">{{comma(sum_payment)}}</td>
                                            </tr>
                                            <tr>
                                                <td colspan="4"><span class="is-size-5"><b>Chưa thanh toán</b></span></td>
                                                <td colspan="3">{{comma(invoice.total * 1.1 - sum_payment)}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <a name="receives"></a>
                        <div class="columns">
                            <div class="column">
                                <div class="box">
                                    <nav class="level">
                                        <div class="level-left">
                                            <div class="level-item">
                                                <p class="title is-4">Nhận hàng</p>
                                            </div>
                                        </div>
                                        <div class="level-right">
                                            <div class="level-item">
                                                <router-link :to="{'name': 'payment.create'}" class="button is-link">
                                                    <span class="icon">
                                                        <i class="mdi mdi-credit-card-plus"></i>
                                                    </span>
                                                    <span>Thêm thanh toán</span>
                                                </router-link>
                                            </div>
                                        </div>
                                    </nav>
                                    
                                    <table class="table is-striped is-hoverable">
                                        <tbody>
                                            <tr>
                                                <th style="width: 50px">#</th>
                                                <th style="width: 175px">Tên</th>
                                                <th style="width: 110px">Ngày</th>
                                                <th style="width: 110px">Hình thức</th>
                                                <th>Số tiền</th>
                                                <th>Nội dung</th>
                                                <th>Ghi chú</th>
                                            </tr>
                                            <tr v-for="(payment, index) in payments" :key="payment.id">
                                                <td><b>{{index + 1}}</b></td>
                                                <td><router-link :to="{'name': 'payment.show', 'params': {'id': payment.id}}">{{payment.name}}</router-link></td>
                                                <td>{{payment.paid_on}}</td>
                                                <td>{{__(payment.method)}}</td>
                                                <td>{{comma(payment.amount)}}</td>
                                                <td>{{payment.content}}</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td colspan="4"><span class="is-size-5">Tổng cộng</span></td>
                                                <td colspan="3">{{comma(sum_payment)}}</td>
                                            </tr>
                                            <tr>
                                                <td colspan="4"><span class="is-size-5"><b>Chưa thanh toán</b></span></td>
                                                <td colspan="3">{{comma(invoice.total * 1.1 - sum_payment)}}</td>
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

import { chartColors, ChartJs, monetize } from "./../../bootstrap";
export default {
    data: () => ({
        'chartRefs': {
            'payments': false,
            'receives': false,
        }
    }),
    computed: {
        page() {
            return {
                title: (this.invoice) ? `Đơn hàng ${this.invoice.name}` : "Đơn hàng",
                description: (this.work) ? `Công trình ${this.work.name}` : "Công trình",
            }
        },
        sum_payment() {
            if (this.payments) {
                return this.payments.reduce( (sum, p) => sum + parseFloat(p.amount), 0);
            }
            else {
                return 0;
            }
        },
        user() {
            return this.$store.state.user;
        }
    },
    asyncComputed: {
        invoice: {
            default: false,
            get() {
                return this.$store.dispatch("getInvoice", {'invoice_id': this.$route.params.id});
            }
        },
        work: {
            lazy: true,
            default: false,
            get() {
                return this.$store.dispatch("getWork", {'work_id': this.invoice.work_id});
            },   
        },
        payments: {
            lazy: true,
            default: false,
            get() {
                return this.$store.dispatch("getRelatedPayments", {'invoice_id': this.invoice.id, 'expect': this.invoice.count_payments}).then( result => {
                    this.initializePaymentsChart(result);
                    return result;
                });
            }
        }
    }, 
    methods: {
        initializePaymentsChart(payments) {
            if (payments) {
                let $_data = [];
                let $_labels = [];
                let $_moneized_data = [];
                let sum = 0;

                let total = Math.floor(this.invoice.total * 1.1);
                payments.forEach(payment => {
                    $_labels.push(payment.name);
                    $_data.push(Math.floor(payment.amount));
                    $_moneized_data.push(this.comma(payment.amount));
                    sum += Math.floor(payment.amount);
                });
                $_labels.push("Chưa thanh toán");
                if ( (total - sum) !== 0) {
                    $_data.push(total-sum);
                }
                this.chartRefs.payments = new ChartJs(document.getElementById('pie_chart_payments').getContext("2d"), {
                    'type': "doughnut",
                    'options': {
                        'title': {
                            'display': true,
                            'text': "Biểu đồ thanh toán"
                        },
                        'cutoutPercentage': 60,
                        'legend': {
                            'position': 'right',
                        },
                        'tooltips': {
                            'callbacks': {
                                'label': (tooltipItem, data) => {
                                    
                                    //return data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
                                    return `${data.labels[tooltipItem.index]}: ${parseFloat(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] / total * 100).toFixed(2)}%`;
                                },
                                'footer': function (tooltipItems, data)  {
                                    let item = tooltipItems[0];
                                    return "Số tiền: " + data.datasets[item.datasetIndex].real[item.index];
                                }
                            }
                        }
                    },
                    'data': {
                        'labels': $_labels,
                        'datasets': [{
                            'label': "Thanh toán",
                            'data': $_data,
                            'backgroundColor': [
                                chartColors.red,
                                chartColors.blue,
                                chartColors.green,
                                chartColors.yellow,
                                chartColors.orange,
                                chartColors.purple,
                            ],
                            'real': $_moneized_data,
                        }],
                    }
                });  
            }
        }
    }
}
</script>

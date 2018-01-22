<template>
    <transition v-if="invoice">
        <div class="invoice_show--wrapper">
            <hero-header :page="page" />
            <div class="navbar has-shadow">
                <div class="container">
                    <div class="navbar-tabs">
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
            <div class="content">
                <div class="container">
                    <a name="general"></a>
                    
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    computed: {
        page() {
            return {
                title: (this.invoice) ? `Đơn hàng ${this.invoice.name}` : "Đơn hàng",
                description: (this.work) ? `Công trình ${this.work.name}` : "Công trình",
            }
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
            
        }
    }
}
</script>

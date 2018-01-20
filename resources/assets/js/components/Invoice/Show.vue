<template>
    <transition v-if="invoice">
        <div class="invoice_show--wrapper">
            <div class="navbar has-shadow">
                <div class="container">
                    <div class="navbar-tabs">
                        <a class="navbar-item is-tab">
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
        </div>
    </transition>
</template>

<script>
export default {
    asyncComputed: {
        invoice: {
            default: true,
            get() {
                return true;
            }
        }
    }
}
</script>

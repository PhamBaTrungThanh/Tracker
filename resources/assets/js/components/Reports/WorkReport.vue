<template>
    <div class="fullscreen-container work-report">
        <h3 class="text-center">Báo cáo vật tư công trình {{work.name}}</h3>
        <div class="report">
            <div class="top">
                <table class=" trackers-table material-trackers">
                    <thead class="thead-light">
                        <tr>
                            <th class="col1">#</th>
                            <th class="col2">Tên</th>
                            <th class="col3">Đơn vị</th>
                            <th class="col4">Loại tiền</th>

                        </tr>
                    </thead>    
                    <tbody>
                        <template v-for="(row, key) in work.flatten_list">
                            <tr v-if="row.type === 'category'" :class="{category: row.type === 'category'}" :key="key">
                                <td colspan="4" >{{row.label}} <span v-if="row.depth > 0 && row.children">( {{row.children.length}} )</span></td>
                            </tr>
                            <tr v-else :key="key" @click="showMaterialDetail(row.id)" :class="{'material': row.type === 'material'}">
                                <td class="col1">{{row.index}}</td>
                                <td class="col2">{{row.name}}</td>
                                <td class="col3">{{row.per}}</td>
                                <td class="col4">vnd</td>
                            </tr>                            
                        </template>
                    </tbody>        
                </table>
            </div>
            <div class="bottom" v-if="material">
                <h4 class="text-center">{{material.name}}</h4>
                <table class="table">
                    <thead class="thead-light">
                        <th>STT</th>
                        <th>Ngày lập đơn</th>
                        <th>Ngày giao hàng</th>
                        <th>Nhà cung cấp</th>
                        <th>Số lượng đặt</th>
                        <th>Số lượng đã nhận</th>
                        <th>Số lượng còn lại</th>
                        <th>Giá trị đặt hàng</th>
                        <th>Giá trị đã nhận</th>
                        <th>Đã thanh toán</th>
                    </thead>
                    <tbody>
                        <tr v-for="(row, index) in material.invoices" :key="index">
                            <td>{{index + 1}}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            detailedWork: [],
            material: false,
        }
    },
    computed: {
        work() {
            return this.$store.state.currentWork;
        },
        invoices() {
            return this.material.trackers.filter( material => material.invoices != null);
        }
    },
    methods: {
        showMaterialDetail(material_id) {
            axios.get(`${this.$store.state.apiBase}/material/${material_id}`).then(result => {
                this.material = result.data.data;
            });
        }
    }
}
</script>

<style>

</style>

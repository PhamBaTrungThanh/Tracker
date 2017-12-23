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
                    <thead class="thead-light text-center">
                        <th>STT</th>
                        <th>Ngày lập đơn</th>
                        <th>Ngày giao hàng</th>
                        <th>Nhà cung cấp</th>
                        <th>Số lượng đặt</th>
                        <th>Số lượng đã nhận</th>
                        <th>Số lượng còn lại</th>
                        <th>Giá trị đặt hàng</th>
                        <th>Giá trị đã nhận</th>
                        <th>Ghi chú</th>
                    </thead>
                    <tbody class="text-center">
                        <tr v-for="(row, index) in material.invoices" :key="index">
                            <td>{{index}}</td>
                            <td>{{row.signed_at}}</td>
                            <td>{{row.recieved_at}}</td>
                            <td>{{row.provider_name}}</td>
                            <td>{{row.unit}}</td>
                            <td>{{row.recieved_unit}}</td>
                            <td>{{row.unit - row.recieved_unit}}</td>
                            <td>{{row.cost * row.unit}}</td>
                            <td>{{row.cost * row.recieved_unit}}
                            <td>{{row.notes}}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="4">Tổng cộng</td>
                            <td>{{totalUnit}}</td>
                        </tr>
                    </tfoot>
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
        totalUnit() {
            return this.material.invoices.reduce( (sum, item) => sum + item.unit );
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

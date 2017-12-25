<template>
    <div class="fullscreen-container work-report">
        <h3 class="text-center">Báo cáo vật tư công trình {{work.name}}</h3>
        <div class="report">
            <div class="top">
                <table class=" trackers-table report-table">
                    <thead class="thead-light">
                        <tr>
                            <th class="index-col" rowspan="2">#</th>
                            <th class="name-col" rowspan="2">Tên</th>
                            <th class="per-col" rowspan="2">Đơn vị</th>
                            <th class="currency-col" rowspan="2">Loại tiền</th>
                            <th class="invoice_count-col child-col">Tổng đơn hàng</th>
                            <th class="total_unit-col child-col">Số lượng đặt hàng</th>
                            <th class="total_price-col child-col">Giá trị đặt hàng</th>
                            <th class="boq_unit-col child-col">Số lượng BOQ</th>
                            <th class="boq_total-col child-col">Giá trị BOQ</th>
                            <th class="real_unit-col child-col">Số lượng chưa thực hiện</th>
                            <th class="real_count-col child-col">Giá trị chưa thực hiện</th>
                            <th class="percent-col child-col">% chênh lệch</th>
                        </tr>
                    </thead>    
                    <tbody>
                        <template v-for="(row, key) in work.flatten_list">
                            <tr v-if="row.type === 'category'" :class="{category: row.type === 'category'}" :key="key">
                                <td></td>
                                <td colspan="11" >{{row.label}} <span v-if="row.depth > 0 && row.children">( {{row.children.length}} )</span></td>
                            </tr>
                            <tr v-else :key="key" @click="showMaterialDetail(row.id)" :class="{'material': row.type === 'material'}">
                                <td class="index-col">{{row.index}}</td>
                                <td class="">{{row.name}}</td>
                                <td class="per-col child-col">{{row.per}}</td>
                                <td class="currency-col child-col">{{row.currency}}</td>
                                <td class="invoice_count-col child-col">{{row.invoice_count}}</td>
                                <td class="total_unit-col child-col">{{row.total_unit}}</td>
                                <td class="total_price-col child-col">{{commafly(row.total_price)}}</td>
                                <td class="boq_unit-col child-col">{{row.boq_unit}}</td>
                                <td class="boq_total-col child-col">{{commafly(row.boq_price)}}</td>
                                <td class="real_unit-col child-col">{{ row.total_unit - row.boq_unit}}</td>
                                <td class="real_count-col child-col">{{commafly(row.total_price - row.boq_price)}}</td>
                                <td class="percent-col child-col">{{(row.total_unit - row.boq_unit) / 100}} %</td>
                            </tr>                            
                        </template>
                    </tbody>        
                </table>
            </div>
            <div class="bottom" v-if="material">
                <br>
                
                <h4 class="text-center">{{material.name}}</h4>
                <table class="table material-detail">
                    <thead class="thead-light text-center">
                        <tr>
                            <th rowspan="2">STT</th>
                            <th rowspan="2">Ngày lập đơn</th>
                            <th rowspan="2">Ngày giao hàng</th>
                            <th rowspan="2">Nhà cung cấp</th>
                            <th colspan="3">Số lượng</th>
                            <th colspan="2">Giá trị</th>
                            <th rowspan="2">Ghi chú</th>
                        </tr>

                        <tr>
                            <th>Số lượng đặt</th>
                            <th>Số lượng đã nhận</th>
                            <th>Số lượng còn lại</th>
                            <th>Giá trị đặt hàng</th>
                            <th>Giá trị đã nhận</th>
                        
                        </tr>
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
                            <td>{{commafly(row.cost * row.unit)}}</td>
                            <td>{{commafly(row.cost * row.recieved_unit)}}
                            <td>{{row.notes}}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="4" class="tfoot-title">Tổng cộng</td>
                            <td class="tfoot-content" colspan="3">{{material.total_unit}}</td>
                            <td class="tfoot-content" colspan="2">{{commafly(material.total_price)}}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td colspan="4" class="tfoot-title">BOQ</td>
                            <td class="tfoot-content" colspan="3">{{material.boq_unit}}</td>
                            <td class="tfoot-content" colspan="2">{{commafly(material.boq_price)}}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td colspan="4" class="tfoot-title">Chênh lệch</td>
                            <td class="tfoot-content" colspan="3">{{material.total_unit - material.boq_unit}}</td>
                            <td class="tfoot-content" colspan="2">{{commafly(material.total_price - material.boq_price)}}</td>
                            <td></td>
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
    },
    methods: {
        showMaterialDetail(material_id) {
            axios.get(`${this.$store.state.apiBase}/material/${material_id}`).then(result => {
                this.material = result.data.data;
            });
        },
        commafly(number) {
            return window.commafly(number);
        }
    }
}
</script>

<style>

</style>

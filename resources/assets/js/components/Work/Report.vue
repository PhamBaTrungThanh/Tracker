<template>
    <div class="work_report--container">
        <p class="text-center">
            <button class="btn" @click="backToWork()">Quay lại</button>
            <button class="btn btn-primary" @click="$refs.fullscreen.enter()">Xem toàn màn hình</button>
        </p>
        <fullscreen :fullscreen.sync="fullscreen" ref="fullscreen">
            <div class="fullscreen-container work-report">
                <h3 class="text-center">Báo cáo vật tư công trình {{work.name}}</h3>
                <div class="report">
                    <div class="top">
                        <table class=" trackers-table report-table table">
                            <thead class="thead-light">
                                <tr>
                                    <th class="index-col" rowspan="2">#</th>
                                    <th class="name-col" rowspan="2">Tên</th>
                                    <th class="per-col" rowspan="2">Đơn vị</th>
                                    <th class="currency-col" rowspan="2">Loại tiền</th>
                                    <!--<th class="invoice_count-col child-col">Tổng đơn hàng</th>-->
                                    <th class="total_unit-col child-col">Số lượng đặt hàng</th>
                                    <th class="total_price-col child-col">Giá trị đặt hàng</th>
                                    <th class="boq_unit-col child-col">Số lượng BOQ</th>
                                    <th class="boq_total-col child-col">Số lượng đã nhận</th>
                                    <th class="boq_total-col child-col">Giá trị BOQ</th>
                                    <th class="real_unit-col child-col">Số lượng chưa thực hiện</th>
                                    <th class="real_count-col child-col">Giá trị chưa thực hiện</th>
                                    <th class="percent-col child-col">% chưa thực hiện</th>
                                </tr>
                            </thead>    
                            <tbody>
                                <template v-for="(row, key) in work.flatten">
                                    <tr v-if="row.type === 'category'" :class="{category: row.type === 'category'}" :key="key">
                                        <td></td>
                                        <td colspan="12" >{{row.label}} <span v-if="row.depth > 0 && row.children">( {{row.children.length}} )</span></td>
                                    </tr>
                                    <tr v-else :key="key" @click="showMaterialDetail(row.id)" :class="{'material': row.type === 'material'}">
                                        <td class="index-col">{{row.index}}</td>
                                        <td class="">{{row.name}}</td>
                                        <td class="per-col child-col">{{row.per}}</td>
                                        <td class="currency-col child-col">{{row.currency}}</td>
                                        <!--<td class="invoice_count-col child-col">{{row.invoice_count}}</td>-->
                                        <td class="total_unit-col child-col">{{row.total_unit}}</td>
                                        <td class="total_price-col child-col">{{$comma(row.total_sum)}}</td>
                                        <td class="boq_unit-col child-col">{{row.boq_unit}}</td>
                                        <td class="boq_unit-col child-col">{{row.received_unit}}</td>
                                        <td class="boq_total-col child-col">{{$comma(row.boq_price * row.boq_unit)}}</td>
                                        <td class="real_unit-col child-col">{{ row.boq_unit - row.total_unit}}</td>
                                        <td class="real_count-col child-col">{{$comma((row.boq_unit - row.total_unit)*row.boq_price)}}</td>
                                        <td class="percent-col child-col">{{ parseFloat((row.boq_unit - row.total_unit)/row.boq_unit * 100).toFixed(2) }} %</td>
                                    </tr>                            
                                </template>
                            </tbody> 
                            <tfoot>
                                <tr>
                                    <td colspan="4">Tổng cộng</td>
                                    <td colspan="1">{{work.invoice_count}}</td>
                                    
                                </tr>
                            </tfoot>

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
                                    <th rowspan="2">Đơn hàng <br> Nhà cung cấp</th>
                                    <th colspan="3">Số lượng</th>
                                    <th colspan="4">Giá trị</th>
                                    <th rowspan="2">Ghi chú</th>
                                </tr>

                                <tr>
                                    <th>Số lượng đặt</th>
                                    <th>Số lượng đã nhận</th>
                                    <th>Số lượng còn lại</th>
                                    <th>Đơn giá</th>
                                    <th>Đơn giá BOQ</th>
                                    <th>Giá trị đặt hàng</th>
                                    <th>Giá trị đã nhận</th>
                                
                                </tr>
                            </thead>
                            <tbody class="text-center">
                                <tr v-for="(tracker, index) in material.invoice_trackers" :key="index">
                                    <td>{{(index + 1)}}</td>
                                    <td>{{tracker.invoice.signed_at}}</td>
                                    <td>{{tracker.received_at}}</td>
                                    <td>{{tracker.invoice.name}} <br> <small>{{tracker.invoice.provider.name}}</small></td>
                                    <td>{{tracker.unit}}</td>
                                    <td>{{tracker.received_unit}}</td>
                                    <td>{{tracker.unreceive}}</td>
                                    <td>{{$comma(tracker.cost)}}</td>
                                    <td>{{$comma(material.boq_price)}}</td>
                                    <td>{{$comma(tracker.sum)}}</td>
                                    <td>{{$comma(tracker.unreceive_sum)}}
                                    <td>{{tracker.note}}</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="4" class="tfoot-title">Tổng cộng</td>
                                    <td class="tfoot-content" colspan="3">{{material.total_unit}}</td>
                                    <td class="tfoot-content" colspan="4">{{$comma(material.total_sum)}}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colspan="4" class="tfoot-title">BOQ</td>
                                    <td class="tfoot-content" colspan="3">{{material.boq_unit}}</td>
                                    <td class="tfoot-content" colspan="4">{{$comma(material.boq_price*material.boq_unit)}}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colspan="4" class="tfoot-title">Chênh lệch</td>
                                    <td class="tfoot-content" colspan="3">{{material.boq_unit - material.total_unit}}</td>
                                    <td class="tfoot-content" colspan="4">{{$comma((material.boq_price * material.boq_unit) - material.total_sum)}}</td>
                                    <td></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

            </div>
        </fullscreen>
    </div>

</template>

<script>
import Fullscreen from "vue-fullscreen/src/component.vue";
export default {
    data() {
        return {
            fullscreen: false,
            detailedWork: [],
            material: false,
            work: false,
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
            });
        }
    },
    methods: {
        showMaterialDetail(material_id) {
            axios.get(`${this.$store.state.apiBase}/material/${material_id}`).then(result => {
                this.material = result.data.data;
            });
        },
        backToWork() {
            this.$router.push({
                name: "work.show",
            });
        }
    },
    components: {Fullscreen},

}
</script>

<style>

</style>

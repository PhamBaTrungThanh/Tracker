<template>
    <div id="works">
        <div class="card-deck works" v-if="works">
            <div v-for="work in works" :key="work.id" class="work">
                <div class="card" >
                    <img class="card-img-top" :src="work.image" alt="Card image cap">
                    <div class="card-body">
                        <h4 class="card-title">{{ work.name }}</h4>
                        <p class="card-text">{{ work.description }}</p>
                        <p class="card-text">Chủ đầu tư: <small class="text-muted">{{ work.client }}</small></p>
                        <button class="float-right btn btn-primary" @click="viewReports(work.id)">Xem báo cáo</button>
                        <button class="float-right btn" @click="work.showDetail = !work.showDetail; current_work_id = work.id">Chi tiết</button>
                    </div>
                </div>   
                <div class="work-detail" v-if="work.showDetail" >
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <p class="card-text"><b>Khởi công: </b>{{ work.started_at }}</p>
                                    <p class="card-text"><b>Tổng giá trị BOQ: </b>{{ comma(work.boq_sum) }}</p>
                                </div>
                                <div class="col">
                                    <p class="card-text"><b>Số đơn hàng: </b>{{work.invoice_count}}</p>
                                    <p class="card-text"><b>Giá trị đơn hàng: </b>{{comma(work.total_sum)}}</p>
                                </div>
                                <div class="col">
                                    <p class="card-text"><b>Số người công tác: </b>Chưa có thông tin</p>
                                    <p class="card-text"><b>Giá trị thanh toán: </b>{{comma(work.paid_sum)}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <p class="text-center">
                                        <button class="btn btn-primary" @click="newInvoice()">Tạo đơn hàng</button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card work" @click="newWork">
                <div class="card-body">
                    <h4 class="card-title text-center">Thêm công trường</h4>
                    <p class="card-text text-center">
                        Tạo công trường mới
                    </p>
                </div>
            </div>                
        </div>
        <fullscreen :fullscreen.sync="fullscreen" ref="fullscreen" background="#ffffff">
            <work-report v-if="fullscreen" >

            </work-report>
        </fullscreen>

    </div>
</template>

<script>
import Fullscreen from "vue-fullscreen/src/component.vue";
import ModalDialogs from 'vue-modal-dialogs';


import NewWork from "./Modals/NewWork.vue";
import NewInvoice from "./Modals/NewInvoice.vue";
import WorkReport from "./Reports/WorkReport";


export default {
    data() {
        return {
            works: [],
            report: false,
            fullscreen: false,
            current_work_id: false,
            action: false,
        }
    },
    watch: {
        current_work_id() {
            this.works.forEach( work => {
                if (work.id === this.current_work_id) {
                    this.$store.commit('SET_CURRENT_WORK', work);
                    return false;
                }
            })
        }
    },
    computed: {
    },
    methods: {
        fetchData() {
            this.current_work_id = false;
            axios.get(`${this.$store.state.apiBase}/work`).then( response => {

                this.works = response.data.data.map( work => {
                    let _flatten = [];
                    let boq_sum = 0;
                    work.nested_categories.forEach( _category => {
                        let _children = _category.children.map( (material, index) => {
                            boq_sum += parseFloat(material.boq_total);
                            return Object.assign({}, material, {"index": ++index})
                        });
                        _flatten.push(_category, ..._children);
                    });
                    
                    
                    return Object.assign({}, work, {flatten_list: _flatten, boq_sum: boq_sum});
                    
                });
            }).catch( error => {
                console.log(error);
            });
        },
        viewReports(work_id) {
            this.current_work_id = work_id;
            this.$refs.fullscreen.enter();

        },
        comma: (number) => window.commafly(number),
        newWork() {
            Promise.resolve(ModalDialogs.makeDialog(NewWork)()).then( result => {
                if (result) {
                    this.fetchData();
                }
            });
        },
        newInvoice() {
            Promise.resolve(ModalDialogs.makeDialog(NewInvoice)()).then( result => {
                if (result) {
                    this.fetchData();
                }
            });
        }
    },
    mounted() {
        this.fetchData();
    },
    components: {
        "fullscreen" :Fullscreen,
        "work-report": WorkReport,
    }
}
</script>

<style>

</style>


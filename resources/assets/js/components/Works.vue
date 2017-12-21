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
                                <div class="col"><p class="card-text text-center">Khởi công: {{ work.started_at }}</p></div>
                                <div class="col"><p class="card-text text-center">Số đơn hàng: 0</p></div>
                                <div class="col"><p class="card-text text-center">Số người công tác: Chưa có thông tin</p></div>
                            </div>
                            <br><br>
                            <div class="row">
                                <div class="col">
                                    <p class="text-center">
                                        <button class="btn btn-primary" @click="newContract()">Tạo hợp đồng nguyên tắc</button>
                                        <button class="btn btn-primary" @click="newBOQ()">Tạo BOQ</button>
                                        <button class="btn btn-primary" @click="newInvoice()">Tạo đơn hàng</button>
                                        <button class="btn btn-primary" @click="payInvoice()">Thanh toán đơn hàng</button>
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
            
        </fullscreen>
        <div ref="newWork" class="show-on-swal">
            <new-work id="new-work-container" @success="fetchData"></new-work>
        </div>
        <div ref="newContract" class="show-on-swal">
            <new-contract id="new-contract-container"></new-contract>
        </div>  
        <div ref="newInvoice" class="show-on-swal">
            <new-invoice id="new-invoice-container"></new-invoice>
        </div>  
    </div>
</template>

<script>
import Fullscreen from "vue-fullscreen/src/component.vue";
import NewWork from "./Modals/NewWork.vue";
import NewContract from "./Modals/NewContract.vue";
import newInvoice from "./Modals/NewInvoice.vue";

export default {
    data() {
        return {
            works: [],
            report: false,
            fullscreen: true,
            current_work_id: false,
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
                this.works = response.data.data;
            }).catch( error => {
                console.log(error);
            });
        },
        viewReports(work_id) {
            this.$refs.fullscreen.enter();
            axios.get(`${this.$store.state.apiBase}/work/${work_id}`).then( response => {
                this.report = response.data.data;
                this.flattenData(this.report.categories);
            }).catch( error => {
                console.log(error);
            });
        },

        newWork() {
            this.$swal({
                content: this.$refs.newWork,
                className: 'medium-swal',
            }).then( result => {
                if (result) {
                    const $id = document.getElementById('new-work-container');
                    const data = $id.getElementsByClassName('form-control');
                    axios.post(`${this.$store.state.apiBase}/work`, {
                        name: data[0].value,
                        description: data[2].value,
                        client: data[1].value,
                    }).then( response => {
                        if (response.status === 200) {
                            data[0].value = "";
                            data[1].value = "";
                            this.fetchData();
                        }
                    })
                }
            });
        },
        newContract() {
            
            this.$swal({
                content: this.$refs.newContract,
                className: 'big-swal',
                buttons: false,
            })
        },
        newInvoice() {
            this.$swal({
                content: this.$refs.newInvoice,
                className: 'big-swal',
                buttons: false,
            })
        }
    },
    mounted() {
        this.fetchData();
    },
    components: {
        "fullscreen" :Fullscreen,
        "new-work": NewWork,
        "new-contract": NewContract,
        'new-invoice': newInvoice,
    }
}
</script>

<style>

</style>


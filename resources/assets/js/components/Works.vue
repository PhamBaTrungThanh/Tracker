<template>
    <div id="works">
        <div class="card-deck works" v-if="works">
            <div class="card work" v-for="work in works" :key="work.id">
                <img class="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap">
                <div class="card-body">
                    <h4 class="card-title">{{ work.name }}</h4>
                    <p class="card-text">{{ work.description }}</p>
                    <p class="card-text"><small class="text-muted">{{ work.client }}</small></p>
                    <button class="float-right btn btn-primary" @click="viewReports(work.id)">Xem báo cáo</button>
                </div>
            </div>                
        </div>
        <fullscreen :fullscreen.sync="fullscreen" ref="fullscreen" background="#ffffff">
            <hot-table :settings="tableSetting" v-if="fullscreen" :data="tableData"></hot-table>
        </fullscreen>
    </div>
</template>

<script>
import Fullscreen from "vue-fullscreen/src/component.vue"
export default {
    data() {
        return {
            works: [],
            report: false,
            tableSetting: {
                stretchH: "all",
                contextMenu: true,
                colWidths: [20, 100, 30, 30, 50, 50, 60, 60, 60, 60, 60],
                mergeCells: [
                    {row: 0, col: 0, rowspan: 3, colspan: 1},
                    {row: 0, col: 1, rowspan: 1, colspan: 3},
                    {row: 0, col: 4, rowspan: 1, colspan: 5},
                    {row: 0, col: 9, rowspan: 1, colspan: 2},
                    {row: 0, col: 11, rowspan: 3, colspan: 1},
                    // row 2
                    {row: 1, col: 1, rowspan: 2, colspan: 1},
                    {row: 1, col: 2, rowspan: 2, colspan: 1},
                    {row: 1, col: 3, rowspan: 2, colspan: 1},
                    {row: 1, col: 4, rowspan: 2, colspan: 1}, 
                    {row: 1, col: 5, rowspan: 2, colspan: 1},    
                    {row: 1, col: 6, rowspan: 2, colspan: 1},    
                    {row: 1, col: 7, rowspan: 1, colspan: 2},   
                    {row: 1, col: 9, rowspan: 2, colspan: 1},    
                    {row: 1, col: 10, rowspan: 2, colspan: 1},  
                            
                ],
            },
            fullscreen: false,
            data: {},
            tableHeaders: [
                ["STT", "Loại vật tư", ""   , ""         , "Hợp đồng", ""       , ""          ,""                   , ""      , "BOQ"     , ""       ,"Ghi chú"],
                [""   , "Tên hàng"   , "ĐVT", "Loại tiền", "Số Lượng", "Đơn giá", "Thành tiền", "Tạm ứng/thanh toán", ""      , "Số lượng", "Đơn giá", ""],
                [""   , ""           , ""   , ""         , ""        , ""       , ""          , "Ngày"              ,"Số tiền", ""        , ""       , ""],
            ]
        }

    },
    computed: {
        tableData() {
            return this.tableHeaders;
        }
    },
    methods: {
        viewReports(work_id) {
            this.$refs.fullscreen.enter();
            axios.get(`${this.$store.state.apiBase}/work/${work_id}`).then( response => {
                this.report = response.data.data;
                this.flattenData(this.report.categories);
            }).catch( error => {
                console.log(error);
            });
        },
        flattenData(data) {
            for (let index in data) {
                
            }
        }
    },
    mounted() {
        axios.get(`${this.$store.state.apiBase}/works`).then( response => {
            this.works = response.data.data;
        }).catch( error => {
            console.log(error);
        });
    },
    components: {
        Fullscreen,
    }
}
</script>

<style>

</style>


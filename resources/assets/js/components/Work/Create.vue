<template>
    <div class="create_work--wrapper">
        <div class="row">
            <div class="col-8 offset-2">
                <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">Tạo công trình mới</h3>
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <label class="col-form-label" for="work_name">Tên công trình</label>
                                        <input type="text" class="form-control" id="work_name" v-model="work_name" placeholder="">
                                    </div>
                                    <div class="form-group">
                                        <label class="col-form-label" for="work_client">Chủ đầu tư</label>
                                        <input type="text" class="form-control" id="work_client" v-model="work_client" placeholder="">
                                    </div>
                                    <div class="form-group">
                                        <label class="col-form-label" for="work_description">Mô tả</label>
                                        <textarea class="form-control" id="work_description" v-model="work_description" placeholder=""></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group text-center" >
                            <submit></submit>
                            <button class="btn" @click="cancel">Bỏ qua</button>
                        </div>
                    </div>    
                </div>    
            </div>
        </div>
 
    </div>
</template>

<script>
export default {
    data() {
        return {
            work_name: "",
            work_client: "",
            work_description: "",
        }
    },
    methods: {
        cancel() {
            this.$router.push({
                "name": "work.index",

            });
        }
    }
}
</script>

<style>

</style>

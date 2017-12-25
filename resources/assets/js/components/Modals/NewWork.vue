<template>
    <div class="dialog-wrapper" @click.self="cancel">

        <div class="dialog-content">
            <div class="text-left">
                <h3 class="text-center">Tạo công trình mới</h3>
                <div class="container">
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
            </div>    

            <div class="form-group text-center" >
                <button class="btn btn-primary" @click="submit">Lưu</button>
                <button class="btn" @click="cancel">Bỏ qua</button>
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
            this.$close(false);
        },
        submit() {
            axios.post(`${this.$store.state.apiBase}/work`, {
                name: this.work_name,
                description: this.work_description,
                client: this.work_client,
            }).then( response => {
                if (response.status === 200) {
                    this.$swal("Hoàn tất", "Cập nhật thành công", "success").then( result => {
                        this.$close(true);
                    });
                }
            });
        }
    }
}
</script>

<style>

</style>

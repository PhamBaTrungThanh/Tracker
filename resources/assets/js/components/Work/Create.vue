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
                                        <input type="text" :class="{'form-control': true, 'is-invalid': errors.has('work_name')}" v-validate="'required'" name="work_name" v-model="work_name" placeholder="Nhập tên">
                                        <span class="invalid-feedback" v-show="errors.has('work_name')">
                                            Tên công trình không được để trống
                                        </span>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-form-label" for="work_client">Chủ đầu tư</label>
                                        <input type="text" :class="{'form-control': true, 'is-invalid': errors.has('work_client')}" v-validate="'required'" name="work_client" v-model="work_client" placeholder="Nhập tên chủ đầu tư">
                                        <span class="invalid-feedback" v-show="errors.has('work_client')">
                                            Chủ đầu tư không được để trống.
                                        </span>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-form-label" for="work_started_at">Ngày bắt đầu</label>
                                        <input type="text" :class="{'form-control': true, 'is-invalid': errors.has('work_started_at')}" v-validate="'required'" name="work_started_at" v-model="work_started_at" placeholder="Nhập ngày">
                                        <span class="invalid-feedback" v-show="errors.has('work_started_at')">
                                            Ngày không được để trống
                                        </span>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-form-label" for="work_description">Mô tả</label>
                                        <textarea :class="{'form-control': true, 'is-invalid': errors.has('work_description')}" v-validate="{'required': true}" name="work_description" v-model="work_description" placeholder="Nhập mô tả"></textarea>
                                        <span class="invalid-feedback" v-show="errors.has('work_description')">
                                            Mô tả công trình không được để trống
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group text-center" >
                            <submit :submit="newWork" :success="onSuccess"></submit>
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
    data: () => ({
        work_name: "",
        work_description: "",
        work_client: "",
    }),
    methods: {
        cancel() {
            this.$router.push({
                "name": "work.index",
            });
        },
        newWork() {
            if (this.errors.any()) {
                return false;

            } else {
                return {
                    "method": "POST",
                    "url": "work",
                    "data": {
                        "name": this.work_name,
                        "client": this.work_client,
                        "description": this.work_description,

                    }
                }
            }
        }, 
        onSuccess() {
            this.cancel();
        }
    }
}
</script>

<style>

</style>

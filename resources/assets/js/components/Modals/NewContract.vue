<template>
    <div class="text-left">
        <h3 class="text-center">Hợp đồng nguyên tắc</h3>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <h5 class="text-center">Danh mục</h5>
                    <div class="form-check">
                        <label class="form-check-label">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                            Option one is this and that&mdash;be sure to include why it's great
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                            Option two can be something else and selecting it will deselect option one
                        </label>
                    </div>
                </div>
            </div>
            <div class="col">
                <div>
                    <div class="form-group">
                        <h5 class="text-center">Chọn nhà cung cấp</h5>
                        <treeselect :load-root-options="fetchProviders"  v-model="selected_provider_id"></treeselect>
                    </div>  
                </div>
                <h5 class="text-center">Tạo mới nhà cung cấp</h5>
                <div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" v-model="new_provider.name" placeholder="Tên nhà cung cấp" :disabled="selected_provider_id">
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" v-model="new_provider.tax_number" placeholder="Mã số thuế" :disabled="selected_provider_id">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" v-model="new_provider.description" placeholder="Mô tả" :disabled="selected_provider_id">
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" v-model="new_provider.address" placeholder="Địa chỉ" :disabled="selected_provider_id">
                            </div>
                        </div>            
                    </div>
                </div>
                

            </div>
        </div>

        <hr>
        <h5>Danh sách vật tư</h5>
        <div class="form-group">
            <table class="table">
                <thead>
                    <th>STT</th>
                    <th>Tên vật tư</th>
                    <th>Đơn vị tính</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                </thead>
                <tbody>
                    <tr v-for="i in looper" :key="i">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr @click="looper++">
                        <td colspan="6">Thêm</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="form-group text-center" >
            <button class="btn btn-primary">Submit</button>
        </div>
    </div>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect';
export default {
    data() {
        return {
            providers: [],
            selected_provider_id: false,
            new_provider: {
                name: "",
                tax_number: "",
                description: "",
                address: "",
            },
            looper: 1,
        }
    },
    watch: {
        selected_provider_id() {
            if (this.selected_provider_id) {
                this.providers.forEach( provider => {
                    if (provider.id === this.selected_provider_id) {
                        this.new_provider = {
                            name: provider.name,
                            tax_number: provider.tax_number,
                            description: provider.description,
                            address: provider.address,
                        }
                        return false;
                    }
                });

            } else {
                this.new_provider = {
                    name: "",
                    tax_number: "",
                    description: "",
                    address: "",
                }
            }

        }
    },
    methods: {
        fetchProviders(callback) {
            let _data = [];
            this.providers.forEach(provider => {
                _data.push({
                    'id': provider.id,
                    'label': provider.name,
                });
            });
            callback(null, _data);
        }
    },
    mounted() {
        axios.get(`${this.$store.state.apiBase}/provider`).then (response => {
            this.providers = response.data;
        });
    },
    components: {
        Treeselect,
    }
}
</script>

<style>

</style>

<template>
    <div class="dialog-wrapper" @click.self="cancel">

        <div class="dialog-content big">
            <h3>Tạo BOQ</h3>
            <hr>
            <h5>Danh sách vật tư</h5>
            <div class="form-group">
                <table class="table boq-table">
                    <thead class="thead-light text-center">
                        <tr>
                            <th rowspan="2" class="controls-col text-center"></th>
                            <th rowspan="2" class="text-left name-col" >Tên vật tư / Danh mục</th>
                            <th rowspan="2" class="per-col">Đơn vị tính</th>
                            <th rowspan="2" class="currency-col">Loại tiền</th>
                            <th colspan="3" class="boq-col">BOQ</th>
                            <th rowspan="2" class="notes-col">Ghi chú</th>
                        </tr>
                        <tr>
                            <th class="text-center boq-unit-col">Số lượng</th>
                            <th class="text-center boq-price-col">Đơn giá</th>
                            <th class="text-center boq-total-col">Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="row in list" :key="row.uid" :class="{'category-row': row.type === 'category', 'material-row': row.type === 'material'}">
                            <template v-if="row.type === 'category'">
                                <td class="controls-col">+</td>
                                <td colspan="7"><input type="text" class="inline-td" v-model="row.name" @focus="$event.target.select()" v-focus @keyup.enter="addMaterial(row.keyid)"></td>
                            </template>
                            <template v-else>
                                <td class="controls-col">-</td>
                                <td><input type="text" class="inline-td" v-model="row.per" @focus="$event.target.select()" v-focus @keyup.enter="addMaterial(row.keyid)"></td>
                                <td><input type="text" class="inline-td" v-model="row.currency" @focus="$event.target.select()" v-focus @keyup.enter="addMaterial(row.keyid)"></td>
                                <td><input type="text" class="inline-td" v-model="row.unit" @focus="$event.target.select()" v-focus @keyup.enter="addMaterial(row.keyid)"></td>
                                <td><input type="text" class="inline-td" v-model="row.price" @focus="$event.target.select()" v-focus @keyup.enter="addMaterial(row.keyid)"></td>
                                <td>{{ row.price * row.unit }}</td>
                                <td><input type="text" class="inline-td" v-model="row.name" @focus="$event.target.select()" v-focus @keyup.enter="addMaterial(row.keyid)"></td>
                                <td></td>
                            </template>
                        </tr>
                        <tr class="add-more" @click="addCategory">
                            <td class="controls-col">+</td>
                            <td colspan="7">Thêm</td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <div class="form-group text-center" >
                <button class="btn btn-primary" @click="submit">Lưu</button>
                <button class="btn" @click="cancel">Bỏ qua</button>
            </div>
        </div>           
    </div>

</template>

<script>
import Treeselect from '@riophae/vue-treeselect';
export default {
    props: ['work_id'],
    data() {
        return {
            list: [],
        }
    },

    computed: {
        nested_list() {
            let _nestedList = [];
            this.list.forEach( node => {
                if (node.type === "category") {
                    _nestedList.push({
                        name: node.name,
                        children: [],
                    });
                }
                if (node.type === "material") {
                    if (node.name) {
                        _nestedList[_nestedList.length - 1].children.push(node);
                    }
                    
                }
            });
            return _nestedList;
        },
        work() {
            return this.$store.state.currentWork;
        },

    },
    methods: {
        addCategory() {
            this.list.push({
                "type": "category",
                "name": "",
                "uid": this.uid(),
                "keyid": this.list.length,
            });
        },
        addMaterial(keyid) {
            let _index = keyid + 1;
            if (this.list.length > 1) {
                for (let i = keyid + 1; i < this.list.length; i++) {
                    if (this.list[i].type === "category" || i === this.list.length) {
                        _index = i;
                        break;
                    }
                }
            }
            this.list.splice(_index, 0, {
                "name": "",
                "type": "material",
                "uid": this.uid(),
                "keyid": "",
            });
            this.updateIndex();
        },
        updateIndex() {
            for (let i = 0; i < this.list.length; i++) {
                this.list[i].keyid = i;
            }
        },
        uid() {
            return Math.random().toString(36).substring(2) 
               + (new Date()).getTime().toString(36).substring(10);
        },
        cancel() {
            this.$close(false);
        },
        submit() {
            axios.patch(`${this.$store.state.apiBase}/work/${this.work.id}`, {
                action: "new_invoice",
                selected_provider_id: this.selected_provider_id,
                new_provider: this.new_provider,
                list: this.nested_list,
                signed_at: this.signed_at,
                contract_number: this.contract_number,
                form_name: this.form_name,

            }).then( response => {
                if (response.status === 200) {
                    this.$swal("Hoàn tất", "Cập nhật thành công", "success").then( result => {
                        this.$close(true);
                    });
                }
            });
        }
    },
    mounted() {
    },
    directives: {
        focus: {
            // directive definition
            inserted: function (el) {
                el.focus();
            }
        }
    },
    components: {
        Treeselect,
    }
}
</script>

<style>

</style>

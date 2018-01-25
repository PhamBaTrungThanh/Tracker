<template>
    <transition name="slide-fade">
        <div class="create_receive---wrapper" v-if="invoice">
            <hero-header :page="pageMeta" />
            <div class="navbar has-shadow">
                <div class="container">
                    <div class="navbar-tabs">
                        <router-link :to="{'name': 'invoice.show', 'params': {'id': invoice.id}}" class="navbar-item is-tab">
                            <span class="icon">
                                <i class="mdi mdi-chevron-left"></i>
                            </span>
                            <span>Quay lại</span>
                        </router-link>
                    </div>
                </div>
            </div>
            <section class="section">
                <div class="container">
                    <div class="columns box">
                        <div class="column is-10 is-offset-1">
                            <div class="content">
                                <div class="field is-horizontal">
                                    <div class="field-label is-normal">
                                        <label for="" class="label">Thông tin biên nhận</label>
                                    </div>
                                    <div class="field-body">
                                        <div class="field is-expanded has-addons">
                                            <p class="control">
                                                <a class="button is-static">Mã hóa đơn</a>
                                            </p>
                                            <p class="control has-icons-left  is-expanded">
                                                <input type="text" name="invoice_id" readonly :value="$route.query.invoice_id" class="input ">
                                                <span class="icon is-left">
                                                    <i class="mdi mdi-file-outline"></i>
                                                </span>
                                            </p>
                                        </div>
                                        <div class="field is-expanded  has-addons">

                                            <p class="control">
                                                <a class="button is-static">Người tạo</a>
                                            </p>
                                            <p class="control is-expanded">
                                                <input type="text" class="input" name="creator_name" :value="user.name">
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="field is-horizontal">
                                    <div class="field-label is-normal">
                                        <label for="" class="label">Tên</label>
                                    </div>
                                    <div class="field-body">
                                        <div class="field is-expanded">
                                            <p class="control">
                                                <input type="input" v-model="receive_name" :class="{'input': true, 'is-danger': errors.has('receive_name')}" v-validate="'required'" name="receive_name" :disabled="onSubmit">
                                            </p>
                                            <p class="help is-danger" v-show="errors.has('receive_name')">Tên không được để trống</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="field is-horizontal">
                                    <div class="field-label is-normal">
                                        <label for="" class="label">Ngày nhận</label>
                                    </div>
                                    <div class="field-body">
                                        <div class="field">
                                            <p class="control">
                                                <cleave :options="cleave.date" v-model="received_on" :class="{'input': true, 'is-danger': errors.has('received_on')}" name="received_on" v-validate.initial="'required|date_format:DD/MM/YYYY'" :raw="false" :disabled="onSubmit"></cleave>
                                            </p>
                                            <p class="help is-danger" v-show="errors.firstByRule('received_on', 'required')">
                                                Ngày không được để trống.
                                            </p>   
                                            <p class="help is-danger" v-show="errors.firstByRule('received_on', 'date_format')">
                                                Ngày không hợp lệ. Nhập ngày theo dạng DD/MM/YYYY
                                            </p>     
                                        </div>
                                    </div>
                                </div>
                                <div class="field is-horizontal">
                                    <div class="field-label is-normal">
                                        <label for="" class="label">Nhận</label>
                                    </div>
                                    <div class="field-body">
                                        <div class="field">
                                            <div class="control">
                                                <table class="table is-striped is-bordered is-hoverable">
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Tên</th>
                                                            <th>Tổng</th>
                                                            <th>Nhận đợt này</th>
                                                            <th>Còn lại</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody v-if="receive_list">
                                                        <tr v-for="(tracker, index) in receive_list" :key="index">
                                                            <td>{{index + 1}}</td>
                                                            <td>{{tracker.name}}</td>
                                                            <td>{{tracker.total}}</td>
                                                            <td></td>            
                                                            <td>{{tracker.total - tracker.value}}</td>                                                     
                                                        </tr>
                                                    </tbody>
                                                    <tbody v-else>
                                                        <tr>
                                                            <td colspan="5">
                                                                <p class="subtitle is-5 has-text-centered">Đang tải dữ liệu</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field is-grouped is-grouped-centered">
                                    <div class="control">
                                        <button :class="['button', 'is-link', {'is-loading': onSubmit}]" @click="submitReceive">
                                            <span class="icon">
                                                <i class="mdi mdi-file"></i>
                                            </span>
                                            <span>Tạo mới</span>
                                        </button>
                                    </div>
                                    <div class="control">
                                        <router-link class="button is-outlined" :to="{'name': 'invoice.show', 'params': {'id': invoice.id}}">Bỏ qua</router-link>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </transition>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    data: () => ({
        'receive_name': "",
        'received_on': "",
        'content': "",
        'receive_list': [],
        'onSubmit': false,
    }),
    computed: {
        pageMeta() {
            return {
                'title': "Biên nhận hàng hóa",
                'description': (this.invoice) ? `Đơn hàng: ${this.invoice.name}` : "Đơn hàng",
            }
        },
        user() {
            return this.$store.state.user;
        },
        cleave() {
            return this.$store.state.cleaveOptions;
        },
    },
    asyncComputed: {
        invoice: {
            default: false,
            get() {
                return this.$store.dispatch("getInvoice", {invoice_id: this.$route.query.invoice_id}).then( result => {
                    this.receive_name = `Nhận hàng đợt ${result.receives_count + 1}`;
                    return result;
                });
            }
        },
        trackers: {
            
            default: [],
            get() {
                return this.$store.dispatch("getRelatedTrackers", {'invoice_id': this.invoice.id, 'expect': this.invoice.trackers_count});
            }
        },
        materials: {
            
            default: [],
            get() {
                return this.$store.dispatch("guaranteeMaterials", {'material_ids': this.trackers.map( t => t.material_id)}).then( materials => {
                    let receive_list = [];
                    console.log(materials);
                    for (let i = 0; i < materials.length; i++) {
                        receive_list.push({
                            'name': materials[i].name,
                            'total': this.trackers[i].unit,
                            'value': 0,
                        });
                    }
                    this.receive_list = receive_list;
                    return materials;
                });
            }
        }
    },
    methods: {
        submitReceive() {},
    }
}
</script>

<style>

</style>

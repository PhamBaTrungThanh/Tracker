<template>
    <transition name="slide-fade">
        <div class="invoice_show--wrapper" v-if="ready" >
            <hero-header :page="pageMeta" />
            <div class="navbar has-shadow">
                <div class="container">
                    <div class="navbar-tabs">
                    </div>
                </div>
            </div>
            <section class="section">
                <div class="container">
                    <div class="content">
                        <p class="title">Phân phối công việc</p>
                        <p class="subtitle has-text-capitalized">Ngày {{now}}</p>
                    </div>
                    <article role="assign-work" class="content">
                        <table class="table is-expanded is-striped is-hoverable has-text-centered-cell">
                            <thead>
                                <tr>
                                    <th style="width: 50px">STT</th>
                                    <th style="width: 150px">Từ</th>
                                    <th style="width: 150px">Đến</th>
                                    <th style="width: 400px" class="has-text-left">Công trình</th>
                                    <th class="has-text-left">Công việc</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(job, index) in jobs" :key="index">
                                    <td><b>{{index + 1}}</b></td>
                                    <td>
                                        <datetime v-model="job.from" type="time"
                                            wrapper-class="control"
                                            input-class="input has-text-centered"
                                            placeholder="Giờ bắt đầu"></datetime>
                                    </td>
                                    <td>
                                        <datetime v-model="job.to" type="time"
                                            wrapper-class="control"
                                            input-class="input has-text-centered"
                                            placeholder="Giờ kết thúc"></datetime>
                                    </td>
                                    <td class="field">
                                        <div class="control">
                                            <div class="select is-primary is-expanded">
                                                <select v-model="job.work_id">
                                                    <option v-for="work in works" :key="work.id" :value="work.id">{{work.name}}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="field">
                                        <div class="control">
                                            <textarea :class="{'textarea': true, 'is-danger': errors.has(`job_content_${index}`)}" v-model="job.content" placeholder="Mô tả công việc" v-validate="'required'" :name="`job_content_${index}`" rows="2"></textarea>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="field">
                            <div class="control">
                                <button class="button is-primary" @click="addJob">+ Thêm </button>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    </transition>
</template>

<script>

import * as moment from 'moment';
import 'moment/locale/vi';
moment.locale('vi');
import { Datetime } from 'vue-datetime';

export default {
    data: () => {
        return {
            'ready': false,
            'now': false,
            'jobs': [],
        }
    },
    computed: {
        user() {
            return this.$store.getters["user/user"];
        },
        works() {
            return this.$store.getters["work/works"];
        },
        pageMeta() {
            return {
                'title': "Nhân sự",
                'description': (this.user.name) ? `Nhân viên ${this.user.name}` : "Nhân viên",
            }
        }
    },
    methods: {
        addJob() {
            this.jobs.push({
                'from': "",
                'to': "",
                'work_id': 0,
                'content': "",
            });
        }
    },
    mounted() {
        this.ready = true;
        this.now = moment().format("dddd, DD/MM/YYYY");
    },
    components: {
        datetime: Datetime
    }
}
</script>

<style>

</style>

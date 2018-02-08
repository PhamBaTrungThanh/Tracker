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
                                    <th style="width: 60px"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(task, index) in tasks" :key="index" class="hover-controls">
                                    <td>
                                        <b class="hide-on-hover">{{index + 1}}</b>
                                        <div class="control show-on-hover">
                                            <button class="button is-danger is-small is-outlined" @click="deleteTask(index)">Xoá</button>
                                        </div>
                                    </td>
                                    <td>
                                        <cleave placeholder="Giờ bắt đầu" v-model="task.from" :options="options.time" :class="{'input': true, 'has-text-centered': true, 'is-danger': errors.has(`time_from_${index}`), 'is-success': !errors.has(`task_content_${index}`)}" :name="`time_from_${index}`" v-validate.initial="'required'"></cleave>
                                    </td>
                                    <td>
                                        <cleave placeholder="Giờ kết thúc" v-model="task.to" :options="options.time" :class="{'input': true, 'has-text-centered': true, 'is-danger': errors.has(`time_to_${index}`), 'is-success': !errors.has(`task_content_${index}`)}" :name="`time_to_${index}`" v-validate.initial="'required'"></cleave>
                                    </td>
                                    <td class="field">
                                        <div class="control">
                                            <div :class="{'select': true, 'is-expanded': true, 'is-danger': errors.has(`task_work_${index}`), 'is-success': !errors.has(`task_work_${index}`)}" >
                                                <select v-model="task.work_id" v-validate.initial="'required|not_in:0'" :name="`task_work_${index}`">
                                                    <option value="0" selected>Chọn công trình</option>
                                                    <option v-for="work in works" :key="work.id" :value="work.id">{{work.name}}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="field">
                                        <div class="control">
                                            <textarea :class="{'textarea': true, 'is-danger': errors.has(`task_content_${index}`), 'is-success': !errors.has(`task_content_${index}`)}" v-model="task.content" placeholder="Mô tả công việc" v-validate.initial="'required'" :name="`task_content_${index}`" rows="1"></textarea>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="field">
                            <div class="control">
                                <button class="button is-primary" @click="addtask">+ Thêm </button>
                            </div>
                        </div>
                        <div class="field is-grouped is-grouped-centered">
                            <div class="control">
                                <button class="button is-large is-success" @click="submit">Lưu</button>
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
            'tasks': [],
            'options': {
                'time': {
                    'blocks': [2, 2],
                    'delimiter': ":",
                    'rawValueTrimPrefix': true,
                    'numericOnly': true
                }
            },
            deleteTaskIds: [],
            onSubmit: false,

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
        },
        todayTask() {
            return this.$store.getters["task/today"];
        }
    },
    methods: {
        addtask() {
            this.tasks.push({
                'from': "",
                'to': "",
                'work_id': 0,
                'content': "",
                'is_new': true,
                'index': this.tasks.length,
            });
        },
        deleteTask(index) {
            if (!this.tasks[index].is_new) {
                deleteTaskIds.push(this.tasks[index].id);
            }
            this.tasks.splice(index, 1);
        },
        submit() {
            if (this.onSubmit) {
                return false;
            } else if (this.errors.any()) {
                return false;
            } else {
                //this.onSubmit = true;
                let tasks = this.tasks;
                const fields = this.fields;
                // check dirty 
                const fieldsKeys = Object.keys(fields);
                for (let i = fieldsKeys.length - 1; i >= 0; i--) {
                    let name = fieldsKeys[i];
                    if (fields[name].dirty) {
                        let index = parseInt(name.substr(name.lastIndexOf("_") + 1));
                        tasks[index].dirty = true;
                    }
                }
                let newTasks = [];
                let dirtyTasks = [];

                for (let i = 0; i < tasks.length; i++) {
                    if (tasks[i].is_new) {
                        newTasks.push(tasks[i]);
                    } else if (tasks[i].dirty) {
                        dirtyTasks.push(tasks[i]);
                    }
                }
                const updateTaskPromise = (dirtyTasks.length > 0) ?  this.$store.dispatch("task/update", dirtyTasks) : Promise.resolve();
                const newTasksPromise = (newTasks.length > 0) ? this.$store.dispatch("task/store", newTasks) : Promise.resolve();
                Promise.all([newTasksPromise, updateTaskPromise]).then( ([newTasksResult, updateTasksResult]) => {
                    console.log(newTasksResult);
                });

            }
        },
        guard() {
            this.now = moment().format("dddd, DD/MM/YYYY");
            this.$store.dispatch("task/today").then( result => {
                
                this.tasks = result.map( task => {
                    return {
                        'id': task.id,
                        'from': task.from,
                        'to': task.to,
                        'content': task.content,
                        'work_id': task.work_id,
                    }
                });
            });
        }
    },
    mounted() {
        this.ready = true;

    },

}
</script>

<style>

</style>

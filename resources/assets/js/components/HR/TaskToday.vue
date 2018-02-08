<template>
    <transition name="slide-fade">
        <div class="invoice_show--wrapper" v-if="ready" >
            <hero-header :page="pageMeta" />
            <div class="navbar has-shadow">
                <div class="container">
                    <div class="navbar-tabs">
                        <router-link :to="{'name': 'hr.user'}" class="navbar-item is-tab">
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
                                        <cleave :disabled="onSubmit" placeholder="Giờ bắt đầu" v-model="task.from" :options="options.time" :class="{'input': true, 'has-text-centered': true, 'is-danger': errors.has(`time_from_${task.uid}_${index}`), 'is-success': !errors.has(`task_content_${task.uid}_${index}`)}" :name="`time_from_${task.uid}_${index}`" v-validate.initial="'required'"></cleave>
                                    </td>
                                    <td>
                                        <cleave :disabled="onSubmit" placeholder="Giờ kết thúc" v-model="task.to" :options="options.time" :class="{'input': true, 'has-text-centered': true, 'is-danger': errors.has(`time_to_${task.uid}_${index}`), 'is-success': !errors.has(`task_content_${task.uid}_${index}`)}" :name="`time_to_${task.uid}_${index}`" v-validate.initial="'required'"></cleave>
                                    </td>
                                    <td class="field">
                                        <div class="control">
                                            <div :class="{'select': true, 'is-expanded': true, 'is-danger': errors.has(`task_work_${task.uid}_${index}`), 'is-success': !errors.has(`task_work_${task.uid}_${index}`)}" >
                                                <select :disabled="onSubmit" v-model="task.work_id" v-validate.initial="'required|not_in:0'" :name="`task_work_${task.uid}_${index}`">
                                                    <option value="0" selected>Chọn công trình</option>
                                                    <option v-for="work in works" :key="work.id" :value="work.id">{{work.name}}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="field">
                                        <div class="control">
                                            <textarea :disabled="onSubmit" :class="{'textarea': true, 'is-danger': errors.has(`task_content_${task.uid}_${index}`), 'is-success': !errors.has(`task_content_${task.uid}_${index}`)}" v-model="task.content" placeholder="Mô tả công việc" v-validate.initial="'required'" :name="`task_content_${task.uid}_${index}`" rows="1"></textarea>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="field">
                            <div class="control">
                                <button class="button is-primary" @click="addTask" :disabled="onSubmit" >+ Thêm </button>
                            </div>
                        </div>
                        <div class="field is-grouped is-grouped-centered">
                            <div class="control">
                                <button :class="{'button': true, 'is-success': true, 'is-loading': onSubmit}" @click="submit" :disabled="onSubmit" >Lưu</button>
                                <router-link class="button is-outlined" :to="{'name': 'hr.user'}">Hủy</router-link>
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
                'title': "Công việc",
                'description': (this.user.name) ? `Nhân viên ${this.user.name}` : "Nhân viên",
                'color': "dark",
            }
        },
        todayTask() {
            return this.$store.getters["task/today"];
        }
    },
    methods: {
        uid() {
            return Math.random().toString(36).substring(2) 
               + (new Date()).getTime().toString(36).substring(5);
        },
        addTask() {
            this.tasks.push({
                'from': "",
                'to': "",
                'work_id': 0,
                'content': "",
                'is_new': true,
                'index': this.tasks.length,
                'uid': this.uid(),
            });

        },
        deleteTask(index) {
            if (!this.tasks[index].is_new) {
                this.deleteTaskIds.push(this.tasks[index].id);
            }
            this.tasks.splice(index, 1);
        },
        submit() {
            if (this.onSubmit) {
                return false;
            } else if (this.errors.any()) {
                return false;
            } else {
                this.onSubmit = true;
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
                const updateTaskPromise = (dirtyTasks.length > 0) ?  this.$store.dispatch("task/update", dirtyTasks) : Promise.resolve([]);
                const newTasksPromise = (newTasks.length > 0) ? this.$store.dispatch("task/store", newTasks) : Promise.resolve([]);
                const deleteTaskPromise = (this.deleteTaskIds.length > 0) ? this.$store.dispatch("task/delete", this.deleteTaskIds) : Promise.resolve();
                Promise.all([newTasksPromise, updateTaskPromise, deleteTaskPromise]).then( ([newTasksResult, updateTasksResult, deleteTaskResult]) => {
                    if (updateTasksResult.length > 0) {
                        for (let i = updateTasksResult.length - 1; i >= 0; i--) {
                            let _index = this.tasks.findIndex(t => t.id === updateTasksResult[i].id);
                            this.tasks.splice(_index, 1, {
                                'id': updateTasksResult[i].id,
                                'from': updateTasksResult[i].from,
                                'to': updateTasksResult[i].to,
                                'content': updateTasksResult[i].content,
                                'work_id': updateTasksResult[i].work_id,                 
                                'is_new': false,               
                                'uid': this.uid(),
                            });
                        }
                    }
                    if (newTasksResult.length > 0) {
                        let count = 0;
                        for (let i = this.tasks.length - 1; i >= 0; i--) {
                            if (this.tasks[i].is_new) {
                                count++;
                            } else {
                                break;
                            }
                        }
                        this.tasks.splice(this.tasks.length - count, count);
                        this.tasks.push(...newTasksResult.map( task => {
                            return {
                                'id': task.id,
                                'from': task.from,
                                'to': task.to,
                                'content': task.content,
                                'work_id': task.work_id,
                                'is_new': false,
                                'uid': this.uid(),
                            }
                        }));
                    }
                    if (deleteTaskResult) {
                        this.deleteTaskIds = [];
                    }
                    this.onSubmit = false;
                });

            }
        },
        guard() {
            this.now = moment().format("dddd, DD/MM/YYYY");
            this.$store.dispatch("task/today", {'user_id': parseInt(this.$route.params.user_id)}).then( result => {
                
                this.tasks = result.map( task => {
                    return {
                        'id': task.id,
                        'from': task.from,
                        'to': task.to,
                        'content': task.content,
                        'work_id': task.work_id,
                        'is_new': false,
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

<template>
    <transition name="slide-fade">
        <div class="index--wrapper" v-if="ready">
            <hero-header :page="pageMeta" >
                <div class="hero-foot" slot="footer"> 
                    <nav class="tabs  is-boxed">
                        <div class="container">
                            <ul>
                                <li class="is-active"><a>Nhân sự</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>     
            </hero-header>    
            <div class="navbar has-shadow">
                <div class="container">
                    <div class="navbar-tabs">
                        <router-link :to="{'name': 'hr.user.create'}" class="navbar-item is-tab">
                            <span class="icon">
                                <i class="mdi mdi-account-plus"></i>
                            </span>
                            <span>Thêm nhân viên mới</span>
                        </router-link>
                    </div>
                </div>
            </div>
            <section class="section">
                <div class="">
                    <div class="content">
                        <p class="title is-3 has-text-centered">Danh sách nhân viên</p>
                    </div>
                    <div class="content" v-if="users.length > 0">
                        <table class="table is-striped is-hoverable has-text-small is-bordered">
                            <thead>
                                <th>STT</th>
                                <th class="has-text-left">Họ Tên</th>
                                <th>Mã NV</th>
                                <th>Số CMT</th>
                                <th>Ngày sinh</th>
                                <th>Quê quán</th>
                                <th>SĐT</th>
                                <th>Địa chỉ liên hệ</th>
                                <th>Nơi làm việc</th>
                                <th>Ngày vào MEC</th>
                                <th>Công việc hiện tại</th>
                                <th>Nơi làm việc hiện tại</th>
                                <th>Địa chỉ email</th>
                                <th>Tình trạng hôn nhân</th>
                                <th>Tình trạng gia đình</th>
                            </thead>
                            <IndexTBody title="Ban giám đốc" :users="directorsGroup" />
                            <IndexTBody title="Phòng dự án" :users="projectsGroup" />
                            <IndexTBody title="Phòng kế toán" :users="accountingGroups" />
                            <IndexTBody title="Phòng kỹ thuật" :users="enginneeringGroups" />
                            <IndexTBody title="Phòng hành chính" :users="generalsGroups" />
                        </table>
                    </div>
                </div>
            </section>
        </div>

    </transition>
</template>

<script>
import arraySort from 'array-sort';
import IndexTBody from './IndexTBody.vue';
export default {
    data: () => {
        return {
            ready: false,
        }
    },
    computed: {
        user() {
            return this.$store.getters["user/user"];
        },
        users() {
            return this.$store.getters["user/users"];
        },
        directorsGroup() {
            return arraySort(this.users.reduce((users, user) => {
                if (user.role === 1) {
                    users.push(user);
                }
                return users;
            }, []), ['order', 'name']);
        },
        projectsGroup() {
            return arraySort(this.users.reduce((users, user) => {
                if (user.role === 2) {
                    users.push(user);
                }
                return users;
            }, []), ['order', 'name']);
        },
        accountingGroups() {
            return arraySort(this.users.reduce((users, user) => {
                if (user.role === 3) {
                    users.push(user);
                }
                return users;
            }, []), ['order', 'name']);            
        },
        enginneeringGroups() {
            return arraySort(this.users.reduce((users, user) => {
                if (user.role === 4) {
                    users.push(user);
                }
                return users;
            }, []), ['order', 'name']);            
        },
        generalsGroups() {
            return arraySort(this.users.reduce((users, user) => {
                if (user.role === 5) {
                    users.push(user);
                }
                return users;
            }, []), ['order', 'name']);            
        },
        pageMeta() {
            return {
                'title': "Quản lý nhân sự",
                'description': "Công ty MEC",
                'color': "dark",
            }
        }
    },
    methods: {
        guard() {
            this.$store.dispatch("user/getAll");
        }
    },
    mounted() {
        this.ready = true;
    },
    components: {
        IndexTBody,
    }
}
</script>

<style>

</style>
<template>
    <div class="option---wrapper">
        <div class="row">
            <div class="col-10 offset-1">
                <div class="card">
                    <h5 class="card-header">Đăng xuất</h5>
                    <div class="card-body">
                        <p class="card-text text-center">
                            <button class="btn" @click="logout">Đăng xuất</button>
                        </p>
                    </div>
                </div>
                <br>
                <div class="card">
                    <h5 class="card-header">Đổi mật khẩu</h5>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="new_password">Nhập mật khẩu mới:</label>
                            <input type="password" :class="{'form-control': true, 'is-invalid': change_password.is_invalid}" id="new_password" v-model="change_password.first">
                        </div>
                        <div class="form-group">
                            <label for="new_password_confirm">Xác nhận:</label>
                            <input type="password" :class="{'form-control': true, 'is-invalid': change_password.is_invalid}" id="new_passwork_confirm" v-model="change_password.second">
                            <div class="invalid-feedback">
                                Mật khẩu không khớp.
                            </div>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary" @click="changePassword">Lưu</button>
                        </div>
                    </div>
                </div>
                <br>
                <div class="card" v-if="$store.state.user.can_add_user">
                    <h5 class="card-header">Thêm người dùng mới</h5>
                    <div class="card-body">
                        <div class="form-row">
                            <div class="form-group col-6">
                                <label>Tên người dùng</label>
                                <input type="text" :class="{'form-control': true, 'is-invalid': validate_new_user.name}" v-model="new_user.name">
                            </div>
                            <div class="form-group col-6">
                                <label>Email</label>
                                <input type="text" :class="{'form-control': true, 'is-invalid': validate_new_user.email}" v-model="new_user.email">
                            </div>                    
                        </div>
                        <div class="form-row">
                            <div class="form-group col-6">
                                <label>Mật khẩu mặc định</label>
                                <input type="password" :class="{'form-control': true, 'is-invalid': validate_new_user.password}" v-model="new_user.password">
                            </div>
                            <div class="form-group col-6">
                                <label>Thuộc</label>
                                <select id="inputState" :class="{'form-control': true, 'is-invalid': validate_new_user.role}" v-model="new_user.role">
                                    <option selected value="1">Ban giám đốc</option>
                                    <option value="2">Phòng kế toán</option>
                                    <option value="3">Phòng dự án</option>
                                </select>
                            </div>
                        </div>
                        <p class="card-text text-center">
                            <button class="btn btn-primary" @click="newUser">Thêm người dùng</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {remove} from 'tiny-cookie';

export default {
    data() {
        return {
            new_user: {
                name: "",
                email: "",
                password: "",
                role: "",
            },
            change_password: {
                first: "",
                second: "",
                is_invalid: false,
            },
            validating_new_user: false,
        }
    },
    computed: {
        validate_new_user() {
            if (this.validating_new_user) {
                return {
                    name: this.new_user.name.length <= 0,
                    email: this.new_user.email.length <= 0,
                    password: this.new_user.password.length <= 0,
                    role: this.new_user.role <= 0, 
                }
            }
            else {
                return {
                    name: false,
                    email: false,
                    password: false,
                    role: false,
                }
            }
        }
    },
    methods: {
        changePassword() {
            if (this.change_password.first !== this.change_password.second) {
                this.change_password.is_invalid = true;
            } else {
                
                axios.patch(`${this.$store.state.apiBase}/user/${this.$store.state.user.user_id}`, {
                    action: "change_password",
                    password: this.change_password.first,
                }).then( response => {
                    if (response.status === 200) {
                        this.$swal('Thành công', 'Đã đổi mật khẩu', 'success').then (result => {
                            this.change_password.first = "";
                            this.change_password.second = "";
                            this.change_password.is_invalid = false;

                        });
                    }
                }) 
            }
        },
        newUser() {
            this.validating_new_user = true;
            if (this.validating_new_user && 
                !this.validate_new_user.name && 
                !this.validate_new_user.email && 
                !this.validate_new_user.password && 
                !this.validate_new_user.role) {
                    axios.post(`${this.$store.state.apiBase}/user`, {
                        name: this.new_user.name,
                        password: this.new_user.password,
                        email: this.new_user.email,
                        role: this.new_user.role,
                    }).then( response => {
                        if (response.status === 200) {
                            this.$swal("Thành công", `Tài khoản ${this.new_user.email} đã được tạo`, "success");
                        }
                    });
                }
        },
        logout() {
            remove('cookie-token');
            this.$store.commit('REMOVE_AUTHORIZATION_TOKEN');
            this.$router.push("login");
        }
    }
}
</script>

<style>

</style>

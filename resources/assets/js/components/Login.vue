<template>
    <div class="container">
        <div class="vertical" style="height: 20vh"></div>
        <div class="row">
          <div class="col-4 offset-4">     
                <form class="form-signin">
                    <h2 class="form-signin-heading">Xin mời đăng nhập</h2>
                    <fieldset :disabled="disabledForm">                       
                        <div class="form-group">
                            <label for="inputEmail" class="sr-only">Email</label>
                            <input v-model="username" type="email" id="inputEmail" :class="[formErrorMessage ? 'is-invalid' : '', 'form-control']" placeholder="Email" required autofocus>
                            <div class="invalid-feedback" v-if="formErrorMessage">
                                {{ formErrorMessage }}
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputPassword" class="sr-only">Mật khẩu</label>
                            <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Mật khẩu" required>
                        </div>
                        <div class="form-group">
                            <div class="checkbox">
                            <label>
                                <input type="checkbox" value="remember-me" v-model="rememberMe"> Lưu tài khoản
                            </label>
                            </div>
                        </div>
                        <button class="btn btn-lg btn-primary btn-block" type="submit" @click.prevent="login">Đăng nhập</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div> <!-- /container -->
</template>

<script>
export default {
    data() {
        return {
            rememberMe: false,
            username: "",
            password: "",
            formErrorMessage: false,
            disabledForm: false,
        }
    },
    methods: {
        login() {
            if (this.username !== false && this.password !== false ) {
                this.disabledForm = "disabled";
                this.axios.post(`./oauth/token`, {
                    "grant_type": "password",
                    "client_id": "1",
                    "client_secret": "gpeddInNL3AW5gmjoZ1bNMt178lFOqNolIs1e3da",
                    "scope": "",
                    "username": this.username,
                    "password": this.password,
                }).then( response => {
                    if (response.status === 200) {
                        this.$store.commit('SET_AUTHORIZATION_TOKEN', `Bearer ${response.data.access_token}`);
                        this.axios.defaults.headers.common['Authorization'] =  `Bearer ${response.data.access_token}`;
                        if (this.rememberMe) {
                            this.$cookie.set('cookie-token', `Bearer ${response.data.access_token}`, "1Y");
                        }
                        this.axios.get(`${this.$store.state.apiBase}/user`)
                            .then(response => {
                                this.$store.commit('SET_USER', response.data.data);
                                this.disabledForm = false;
                                this.$router.push({name: "dashboard"});
                            })
                            .catch(error => {
                                console.log(error);
                            });
                    }
                }).catch( error => {
                    console.log(error);
                    this.formErrorMessage = error.response.data.message;
                    this.password = "";
                });
            }
        }
    }
}
</script>

<style>
  
</style>
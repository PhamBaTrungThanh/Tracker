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
                            <input v-model="password" type="password" id="inputPassword" :class="[formErrorMessage ? 'is-invalid' : '', 'form-control']" placeholder="Mật khẩu" required>
                        </div>
                        <button class="btn btn-lg btn-primary btn-block" type="submit" @click.prevent="login">Đăng nhập</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div> <!-- /container -->
</template>

<script>
import { setCookie } from 'tiny-cookie';
export default {
    data() {
        return {
            rememberMe: true,
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
                axios.post(`./oauth/token`, {
                    "grant_type": "password",
                    "client_id": "2",
                    "client_secret": "D8d2UvaXaBe6ommOdVgnVpwPrtmiJPDQN5k6cBNJ",
                    "scope": "",
                    "username": this.username,
                    "password": this.password,
                }).then( response => {
                    if (response.status === 200) {
                        this.$store.commit('SET_AUTHORIZATION_TOKEN', `Bearer ${response.data.access_token}`);
                        //axios.defaults.headers.common['Authorization'] =  `Bearer ${response.data.access_token}`;
                        if (this.rememberMe) {
                            setCookie('cookie-token', `Bearer ${response.data.access_token}`, "1Y");
                        }
                        this.$router.push({name: "root.dashboard"});
                    }
                }).catch( error => {
                    console.log(error);
                    this.formErrorMessage = error.response.data.message;
                    this.password = "";
                    this.disabledForm = "";
                });
            }
        }
    }
}
</script>

<style>
  
</style>
<template>
    <div class="container">

      <form class="form-signin">
        <h2 class="form-signin-heading">Xin mời đăng nhập</h2>
        <label for="inputEmail" class="sr-only">Email</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email" required autofocus>
        <label for="inputPassword" class="sr-only">Mật khẩu</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Mật khẩu" required>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> Lưu tài khoản
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Đăng nhập</button>
      </form>

    </div> <!-- /container -->
</template>

<script>
export default {

}
</script>

<style>
    .form-signin {
        max-width: 330px;
        padding: 15px;
        margin: 0 auto;
    }
    .form-signin .form-signin-heading,
    .form-signin .checkbox {
        margin-bottom: 10px;
    }
    .form-signin .checkbox {
        font-weight: 400;
    }
    .form-signin .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
    }
    .form-signin .form-control:focus {
        z-index: 2;
    }
    .form-signin input[type="email"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }
    .form-signin input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
</style>
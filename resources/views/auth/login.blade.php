@extends('layouts.login')

@section('content')
<div class="login---wrapper">
    <div class="login--content">
        <div class="login-title">
            <p class="title is-1 has-text-white">MEC</p>
        </div>
        <div class="login-body">
            <form class="form-horizontal" method="POST" action="{{ route('login') }}">
                {{ csrf_field() }}
                <div class="field">
                    <label class="label has-text-white">Tên đăng nhập</label>
                    <div class="control has-icons-left">
                        <span class="icon is-left">
                            <i class="mdi mdi-account"></i>
                        </span>
                        <input id="email" type="email" class="input {{ $errors->has('email') ? ' has-error' : '' }}" name="email" value="{{ old('email') }}" required autofocus>
                        @if ($errors->has('email'))
                            <p class="help is-danger">
                                {{ $errors->first('email') }}
                            </p>
                        @endif
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-white">Mật khẩu</label>
                    <div class="control has-icons-left">
                        <span class="icon is-left">
                            <i class="mdi mdi-lock"></i>
                        </span>
                        <input id="password" type="password" class="input {{ $errors->has('password') ? ' has-error' : '' }}" name="password" required >
                        @if ($errors->has('password'))
                            <p class="help is-danger">
                                {{ $errors->first('password') }}
                            </p>
                        @endif
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <button type="submit" class="button is-primary">
                            Đăng nhập
                        </button>
                    </div>

                </div>
                

                <div class="field">
                    <label class="checkbox">
                        <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> <span class="has-text-white">Lưu đăng nhập</span>
                    </label>
                </div>
            </form>
        </div>
    </div>
    

</div>
@endsection

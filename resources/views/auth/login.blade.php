@extends('layouts.login')

@section('content')
<div class="login---wrapper">
    <div class="login--content">
        <div class="login-title">
            <i class="material-icons">track_changes</i>
            <h2>MEC</h2>
        </div>
        <div class="login-body">
            <form class="form-horizontal" method="POST" action="{{ route('login') }}">
                {{ csrf_field() }}
                <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text" id="emailL"><i class="material-icons">face</i></div>
                        </div>        
                        <input id="email" type="email"  aria-describedby="emailL" class="form-control" name="email" value="{{ old('email') }}" required autofocus>                    
                        @if ($errors->has('email'))
                            <span class="help-block">
                                <strong>{{ $errors->first('email') }}</strong>
                            </span>
                        @endif
                    </div>
                        
                </div>  
                <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                    <div class="input-group">
                        <div class="input-group-prepend">
                                <div class="input-group-text" id="emailL"><i class="material-icons">fingerprint</i></div>
                            </div>        
                            <input id="password" type="password" class="form-control" name="password" required>

                        @if ($errors->has('password'))
                            <span class="help-block">
                                <strong>{{ $errors->first('password') }}</strong>
                            </span>
                        @endif
                    </div>

                </div>

                <div class="form-group">
                    <button type="submit" class="login-btn btn btn-secondary">
                        Đăng nhập
                    </button>
                </div>
                <div class="form-group">
                    <div class="checkbox text-white">
                        <label>
                            <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> Lưu đăng nhập
                        </label>
                    </div>
                </div>
            </form>
        </div>
    </div>
    

</div>
@endsection

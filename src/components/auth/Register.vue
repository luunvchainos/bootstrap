<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col max-w-500 mt-5">
                <form class="form-group" role="form" id="login" method="post">
                    <label for="username" class="sr-only">ユーザID</label>
                    <input type="text" id="username" name="username" class="form-control"
                           placeholder="ログインID" required autofocus/>
                    <br>
                    <label for="password" class="sr-only">Password</label>
                    <input type="password" id="password" name="password" class="form-control" placeholder="パスワード"
                           required/>
                    <br>
                    <input type="hidden" id="password-test" name="password-test" value="nesic123!"/>
                    <input type="button" class="btn btn-lg btn-primary btn-block" value="Sign in"/>
                </form>
                <div>
                    <a href="./my-account-application.html" class="">アカウント申込</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register"
    }
</script>

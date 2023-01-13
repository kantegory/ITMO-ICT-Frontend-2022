<template>
    <section class="vh-100">
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-start h-100">
                <div class="col-5">
                    <div class="card" style="border-radius: 1rem;">
                        <div class="card-body p-4">

                            <div class="row p-3">
                                <a href="/">
                                    <img class="img-logo " src="https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg" alt="Coinbase">
                                </a>
                            </div>

                            <div class="row py-5 px-3">
                                <h3 class="mb-0">Войдите в систему Coinbase</h3>
                            </div>
                            <form type="submit">
                                <div class="row mb-4 px-3">
                                    <div class="form-outline col-12">
                                        <label class="form-label fw-bolder" for="typeEmailX">Электронная почта</label>
                                        <input type="email" id="typeEmailX" class="form-control form-control-lg"
                                               placeholder="Ваш адрес электронной почты" required/>
                                    </div>
                                </div>

                                <div class="row mb-4 px-3">
                                    <div class="form-outline col-12">
                                        <label class="form-label fw-bolder" for="typePasswordX">Пароль</label>
                                        <input type="password" id="typePasswordX" class="form-control form-control-lg"
                                               placeholder="Ваш пароль" required/>
                                    </div>
                                </div>


                                <div class="row px-3">
                                    <p class=" mb-4">
                                        <a class="password-forgot" href="#">Не помните пароль?</a>
                                    </p>
                                </div>

                                <div class="row px-3">
                                    <a href="/Portfolio" class="login-link">
                                        <button class="btn btn-primary col-12 mb-3 continue" type="submit">Войти</button>
                                    </a>
                                </div>
                            </form>

                            <div class="row px-3 mb-4">
                                <a href="/Registration" class="registration-link">
                                    <button class="btn btn-light col-12 registration" type="submit">Создать учетную запись</button>
                                </a>
                            </div>

                            <div class="row">
                                <div class="col d-flex flex-column">
                                    <a href="#" class="extra-link">Войти в бизнес-аккаунт</a>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col d-flex flex-column">
                                    <a href="https://www.coinbase.com/legal/privacy" class="extra-link">Политика конфиденциальности</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "bodyBlockLogin"
}
</script>

<style scoped>
.img-logo {
    width: 35%;
}

.container {
    padding-top: 100px;
}

.form-control {
    height: 60px;
    border-radius: 1rem;
}

.continue{
    border-radius: 100px;
}

.registration.btn{
    height: 60px;
    border-radius: 100px;
    background-color: rgb(236, 236, 241);
}

.password-forgot {
    text-decoration: none;
}

.extra-link {
    text-decoration: none;
    margin-left: auto;
    margin-right: auto;

}
.login-link{
    width: 100%;
}

</style>

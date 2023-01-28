<template>
 <body class="text-center">
  <form class="form-signin">
    <img class="mb-4" :src="require('@/assets/imgs/icon_512.png')" alt="" width="100" height="100">
    <h1 class="h3 mb-3 font-weight-normal">Зарегистрируйся на <b>FEA</b> </h1>
    <label for="inputEmail" class="sr-only">Электронная почта</label>
    <input @input="login = $event.target.value" v-bind:value="login" type="email" id="inputEmail" class="custom-form form-control" placeholder="Электронная почта" required="" autofocus="">
    <label for="inputPassword" class="sr-only">Пароль</label>
    <input @input="password = $event.target.value" v-bind:value="password" type="password" id="inputPassword" class="custom-form form-control" placeholder="Пароль" required="">
    <button class="btn btn-lg btn-primary btn-block" @click="$router.push('/auth')">Зарегистрироваться</button>
    <svg class="cust-svg-icon">
        <use :xlink:href="require('@/assets/imgs/sprite.svg') + `#reddit`"></use>
    </svg>
    <svg class="cust-svg-icon">
        <use :xlink:href="require('@/assets/imgs/sprite.svg') + `#vk`"></use>
    </svg>
    <svg class="cust-svg-icon">
        <use :xlink:href="require('@/assets/imgs/sprite.svg') + `#pinterest`"></use>
    </svg>
  </form>
</body>
</template>

<script>
export default {
    data() {
        return {
            login: '',
            password: '',
        }
    },

}
</script>

<style scoped>
/*@import '@/assets/styles/forms.css';*/
/* My styles for svg, so proud of myself */
.cust-svg-icon {
    fill: #0080ff;
    height: 2em;
    width: 2em;
    transform: scale(1.5);
    margin-top: 2em;
    margin-left: 1em;
    margin-right: 1em;

}

.cust-svg-icon:hover {
    fill: var(--body-color);
    height: 2em;
    width: 2em;
    transform: scale(1.6);
    margin-top: 2em;
    margin-left: 1em;
    margin-right: 1em;
}

/* My custim styles for formsauth and reg forms */
.custom-form {
    color: var(--form-color);
    background-color: var(--form-bg-color);
}

[type=email]:focus, [type=password]:focus{
    color: var(--form-color);
    background-color: var(--form-bg-color);
}

/* Other */
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: var(--body-back-color);
  color: var(--body-color);
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
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

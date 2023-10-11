<template>
    <modal-account-layout>
        <div class="modal-content">
            <button
                class="modal-close"
                aria-label="modal__account-btn-close"
                @click="closeAccountModal"
            >
                <svg>
                    <use xlink:href="@/assets/img/sprite.svg#close-btn"></use>
                </svg>
            </button>
            <h2 class="modal-title">Вход</h2>
            <p class="modal-description">Получите доступ к эксклюзивным преимуществам учетной записи DressImpress</p>
            <form class="modal-form" id="accountForm" @submit.prevent="Login">
                <input v-model="form.email" name="email" type="email" placeholder="Email" autocomplete="email">
                <input v-model="form.password" name="password" type="password" placeholder="Пароль">
                <div class="modal-form-btn">
                    <button type="submit">Войти</button>
                    <p class="modal-form-description">
                        Нет учетной записи? <a href="#" @click="openRegistrationModal">Зарегистрироваться</a>
                    </p>
                </div>
            </form>
        </div>
    </modal-account-layout>
</template>

<script>    
    import { mapActions, mapState } from 'pinia'

    import useAccountStore from '@/stores/account'

    import ModalAccountLayout from '@/layouts/ModalAccountLayout.vue'

    export default {
        name: 'ModalAccountPage',

        components: { ModalAccountLayout },

        computed: {
            ...mapState(useAccountStore, ['accounts']),
        },

        methods: {
            ...mapActions(useAccountStore, ['loginAuth']),

            async Login() {
                await this.loginAuth(this.form);

                this.$router.push('/account');

                const modalAccount = document.querySelector('.modal__account');
                modalAccount.classList.remove('active');
            },

            closeAccountModal() {
                const modal = document.querySelector('.modal__account');
                modal.classList.remove('active');
            },

            openRegistrationModal() {
                const modalAccount = document.querySelector('.modal__account');
                modalAccount.classList.remove('active');

                const modalRegistration = document.querySelector('.modal__registration');
                modalRegistration.classList.add('active');
            },
        },

        data() {
            return {
                form: {
                    email: '',
                    password: ''
                }
            }
        },
    }

</script>


<style>
</style>
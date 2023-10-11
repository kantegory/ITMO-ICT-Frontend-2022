<template>
    <modal-registration-layout>
        <div class="modal-content">
            <button
                class="modal-close"
                aria-label="modal__registration-btn-close"
                @click="closeRegistrationModal"
            >
                <svg>
                    <use xlink:href="@/assets/img/sprite.svg#close-btn"></use>
                </svg>
            </button>
            <h2 class="modal-title">Регистрация</h2>
            <p class="modal-description">Получите доступ к эксклюзивным преимуществам учетной записи DressImpress</p>
            <form class="modal-form" @submit.prevent="SignUp">
                <input v-model="form.name" name="name" type="text" placeholder="Имя" autocomplete="name">
                <input v-model="form.email" name="email" type="email" placeholder="Email" autocomplete="email">
                <input v-model="form.phone" name="phone" type="phone" placeholder="Телефон" autocomplete="phone">
                <input v-model="form.password" name="password" type="password" placeholder="Пароль">
                <div class="modal-form-btn">
                    <button type="submit">Создать аккаунт</button>
                    <p class="modal-form-description">
                        Есть учетной записи? <a href="#" @click="openAccountModal">Выполнить вход</a>
                    </p>
                </div>
            </form>
        </div>
    </modal-registration-layout>
</template>

<script>
    import { mapActions, mapState } from 'pinia'

    import useAccountStore from '@/stores/account'

    import ModalRegistrationLayout from '@/layouts/ModalRegistrationLayout.vue'

    export default {
        name: 'ModalRegistrationPage',

        components: { ModalRegistrationLayout },

        computed: {
            ...mapState(useAccountStore, ['accounts']),
        },

        methods: {
            ...mapActions(useAccountStore, ['signupAuth']),

            async SignUp() {
                await this.signupAuth(this.form);

                this.$router.push('/account');

                const modalRegistration = document.querySelector('.modal__registration');
                modalRegistration.classList.remove('active');
            },

            closeRegistrationModal() {
                const modal = document.querySelector('.modal__registration');
                modal.classList.remove('active');
            },

            openAccountModal() {
                const modalRegistration = document.querySelector('.modal__registration');
                modalRegistration.classList.remove('active');

                const modalAccount = document.querySelector('.modal__account');
                modalAccount.classList.add('active');
            },
        },

        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    phone: '',
                    password: ''
                }
            }
        },
    }

</script>


<style>
</style>
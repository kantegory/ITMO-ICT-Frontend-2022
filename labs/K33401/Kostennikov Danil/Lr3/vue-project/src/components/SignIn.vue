<template>
    <div>
        <button class="btn btn-primary" @click="showModal = true">SignIn</button>
        <div class="modal" tabindex="-1" role="dialog" v-if="showModal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <form @submit.prevent="signIn">
                        <div class="modal-header">
                            <h5 class="modal-title">Вход в систему</h5>
                            <button
                                type="button"
                                class="btn-close"
                                @click="showModal = false"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <div class="form-floating mb-3">
                                <input
                                    type="email"
                                    class="form-control"
                                    id="emailIn"
                                    placeholder="Enter email"
                                    name="email"
                                    v-model="email"
                                    required
                                />
                                <label for="emailIn">Email</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input
                                    type="password"
                                    class="form-control"
                                    id="pwdIn"
                                    placeholder="Enter password"
                                    name="password"
                                    v-model="password"
                                    required
                                />
                                <label for="pwdIn">Password</label>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" @click="showModal = false">Закрыть</button>
                            <button type="submit" class="btn btn-primary">Войти</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import usersStore from "@/stores/user";
export default {
    data() {
        return {
            showModal: false,
            email: "",
            password: "",
        };
    },
    methods: {
        ...mapActions(usersStore, ["login"]),
        async signIn() {
            // здесь вы можете выполнить вашу логику входа в систему
            console.log("Email:", this.email);
            console.log("Password:", this.password);

            try {
                const response = await this.login({
                    email: this.email,
                    password: this.password,
                });
                console.log(response);
            } catch (error) {
                alert("wrong username or password");
            }
            // после того, как пользователь вошел в систему, закройте модальное окно
            this.showModal = false;
        },
    },
};
</script>

<style>
.modal {
    display: block;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
}
.modal-dialog {
    max-width: 500px;
}
</style>

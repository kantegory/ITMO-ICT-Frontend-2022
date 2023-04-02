<template>
    <div>
        <button class="btn btn-primary" @click="showModal = true">SignUp</button>
        <div class="modal" tabindex="-1" role="dialog" v-if="showModal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <form @submit.prevent="signUp">
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
                                    id="emailUp"
                                    placeholder="Enter email"
                                    name="email"
                                    v-model="email"
                                    required
                                />
                                <label for="emailIn">Email</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input
                                    type="firstName"
                                    class="form-control"
                                    id="firstName"
                                    placeholder="Enter first name"
                                    name="firstName"
                                    v-model="firstName"
                                    required
                                />
                                <label for="firstName">First Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input
                                    type="lastName"
                                    class="form-control"
                                    id="lastName"
                                    placeholder="Enter last name"
                                    name="lastName"
                                    v-model="lastName"
                                    required
                                />
                                <label for="lastName">Last Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input
                                    type="password"
                                    class="form-control"
                                    id="pwdUp"
                                    placeholder="Enter password"
                                    name="password"
                                    v-model="password"
                                    required
                                />
                                <label for="pwdUp">Password</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input
                                    type="password"
                                    class="form-control"
                                    id="confPwd"
                                    placeholder="Confirm passord"
                                    name="password"
                                    v-model="confirm"
                                    required
                                />
                                <label for="confPwd">Confirm passord</label>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" @click="showModal = false">Закрыть</button>
                            <button type="submit" class="btn btn-primary">Зарегистрироваться</button>
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
            firstName: "",
            lastName: "",
            password: "",
            confirm: "",
        };
    },
    methods: {
        ...mapActions(usersStore, ["register"]),
        async signUp() {
            // здесь вы можете выполнить вашу логику входа в систему
            if (this.confirm != this.password) {
                alert("password and confirmed password are not the same");
            }
            try {
                const response = await this.register({
                    email: this.email,
                    password: this.password,
                    lastName: this.lastName,
                    firstName: this.firstName,
                });
                console.log(response);
            } catch (error) {
                alert("user already exist");
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
}
.modal-dialog {
    max-width: 500px;
}
</style>

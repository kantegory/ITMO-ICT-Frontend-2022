import { defineStore } from "pinia";
import { userApi } from "@/api";

const usersStore = defineStore("users", {
    state: () => ({
        email: null,
        firstName: null,
        lastName: null,
        accessToken: null,
        id: null,
    }),

    actions: {
        async register(user) {
            console.log("in store", user);
            const response = await userApi.register(user);
            console.log("in store response", response);
            this.email = response.data.user.email;
            this.accessToken = response.data.accessToken;
            this.firstName = response.data.user.firstName;
            this.lastName = response.data.user.lastName;
            this.id = response.data.user.id;
            console.log(this.email);
            console.log(response.data);
            return response.data;
        },

        async login(credentials) {
            console.log("user store login");
            const response = await userApi.login(credentials);
            this.user = {
                email: credentials.email,
                password: credentials.password,
            };
            //this.token = response.data.auth_token;
            console.log(response);
            this.accessToken = response.data.accessToken;
            this.email = response.data.user.email;
            this.firstName = response.data.user.firstName;
            this.lastName = response.data.user.lastName;
            this.id = response.data.user.id;
            console.log(this.email);
            console.log(this.accessToken);
            console.log(this.firstName);
            console.log(this.lastName);
            console.log(this.id);
            return response;
        },

        async logout() {
            if (this.accessToken) {
                this.email = null;
                this.firstName = null;
                this.lastName = null;
                this.accessToken = null;
                this.id = null;
                return true;
            }
        },
    },
});

export default usersStore;

<template>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="main">MeetUp</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="calendar.html"> Calendar </a>
                    </li>
                </ul>
            </div>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul v-if="!email" class="navbar-nav ms-3">
                    <li class="nav-item">
                        <sign-in :show-modal="showModal" @close-modal="showModal = false"></sign-in>
                    </li>
                </ul>
                <ul v-if="!email" class="navbar-nav ms-3">
                    <li class="nav-item">
                        <sign-up :show-modal="showModal" @close-modal="showModal = false"></sign-up>
                    </li>
                </ul>
                <ul v-if="email" class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/profile">Profile </router-link>
                    </li>
                </ul>
                <li v-if="email" class="nav-item profile_link">
                    <router-link to="/main">
                        <button class="btn btn-primary" @click="logout">LogOut</button>
                    </router-link>
                </li>
            </div>
        </div>
    </nav>
</template>

<script>
import SignIn from "@/components/SignIn.vue";
import { mapActions, mapState } from "pinia";
import SignUp from "@/components/SignUp.vue";
import usersStore from "@/stores/user";

export default {
    name: "Navbar",
    components: {
        SignIn,
        SignUp,
    },
    computed: {
        ...mapState(usersStore, ["accessToken", "email"]),
    },

    data() {
        return {
            showModal: false,
        };
    },
    methods: {
        openModal() {
            this.showModal = true;
        },
        ...mapActions(usersStore, ["logout"]),
    },
    mounted() {
        console.log("navbar access token", this.accessToken);
        console.log("navbar email", this.email);
    },
};
</script>

<style scoped>
nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
}
</style>

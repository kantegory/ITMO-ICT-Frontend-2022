<template>
    <header
        class="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-4"
    >
        <a href="/" class="d-flex align-items-center col-md-auto mb-2 mb-md-0 text-dark text-decoration-none">
            <img src="img/logo.svg" width="288" height="33" alt="TimofeevInvest" class="logo" />
        </a>
        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
                <a href="/" class="nav-link active px-2 link-dark text-decoration-underline"
                    ><router-link to="/">Home</router-link></a
                >
            </li>
            <li>
                <a href="#" class="nav-link px-2 link-dark" data-bs-toggle="modal" data-bs-target="#searchModal">
                    <i class="bi bi-search-heart"></i>
                </a>
            </li>
            <li>
                <a href="/profile" class="nav-link px-2 link-dark"> <i class="bi bi-wallet2"></i> </a>
            </li>
            <li v-if="!user">
                <a href="#" class="nav-link px-2 link-dark"
                    ><router-link to="/login"><i class="bi bi-person-circle"></i></router-link>
                </a>
            </li>
        </ul>
    </header>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {
            user: null,
        };
    },
    mounted() {
        const token = localStorage.getItem("token");
        if (token) {
            console.log(token);
        }
    },
};
</script>

<template>
    <div class="container">
        <nav-bar></nav-bar>
        <hr class="opacity-100 m-0" />
        <h1 class="text-center mt-3">Sign Up</h1>

        <form class="container d-flex justify-content-center">
            <div class="col-4">
                <div class="form-group">
                    <label for="emailInput">Username</label>
                    <input class="form-control" id="emailInput" aria-describedby="emailHelp" />
                </div>
                <div class="form-group">
                    <label for="emailInput">Email address</label>
                    <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" />
                </div>
                <div class="form-group">
                    <label for="passwordInput">Password</label>
                    <input type="password" class="form-control" id="passwordInput" />
                </div>
                <div class="form-group">
                    <label for="confirmPasswordInput">Confirm Password</label>
                    <input type="password" class="form-control" id="confirmPasswordInput" />
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <button type="submit" class="btn btn-primary">Sign Up</button>
                    <div class="border-right pr-3 mr-3"></div>
                    <button type="button" class="btn btn-secondary">
                      <router-link class="text-white" to="/">Cancel</router-link></button>
                </div>
            </div>
        </form>

        <hr class="opacity-100" />
        <page-footer />
    </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import PageFooter from "@/components/PageFooter.vue";

export default {
    components: { NavBar, PageFooter },
};
</script>

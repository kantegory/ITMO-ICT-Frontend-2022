<template>
    <body class="container">
        <nav-bar />
        <hr class="opacity-100 m-0" />

        <h1 class="text-center m-2">Find any listed currency:</h1>

        <div class="container d-flex justify-content-center col-8">
            <div class="mb-2 input-group">
                <input type="text" class="form-control" placeholder="USDT" />
                <button class="btn btn-outline-primary" type="button" id="button-addon2">Lookup</button>
            </div>
        </div>

        <hr class="opacity-100 m-0" />
        <page-footer />
    </body>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import PageFooter from "@/components/PageFooter.vue";

export default {
    components: { NavBar, PageFooter },
    name: "SearchPage",
};
</script>

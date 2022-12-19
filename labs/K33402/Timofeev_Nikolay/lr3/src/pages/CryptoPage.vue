<template>
    <body class="container">
        <nav-bar></nav-bar>
        <hr class="opacity-100 m-0" />
        <div class="container d-flex justify-content-between align-items-start py-3 align-baseline">
            <h1 class="lead">
                {{ $route.params.currency }} <span class="badge bg-primary rounded-pill">{{ price }}$</span>
            </h1>
            <span>
                <span v-for="t in tags" :key="t" class="badge bg-info rounded-pill">{{ t.name }}</span>
            </span>
            <span>
                <button
                    class="button badge bg-success rounded-pill"
                    data-bs-toggle="modal"
                    data-bs-target="#buyCryptoModal"
                >
                    <i class="bi bi-currency-dollar"></i>Buy now
                </button>
            </span>
        </div>
        <hr class="opacity-100 m-0" />

        <section id="mainChart" class="container">
            <canvas id="btcChart"></canvas>
        </section>

        <hr class="opacity-100 m-0" />
        <section>
            <p class="lead py-5">
                {{ description }}
            </p>
        </section>
        <hr class="opacity-100 m-0" />
        <page-footer></page-footer>
    </body>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import PageFooter from "@/components/PageFooter.vue";

export default {
    components: { NavBar, PageFooter },
    name: "CryptoPage",
    data() {
        return {
            name: `BTCUSD`,
            price: `19842.55`,
            description: `Bitcoin (BTC) is a cryptocurrency, a virtual currency designed to act as money and a form of payment
                outside the control of any one person, group, or entity, and thus removing the need for third-party
                involvement in financial transactions. It is rewarded to blockchain miners for the work done to verify
                transactions and can be purchased on several exchanges.`,
            tags: [{ name: `Editor's choice` }, { name: `Hottest` }],
        };
    },
};
</script>

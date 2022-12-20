<template>
    <body class="container">
        <nav-bar></nav-bar>
        <hr class="opacity-100 m-0" />
        <div class="container d-flex justify-content-between align-items-start py-3 align-baseline">
            <h1 class="lead">
                {{ this.name }} <span class="badge bg-primary rounded-pill">{{ price }}$</span>
            </h1>
            <span>
                <span class="badge bg-info rounded-pill">{{ label }}</span>
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

        <section>
            <p class="text-center lead py-5">Deals</p>
            <span v-if="deals.length">
                <ul class="list-group list-group-flush">
                    <li
                        v-for="deal in deals"
                        :key="deal"
                        class="mx-auto list-group-item d-flex justify-content-between col-6"
                    >
                        <span>{{ deal.seller_username }} selling {{ deal.count }}</span>
                        <button @click="javascript.void()" class="text-white badge bg-success rounded-pill">
                            Buy for {{ deal.price }}$
                        </button>
                    </li>
                </ul>
            </span>
            <span v-else>
                <p class="lead text-center">Seems that no one are selling {{ name }} now...</p>
            </span>
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
            err: null,
            name: ``,
            price: ``,
            description: ``,
            label: ``,
            deals: [],
        };
    },
    methods: {
        async getAssetInfo() {
            this.axios
                .get(`http://127.0.0.1:8088/market/${this.$route.params.id}/`)
                .then((res) => {
                    this.name = res.data.name;
                    this.description = res.data.description;
                    this.label = res.data.label;
                    this.price = res.data.last_price;
                })
                .catch(() => {
                    this.err = "Currency not listed in our market";
                    this.$router.push("/404");
                });
        },
        async getAllDeals() {
            this.axios.get(`http://127.0.0.1:8088/market-requests/?entry=${this.$route.params.id}`).then((res) => {
                this.deals = res.data;
            });
        },
    },
    async mounted() {
        await this.getAssetInfo();
        await this.getAllDeals();
    },
};
</script>

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
            <crypto-graph v-if="name" :data="graphData" />
        </section>

        <hr class="opacity-100 m-0" />
        <section>
            <p class="lead py-5">
                {{ description }}
            </p>
        </section>

        <hr class="opacity-100 m-0" />

        <crypto-deals :name="name" :deals="deals" />

        <hr class="opacity-100 m-0" />
        <page-footer></page-footer>
    </body>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import PageFooter from "@/components/PageFooter.vue";
import CryptoGraph from "@/components/CryptoGraph.vue";
import CryptoDeals from "@/components/CryptoDeals.vue";

export default {
    components: { NavBar, PageFooter, CryptoGraph, CryptoDeals },
    name: "CryptoPage",
    data() {
        return {
            err: null,
            name: ``,
            price: ``,
            description: ``,
            label: ``,
            deals: [],
            graphData: [],
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

                    // fields for bar chart
                    const labels = [];
                    const datasets = [];

                    for (const obj of res.data.max_prices_last_month) {
                        labels.push(obj.date);
                        datasets.push(obj.max_total_price);
                    }

                    this.graphData = {
                        labels,
                        datasets: [
                            {
                                label: this.name,
                                backgroundColor: "#f87979",
                                data: datasets,
                            },
                        ],
                    };
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

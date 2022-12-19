<template>
    <div class="container">
        <nav-bar></nav-bar>
        <body class="container">
            <hr class="opacity-100 m-0" />

            <join-section></join-section>

            <hr class="opacity-100 m-0" />
            <section>
                <h2 class="text-center lead my-5">
                    The global cryptocurrency market cap today is <span class="text-success">$949.09B</span>, a
                    <span class="text-success">+0.14%</span> change from 24 hours ago.
                </h2>
            </section>

            <hr class="opacity-100 m-0" />
            <section class="px-4 mt-0 py-2 my-5 text-center">
                <h2 class="display-4 fw-bold">Trending positions:</h2>
                <div class="row d-flex justify-content-around">
                    <crypto-card :title="'Bitcoin'" :price="'19821.5'" :description="'Digital gold'"></crypto-card>
                    <crypto-card
                        :title="'Ethereum'"
                        :price="'1803.22'"
                        :description="'The future of POS'"
                    ></crypto-card>
                    <crypto-card :title="'Tesla'" :price="'142.53'" :description="'High potential'"></crypto-card>
                    <crypto-card
                        :title="'USDT'"
                        :price="'1.01'"
                        :description="'1USDT=1$, stable as hell'"
                    ></crypto-card>
                </div>
            </section>

            <hr class="opacity-100 m-0" />
            <section class="px-4 mt-0 py-2 my-5 text-center">
                <h2 class="display-4 fw-bold">Worldwide currencies:</h2>
                <div class="row d-flex justify-content-around">
                    <crypto-card :title="'Ruble'" :price="'0.018'"></crypto-card>
                    <crypto-card :title="'Lirasi'" :price="'0.054'"></crypto-card>
                    <crypto-card :title="'Lari'" :price="'0.36'"></crypto-card>
                    <crypto-card :title="'Euro'" :price="'0.94'"></crypto-card>
                </div>
            </section>
            <hr class="opacity-100 m-0" />
            <page-footer></page-footer>
        </body>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import PageFooter from "@/components/PageFooter.vue";
import CryptoCard from "@/components/CryptoCard.vue";
import JoinSection from "@/components/JoinSection.vue";
export default {
    components: { NavBar, PageFooter, CryptoCard, JoinSection },
};
</script>

<style></style>

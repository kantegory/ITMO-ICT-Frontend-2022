<template>
    <div>
        <header-block-portfolio/>
        <body-block-portfolio/>
        <br>
        <chart/>
    </div>
</template>

<script>
import HeaderBlockPortfolio from "@/components/Portfolio/header.vue";
import BodyBlockPortfolio from "@/components/Portfolio/body.vue";
import {Chart} from "vue-tradingview-widgets";
export default {
    name: "Portfolio",
    components: {Chart, BodyBlockPortfolio, HeaderBlockPortfolio}
}
</script>

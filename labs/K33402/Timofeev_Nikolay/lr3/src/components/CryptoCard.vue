<template>
    <div class="card border-success mb-3" style="max-width: 18rem">
        <div class="card-header bg-transparent border-success">
            <router-link :to="'market/' + title.toLowerCase()">{{ title }}</router-link>
        </div>
        <div class="card-body text-success">
            <h5 class="card-title">{{ price }}$</h5>
            <canvas id="lariChart"></canvas>
        </div>
        <div v-if="description" class="card-footer bg-transparent border-success">{{ description }}</div>
    </div>
</template>

<script>
export default {
    props: ["title", "price", "description"],
    name: "CryptoCard",
    computed: {
        link() {
            return "/market/{{this.$router.title}}";
        },
    },
};
</script>

<style></style>

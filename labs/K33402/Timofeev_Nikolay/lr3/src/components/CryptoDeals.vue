<template>
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
</template>

<script>
export default {
    name: "CryptoDeals",
    props: ["deals", "name"],
};
</script>

<style></style>

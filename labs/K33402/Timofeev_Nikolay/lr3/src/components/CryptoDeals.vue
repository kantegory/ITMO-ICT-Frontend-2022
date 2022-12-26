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
                    <span>@{{ deal.seller }} selling {{ deal.count }}</span>
                    <button
                        @click="cancelDeal(deal.id)"
                        v-if="deal.my_request"
                        class="text-white badge bg-danger rounded-pill"
                    >
                        Cancel
                    </button>
                    <button v-else @click="javascript.void()" class="text-white badge bg-success rounded-pill">
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
    methods: {
        async cancelDeal(deal_id) {
            this.axios.delete(`http://localhost:8088/market-requests/${deal_id}/`, {
                headers: {
                    Authorization: `Token ` + localStorage.getItem("token"),
                },
            });
            this.toast.info("Canceled ");
        },
    },
};
</script>

<style></style>

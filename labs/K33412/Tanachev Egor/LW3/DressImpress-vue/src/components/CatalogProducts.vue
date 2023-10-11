<template>
    <img class="section__catalog-card-img" :src="image" :alt="title">
    <h3 class="section__catalog-card-title">{{ title }}</h3>
    <p class="section__catalog-card-price">{{ price }}</p>
    <button
        class="section__catalog-card-btn"
        :data-btn-id="id"
        @click="addFavorite"
    >
        Нравится
    </button>
</template>
  
<script>
    export default {
        name: 'CatalogProducts',

        props: {
            id: {
                type: Number,
                required: false
            },
            title: {
                type: String,
                required: false
            },
            price: {
                type: String,
                required: false
            },
            image: {
                type: String,
                required: false
            },
            category: {
                type: String,
                required: false
            }
        },

        emits: ['add-favorite'],

        methods: {
            addFavorite() {
                const storageData = localStorage.getItem('pinia_accounts');
                const storageObject = JSON.parse(storageData);
                const userId = storageObject.accounts.user.id;

                const data = {
                    cardId: this.id,
                    title: this.title,
                    price: this.price,
                    image: this.image,
                    userId: userId,
                };
                
                this.$emit('add-favorite', data);
            }
        }
  };
</script>
  
<style>
</style>  
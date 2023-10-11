<template>
    <img class="modal__favorites-img" :src="image" :alt="title">
    <div class="modal__favorites-info">
        <h3 class="modal__favorites-title">{{ title }}</h3>
        <p class="modal__favorites-price">{{ price }}</p>
        <button
            class="modal__favorites-btn"
            @click="deleteFavorite"
        >
            Удалить
        </button>
    </div>
</template>
  
<script>
    export default {
        name: 'ModalFavorites',

        emits: ['delete-favorite'],

        props: {
            id: {
                type: Number,
                required: false
            },
            userId: {
                type: Number,
                required: false
            },
            cardId: {
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
            }
        },

        methods: {
            deleteFavorite() {
                this.$emit('delete-favorite', this.id);
                this.isVisible = false;
            }
        }
  };
</script>
  
<style>
</style>
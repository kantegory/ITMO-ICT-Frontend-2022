<template>
    <modal-favorites-layout>
        <div class="modal-content">
            <button
                class="modal-close"
                aria-label="modal__favorites-btn-close"
                @click="closeFavoritesModal"
            >
                <svg>
                    <use xlink:href="@/assets/img/sprite.svg#close-btn"></use>
                </svg>
            </button>
            <h2 class="modal-title">Избранные</h2>
            <p class="modal-description">Здесь находятся товары, которые вам понравились. Вы можете заказать их у нас на сайте.</p>
            <div class="modal__favorites-cards" id="favorites-cards">
                <div
                    class="modal__favorites-card"
                        :data-card-id="favorite.id"
                        v-for="favorite in favorites"
                        :key="favorite.id"
                    >
                    <modal-favorites
                        :id="favorite.id"
                        :userId="favorite.userId"
                        :cardId="favorite.cardId"
                        :title="favorite.title"
                        :price="favorite.price"
                        :image="favorite.image"
                        @delete-favorite="deleteFavorite"
                    >
                    </modal-favorites>
                </div>
                <p class="modal__favorites-error">Вы не авторизованы</p>
            </div>
        </div>
    </modal-favorites-layout>
</template>

<script>
    import { mapActions, mapState } from 'pinia'

    import useFavoritesStore from '@/stores/favorites'

    import ModalFavoritesLayout from '@/layouts/ModalFavoritesLayout.vue'
    import ModalFavorites from '@/components/ModalFavorites.vue'

    export default {
        name: 'ModalFavoritesPage',

        components: { ModalFavoritesLayout, ModalFavorites },

        computed: {
            ...mapState(useFavoritesStore, ['favorites']),
        },

        methods: {
            closeFavoritesModal() {
                const modal = document.querySelector('.modal__favorites');
                modal.classList.remove('active');
            },

            ...mapActions(useFavoritesStore, ['loadFavorites', 'DeleteFavorite']),

            async LoadFavorites() {
                const piniaAccountsString = localStorage.pinia_accounts;
                const piniaAccounts = JSON.parse(piniaAccountsString);

                const userId = piniaAccounts.accounts.user.id

                const response = await this.loadFavorites(userId)

                if (response.status === 200) {
                    document.querySelector('.modal__favorites-error').classList.add('hidden');
                }
            },

            async deleteFavorite(id) {
                const storageData = localStorage.getItem('pinia_accounts');
                const storageObject = JSON.parse(storageData);
                const token = storageObject.accounts.accessToken;

                const response = await this.DeleteFavorite(id, token)

                if (response.status === 200) {
                    this.LoadFavorites()
                }
            },
        },

        watch: {
            favorites: 'LoadFavorites',
        },

        mounted() {
            this.LoadFavorites()
        }
    }

</script>


<style>
</style>
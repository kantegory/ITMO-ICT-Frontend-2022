<template>
    <catalog-layout>
        <div class="container">
            <div class="section__catalog-title">
                <p class="section__catalog-name">{{ selectedCategory }}</p>
                <p class="section__catalog-value">{{ products.length }} {{ productsCount }}</p>
            </div>
            <div class="section__catalog-settings">
                <div class="section__catalog-filter">
                    <div class="section__catalog-size">
                        <a href="#" class="section__catalog-size-btn">
                            Размер
                        </a>
                        <div class="section__catalog-size-bulet">
                            <span>
                                <input type="checkbox" name="" id="size-bulet1">
                                <label for="size-bulet1">S</label>
                            </span>
                            <span>
                                <input type="checkbox" name="" id="size-bulet2">
                                <label for="size-bulet2">M</label>
                            </span>
                            <span>
                                <input type="checkbox" name="" id="size-bulet3">
                                <label for="size-bulet3">L</label>
                            </span>
                            <span>
                                <input type="checkbox" name="" id="size-bulet4">
                                <label for="size-bulet4">XL</label>
                            </span>
                        </div>
                    </div>
                    <div class="section__catalog-sort">
                        <a href="#" class="section__catalog-sort-btn">
                            Сортировать по
                        </a>
                        <div class="section__catalog-sort-bulet">
                            <input type="radio" name="sort-bulet" id="sort-bulet1" checked>
                            <label for="sort-bulet1" class="sort-bulet1">По умолчанию</label>
                            <input type="radio" name="sort-bulet" id="sort-bulet2">
                            <label for="sort-bulet2" class="sort-bulet2">Цене</label>
                            <input type="radio" name="sort-bulet" id="sort-bulet3">
                            <label for="sort-bulet3" class="sort-bulet3">Дате</label>
                            <input type="radio" name="sort-bulet" id="sort-bulet4">
                            <label for="sort-bulet4" class="sort-bulet4">Популярности</label>
                        </div>
                    </div>
                </div>
                <form class="section__catalog-find" role="search">
                    <input name="search" placeholder="Поиск" type="search" aria-label="Search">
                    <button type="submit"></button>
                </form>
            </div>
            <div class="section__catalog-cards" id="catalog">
                <div
                    class="section__catalog-card"
                        v-for="product in products"
                        :key="product.id"
                    >
                    <catalog-products
                        :id="product.id"
                        :title="product.title"
                        :price="product.price"
                        :image="product.image"
                        :category="product.category"
                        @add-favorite="addFavorite"
                    >
                    </catalog-products>
                </div>
            </div>
        </div>
    </catalog-layout>
</template>

<script>
    import { mapActions, mapState } from 'pinia'

    import useProductsStore from '@/stores/products'
    import useFavoritesStore from '@/stores/favorites'
    import { useCategoryStore } from '@/stores/category'

    import CatalogLayout from '@/layouts/CatalogLayout.vue'
    import CatalogProducts from '@/components/CatalogProducts.vue'

    export default {
        name: 'CatalogPage',

        components: { CatalogLayout, CatalogProducts },

        computed: {
            ...mapState(useProductsStore, ['products']),

            selectedCategory() {
                return useCategoryStore().selectedCategory
            },

            productsCount() {
                const count = this.products.length;
                if (count === 1) {
                    return 'товар';
                } else if (count > 1 && count < 5) {
                    return 'товара';
                } else {
                    return 'товаров';
                }
            },
        },

        methods: {
            ...mapActions(useProductsStore, ['loadProducts', 'loadProductsCategory']),

            async LoadProducts() {
                if (useCategoryStore().selectedCategory === 'Все товары') {
                    this.loadProducts()
                } else {
                    this.loadProductsCategory(useCategoryStore().selectedCategory)
                }
            },

            ...mapActions(useFavoritesStore, ['AddFavorite']),

            async addFavorite(data) {
                const storageData = localStorage.getItem('pinia_accounts');
                const storageObject = JSON.parse(storageData);
                const token = storageObject.accounts.accessToken;

                const response = await this.AddFavorite(data, token)

                if (response.status === 200) {
                    this.LoadFavorites()
                }
            },
        },

        watch: {
            selectedCategory: 'LoadProducts',
        },

        mounted() {
            if (useCategoryStore().selectedCategory === 'Все товары') {
                this.loadProducts()
            } else {
                this.loadProductsCategory(useCategoryStore().selectedCategory)
            }
        }
    }

</script>


<style>
    .header-bottom {
        display: block;
    }
</style>
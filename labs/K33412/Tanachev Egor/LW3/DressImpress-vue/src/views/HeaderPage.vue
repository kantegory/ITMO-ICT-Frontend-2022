<template>
    <header-layout>
      <!-- header top -->
      <div class="header-top">
        <div class="container">
          <a href="/" class="header__logo" aria-label="header__logo">
            <svg aria-label="svg-header__logo">
              <use xlink:href="@/assets/img/sprite.svg#logo-header"></use>
            </svg>
          </a>
          <div class="header__menu">
            <a href="/" class="header__menu-link">Главная</a>
            <a href="/catalog" class="header__menu-link">Каталог</a>
            <a href="" class="header__menu-link">Доставка</a>
            <a href="" class="header__menu-link">Контакты</a>
          </div>
          <div class="header__management">
            <a
              href="#"
              class="header__management-account"
              aria-label="header__management-account"
              @click="openAccountModal"
            >
              <svg aria-label="svg-btn-account">
                <use xlink:href="@/assets/img/sprite.svg#account"></use>
              </svg>
            </a>
            <a
              href="/catalog"
              class="header__management-logout"
              aria-label="header__management-logout"
              @click="logout"
            >
              <svg>
                  <use xlink:href="@/assets/img/sprite.svg#logout"></use>
              </svg>                     
            </a>
            <a
              href="#"
              class="header__management-favorite"
              aria-label="header__management-favorite"
              @click="openFavoritesModal"
            >
              <svg aria-label="svg-btn-favorite">
                <use xlink:href="@/assets/img/sprite.svg#favorite"></use>
              </svg>
            </a>
            <a href="#" class="header__management-cart" aria-label="header__management-cart">
              <svg aria-label="svg-btn-cart">
                <use xlink:href="@/assets/img/sprite.svg#cart"></use>
              </svg>
            </a>
            <a href="#" class="header__management-menu" aria-label="header__management-menu">
              <div class="header__management-menu-st1"></div>
              <div class="header__management-menu-st2"></div>
              <div class="header__management-menu-st3"></div>
            </a>
          </div>
        </div>
      </div>
      <!-- header bottom -->
      <div class="header-bottom">
        <div class="container">
          <div class="header__categories">
            <a
              href="#"
              class="header__categories-type"
              @click="selectCategory('Все товары')"
            >
              Все товары
            </a>
            <a
              href="#"
              class="header__categories-type"
              @click="selectCategory('Худи')"
            >
              Худи
            </a>
            <a
              href="#"
              class="header__categories-type"
              @click="selectCategory('Рубашки')"
            >
              Рубашки
            </a>
            <a
              href="#"
              class="header__categories-type"
              @click="selectCategory('Штаны')"
            >
              Штаны
            </a>
            <a
              href="#"
              class="header__categories-type"
              @click="selectCategory('Пиджаки')"
            >
              Пиджаки
            </a>
            <a
              href="#"
              class="header__categories-type"
              @click="selectCategory('Обувь')"
            >
              Обувь
            </a>
            <a
              href="#"
              class="header__categories-type"
              @click="selectCategory('Аксессуары')"
            >
              Аксессуары
            </a>
          </div>
          <a href="#" class="header__categories-all">
            <svg>
              <use xlink:href="@/assets/img/sprite.svg#categories-all"></use>
            </svg>
            <span>
              Все категории
            </span>
          </a>
        </div>
      </div>
    </header-layout>
  </template>
  
  <script>
  import HeaderLayout from '@/layouts/HeaderLayout.vue'
  import { useCategoryStore } from '@/stores/category.js'

  // import { useModalFavoritesPage } from '@/views/HeaderPage.js'
  
  export default {
    name: 'HeaderPage',
  
    components: { HeaderLayout },
  
    methods: {
        selectCategory(category) {
            useCategoryStore().selectCategory(category)
        },

        async openAccountModal() {
            const storedData = localStorage.getItem('pinia_accounts');
            
            // Проверка наличие accessToken в localStorage
            if (storedData) {
              try {
                const userData = JSON.parse(storedData);
                if (userData.accounts.accessToken) {
                    window.location.href = '/account';
                }
              } catch (error) {
                console.error(error);
              }
            } else {
              const modal = document.querySelector('.modal__account');
              modal.classList.add('active');
            }
        },

        openFavoritesModal() {
            const modal = document.querySelector('.modal__favorites');
            modal.classList.add('active');

            // const modalFavoritesPage = useModalFavoritesPage()
            // modalFavoritesPage.LoadFavorites()
        },

        async logout(){
            // Очистить localStorage
            localStorage.clear();
        }
    },
  
    mounted() {
        useCategoryStore().loadSelectedCategory()
    },
  }
  </script>
  
  <style>
  </style>
  
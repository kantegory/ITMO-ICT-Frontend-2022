<template>
    <div class="section__accout-info1">
        <h4 class="section__accout-name">{{ user.name }}</h4>
        <p class="section__accout-phone">{{ user.phone }}</p>
    </div>
    <div class="section__accout-info2">
        <p class="section__accout-bonus">108 бонусов</p>
        <p class="section__accout-mail">{{ user.email }}</p>
    </div>
</template>
  
<script>
    export default {
        name: 'AccountInfo',
        data() {
            return {
                user: null,
            };
        },

        created() {
            // Считываем данные из localStorage
            const userData = localStorage.getItem('pinia_accounts');
            
            // Проверяем, что данные существуют и парсим их
            if (userData) {
                this.user = JSON.parse(userData).accounts.user;
            }
        },

    };
</script>
  
<style>
</style>  
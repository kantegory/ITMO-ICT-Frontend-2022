<template>
    <account-layout>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-5">
                    <h3 class="section__accout-title">Личный кабинет</h3>
                    <account-info></account-info>
                    <div class="section__accout-adress">
                        <h5 class="section__accout-adress-title">Адрес доставки:</h5>
                        <input type="text" placeholder="Добавить адрес доставки">
                    </div>
                    <div class="section__accout-pay">
                        <h5 class="section__accout-pay-title">Способ оплаты:</h5>
                        <input type="radio" name="accout-pay" id="accout-pay1">
                        <label for="accout-pay1" class="accout-pay1">Наличными</label>
                        <input type="radio" name="accout-pay" id="accout-pay2" checked>
                        <label for="accout-pay2" class="accout-pay2">Картой курьеру</label>
                        <input type="radio" name="accout-pay" id="accout-pay3">
                        <label for="accout-pay3" class="accout-pay3">Оплата онлайн</label>
                    </div>
                </div>
                <div class="col-12 col-md-7">
                    <YandexMap
                        :settings="settings"
                        :coordinates="[59.927288, 30.338353]"
                        :zoom="16"
                        map-type="map"
                    >
                    </YandexMap>
                </div>
            </div>
        </div>
    </account-layout>
</template>

<script>
    import AccountLayout from '@/layouts/AccountLayout.vue'
    import AccountInfo from '@/components/AccountInfo.vue'
    import YandexMap from 'vue-yandex-maps/docs/components/YandexMap.vue'


    export default {
        name: 'AccountPage',

        components: { AccountLayout, AccountInfo, YandexMap  },

        data() {
            return {
                settings: {
                    apiKey: "dfc2eaa1-34c7-42d9-8466-1b6478592b2d",
                    lang: "ru_RU",
                    coordorder: "latlong",
                    debug: false,
                    version: "2.1"
                }
            };
        }
    }


</script>


<style>
    .header-bottom, .header__management-account{
        display: none;
    }
    .header__management-logout{
        display: block;
    }

</style>
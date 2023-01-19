import {defineStore} from "pinia";
import {coinsAPI, usersAPI} from "@/api";

const useCoinsStore = defineStore('coins', {
    state: () => ({
        coins: []
    }),
    actions: {
        async loadCoins(search = '', sortName = '') {
            const sortSplit = sortName.split(' ');
            const response = await coinsAPI.getSelectedCoins(search, sortSplit[0], sortSplit[1]);
            this.coins = response.data;
            return response.data;
        },
        async getWalletById(idx) {
            const actual = await usersAPI.getUserById(idx);
            const {id, coins} = actual.data;
            return {id, coins};
        },
        async loadUserCoins() {
            const response = await coinsAPI.getCoins();
            this.coins = response.data;
            return response.data;
        },
        async loadSearchedCoins(search = '') {
            const response = await coinsAPI.getSelectedCoins(search, '', '');
            this.coins = response.data;
            return response.data;
        }
    }
})

export default useCoinsStore

class CoinsAPI {
    constructor(instance) {
        this.API = instance
    }

    getCoins = async () => {
        return this.API({
            url: `/coins`
        })
    }

    getSelectedCoins = async (search, sort, order = '') => {
        return this.API({
            url: `/coins?q=${search}&_sort=${sort}&_order=${order}`
        })
    }
}

export default CoinsAPI
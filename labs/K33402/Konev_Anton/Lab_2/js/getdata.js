let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=rub&order=market_cap_desc&per_page=25&page=1&sparkline=false'

let response = await fetch(url)
const currency = await response.json()

console.log(currency)


async function postData(url = 'http://localhost:3000/currency') {
    let response
    for (let i = 0; i < currency.length; i++) {
        response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(currency[i])
        })
    }
    return response.json()
}

postData()


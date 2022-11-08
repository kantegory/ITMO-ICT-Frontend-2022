let response = await fetch('http://localhost:3000/currency')
let currency = await response.json()
let chartCurrency = []
for (let i = 0; i < currency.length; i++) {
    chartCurrency.push(currency[i].id)
}

let chartData = []
for (let i = 0; i < chartCurrency.length; i++) {
    let url = `https://api.coingecko.com/api/v3/coins/${chartCurrency[i]}/market_chart?vs_currency=RUB&days=7&interval=daily`
    let res = await fetch(url)
    let curr = await res.json()
    let {prices} = curr
    chartData[i] = {
        'id': chartCurrency[i],
        'prices': prices
    }
}

for (let i = 0; i < chartData.length; i++) {
    for (let j = 0; j < chartData[i].prices.length-1; j++) {
        chartData[i].prices[j][0] = formatDate(chartData[i].prices[j][0])
    }
    chartData[i].prices.pop()
}

function formatDate(date) {
    let ruDate = new Date(date)
    let dd = ruDate.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = ruDate.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = ruDate.getFullYear();

    return dd + '.' + mm + '.' + yy;
}

console.log(chartData)

for (let i = 0; i < chartData.length; i++) {
    response = await fetch('http://localhost:3000/charts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(chartData[i])
    })
}



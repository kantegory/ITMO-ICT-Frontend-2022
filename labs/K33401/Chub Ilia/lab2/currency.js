if (!localStorage.accessToken) {
    document.location = 'login.html'
}

google.charts.load('current', {'packages': ['corechart']})

let price = 0
let currencyId = -1

async function loadCurrency() {
    const params = new URLSearchParams(document.location.search)
    if (!params.has('id')) {
        document.location = 'index.html'
    }
    currencyId = params.get('id')
    const response = await fetch(`http://localhost:3000/currency/${currencyId}`)
    const responseJSON = await response.json()

    if (response.status !== 200) {
        document.location = 'index.html'
    }
    const data = responseJSON

    document.getElementById('currencyName').innerHTML = data['name']
    document.getElementById('currencyShortname').innerHTML = data['shortname']
    document.getElementById('currencyImg').src = `res/${data['img']}`
    document.getElementById('currencyPrice').innerHTML = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'USD'
    }).format(data['currprice'])
    price = data['currprice']
    document.getElementById('currencyVolume').innerHTML = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'USD'
    }).format(data['volume'])
    document.getElementById('currencyChange').innerHTML = data['change'] >= 0 ? `<span class="own--text-accent-1">+ ${data['change']} %</span>` : `<span class="own--text-accent-2">${data['change']} %</span>`

    let datachart = data['prices']
    datachart.splice(0, 0, ['Date', 'Price'])
    const drawing = google.visualization.arrayToDataTable(datachart)
    const chart = new google.visualization.LineChart(document.getElementById('curve_chart'))
    chart.draw(drawing, {
        title: 'Price by day',
        curveType: 'line',
        legend: {position: 'none'},
        colors: ['#f00090']
    })
}

const buy = document.getElementById('amount');
buy.oninput = function () {
    document.getElementById('price').textContent = `$${(Number(buy.value) * price).toString()}`;
};

async function buyCurrency() {
    const data = {}
    data['userId'] = JSON.parse(localStorage.user).id
    data['currencyId'] = currencyId
    data['amount'] = buy.value
    data['purchaseprice'] = price

    const response = await fetch('http://localhost:3000/own', {
        method: "POST", body: JSON.stringify(data), headers: {
            'Content-Type': 'application/json'
        }
    })
    const responseJson = await response.json()
    document.location = 'profile.html'
}

document.addEventListener('DOMContentLoaded', () => {
    loadCurrency()
})
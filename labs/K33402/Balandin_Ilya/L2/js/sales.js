const innerPlatform = {}
const innerGames = {}
const innerProduct = {}
const plot_data = {}
const plot_rows = []

function getRow({date, game, platform, username, price}) {
    return `
            <tr>
                <th scope="row">${date}</th>
                <td>${game}</td>
                <td>${platform}</td>
                <td>${username}</td>
                <td>${price}</td>
            </tr>`
}

async function loadPage() {
    const response_platform = await fetch(`http://localhost:3000/platform`, {
        method: "GET", headers: {'Content-Type': 'application/json'}
    })
    const platform = await response_platform.json()
    for (const p of platform) {
        innerPlatform[p['id']] = p['name']
    }

    const response_game = await fetch(`http://localhost:3000/game`, {
        method: "GET", headers: {'Content-Type': 'application/json'}
    })
    const game = await response_game.json()
    for (const g of game) {
        innerGames[g['id']] = g['name']
    }

    const response_product = await fetch(`http://localhost:3000/product`, {
        method: "GET", headers: {'Content-Type': 'application/json'}
    })
    const product = await response_product.json()
    for (const p of product) {
        innerProduct[p['id']] = [innerPlatform[p['platformId']], innerGames[p['gameId']], p['price']]
    }

    const response_sell = await fetch(`http://localhost:3000/sell?_sort=date&_order=desc`, {
        method: "GET", headers: {'Content-Type': 'application/json'}
    })
    let mindate = Date.now()
    let maxdate = new Date(98, 1)
    const sell = await response_sell.json()
    for (const s of sell) {
        s['platform'] = innerProduct[s['productId']][0]
        s['game'] = innerProduct[s['productId']][1]
        s['price'] = innerProduct[s['productId']][2]
        const date = new Date(s['date'])
        if (date < mindate) {
            mindate = date
        }
        if (date > maxdate) {
            maxdate = date
        }
        if (plot_data[date]) {
            plot_data[date] += Number(s['price'])
        } else {
            plot_data[date] = Number(s['price'])
        }
        document.getElementById('salesTable').innerHTML += getRow(s)
    }
    console.log(mindate, maxdate)
    while (mindate <= maxdate) {
        const cdate = `${mindate.getDate()}/${mindate.getMonth() + 1}/${mindate.getFullYear() % 100}`
        if (plot_data[mindate]) {
            plot_rows.push([cdate, plot_data[mindate]])
        } else {
            plot_rows.push([cdate, 0])
        }
        mindate.setDate(mindate.getDate() + 1)
    }
    google.charts.load('current', {'packages': ['line']});
    google.charts.setOnLoadCallback(drawChart);
}

function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Day');
    data.addColumn('number', 'Sales');

    data.addRows(plot_rows);

    var options = {
        height: 500,
        legend: {position: 'none'},
        lineWidth: 4,
    };

    var chart = new google.charts.Line(document.getElementById('linechart_material'));
    chart.draw(data, google.charts.Line.convertOptions(options));
}

document.addEventListener('DOMContentLoaded', () => {
    loadPage()
})
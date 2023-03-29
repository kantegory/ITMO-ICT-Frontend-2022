async function loadCurrency(sort = 'name', order = 'asc') {
    const params = new URLSearchParams()
    params.append('_sort', sort)
    params.append('_order', order)
    const response = await fetch(`http://localhost:3000/currency?${params.toString()}`)
    return await response.json()
}

function getRow({id, name, shortname, currprice, change, volume, img}) {
    return `
                <tr>
                    <th scope="row"><img src="res/${img}" class="img table-img" alt="currency img"></th>
                    <td><a class="text-decoration-none fw-bold h5" href="currency.html?id=${id}">${name}</a> <span
                            class="own--text-secondary ms-3">${shortname}</span>
                    </td>
                    <td>${new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'USD'}).format(currprice)}</td>
                    <td><span class="own--text-accent-${change >= 0 ? "1" : "2"}">${change >= 0 ? `+${change}` : change} %</span></td>
                    <td>${new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'USD'}).format(volume)}</td>
                </tr>`
}

async function loadCurrencyTable() {
    let data = {}
    const params = new URLSearchParams(document.location.search)
    if (params.has('_sort')) {
        data = await loadCurrency(params.get('_sort'), params.get('_order'))
    } else {
        data = await loadCurrency()
    }
    for (const d of data) {
        document.getElementById('tablebody').innerHTML += getRow(d)
    }
}


function sortTable(order) {
    const field = document.getElementById('sortingField').value
    const params = new URLSearchParams()
    params.append('_sort', field)
    params.append('_order', order)
    document.location = `index.html?${params.toString()}`
}

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(document.location.search)
    if (params.has('_sort')) {
        document.getElementById('sortingField').value = params.get('_sort')
    }
    loadCurrencyTable()
})
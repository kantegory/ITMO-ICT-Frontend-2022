if (!localStorage.accessToken) {
    document.location = 'index.html'
}

const curruser = JSON.parse(localStorage.user)

async function loadData() {
    const currency = {}
    const response1 = await fetch(`http://localhost:3000/currency`)
    const responseJSON = await response1.json()
    for (const r of responseJSON) {
        currency[r.id] = r
    }
    const response2 = await fetch(`http://localhost:3000/own?userId=${curruser.id}`)
    const rows = await response2.json()
    for (const r of rows) {
        let rdata = r
        rdata['name'] = currency[r['currencyId']].name
        rdata['shortname'] = currency[r['currencyId']].shortname
        rdata['currentPrice'] = currency[r['currencyId']].currprice
        document.getElementById('tableOwn').innerHTML += getRow(rdata)
    }
}

function logout() {
    localStorage.removeItem('user')
    localStorage.removeItem('accessToken')
    document.location = 'index.html'
}


function getRow({name, shortname, amount, purchaseprice, currentPrice, id, currencyId}) {
    return `
            <tr>
                <td>
                    <a class="text-decoration-none fw-bold" href="currency.html?id=${currencyId}">${name}</a>
                    <span class="own--text-secondary ms-3">${shortname}</span>
                </td>
                <td>${amount}</td>
                <td>${new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'USD'}).format(purchaseprice)}</td>
                <td>${new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'USD'}).format(currentPrice)}</td>
                <td class="row">
                    <button class="btn fw-bold own--text-main" onclick="sell(${id})" style="background-color: var(--own-accent-2)">Sell</button>
                </td>
            </tr>`
}

async function sell(id) {
    const response = await fetch(`http://localhost:3000/own/${id}`, {method: "DELETE"})
    document.location.reload()
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('username').textContent = curruser.name
    loadData()
})
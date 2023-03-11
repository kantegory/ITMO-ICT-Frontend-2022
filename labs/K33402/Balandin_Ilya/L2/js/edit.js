const params = new URLSearchParams(window.location.search)


function getOptions({id, name}, selected) {
    if (selected)
        return `<option value="${id}" selected>${name}</option>`
    else
        return `<option value="${id}">${name}</option>`
}


async function loadPage() {
    let params = new URLSearchParams(window.location.search)
    let product = null
    if (params.has('productId')) {
        const response_product = await fetch(`http://localhost:3000/product?id=${params.get('productId')}`, {
            method: "GET", headers: {'Content-Type': 'application/json'}
        })
        product = await response_product.json()
        document.getElementById('price').value = product[0]['price']
        document.getElementById('price').disabled = true
        document.getElementById('game').disabled = true
        document.getElementById('platform').disabled = true
        document.getElementById('count').value = product[0]['count']
    }

    const response_game = await fetch(`http://localhost:3000/game`, {
        method: "GET", headers: {'Content-Type': 'application/json'}
    })
    const game = await response_game.json()
    for (const g of game) {
        document.getElementById('game').innerHTML += getOptions(g, product && product['gameId'] === g['id'])
    }

    const response_platform = await fetch(`http://localhost:3000/platform`, {
        method: "GET", headers: {'Content-Type': 'application/json'}
    })
    const platform = await response_platform.json()
    for (const p of platform) {
        document.getElementById('platform').innerHTML += getOptions(p, product && product['platformId'] === p['id'])
    }
}

async function update() {
    let params = new URLSearchParams(window.location.search)
    const data = {}
    if (params.has('productId')){
        data['id'] = params.get('productId')
    }
    data['gameId'] = document.getElementById('game').value
    data['platformId'] = document.getElementById('platform').value
    data['price'] = Number(document.getElementById('price').value)
    data['count'] = Number(document.getElementById('count').value)
    if (params.has('productId')){
        const response = await fetch(`http://localhost:3000/product/${params.get('productId')}`, {
            method: "PUT", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)
        })

    } else {
        const response = await fetch(`http://localhost:3000/product`, {
            method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)
        })
    }
    document.location.replace('http://localhost:9999/front/L2/index.html')
}

document.addEventListener('DOMContentLoaded', () => {
    loadPage()
})
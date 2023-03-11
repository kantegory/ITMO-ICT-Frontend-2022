const innerGenres = {}
const innerPlatform = {}

async function loadPage() {
    const params = new URLSearchParams(window.location.search)
    const response_genre = await fetch(`http://localhost:3000/genre`, {
        method: "GET", headers: {'Content-Type': 'application/json'}
    })
    const genres = await response_genre.json()
    for (const g of genres) {
        innerGenres[g['id']] = g['name']
        document.getElementById('genre').innerHTML +=
            getOptions(g, params.has('genreId') && Number(params.get('genreId')) === g['id'])
    }

    const response_platform = await fetch(`http://localhost:3000/platform`, {
        method: "GET", headers: {'Content-Type': 'application/json'}
    })
    const platform = await response_platform.json()
    for (const p of platform) {
        innerPlatform[p['id']] = p['name']
        document.getElementById('platform').innerHTML +=
            getOptions(p, params.has('platformId') && Number(params.get('platformId')) === p['id'])
    }
}

function filter() {
    const params = new URLSearchParams()
    const platform = document.getElementById('platform').value
    const genre = document.getElementById('genre').value
    const sort = document.getElementById('sort').value

    if (genre !== 'Any') {
        params.append('genreId', genre)
    }
    if (platform !== 'Any') {
        params.append('platformId', platform)
    }
    if (sort !== 'Popularity') {
        params.append('_sort', 'price')
        params.append('_order', sort)
    }
    window.location.href = `http://localhost:9999/front/L2/index.html?${params.toString()}`
}

function getProduct(id, price, count, {image, name, description, genre, platform}) {
    return `
         <div class="col col-md-2 mx-2 my-4 card  bg-secondary-own" style="width: 18rem;">
            <img src="${image}" class="img img-fluid" alt="game image" width="auto" height="300px">
            <div class="card-body">
                <p class="card-title h3 "><a class="text-decoration-none text-secondary-own" href="product.html?productId=${id}">${name}</a></p>
                <p class="card-text">${description}</p>
                <p class="h5">$${price} / ${count} left</p>
            </div>
            <div class="card-body">
                <bi class="text-secondary-own text-decoration-none">${genre}</bi> / 
                <bi class="text-secondary-own text-decoration-none">${platform}</bi>
            </div>
        </div>
    `
}

function getOptions({id, name}, selected) {
    if (selected)
        return `<option value="${id}" selected>${name}</option>`
    else
        return `<option value="${id}">${name}</option>`
}

async function loadProducts() {
    let params = new URLSearchParams(window.location.search)
    const response = await fetch(`http://localhost:3000/product${window.location.search}`, {
        method: "GET", headers: {'Content-Type': 'application/json'}
    })
    const products = await response.json()
    for (const product of products) {
        const game_response = await fetch(`http://localhost:3000/game/${product.gameId}`, {
            method: "GET", headers: {'Content-Type': 'application/json'}
        })
        const game = await game_response.json()
        game['platform'] = innerPlatform[product['platformId']]
        if (params.has('genreId') && game['genreId'] !== Number(params.get('genreId'))) {
            continue
        }
        game['genre'] = innerGenres[game['genreId']]
        document.getElementById('productsPage').innerHTML += getProduct(product['id'], product['price'], product['count'], game)
    }
}


document.addEventListener('DOMContentLoaded', () => {
    loadPage()
    loadProducts()
})
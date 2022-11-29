const LIMIT=20
const params = new URLSearchParams(window.location.search)

/*
 * FILTRATION
 */

// timeToReadId
async function loadVolume() {
    const response = await fetch("http://localhost:3000/timeToRead")
    const responseJson = await response.json()

    for (const volume of responseJson) {
        document.querySelector("#chVolume").innerHTML += `<option id="v${volume['id']}" value="${volume['id']}">${volume['name']}</option>`
    }
    if (params.has('timeToReadId')) {
        document.getElementById('vAny').selected = false
        document.getElementById(`v${params.get('timeToReadId')}`).selected = true
    }
}
// genreId
async function loadChGenres() {
    const response = await fetch("http://localhost:3000/genre")
    const responseJson = await response.json()
    for (const genre of responseJson) {
        document.querySelector("#chGenre").innerHTML += `<option id="g${genre['id']}" value="${genre['id']}">${genre['name']}</option>`
    }
    if (params.has('genreId')) {
        document.getElementById('gAny').selected = false
        document.getElementById(`g${params.get('genreId')}`).selected = true
    }
}


/*
 * BOOK CARDS GENERATION
 */
function getBookCardHtml({id, title, author, rate, slug}) {
    return `
        <div class="card col col-10 col-sm-5 col-md-3 col-xl-2 p-0 m-1" data-card-id="${id}" id="b${id}">
            <div class="overflow-hidden d-none d-sm-block"><img src="../res/${slug}.jpg" class="card-img-top img-library" alt="${title}"></div>
                <div class="card-body">
                    <p class="text-truncate h6 mb-0">
                        <a onclick="fillModal(${id})"
                            href="#" 
                            data-bs-toggle="modal" data-bs-target="#exampleModal" 
                            class="text-decoration-none text-dark text-truncate">${title}</a>
                    </p>
                    <p class="text-muted text-truncate mb-0"><small>${author}</small></p>
                    <div class="row"><p class="col text-end mb-0 mt-3"><small><span class="text-danger">${rate}</span> / 5 <i class="bi bi-star"></i></small></p></div>
                </div>
            </div>
        </div>
    `
}

function getPaginationButtonHTML(name, text, isPrev = false, isNext = false) {
    return `
        <li class="page-item" id="li${name}">
            <button class="page-link text-danger" id="p${name}" onclick="changePage('${name}', ${isPrev}, ${isNext})">${text}</button>
        </li>`
}
// Recoloring pagination buttons
function changeState(idx, disabled = true) {
    if (disabled) {
        document.querySelector(`#li${idx}`).classList.add('disabled')
        document.querySelector(`#p${idx}`).classList.remove('text-danger')
    } else {
        document.querySelector(`#li${idx}`).classList.remove('disabled')
        document.querySelector(`#p${idx}`).classList.add('text-danger')
    }
}
// Replacing cards on the page
async function loadBooks(page, limit=20) {
    document.querySelector("#library").innerHTML = ""
    const load_params = new URLSearchParams(window.location.search)
    load_params.append('_page', page.toString())
    load_params.append('_limit', limit.toString())
    const response = await fetch(`http://localhost:3000/books?${load_params.toString()}`)

    const responseJson = await response.json()
    for (const book of responseJson) {
        document.querySelector("#library").innerHTML += getBookCardHtml(book)
    }
}
// Update page
function changePage(idx, prev = false, next = false) {
    if (prev) idx = Number(localStorage.currentpage) - 1
    if (next) idx = Number(localStorage.currentpage) + 1
    changeState(Number(localStorage.currentpage), false)
    changeState(idx)
    localStorage.currentpage = idx
    loadBooks(Number(idx)+1)
    changeState('prev', Number(localStorage.currentpage) === 0)
    changeState('next', Number(localStorage.currentpage) === (Math.ceil(Number(localStorage.pages) / LIMIT) - 1))
}

async function generatePage() {
    if (params.has('q')){
        document.getElementById('searchWordInfo').hidden = false
        document.getElementById('searchWord').textContent = params.get('q')
    }
    const response = await fetch(`http://localhost:3000/books?${params.toString()}`)
    const responseJson = await response.json()
    localStorage.pages = responseJson.length
    if (Number(localStorage.pages) !== 0){
        if (Number(localStorage.pages) > LIMIT) {
            document.querySelector("#pages").innerHTML += getPaginationButtonHTML('prev', 'Предыдущая', true, false)
            for (let i=0; i<Math.ceil(Number(localStorage.pages) / LIMIT); i++){
                document.querySelector("#pages").innerHTML += getPaginationButtonHTML(i, i + 1)
            }
            document.querySelector("#pages").innerHTML += getPaginationButtonHTML('next', 'Следующая', false, true)
            localStorage.currentpage = 0
            changePage(0)
        }
        else {
            loadBooks(1)
        }
    } else {
        document.querySelector("#pages").innerHTML += `<p>Нет соответствий :'(</p>`
    }
}


/*
 * BOOK'S MODAL WINDOW
 */

async function fillModal(id) {
    const response1 = await fetch(`http://localhost:3000/books/${id}`)
    const book = await response1.json()
    document.getElementById('modaltitle').textContent = book['title']
    document.getElementById('modalId').textContent = book['id']
    document.getElementById('modaldesc').textContent = book['description']
    document.getElementById('modalauthor').textContent = book['author']
    document.getElementById('modalimg').src = `../res/${book['slug']}.jpg`
    document.getElementById('modalrate').textContent = book['rate'].toString()
    const response2 = await fetch(`http://localhost:3000/genre/${book['genreId']}`)
    const genre = await response2.json()
    document.getElementById('modalgenre').textContent = genre['name']
    document.getElementById('modalgenre').href = `http://localhost:9999/LW1/search.html?genreId=${genre['id']}`

    const response3 = await fetch(`http://localhost:3000/timeToRead/${book['timeToReadId']}`)
    const volume = await response3.json()
    document.getElementById('modaltime').textContent = volume['name']
    document.getElementById('modaltime').href = `http://localhost:9999/LW1/search.html?timeToReadId=${volume['id']}`

    const userInfo = JSON.parse(localStorage.getItem('user'))

    const response4 = await fetch(`http://localhost:3000/user_book?userId=${userInfo.id}&bookId=${id}`)
    const exists = await response4.json()

    document.getElementById('buttonsmodal').hidden = exists.length !== 0
    document.getElementById('already-added').hidden = exists.length === 0
}
// Add book to user's library through book's window
async function addBook(read=false){
    const data = {}
    const userInfo = JSON.parse(localStorage.getItem('user'))
    data['userId'] = userInfo.id
    data['bookId'] = Number(document.getElementById('modalId').textContent)
    if (read){
        data['status'] = 'прочитано'
    }
    else {
        data['status'] = 'отложено'
    }
    await fetch('http://localhost:3000/user_book', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    document.getElementById('buttonsmodal').hidden = true
    document.getElementById('already-added').hidden = false
}



function search() {
    const updateparams = new URLSearchParams()
    if (document.getElementById('chGenre').value !== '-1') updateparams.set('genreId', document.getElementById('chGenre').value)
    if (document.getElementById('chVolume').value !== '-1') updateparams.set('timeToReadId', document.getElementById('chVolume').value)
    if (document.getElementById('sort').value !== '-1') {
        const asc = Number(document.getElementById('sort').value) === 2 ? 'acs' : 'desc'
        updateparams.set('_sort', 'rate')
        updateparams.set('_order', asc)
    }
    window.location.replace(`http://localhost:9999/f/labs/K33401/Kormanovskaya/website/pages/search.html?${updateparams.toString()}`)
}

document.addEventListener('DOMContentLoaded', () => {
    loadVolume()
    loadChGenres()
    generatePage()
})


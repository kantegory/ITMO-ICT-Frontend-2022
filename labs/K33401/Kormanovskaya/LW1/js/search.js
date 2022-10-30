const separator = "abracadabra"
const params = new URLSearchParams(window.location.search)
const sorts = {
    2: function (a, b) {
        if (Number(a.rate) > Number(b.rate)) {
            return 1;
        }
        if (Number(a.rate) < Number(b.rate)) {
            return -1;
        }
        return 0
    }, 1: function (a, b) {
        if (Number(a.rate) < Number(b.rate)) {
            return 1;
        }
        if (Number(a.rate) > Number(b.rate)) {
            return -1;
        }
        return 0
    }
}

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
            <div class="overflow-hidden d-none d-sm-block"><img src="res/${slug}.jpg" class="card-img-top img-library" alt="${title}"></div>
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
function changePage(idx, prev = false, next = false) {
    const pages = localStorage.pages.split(separator)

    if (prev) idx = Number(localStorage.currentpage) - 1
    if (next) idx = Number(localStorage.currentpage) + 1

    document.querySelector("#library").innerHTML = ""
    document.querySelector("#library").innerHTML += pages[idx]

    changeState(idx)
    changeState(Number(localStorage.currentpage), false)

    localStorage.currentpage = idx

    changeState('prev', Number(localStorage.currentpage) === 0)
    changeState('next', Number(localStorage.currentpage) === pages.length - 1)
}

async function loadBooks() {
    const loadparams = new URLSearchParams()
    if (params.has('timeToReadId')) {
        loadparams.set('timeToReadId', params.get('timeToReadId'))
    }
    if (params.has('genreId')) {
        loadparams.set('genreId', params.get('genreId'))
    }
    let compare = ""
    if (params.has('textSearch')) {
        compare = params.get('textSearch').toLowerCase()
    }

    const response = await fetch(`http://localhost:3000/books?${loadparams.toString()}`)
    const responseJson = await response.json()
    const rawpages = []

    for (const book of responseJson) {
        if (compare !== "" && (book.title.toLowerCase().includes(compare) || book.author.toLowerCase().includes(compare)) || compare === "") {
            rawpages.push(book)
        }
    }

    if (compare !== "") {
        document.getElementById('searchWordInfo').hidden = false
        document.getElementById('searchWord').textContent = compare
    }

    if (rawpages.length !== 0) {
        if (params.has('sort')) {
            rawpages.sort(sorts[params.get('sort')])
        }

        const pages = []
        let counter = 0
        const bound = 20

        document.querySelector("#pages").innerHTML += getPaginationButtonHTML('prev', 'Предыдущая', true, false)
        changeState('prev')

        for (const p of rawpages) {
            const idx = Math.floor(counter / bound)
            if (counter % bound === 0) {
                document.querySelector("#pages").innerHTML += getPaginationButtonHTML(idx, idx + 1)
                pages.push("")
            }
            pages[idx] += getBookCardHtml(p)
            counter++
        }
        document.querySelector("#pages").innerHTML += getPaginationButtonHTML('next', 'Следующая', false, true)
        if (counter < bound) {
            changeState('next')
        }

        document.querySelector("#library").innerHTML += pages[0]
        localStorage.pages = pages.join(separator)
        localStorage.currentpage = 0
        changeState(localStorage.currentpage)
    } else {
        localStorage.pages = null
        localStorage.currentpage = 0
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
    document.getElementById('modalimg').src = `res/${book['slug']}.jpg`
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

    console.log(data)
    const response = await fetch('http://localhost:3000/user_book', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const responseJson = await response.json()
    console.log(responseJson)
    document.getElementById('buttonsmodal').hidden = true
    document.getElementById('already-added').hidden = false
}



function search(event) {
    const updateparams = new URLSearchParams()
    if (document.getElementById('chGenre').value !== '-1') updateparams.set('genreId', document.getElementById('chGenre').value)
    if (document.getElementById('chVolume').value !== '-1') updateparams.set('timeToReadId', document.getElementById('chVolume').value)
    if (document.getElementById('sort').value !== '-1') updateparams.set('sort', document.getElementById('sort').value)
    searchTitle(updateparams)
}

document.addEventListener('DOMContentLoaded', () => {
    loadVolume()
    loadChGenres()
    loadBooks()
})


if (! localStorage.accessToken){
    window.location.href = "http://localhost:63342/LW1/index.html"
}

// some user's info
function loadPage(){
    const userInfo = JSON.parse(localStorage.getItem('user'))
    document.querySelector("#login").textContent = userInfo.login
    document.querySelector("#email").textContent = userInfo.email
    document.querySelector("#avatar").innerHTML += `
        <img class="w-100 mx-auto border border-2 border-danger d-none d-sm-flex" src="res/${userInfo.avatar}" alt="${userInfo.login}">`
}

function getBook({title, description, id, author, slug}, status){
    return `
        <div class="card col col-10 col-sm-5 col-md-3 col-xl-2 p-0 m-1 data-card-id="${id}>
            <div class="overflow-hidden d-none d-sm-block"><img src="res/${slug}.jpg" class="card-img-top img-library" alt="${title}"></div>
                <div class="card-body">
                    <p class="text-truncate h6 mb-0">
                        <a onclick="fillModal(${id})"
                            href="#" 
                            data-bs-toggle="modal" data-bs-target="#exampleModal" 
                            class="text-decoration-none text-dark text-truncate">${title}</a>
                    </p>
                    <p class="text-muted text-truncate mb-0"><small>${author}</small></p>
                    <div class="row"><p class="col text-end mb-0 mt-3">${status}</p></div>
                </div>
            </div>
        </div>
    `
}

async function fillModal(id) {
    const response1 = await fetch(`http://localhost:3000/books/${id}`)
    const book = await response1.json()

    document.getElementById('modaltitle').textContent = book['title']
    document.getElementById('modaldesc').textContent = book['description']
    document.getElementById('modalauthor').textContent = book['author']
    document.getElementById('modalimg').src = `res/${book['slug']}.jpg`

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
    const status = await response4.json()

    document.getElementsByTagName('option').selected = false

    for (const s of status){
        document.getElementById('modalId').textContent = s['id']
        document.getElementById(`${s['status']}`).selected = true
    }
}

async function changeRelation() {
    const response = await fetch(`http://localhost:3000/user_book/${document.getElementById('modalId').textContent}`)
    const userbook = await response.json()
    const action = document.getElementById('updateoption').value

    const response2 = await fetch(`http://localhost:3000/user_book/${userbook['id']}`, {
        method: "DELETE"
    })

    if (action !== 'удалить'){
        userbook['status'] = action
        const response3 = await fetch(`http://localhost:3000/user_book`, {
            method: "POST",
            body: JSON.stringify(userbook),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    document.location.reload()
}

function getAchievements({title, description, id, userId}){
    return `
        <div class="card m-3 p-2 border border-danger border-2">
            <h6 class="card-title text-danger">${title}</h6>
            <p><small>${description}</small></p>
        </div>
    `
}

async function loadBooks(bookIds) {
    if (bookIds.length === 0) return
    document.getElementById('noBooks').hidden = true
    for (const bookId of bookIds) {
        const response = await fetch(`http://localhost:3000/books/${bookId['bookId']}`)
        const responseJson = await response.json()
        document.querySelector("#books").innerHTML += getBook(responseJson, bookId['status'])
    }
}

async function loadAchievements() {
    const response = await fetch("http://localhost:3000/400/achievements", {
        headers: {
            "Authorization": `Bearer ${localStorage.accessToken}`
        }
    })

    const responseJson = await response.json()
    const currentId = JSON.parse(localStorage.getItem('user')).id
    for (const achievement of responseJson) {
        if (achievement['userId'] === currentId){
            document.getElementById('nullAchievements').hidden = true
            document.querySelector("#achievements").innerHTML += getAchievements(achievement)
        }
    }
}

async function loadUserBooks() {
    const response = await fetch("http://localhost:3000/400/user_book", {
        headers: {
            "Authorization": `Bearer ${localStorage.accessToken}`
        }
    })

    const responseJson = await response.json()
    const currentId = JSON.parse(localStorage.getItem('user')).id
    const bookIds = []
    let ratedBooks = 0
    let readBooks = 0
    for (const book of responseJson) {
        if (book['userId'] === currentId){
            if (book['rate'] !== null){
                ratedBooks++
            }
            if (book['status'] === 'прочитано'){
                readBooks++
            }
            bookIds.push(book)
        }
    }
    document.getElementById('readBooks').textContent = " " + `${readBooks}`
    document.getElementById('rateBooks').textContent = " " + `${ratedBooks}`
    document.getElementById('lenBooks').textContent = " " + bookIds.length.toString()

    loadBooks(bookIds)
}


document.addEventListener('DOMContentLoaded', () => {
    loadPage()
    loadUserBooks()
    loadAchievements()
})


async function login(event) {
    event.preventDefault()
    const inputs = Array.from(event.target.querySelectorAll('input'))
    const loginData = {}
    // add all inputs values to loginData (except unnamed)
    for (const input of inputs) {
        if (input.name !== "") {
            loginData[input.name] = input.value
        }
    }
    // try to login via POST request
    const response = await fetch('http://localhost:3000/login', {
        method: "POST", body: JSON.stringify(loginData), headers: {
            'Content-Type': 'application/json'
        }
    })
    const responseJson = await response.json()
    // check mistakes
    if (responseJson === "Incorrect password" || responseJson === "Cannot find user") {
        document.querySelector("#mistakeLogin").textContent = "Неверный адрес или пароль!"
        return
    }
    document.querySelector("#mistakeLogin").textContent = ""
    // write user data to localStorage
    const {accessToken, user} = responseJson
    localStorage.accessToken = accessToken
    localStorage.user = JSON.stringify(user)
    location.reload()
}

function logout() {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("user")
    window.location.href = "http://localhost:9999/LW1/index.html"
}

function getGenre({id, name}) {
    return `<div class="p-1 mx-2"><a href="http://localhost:9999/LW1/search.html?genreId=${id}" class="text-decoration-none text-white">${name}</a></div>`
}

async function loadGenres() {
    const response = await fetch("http://localhost:3000/genre")
    const responseJson = await response.json()

    for (const genre of responseJson) {
        document.querySelector("#navGenres").innerHTML += getGenre(genre)
    }
}

function showLoginOrProfile() {
    if (localStorage.accessToken) {
        const userInfo = JSON.parse(localStorage.getItem('user'))
        document.querySelector("#navbarTop").innerHTML += `
        <li class="nav-item dropdown" id="navProfile">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">Моя полка</a>
            <ul class="dropdown-menu dropdown-menu-light dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li class="dropdown-item disabled container-fluid">
                    <div class="row align-items-center py-2 mx-auto">
                        <div class="col col-4"><img class="w-100 mx-auto border border-2 border-danger"
                        src="res/${userInfo.avatar}" alt="${userInfo.login}"></div>
                        <div class="col col-8 gy-1">
                            <p class="h5 black"><strong>${userInfo.login}</strong></p>
                            <p class="h6 text-danger text-wrap"><small>${userInfo.email}</small></p>
                        </div>
                    </div>
                </li>
                <li><a class="dropdown-item" href="http://localhost:9999/LW1/userpage.html">Читательский билет</a></li>
                <li><a class="dropdown-item disabled" href="#">Книжная полка</a></li>
                <li><a class="dropdown-item disabled" href="#">Литературный клуб</a></li>
                <li><hr class="dropdown-divider bg-danger"></li>
                <li><button class="dropdown-item black" href="http://localhost:9999/LW1/index.html" onclick="logout()">Выйти</button></li>
            </ul>
        </li>
    `
        document.getElementById("navLogin").hidden = true
    } else {
        document.getElementById("navLogin").hidden = false
    }
}

function searchTitle(p=null) {
    let params
    if (p){
        params = p
    } else {
        params = new URLSearchParams(window.location.search)
    }
    params.set('textSearch', document.getElementById('textSearch').value)
    window.location.replace(`http://localhost:9999/LW1/search.html?${params.toString()}`)
}

document.addEventListener('DOMContentLoaded', () => {
    loadGenres()
    showLoginOrProfile()
})

// bootstrap
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

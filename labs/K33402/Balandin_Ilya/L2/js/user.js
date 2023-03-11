async function login(event) {
    event.preventDefault()
    const loginData = {}
    loginData['email'] = document.getElementById('loginEmail').value
    loginData['password'] = document.getElementById('loginPassword').value

    const response = await fetch('http://localhost:3000/login', {
        method: "POST", body: JSON.stringify(loginData), headers: {
            'Content-Type': 'application/json'
        }
    })
    const responseJson = await response.json()
    if (responseJson === "Incorrect password" || responseJson === "Cannot find user") {
        return
    }
    const {accessToken, user} = responseJson
    localStorage.accessToken = accessToken
    localStorage.user = JSON.stringify(user)
    location.reload()
}

function logout() {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("user")
    window.location.href = "http://localhost:9999/front/L2/index.html"
}

function loadUser() {
    if (localStorage.accessToken) {
        document.getElementById('isUser').innerHTML += `
                    <li class="nav-item dropdown" id="isUser">
                        <a class="nav-link dropdown-toggle text-secondary-own" href="#" id="navbarDropdown" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            Username
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="profile.html">Profile</a></li>
                            <li><a class="dropdown-item text-danger" href="#" onclick="logout()">Logout</a></li>
                        </ul>
                    </li>
    `
    } else {
        document.getElementById('isUser').innerHTML += `
                    <li class="nav-item" id="isNotUser">
                        <button type="button" class="btn btn-link text-decoration-none" data-bs-toggle="modal"
                                data-bs-target="#loginModal">
                            Login
                        </button>
                    </li>
    `
    }
}


document.addEventListener('DOMContentLoaded', () => {
    loadUser()
})



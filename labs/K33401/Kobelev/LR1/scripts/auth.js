function getAuthToken() {
    return localStorage.accessToken
}

function getUser() {
    if (localStorage.getItem('user') === null) {
        return null
    }
    return localStorage.user
}

function checkAuth() {
    let user = getUser()
    let hiddenClass = '.visible-login-only'

    if (user !== null) {
        hiddenClass = '.invisible-login'
        const usernameText = document.getElementById('usernameText')
        usernameText.textContent = JSON.parse(getUser()).username;
    }

    const hiddenElements =  document.querySelectorAll(hiddenClass)

    hiddenElements.forEach((element) => {
        element.classList.add('d-none');
    });
}


async function login(event) {
    event.preventDefault()
    const inputs = Array.from(event.target.querySelectorAll('input'))
    const loginData = {}

    for (const input of inputs) {
        if (input.name !== "") {
            loginData[input.name] = input.value
        }
    }

    const response = await fetch('http://localhost:3000/login', {
        method: "POST", body: JSON.stringify(loginData), headers: {
            'Content-Type': 'application/json'
        }
    })
    const responseJson = await response.json()

    if (responseJson === "Incorrect password" || responseJson === "Cannot find user") {
        console.log("error!")
        return
    }

    const {accessToken, user} = responseJson
    localStorage.accessToken = accessToken
    localStorage.user = JSON.stringify(user)

    location.reload()
}

async function signup(event) {
    event.preventDefault()

    const signUpData = {}

    signUpData['username'] = document.getElementById("usernameSignUo").value
    signUpData['email'] = document.getElementById("emailSignUp").value
    signUpData['password'] = document.getElementById("passwordSignUp").value
    signUpData['likes'] = []

    const response = await fetch('http://localhost:3000/register', {
        method: "POST", body: JSON.stringify(signUpData), headers: {
            'Content-Type': 'application/json'
        }
    })

    const responseJson = await response.json()

    if (responseJson === "Email already exists" || responseJson === "Password is too short") {
        console.log("error")
        return
    }

    const {accessToken, user} = responseJson

    localStorage.accessToken = accessToken
    localStorage.user = JSON.stringify(user)

    location.reload()
}

function logout() {
    localStorage.clear()
    window.location.reload();
}

document.addEventListener('DOMContentLoaded', () => checkAuth())


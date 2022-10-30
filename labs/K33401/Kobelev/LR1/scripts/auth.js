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
    const navProfile = document.getElementById('navProfile')
    if (localStorage.accessToken) {
        const navAuthButtons = document.getElementById('navAuthButtons')
        navAuthButtons.classList.add("d-none");
        const usernameText = navProfile.getElementsByClassName("btn")[0];
        usernameText.textContent = JSON.parse(getUser()).username;
    }
    else {
        navProfile.classList.add("d-none");
    }
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
        console.log("mistake")
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


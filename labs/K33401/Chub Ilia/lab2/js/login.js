if (localStorage.accessToken) {
    window.location = "profile.html"
}

async function loginAPI(email, password) {
    const data = {'email': email, 'password': password}
    const response = await fetch('http://localhost:3000/login', {
        method: "POST", body: JSON.stringify(data), headers: {
            'Content-Type': 'application/json'
        }
    })
    const responseJson = await response.json()

    if (response.status === 200) {
        const {accessToken, user} = responseJson
        localStorage.accessToken = accessToken
        localStorage.user = JSON.stringify(user)
        document.location = 'profile.html'
    } else if (response.status === 400) {
        document.getElementById('loginMistakes').textContent = responseJson
    }
}

async function login() {
    const email = document.getElementById('loginEmail').value
    const password = document.getElementById('loginPassword').value
    await loginAPI(email, password)
}

async function signup() {
    const data = {}
    data['email'] = document.getElementById('signupEmail').value
    data['password'] = document.getElementById('signupPassword').value
    data['name'] = document.getElementById('signupName').value

    const response = await fetch('http://localhost:3000/register', {
        method: "POST", body: JSON.stringify(data), headers: {
            'Content-Type': 'application/json'
        }
    })
    const responseJson = await response.json()
    if (response.status === 400) {
        document.getElementById('signupMistakes').textContent = responseJson
    } else {
        await loginAPI(data['email'], data['password'])
    }
}
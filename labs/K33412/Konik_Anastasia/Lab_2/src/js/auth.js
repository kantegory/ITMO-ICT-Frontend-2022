function checkAuth() {
    if (localStorage.accessToken) {
        window.location.href = "http://localhost:63342/Lab_1/profile.html"
    }
}

async function signup(event) {
    event.preventDefault()

    const inputs = Array.from(event.target.querySelectorAll('input'))

    const Data = {}

    for (const input of inputs) {
        if (input.name === 'img' && input.value === '') {
            Data[input.name] = 'src/img/default_user.png'
            continue
        }

        Data[input.name] = input.value
    }

    console.log('user data', Data)

    const response = await fetch('http://localhost:3000/users', {
        method: "POST",
        body: JSON.stringify(Data),
        headers: {
            'Content-Type': 'application/json'
        }
    })


    const responseJson = await response.json()
    if (responseJson === "Email already exists") {
        alert("User with this email already exists")
    }
    else {
        const { accessToken, user } = responseJson

        console.log('response', responseJson)

        localStorage.accessToken = accessToken
        localStorage.user = JSON.stringify(user)

        checkAuth()
    }
}

async function sign_in(event) {
    event.preventDefault()

    const inputs = Array.from(event.target.querySelectorAll('input'))

    const loginData = {}

    for (const input of inputs) {
        loginData[input.name] = input.value
    }

    console.log('login data', loginData)

    const response = await fetch('http://localhost:3000/login', {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const responseJson = await response.json()
    if ((responseJson === 'Email and password are required') || (responseJson === 'Cannot find user') ||
    (responseJson === 'Incorrect password')) {
                alert("Try again!")
    }
    else {
        const { accessToken, user } = responseJson

        console.log('response', responseJson)

        localStorage.accessToken = accessToken
        localStorage.user = JSON.stringify(user)

        checkAuth()
    }
}

function logout() {
    localStorage.clear()
    window.location.href = "http://localhost:63342/Lab_1/sign_in.html"
}

if (localStorage.accessToken) {
    window.location.href = "http://localhost:9999/front/L2/profile.html"
}

async function register(event) {
    event.preventDefault()

    if (document.getElementById("registerPassword1").value !== document.getElementById("registerPassword1").value) {
        return
    }

    const signUpData = {}
    signUpData['email'] = document.getElementById("registerEmail").value
    signUpData['password'] = document.getElementById("registerPassword1").value
    signUpData['name'] = document.getElementById("registerName").value
    signUpData['surname'] = document.getElementById("registerSurname").value
    signUpData['position'] = 'support'

    const response = await fetch('http://localhost:3000/register', {
        method: "POST", body: JSON.stringify(signUpData), headers: {
            'Content-Type': 'application/json'
        }
    })

    const responseJson = await response.json()
    console.log(responseJson)
    const {accessToken, user} = responseJson

    if (! accessToken) {
        return
    }

    localStorage.accessToken = accessToken
    localStorage.user = JSON.stringify(user)

    window.location.href = "http://localhost:9999/front/L2/profile.html"
}
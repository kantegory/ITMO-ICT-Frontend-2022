if (localStorage.accessToken) {
    window.location.href = "http://localhost:9999/LW1/userpage.html"
}

async function signup(event) {
    event.preventDefault()

    if (!document.getElementById("rules").checked) {
        document.querySelector("#mistakes").textContent = "Необходимо согласиться с правилами бла-бла!"
        return
    }

    if (document.getElementById("emailSignUp").value !== document.getElementById("emailCopy").value) {
        document.querySelector("#mistakes").textContent = "Введенные адреса не совпадают!"
        return
    }

    if (document.getElementById("passwordSignUp").value !== document.getElementById("passwordCopy").value) {
        document.querySelector("#mistakes").textContent = "Введенные пароли не совпадают!"
        return
    }

    document.querySelector("#mistakes").textContent = ""
    const signUpData = {}

    signUpData['login'] = document.getElementById("login").value
    signUpData['email'] = document.getElementById("emailSignUp").value
    signUpData['password'] = document.getElementById("passwordSignUp").value
    signUpData['gender'] = document.getElementById("gender").value
    signUpData['news'] = document.getElementById("news").checked
    signUpData['avatar'] = "user1.png"
    signUpData['achievements'] = []

    const response = await fetch('http://localhost:3000/register', {
        method: "POST", body: JSON.stringify(signUpData), headers: {
            'Content-Type': 'application/json'
        }
    })

    const responseJson = await response.json()

    if (responseJson === "Email already exists") {
        document.querySelector("#mistakes").textContent = "Пользователь с таким адресом уже есть!"
        return
    }
    if (responseJson === "Password is too short") {
        document.querySelector("#mistakes").textContent = "Пароль слишком короткий!"
        return
    }

    const {accessToken, user} = responseJson

    localStorage.accessToken = accessToken
    localStorage.user = JSON.stringify(user)

    window.location.href = "http://localhost:9999/LW1/userpage.html"
}

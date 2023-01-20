
const idLogOut = document.querySelector('#logout');
const idLogIn = document.querySelector('#enter');
const idRegistr = document.querySelector('#registr');
const enterLK = document.querySelector('#enterlk');


async function newUser(event) {
    event.preventDefault()

    const inputs = Array.from(event.target.querySelectorAll('input'))

    const user_data = {}

    for (const input of inputs) {
        user_data[input.name] = input.value
    }
    console.log('user data: ',  user_data)

    const response = await fetch('http://localhost:3000/signup', {
        method: "POST",
        body: JSON.stringify(user_data),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    window.location.href = "http://localhost:63342/lab1/log_in.html"
}

async function login(event) {
    event.preventDefault()

    const inputs = Array.from(event.target.querySelectorAll('input'))

    const login_data = {}

    for (const input of inputs) {
        login_data[input.name] = input.value
    }
    console.log('user data: ',  login_data)

    const response = await fetch('http://localhost:3000/signin', {
        method: "POST",
        body: JSON.stringify(login_data),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const responseJson = await response.json()

    const { accessToken, user } = responseJson

    console.log('response', responseJson)

    localStorage.accessToken = accessToken
    localStorage.user = JSON.stringify(user)
    checkAuth(responseJson)

}

function logout() {
    localStorage.clear();
    window.location.href = "http://localhost:63342/lab1/log_in.html";
}

function checkEnter() {
    if (localStorage.accessToken){
        idLogIn.classList.add("d-none")
        idRegistr.classList.add("d-none")
        enterLK.classList.remove("d-none");
        idLogOut.classList.remove("d-none");
    }
    else {
        idLogIn.classList.remove("d-none");
        idRegistr.classList.remove("d-none");
        enterLK.classList.add("d-none");
        idLogOut.classList.add("d-none");
    }
}

function checkAuth(response) {
    if (localStorage.accessToken) {
        if (response != 'Email and password are required') {
            if (response != 'Cannot find user') {
                if (response != 'Password is too short') {
                    if (response != 'Incorrect password') {
                        window.location.href = "lk.html"
                    }
                }
            }
        }
    }
}

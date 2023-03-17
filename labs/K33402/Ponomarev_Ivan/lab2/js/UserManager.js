const logg_butt = document.getElementById('login_button')
const prof_butt = document.getElementById('profile_button')
const logout_butt = document.getElementById('logout_button')

if(localStorage.authToken) {
    logg_butt.classList.add("d-none")
    prof_butt.classList.remove("d-none")
    logout_butt.classList.remove('d-none')
}
else {
    logg_butt.classList.remove("d-none")
    prof_butt.classList.add("d-none")
    logout_butt.classList.add("d-none")
}

async function loginSubmit(event) {
    event.preventDefault()
    const inpts = Array.from(event.target.querySelectorAll('input'))
    const inData = {}
    for (const inp of inpts){
        inData[inp.name] = inp.value
    }
    let response = await fetch('http://localhost:8000/api/auth/token/login/',{
        method: "POST",
        body: JSON.stringify(inData),
        headers: {'Content-Type': 'application/json'}
    })

    let responseJson = await response.json()
    if (responseJson.status==400){
        alert("Неверный пароль/юзернэйм")
    }else{
    localStorage.authToken = responseJson['auth_token']

    response = await fetch('http://localhost:8000/api/auth/users/me/',{
        method: "GET",
        headers: {'Content-Type': 'application/json',
                  'Authorization': 'Token ' + localStorage.authToken,
                  }
    })

    responseJson = await response.json()
    localStorage.user = responseJson['id']
    location.replace("/index.html")
}
}

async function regSubmit(event) {
    event.preventDefault()
    const inputs = Array.from(event.target.querySelectorAll('input'))
    const inData = {}
    for (const inp of inputs) {
        inData[inp.name] = inp.value
    }
    
    let response = await fetch("http://localhost:8000/api/user/new", {
        method: "POST",
        body: JSON.stringify(inData),
        headers: {'Content-Type': 'application/json'}
    })
    let responseJson = await response.json()
    localStorage.user = responseJson['id']

    response = await fetch('http://localhost:8000/api/auth/token/login/',{
        method: "POST",
        body: JSON.stringify(inData),
        headers: {'Content-Type': 'application/json'}
    })

    responseJson = await response.json()
    localStorage.authToken = responseJson['auth_token']

    location.replace("/index.html")
}


async function log_out(event) {
    event.preventDefault()
    
    response = await fetch('http://localhost:8000/api/auth/token/logout/',{
        method: "GET",
        headers: {'Content-Type': 'application/json',
                  'Authorization': 'Token ' + localStorage.authToken,
                  }
    })
    localStorage.removeItem('authToken')
    localStorage.removeItem('user')
    location.replace("/index.html")
}

async function get_user_profile(event) {
    let response = await fetch("http://localhost:8000/api/users/" + localStorage.user.toString(),{
        method: "GET",
        headers: {'Content-Type': 'application/json'}
    })

    const responseJson = await response.json()

    document.querySelector("#userShortInfo").innerHTML += `
              <h5>${responseJson[['first_name']]} ${responseJson['last_name']}</h5>
              <p>${responseJson['email']}</p>
              <p>+${responseJson['phone']}</p>
    `
    document.querySelector("#userProfileImage").innerHTML = `
    <img src="${responseJson['user_image']}"
    alt="Generic placeholder image" class="img-fluid img-thumbnail mt-4 mb-2"
    style="width: 150px; z-index: 1">
    `

}

async function certain_event(event) {
    localStorage['event_id'] = event.value
    location.replace("event.html")
    
}


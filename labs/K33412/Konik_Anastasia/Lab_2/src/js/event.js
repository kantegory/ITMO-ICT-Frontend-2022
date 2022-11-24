document.addEventListener('DOMContentLoaded', () => loadEventInfo())

async function loadEventInfo() {
    let event_id = localStorage.getItem('event_info_id')
    if (event_id === null) {
        window.location.href = './main.html'
    }
    localStorage.removeItem('event_info_id')

    const response = await fetch(`http://localhost:3000/events/${event_id}`, {
        method: "GET"
    })

    const responseJson = await response.json()

    document.querySelector("#event_page").innerHTML += await generatePageContents(responseJson)
}

async function generatePageContents(data) {
    let disable = false
    let token = localStorage.getItem('accessToken')
    let user_id = -1
    if (token !== null) {
        user_id = JSON.parse(localStorage.getItem('user')).id
    }

    if (user_id > -1) {
        const response = await fetch('http://localhost:3000/user_enrolled_events', {
            method: "GET"
        })
        const enrollResponseJson = await response.json()

        for (const enroll_data of enrollResponseJson) {
            if (enroll_data['event_id'] === data['id'] && user_id === enroll_data['user_id']) {
                disable = true
            }
            // disable |= (enroll_data['event_id'] === data['id'] && user_id === enroll_data['user_id'])
        }
    }

    return `<h1 class="row mb-3 ">${data['title']}</h1>
        <div class="row d-flex col-lg-4 col-md-4 col-sm-4">
            <ul>
                <h5 class="text mt-2">Address:</h5>
                <h5 class="text mt-2">${data['address']}</h5>
                <h5 class="text mt-5">Date:</h5>
                <h5 class="text mt-2">${data['date']}</h5>
                <h5 class="text mt-5"><a href="${data['website']}">Website</a></h5>
            </ul>
        </div>
        <div class="row d-flex col-lg-8 col-md-8 col-sm-8">
            <img class="align-self-end" src="${data['img_src']}" alt="${data['title']}">
        </div>
        <div class="mx-1 mb-5 mt-4">
         <button id="event_enroll_${data['id']}" class="btn mt-auto btn-dark purple_button" onclick="enroll(this.id)"${disable ? ' disabled' : ''}>Enroll${disable ? 'ed!' : ''}</button>
        </div>
        <div class="card text-dark border-light bg-light mb-3 mx-auto">
            <div class="card-header">Description</div>
            <div class="card-body">
                <h5 class="card-title">${data['short_description']}</h5>
                <p class="card-text">${data['full_description']}</p>
            </div>
        </div>`
}

function enroll(btn_id) {
    let event_id = btn_id.split('_')[2]
    //if not logged in: redirect to log in
    let token = localStorage.getItem('accessToken')
    if (token === null) {
        window.location.href = './sign_in.html'
    }

    //if logged in: get user id, post to db, redirect to profile
    let user_id = JSON.parse(localStorage.getItem('user')).id
    fetch('http://localhost:3000/user_enrolled_events', {
        method: 'POST',
        body: JSON.stringify({user_id: user_id, event_id: parseInt(event_id)}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            if (response.ok) {
                let btn = document.getElementById(btn_id)
                btn.disabled = true
                btn.innerHTML = 'Enrolled!'
            }
        }).catch(() => {
        console.log('failed to enroll')
    })
}

document.addEventListener('DOMContentLoaded', () => setupUserProfile())

async function setupUserProfile() {
    let token = localStorage.getItem('accessToken')
    let user_id = -1
    if (token !== null) {
        user_id = JSON.parse(localStorage.getItem('user')).id
    }

    let user_info = await loadUserInfo(user_id)
    document.getElementById('user_name').innerHTML = user_info['name'] + ' ' + user_info['lastname']
    document.getElementById('user_login').innerHTML = user_info['email']
    let info = document.getElementById('user_info')
    let img = document.getElementById('user_image')

    const edit_button = document.getElementById("edit-button")
    const done_button = document.getElementById("done-button")
    edit_button.addEventListener("click", function() {
        info.innerHTML=''
        info.contentEditable = 'true'
        info.style.backgroundColor = '#E6E6FA'
        done_button.classList.replace('invisible','visible')
    })
    done_button.addEventListener("click", function() {
        info.contentEditable = 'false'
        info.style.backgroundColor = 'white'
        info.classList.remove('placeholder_text')
        done_button.classList.replace('visible','invisible')
        let user_input = info.innerHTML
        console.log(user_input)
        // send(user_input, user_id)
    })
    if (user_info.hasOwnProperty('info')) {
        info.innerHTML = user_info['info']
    }

    img.src = user_info['img']

    let event_ids = await loadEventIds(user_id)
    console.log(event_ids)
    let events = document.getElementById('user_events')
    for (let idx in event_ids) {
        let event_info = await loadEventInfo(event_ids[idx])
        events.append(generateEventCard(event_info))
    }
}

async function loadUserInfo(user_id) {
    return fetch(`http://localhost:3000/users/${user_id}`, {
        method: "GET"
    }).then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            return null
        }
    }).catch(() => null)
}

async function loadEventIds(user_id) {
    let records = await fetch(`http://localhost:3000/user_enrolled_events`, {
        method: "GET"
    }).then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            return null
        }
    }).catch(() => null)

    if (records === null) {
        return []
    }

    let event_ids = []
    for (const record of records) {
        if (record['user_id'] === user_id) {
            event_ids.push(record['event_id'])
        }
    }

    return event_ids
}

async function loadEventInfo(event_id) {
    return fetch(`http://localhost:3000/events/${event_id}`, {
        method: "GET"
    }).then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            return null
        }
    }).catch(() => null)
}

function generateEventCard(data) {
    let div = document.createElement('div')
    div.classList.add('card', 'col-xl-4', 'col-lg-3', 'col-md-6', 'col-sm-10', 'mx-3', 'mt-3')
    div.innerHTML = `
            <img src="${data['img_src']}" class="card-img-top mt-2" style="height:210px" alt="">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${data['title']}</h5>
                <p class="card-text">${data['address']}</p>
                <p class="card-text">${data['short_description']}</p>
                <p class="card-text"><b>${data['date']}</b></p>
                <a href="./calendar.html" class="btn mt-auto btn-dark purple_button">Go to calendar</a>
            </div>        
    `
    return div
}

// async function send(user_input, user_id) {
//     const response = await fetch(`http://localhost:3000/users/${user_id}`, {
//         method: "PUT",
//         body: JSON.stringify(user_input),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//
//     const responseJson = await response.json()
//     console.log(responseJson)
// }

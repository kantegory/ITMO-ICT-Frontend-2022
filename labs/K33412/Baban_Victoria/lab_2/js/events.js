function getCardEventHTML(event) {
    return `
<div class="col">
    <div class="card h-100 all-category ${event['category']} all-district ${event['district']} all-type ${event['event-type']}" event_id="${event['id']}">
        <img src="${event['img']}" class="card-img-top img-fluid"
             alt="...">
            <div class="card-header d-flex justify-content-between align-content-center">
                <a class="btn btn-outline-secondary btn-sm col px-2" role="button">
            <svg class="icon m-1">
              <use xlink:href="#tag"></use>
            </svg>${event['category_name']}</a>
                <p class="card-text col px-2">${event['date']} ${event['time']}</p>
            </div>
            <div class="card-body text-center d-flex flex-column justify-content-around p-3">
                <h5 class="card-title">${event['title']}</h5>
                <div class="card-text d-flex justify-content-around ">
                    <p class="card-text">
            <svg class="icon m-1">
              <use xlink:href="#place"></use>
            </svg>${event['place']}</p>
                    <p class="card-text text-success">${event['price']}</p>
                </div>
                <div class="card-text d-flex justify-content-around ">
                    <a onclick="aboutEvent(${event['id']})" href="promo.html" class="btn  align-self-center" style="background-color: #20c997;">Подробнее...</a>
                </div>
            </div>
    </div>
</div>
        `
}

async function loadCards() {
    const response = await fetch('http://localhost:3000/events', {
        method: "GET"
    })

    document.querySelector("#list_events").innerHTML = ""
    const responseJson = await response.json()
    console.log('response', responseJson)

    for (const data of responseJson) {
        document.querySelector("#list_events").innerHTML += getCardEventHTML(data)
    }
}

function aboutEvent(id) {
    const event_id = id
    localStorage.setItem('event_id', event_id)
}

function getEventPageHTML(event) {
    return `
    <div class="d-flex flex-row">
        <img src="${event['img']}"  alt="${event['title']}" class="img-fluid" style="max-height: 300px; width: auto;">
        <div class="d-flex flex-column p-2 ">
            <h2 class="text-center">${event['title']}</h2>
            <dl class="row p-4">
                <dt class="col-sm-7">Дата проведения:</dt>
                <dd class="col-sm-5">${event['date']}</dd>
                <dt class="col-sm-7">Время проведения:</dt>
                <dd class="col-sm-5">${event['time']}</dd>
                <dt class="col-sm-7">Место проведения:</dt>
                <dd class="col-sm-5">${event['place']}</dd>
                <dt class="col-sm-7">Стоимость:</dt>
                <dd class="col-sm-5">${event['price']}</dd>
            </dl>
        </div>
    </div>
        <section class="py-3 px-1 mb-3">
        <p>${event['description']}</p>
        <p><b>Контакты:</b> ${event['contact_number']} ${event['contact_name']}</p>
        <form class="d-flex justify-content-center" onclick="registerForEvent(${event['id']})">
            <a href="#" class="btn" style="background-color: #20c997;">Записаться на занятие</a>
        </form>
    </section>
    <div class="d-flex justify-content-center">
        <iframe src="${event['map']}" width="700" height="400" frameborder="0" title="map"></iframe>
    </div>
    `
}

async function loadEventPage() {
    let event_id = localStorage.getItem('event_id')
    const response = await fetch(`http://localhost:3000/events/${event_id}`, {
        method: "GET"
    })
    const responseJson = await response.json()
    document.querySelector("#about_event").innerHTML += await getEventPageHTML(responseJson)
}

function categoryFilter() {

    const category = document.querySelector('.event-category');
    const region = document.querySelector('.event-region');
    const type_event = document.querySelector('.type-event');

    const cards = document.querySelectorAll('.card')

    category.addEventListener('change', function (event) {
        const {value} = event.target
    })
    region.addEventListener('change', function (event) {
        const {value} = event.target
    })
    type_event.addEventListener('change', function (event) {
        const {value} = event.target
    })

    const searchForm = document.querySelector('.search-form')
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const event_category = category.value
        const event_region = region.value
        const event_type = type_event.value

        console.log(event_category)
        console.log(event_region)
        console.log(event_type)

        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            if ((card.classList.contains(event_category)) &&
                (card.classList.contains(event_region)) &&
                (card.classList.contains(event_type))) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        })
    })
}

async function registerForEvent(event_id) {
    const user_id = JSON.parse(localStorage.user).id;
    const registration = {
        "userId": user_id,
        "eventId": event_id
    }
    console.log(registration)

    const response = await fetch('http://localhost:3000/userEvents', {
        method: "POST",
        body: JSON.stringify(registration),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

async function unsubscribeFromEvent(event_id) {
    let user_id = JSON.parse(localStorage.user).id

    let users_events = await fetch(`http://localhost:3000/userEvents`, {
        method: "GET"
    }).then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            return null
        }
    }).catch(() => null)

    for (let user_event of users_events){
        if ((user_event['userId'] === user_id) && (user_event['eventId'] === event_id)){
            const response = await fetch(`http://localhost:3000/userEvents/${user_event['id']}`, {
                method: "DELETE"
            })
        }
    }
    loadMyEvents()
}

function getMyEventHTML(data){
    return `
    <div class="row g-0 mb-2 border">
        <div class="col-md-4 d-flex align-items-center">
            <img src="${data['img']}" class="img-fluid " alt="${data['title']}">
        </div>
        <div class="col-md-8 d-flex flex-column justify-content-around">
            <div class="card-header d-flex justify-content-between">
                <a class="btn btn-outline-secondary btn-sm" role="button">
<svg class="icon m-1">
              <use xlink:href="#tag"></use>
            </svg>${data['category_name']}</a>
                <p class="card-text">${data['date']} ${data['time']}</p>
            </div>
            <div class="card-body text-center d-flex flex-column justify-content-around"
                 style="background-color: white">
                <h5 class="card-title">${data['title']}</h5>
                <div class="card-text d-flex justify-content-around">
                    <p class="card-location">
<svg class="icon m-1">
              <use xlink:href="#place"></use>
            </svg>${data['place']}</p>
                    <p class="card-cost">${data['price']}</p>
                </div>
                <form class="flex-column justify-content-around">
                    <a onclick="aboutEvent(${data['id']})" href="promo.html" class="btn col-5 align-self-center" style="background-color: #20c997;">Подробнее...</a>
                    <a onclick="unsubscribeFromEvent(${data['id']})" href="#" class="btn btn-danger col-5 align-self-center">Отменить запись</a>
                </form>
            </div>
        </div>
    </div>
    `
}

async function loadMyEvents() {
    let user_id = JSON.parse(localStorage.user).id
    let users_events = await fetch(`http://localhost:3000/userEvents`, {
        method: "GET"
    }).then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            return null
        }
    }).catch(() => null)

    document.querySelector("#my_events").innerHTML = ""
    for (let event of users_events) {
        if (event['userId'] === user_id) {

            const response = await fetch(`http://localhost:3000/events/${event['eventId']}`, {
                method: "GET"
            })
            const responseJson = await response.json()

            document.querySelector("#my_events").innerHTML += getMyEventHTML(responseJson)
        }
    }
}

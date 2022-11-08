function getCardHtml(data) {
    return `
        <div class="card col-auto me-4 px-0 mt-4 ${data['event-type']} ${data['category']}" style="width: 18rem;">
            <img src="${data['img_src']}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${data['title']}</h5>
                <p class="card-event-date pt-2">${data['date']}</p>
                <p class="card-event-location">${data['location']}</p>
                <button id="${data['id']}" onclick="aboutEvent(this.id)" class="btn btn-dark mt-3 w-100">About event</button>
            </div>
        </div>
    `
}

async function loadCards() {
    const response = await fetch('http://localhost:3000/events', {
        method: "GET"
    })

    document.querySelector("#event_cards").innerHTML = ""
    const responseJson = await response.json()
    console.log('response', responseJson)

    for (const data of responseJson) {
        document.querySelector("#event_cards").innerHTML += getCardHtml(data)
    }
}

function aboutEvent(button_id) {
    const event_id = button_id
    localStorage.setItem('event_id', event_id)
    window.location.href = "event.html"
}


function filter() {
    const eventTypeValue = document.getElementById("event-type").value;
    const categoryValue = document.getElementById("category").value;
    const cards = document.querySelectorAll(".card");

    for (let i = 0; i < cards.length; i++) {
        if ((cards[i].classList.contains(eventTypeValue) || eventTypeValue==="Any type") &&
            (cards[i].classList.contains(categoryValue) || categoryValue==="Any category")) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}


document.addEventListener('DOMContentLoaded', () => loadCards())
document.addEventListener('DOMContentLoaded', () => loadCards())

async function loadCards() {
    const response = await fetch('http://localhost:3000/events', {
        method: "GET"
    })

    document.querySelector("#event_cards").innerHTML = ""
    const responseJson = await response.json()

    for (const data of responseJson) {
        document.querySelector("#event_cards").innerHTML += getCardHtml(data)
    }
}

function getCardHtml(data) {
    return `<div class="card event col-xl-4 col-lg-4 col-md-4 col-sm-6 card mx-3 mt-3 ${data['district']} ${data['type']}">
            <img src="${data['img_src']}" class="card-img-top mt-2" style="height: 210px" alt="${data['title']}">
            <div class="card-body d-flex flex-column">
                <p class="card-title" style="font-size:18pt"><b>${data['title']}</b></p>
                <p class="card-text">${data['address']}</p>
                <p class="card-text">${data['short_description']}</p>
                <button id="event_showmore_${data['id']}" aria-pressed="true" onclick="goToEvent(this.id)" class="btn mt-auto btn-dark purple_button event_showmore_btn">Show more
                    <svg class="icon">
                        <use xlink:href="src/sprite.svg#ShowMore"></use>
                    </svg>
                </button>
            </div>
    </div>`
}

function goToEvent(btn_id) {
    let event_id = btn_id.split('_')[2]
    localStorage.setItem('event_info_id', event_id)
    window.location.href = './event.html'
}

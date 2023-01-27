async function loadUserInfo() {
    const user = localStorage.user;
    console.log(user);
    const userJson = JSON.parse(user);
    console.log(userJson);
    document.querySelector(
        "#userInfo"
    ).innerHTML = `<span class="font-weight-bold">${userJson.firstName} ${userJson.lastName}</span
                            ><span class="text-black-50">${userJson.email}</span><span> </span>`;
}

async function loadUserEvents() {
    document.querySelector("#userEvents").innerHTML = "";
    const eventsResponse = await (await fetch("http://localhost:3000/events", {})).json();
    const userEventsResposne = await (await fetch("http://localhost:3000/644/userEvents", {})).json();
    events = [];
    const user = JSON.parse(localStorage.user);
    console.log("user", user);
    console.log(userEventsResposne);
    for (const userEvent of userEventsResposne) {
        if (user.id == userEvent.userId) {
            events.push(await await (await fetch(`http://localhost:3000/events/${userEvent.eventId}`, {})).json());
        }
    }

    for (const card of events) {
        document.querySelector("#userEvents").innerHTML += getCardHtml(card);
    }
}

function getCardHtml({ photoPath, title, date, location, id }) {
    return `
        <div class="col">
                    <div class="card">
                        <img src=${photoPath} class="card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-event-date">${date}</p>
                            <p class="card-event-location">${location}</p>
                        </div>
                    </div>
                </div>
      `;
}

document.addEventListener("DOMContentLoaded", () => {
    loadUserInfo();
    loadUserEvents();
});

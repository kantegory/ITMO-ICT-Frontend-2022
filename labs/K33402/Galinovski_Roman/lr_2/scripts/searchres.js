async function getEvent() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    let country = urlSearchParams.get("country");
    if (!country) {
        country = "FR";
    }
    let arrivalDatetime = urlSearchParams.get("arrival-datetime");
    if (!arrivalDatetime) {
        arrivalDatetime = "2023";
    }

    let url = `https://public-holiday.p.rapidapi.com/${arrivalDatetime}/${country}`;
    try {
        let res = await fetch(
            url,
            {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "public-holiday.p.rapidapi.com",
                    "x-rapidapi-key": "bf273bf337msh8e47fa4ec451632p10ef49jsn9cd6618d6d02"
                }
            }
        );
        let data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}


async function renderEvents() {
    let events = await getEvent();
    let html = "<div class='container'><h1 class='text-center'>Результаты поиска</h2></div>";
    let htmlSegment = ""

    if (events) {
        html += `<div class="container">`;

        html += '<div class="row">';
        htmlSegment = `<div class="column hotel-item">
            <img src="./images/event3.jpeg" >
            <h2>${events[0].localName}</h2>
            <p>Международное название: ${events[0].name}, ${events[0].countryCode}</p>
            <p>Дата мероприятия: ${events[0].date}</p>
        </div>`;
        html += htmlSegment;
        html += '</div>';

        html += '<div class="row">';
        for (let i = 1; i < 4; i++) {
            htmlSegment = `<div class="col hotel-item">
            <img src="./images/event3.jpeg" >
            <h3>${events[i].localName}</h2>
            <p>Международное название: ${events[i].name}, ${events[i].countryCode}</p>
            <p>Дата мероприятия: ${events[i].date}</p>
            </div>`;
            html += htmlSegment;
        }
        html += '</div>';

        html += '<div class="row">';
        for (let i = 4; i < 8; i++) {
            htmlSegment = `<div class="col hotel-item">
                <img src="./images/event3.jpeg" >
                <h4>${events[i].localName}</h2>
                <p>Международное название: ${events[i].name}, ${events[i].countryCode}</p>
                <p>Дата мероприятия: ${events[i].date}</p>
            </div>`;
            html += htmlSegment;
        }
        html += '</div>';

        html += '</div>';
    } else {
        html += '<div class="container">Ничего не найдено.</div>';
    }

    let container = document.querySelector('.searchres');
    container.innerHTML = html;
}

renderEvents();

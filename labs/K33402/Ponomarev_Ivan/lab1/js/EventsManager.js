async function get_events(event){
    let response = await fetch("http://localhost:8000/api/events/all", {
        method: "GET",
        headers: {'Content-Type': 'application/json'}
    })
    let responseJson = await response.json()

    get_events_cards(responseJson)
}

async function get_categories(event) {
    let response = await fetch("http://localhost:8000/api/categories/all",{
        method: "GET",
        headers: {'Content-Type': 'application/json'}
    })

    document.querySelector('#category_input').innerHTML += `<option value="none" selected>Категория</option>`
    let responseJson = await response.json()
    for (response of responseJson) {
        document.querySelector('#category_input').innerHTML += `
            <option value=${response['id']}>${response['name']}</option>
        `
    }
}

async function get_filtered_events(event) {
    event.preventDefault()
    document.querySelector("#eventsContainer").innerHTML=``
    const input_cat = document.getElementById("category_input")
    const input_cit = document.getElementById("city_input")
    const category_selected = input_cat.options[input_cat.selectedIndex].value
    const city_selected = input_cit.options[input_cit.selectedIndex].value
    console.log(category_selected)
    search_que = new URLSearchParams()
    if (category_selected!="none" || city_selected!="none"){
        if (category_selected!="none"){
            search_que.append('category', category_selected)
        }
        if (city_selected!="none") {
            search_que.append("city", city_selected)
        } 
        let response = await fetch("http://localhost:8000/api/events/all?"+ search_que.toString(), {
            method: "GET",
            headers: {'Content-Type': 'application/json'}
        })
    
        const responseJson = await response.json()
        
        get_events_cards(responseJson)
    }else {
        get_events()
    }
}

function get_events_cards(data) {
    for (data_element of data){
        let reg = ""
        if (isReg(data_element['participants'])) {
            reg="Вы зарегистрированы"
        }
        document.querySelector("#eventsContainer").innerHTML += `
        <div class="col col-xl-7">
                    <div class="card mb-5" style="border-radius: 15px;">
                      <div class="card-body p-4">
                        <div class="row d-flex">
                            <h4 class="mb-3 col-6">${data_element['name']}</h4>
                            <em class="text-success col-6 mb-3 text-end">${reg}</em>
                        </div>
                        <p class="small mb-0"><i class="far fa-star fa-lg"></i>${data_element['date']}</p>
                        <p class="about mt-4">${data_element['intro']}</p>
                        <hr class="my-4">
                        <div class="d-flex justify-content-between align-items-center">
                          <p class="mb-0 text-uppercase"><i class="fas fa-cog me-2"></i> <span
                              class="text-muted small">${data_element["category"]["name"]}</span></p>
                          <button onclick="certain_event(this)" class="btn btn-dark" value="${data_element["id"]}" id="infoButton">Подробнее</button>
                        </div>
                      </div>
                    </div>
        `
    }
}

async function certain_event(event) {
    localStorage['event_id'] = event.value
    location.replace("event.html")
    
}

async function get_event_info(event) {
    let response = await fetch('http://localhost:8000/api/events/' + localStorage['event_id'].toString(), {
        method: "GET",
        headers: {'Content-Type': 'application/json'}
    })

    const responseJson = await response.json()

    document.querySelector("#certainEventText").innerHTML = `
    <div class="title-big pb-3 mb-2">
        <h3>${responseJson['name']}</h3>
    </div>
    <p class="description-p text-muted pe-0 pe-lg-0">
        ${responseJson['about']}
    </p>
    <p class="description-p text-muted pe-0 pe-lg-0">
        ${responseJson['category']['name']}
    </p>
    `
    console.log(responseJson['participants'])
    if (isReg(responseJson['participants'])) {
        document.querySelector("#certainEventText").innerHTML += `
        <em class="text-success col-lg-6 ">Вы зарегистрированы</em>
    `
    } else {
       
        document.querySelector("#certainEventText").innerHTML += `
        <button onclick="make_enrollment()" class="btn btn-dark">Зарегистрироваться на мероприятие</a>
    `
    }

    document.querySelector("#certainEventInfo").innerHTML = `
        <h5 class="text-end">Дата: ${responseJson['date']}</h5>
        <h5 class="text-end">Время: ${responseJson['time']}</h5>
        <h5 class="text-end">Город: ${responseJson['place']['city']}</h5>
        <h5 class="text-end">Место проведения: ${responseJson['place']['place_name']}</h5>
        <h5 class="text-end">Улица: ${responseJson['place']['street']}</h5>
        <h5 class = "text-end">Организатор: ${responseJson['organizer']}</h5>
    
    `
}

function isReg(data) {
        if(typeof localStorage.user=="undefined"){
            return false
        }else {
            isHere = data.filter(function(data){
                return data.id==localStorage.user
                }
            );
            
            if (isHere.length>0){
                return true
            }else {
                return false
            }
            
        }
}

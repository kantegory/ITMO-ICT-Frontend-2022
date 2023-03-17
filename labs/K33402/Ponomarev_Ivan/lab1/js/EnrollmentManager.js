async function get_my_events(event) {
    document.querySelector("#enrollmentsContainer").innerHTML = ``
    let response = await fetch('http://localhost:8000/api/enrollments/all?'+new URLSearchParams({
                                                                            user_id: localStorage.user
    }), {
        method: "GET",
        headers: {'Content-Type': 'application/json'}
    })

    const responseJson = await response.json()

    for (response of responseJson) {
        
        document.querySelector("#enrollmentsContainer").innerHTML += `
                    <div class="card mb-5" style="border-radius: 15px;">
                      <div class="card-body p-4">
                        <h3 class="mb-3">${response['event']['name']}</h3>
                        <p class="small mb-0"><i class="far fa-star fa-lg"></i>${response['event']['date']}</p>
                        <p class="about mt-4">${response['event']['intro']}</p>
                        <hr class="my-4">
                        <div class="d-flex justify-content-between align-items-center">
                          <p class="mb-0 text-uppercase"><i class="fas fa-cog me-2"></i> <span
                              class="text-muted small">${response['event']['category']['name']}</span></p>
                        <div class="buttons">
                          <button onclick="delete_enrollment(this)" class="btn btn-dark" value="${response['id']}">Отписаться</button>
                          
                        </div>
                        </div>
                      </div>
        `
    }
    if (Object.keys(responseJson).length==0){
        document.querySelector("#enrollmentsContainer").innerHTML += `<h3 class="text-center">Вы не зарегистрированы ни на одно мероприятие</h3>`
    }
}

async function make_enrollment(event) {
    if (typeof localStorage.user=="undefined"){
        document.querySelector("#login_button").click()
    } else{
        data = {}
        data['user'] = localStorage.user
        data['event'] = localStorage.event_id

        const response = await fetch('http://localhost:8000/api/enrollments/new', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        })
        const responseJson = await response.json()
        if (response.status==201){
            alert('Вы зарегистрировались на мероприятие')
        } else {
            alert(responseJson['message'])
        }
        location.reload()
    }
}

async function delete_enrollment(event) {

    console.log(event.value)
    await fetch('http://localhost:8000/api/enrollments/' + event.value.toString() + '/delete', {
        method: "DELETE",
        headers: {'Content-Type': 'application/json'}
    })

    alert("Резервация удалена")
    location.reload()
}
const idLogOut = document.querySelector('#logout');
const idLogIn = document.querySelector('#enter');
const enterLK = document.querySelector('#enterlk');
const select = document.querySelector('.event-type');
const result = document.querySelector('.region-type');
const cards = document.querySelectorAll('.card')

async function addNote(id) {
    const userId = JSON.parse(localStorage.user).id;
    const relation = {
        "userId": userId,
        "eventId": id
    }
    console.log(relation)
    const response = await fetch('http://localhost:3000/userEvents', {
        method: "POST",
        body: JSON.stringify(relation),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

select.addEventListener('change', (event) => {
        const { value } = event.target
})

result.addEventListener('change', (event) => {
    const { value } = event.target
})

function filter() {
    const searchForm = document.querySelector('.search-form')
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const eventTypeValue = select.value
        const regionValue = result.value
        console.log(eventTypeValue)
        console.log(regionValue)
        
        switch(eventTypeValue) {
            case 'all':
                cards.forEach(card => {
                    if (card.classList.contains(regionValue)) {
                        card.style.display = 'block'
                    } else {
                        card.style.display = 'none'
                    }
                }) 
                        break
            case 'active':
                cards.forEach(card => {
                    if (card.classList.contains('active') && card.classList.contains(regionValue)) {
                        card.style.display = 'block'
                    } else {
                        card.style.display = 'none'
                    }
                })
                break
            case 'theatre':
            cards.forEach(card => {
                if (card.classList.contains('theatre') && card.classList.contains(regionValue)) {
                    card.style.display = 'block'
                } else {
                    card.style.display = 'none'
                }
            })
            break
        }
    })
}
        
function logout() {
    localStorage.clear();
    window.location.href = "http://localhost:8000/html/entrance.html";
}

function check() {
    if (localStorage.accessToken){
        idLogIn.classList.add("d-none")
    }
    else {
        idLogIn.classList.remove("d-none")
    }
}

function checkenter() {
    if (!localStorage.accessToken){
        enterLK.classList.add("d-none");
        idLogOut.classList.add("d-none")
    }
}

checkenter();
check();
filter()
idLogOut.addEventListener('click', logout)
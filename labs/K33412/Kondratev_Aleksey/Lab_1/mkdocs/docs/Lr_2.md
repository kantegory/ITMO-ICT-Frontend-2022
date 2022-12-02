# Лабораторная работа 2: взаимодействие с внешним API

В данной лабораторной работе варианты остаются те же и нам нужно привязать то, что мы делали в ЛР1 к внешнему API средствами fetch/axios/xhr.

Многие теги "a" преобразовались в теги "button", чтобы была возможность взаимодействия с ними

* `header.js`

js файл для кнопок перехода, а также появления или изчезновения функционала, если пользователь авторизирован или нет

```js
const logoutButton = document.querySelector('.button-logout');
const entryButton = document.querySelector('#entry');
const registerButton = document.querySelector('#register');
const exitButton = document.querySelector('#exit');
const homeDirectori = document.querySelector('#lc')

function check() {
	if (localStorage.accessToken) {
		entryButton.classList.add('d-none');
		registerButton.classList.add('d-none');
		exitButton.classList.remove('d-none');
	}
	if (!localStorage.accessToken) {
		entryButton.classList.remove('d-none');
		registerButton.classList.remove('d-none');
		exitButton.classList.add('d-none');
	}
}

check();

entryButton.addEventListener('click', () => {
	window.location.href = "http://localhost:8000/entry.html";
})

logoutButton.addEventListener('click', () => {
	localStorage.clear();
	window.location.href = "http://localhost:8000/main.html";
})

registerButton.addEventListener('click', () => {
	window.location.href = "http://localhost:8000/registration.html";
})

homeDirectori.addEventListener('click', () => {
	window.location.href = "http://localhost:8000/personal-area.html";
})
```

* `personal-area.js`

js файл для отображения мероприятий пользователя, а также отписка от них

```js
const userId = JSON.parse(localStorage.user).id;
let users = [];
let events = [];
const myUsersEvents = [];
const myEvents = [];
const mainId = [];

async function getUsers() {
	const response = await fetch('http://localhost:3000/userEvents', {
		headers: {
			'Content-Type': 'application/json'
		}
	})
	const jsonResponse = await response.json();
	console.log('response', jsonResponse);
	jsonResponse.forEach(user => {
		if (user.userId === userId) {
			myUsersEvents.push(user.eventId);
			mainId.push(user);
		}
	})
}

async function getEvents() {
	const response = await fetch('http://localhost:3000/events', {
		headers: {
			'Content-Type': 'application/json'
		}
	})
	const jsonResponse = await response.json();
	console.log('response', jsonResponse);
	events = jsonResponse;
	events.forEach(item => {
		if (myUsersEvents.includes(item.id)) {
			myEvents.push(item)
		}
	})
	console.log("myevents", myEvents)
	console.log("myeventsuser", myUsersEvents)
	console.log("main", mainId)
	for (let i = 0; i < myEvents.length; i++) {
		document.querySelector("#container").innerHTML += getCardHtml(myEvents[i].name, myEvents[i].day, myEvents[i].text, myEvents[i].src, myEvents[i].id);
	}
}

async function deleteCard(event, id) {
	for (let i = 0; i < mainId.length; i++) {
		if (id === mainId[i].eventId && userId === mainId[i].userId) {
			const link = 'http://localhost:3000/userEvents/' + mainId[i].id;
			console.log(link);
			const response = await fetch(link, {
				method: "DELETE",
				headers: {
					'Content-Type': 'application/json'
				}
			})
		}
	}
}

function getCardHtml(name, day, text, src, id) {
	return `
			<div class="card me-4" data-card-id=${id} style="width: 18rem;">
				<img src=${src} class="card-img-top" alt="Люди идут в поход" style="height: 11rem;">
				<div class="card-body">
					<h5 class="card-title">${name}</h5>
					<p class="card-text">${text}</p>
					<p class="card-day">${day}</p>
					<a href="./event.html" class="btn btn-primary mb-2">На сайт мероприятия</a>
					<form onsubmit="deleteCard(event, ${id})">
						<button type="submit" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
							Отписаться
						</button>
					</form>
				</div>
			</div>
	`
}

getUsers();
getEvents();
```

* `main.html`

Скрипт написанный в main.html для фильтрации событий, а также для подписки на мероприятие

```js
const eventOptions = document.querySelector('.event-type');
const cityOptions = document.querySelector('.city-type');
const cards = document.querySelectorAll(".card");

async function subscribe(id) {
	const userId = JSON.parse(localStorage.user).id;
	const userEvent = {
		"userId": userId,
		"eventId": id
	}
	console.log(userEvent)
	const response = await fetch('http://localhost:3000/userEvents', {
		method: "POST",
		body: JSON.stringify(userEvent),
		headers: {
			'Content-Type': 'application/json'
		}
	})
}

eventOptions.addEventListener('change', (event) => {
	const { value } = event.target
})

cityOptions.addEventListener('change', (event) => {
	const { value } = event.target
})

function filter() {
	const searchForm = document.querySelector('.search-form')
	searchForm.addEventListener('submit', (event) => {
		event.preventDefault();
		const eventTypeValue = eventOptions.value;
		const cityTypeValue = cityOptions.value;
		console.log(eventTypeValue);
		console.log(cityTypeValue);

		switch(eventTypeValue) {
			case 'all':
				cards.forEach(card => {
					if (card.classList.contains(cityTypeValue)) {
						card.style.display = 'block'
					} else {
						card.style.display = 'none'
					}
				}) 
						break
			case 'active':
				cards.forEach(card => {
					if (card.classList.contains('active') && card.classList.contains(cityTypeValue)) {
						card.style.display = 'block'
					} else {
						card.style.display = 'none'
					}
				})
				break
			case 'music':
			cards.forEach(card => {
				if (card.classList.contains('music') && card.classList.contains(cityTypeValue)) {
					card.style.display = 'block'
				} else {
					card.style.display = 'none'
				}
			})
			break
		}
	})
}

filter();
```

* `registration.html`

Скрипт в registration.html для проверки авторизирован ли пользователь, а также регистрация нового

```js
	function checkAuth() {
	if (localStorage.accessToken) {
		window.location.href = "http://localhost:8000/main.html"
	}
}

async function register(event) {
	event.preventDefault()

	const inputs = Array.from(event.target.querySelectorAll('input'))

	const loginData = {}

	for (const input of inputs) {
		loginData[input.name] = input.value
	}

	console.log('login data', loginData)

	const response = await fetch('http://localhost:3000/register', {
		method: "POST",
		body: JSON.stringify(loginData),
		headers: {
			'Content-Type': 'application/json'
		}
	})

	const responseJson = await response.json()

	const { accessToken, user } = responseJson

	console.log('response', responseJson)

	localStorage.accessToken = accessToken
	localStorage.user = JSON.stringify(user)

	window.location.href = "http://localhost:8000/main.html"
}

document.addEventListener('DOMContentLoaded', () => checkAuth())
```

* `entry.html`

Скрипт в entry.html для проверки залогинин ли пользователь, а также само вхождение нашего пользователя

```js
const formElement = document.querySelector('form.d-flex-column')

async function login(event) {
	event.preventDefault()

	const inputs = Array.from(event.target.querySelectorAll('input'))

	const loginData = {}

	for (const input of inputs) {
		loginData[input.name] = input.value
	}

	console.log('login data', loginData)

	const response = await fetch('http://localhost:3000/login', {
		method: "POST",
		body: JSON.stringify(loginData),
		headers: {
			'Content-Type': 'application/json'
		}
	})

	const responseJson = await response.json()

	const { accessToken, user } = responseJson

	console.log('response', responseJson)

	localStorage.accessToken = accessToken
	localStorage.user = JSON.stringify(user)

	checkAuth(responseJson);
}

function checkAuth(responseJson) { 
	if (localStorage.accessToken && responseJson != 'Cannot find user' && responseJson != 'Password is too short' && responseJson != 'Incorrect password' && responseJson != 'Email and password are required') {
		window.location.href = "http://localhost:8000/main.html"
	}
}

formElement.addEventListener('submit', () => {
	login(event);
})
document.addEventListener('DOMContentLoaded', () => checkAuth())
```


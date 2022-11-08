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


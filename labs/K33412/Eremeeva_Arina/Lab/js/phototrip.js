const idLogOut = document.querySelector('#logout');
const idLogIn = document.querySelector('#enter');
const enterLK = document.querySelector('#enterlk');

function getAuthToken() {
	localStorage.accessToken
}


async function addNote() {
	const userId = JSON.parse(localStorage.user).id;
	const eventId = Number(document.querySelector(".note").dataset.eventId);
	const relation = {
		"userId": userId,
		"eventId": eventId
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
idLogOut.addEventListener('click', logout)
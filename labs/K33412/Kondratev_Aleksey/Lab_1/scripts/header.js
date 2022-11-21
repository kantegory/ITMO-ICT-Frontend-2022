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
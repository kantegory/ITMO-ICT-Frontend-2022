const loginBtn = document.querySelector("#login");
const signupBtn = document.querySelector("#signup");
const logoutBtn = document.querySelector("#logout");
const profileBtn = document.querySelector("#profile")

function check() {
	if (localStorage.accessToken) {
		loginBtn.classList.add("d-none");
		signupBtn.classList.add("d-none");
		logoutBtn.classList.remove("d-none");
        profileBtn.classList.remove("d-none");
	}
	if (!localStorage.accessToken) {
		loginBtn.classList.remove("d-none");
		signupBtn.classList.remove("d-none");
		logoutBtn.classList.add("d-none");
        profileBtn.classList.add("d-none");
	}
}

check();

loginBtn.addEventListener('click', () => {
	window.location.href = "log_in.html";
})

signupBtn.addEventListener('click', () => {
	window.location.href = "sign_up.html";
})

logoutBtn.addEventListener('click', () => {
	localStorage.clear();
	window.location.href = "index.html";
})

profileBtn.addEventListener('click', () => {
	window.location.href = "profile.html";
})
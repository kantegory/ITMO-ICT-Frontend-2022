function getButtonHTML() {
    if (localStorage.accessToken) {
        return `
            <a href="./profile.html" class="btn btn-orange btn-md" role="button">
                Профиль
            </a>

            <button type="button" class="btn btn-md btn-orange dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="./profile.html">Профиль</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" onclick="logout()">Выйти</a></li>
            </ul>
        `
    } else {
        return `
            <a href="./signup.html" class="btn btn-orange btn-md" role="button">
                Профиль
            </a>

            <button type="button" class="btn btn-md btn-orange dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="./signin.html">Войти</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="./signup.html">Зарегистрироваться</a></li>
            </ul>
        `
    }
}

async function loadProfileButton() {
    document.querySelector("#profileButtonGroup").innerHTML = getButtonHTML()
}

async function logout() {
    localStorage.clear()
    window.location.href = "/"
}

document.addEventListener('DOMContentLoaded', () => {
    loadProfileButton()
})

// МОДАЛЬНЫЕ ОКНА

// Получаем все элементы, для открытия модальных окон
const btn__open_account = document.querySelector('.header__management-account');
const btn__open_account2 = document.querySelector('.modal__registration .modal-form-description a');
const btn__open_registration = document.querySelector('.modal__account .modal-form-description a');

// Получаем модальные окна
const modal__account = document.querySelector('.modal__account');
const modal__registration = document.querySelector('.modal__registration');

// Получаем кнопки закрытия
const btn__close_account = document.querySelector('.modal__account .modal-close');
const btn__close_registration = document.querySelector('.modal__registration .modal-close');

// Получаем кнопку "Войти" (submit)
const btn__account_page = document.querySelector('.modal__account input[type="submit"]');

// Открытие модального окна с входом
btn__open_account.addEventListener('click', function(e) {
    e.preventDefault(); // Предотвращаем переход по ссылке

    if (localStorage.accessToken) {
        window.location.href = "./../../account.html"
    } else {
        modal__account.classList.toggle('active');
        body.classList.toggle('modal');
    }
});

// Открытие модального окна с регистрацией из входа
btn__open_registration.addEventListener('click', function(e) {
    e.preventDefault(); // Предотвращаем переход по ссылке

    modal__account.classList.toggle('active');
    modal__registration.classList.toggle('active');
});

// Открытие модального окна с входом из регистрации
btn__open_account2.addEventListener('click', function(e) {
    e.preventDefault(); // Предотвращаем переход по ссылке

    modal__registration.classList.toggle('active');
    modal__account.classList.toggle('active');
});

// Закрытие модального окна с входом
btn__close_account.addEventListener('click', function(e) {
    modal__account.classList.toggle('active');
    body.classList.toggle('modal');
});

// Закрытие модального окна с регистрацией
btn__close_registration.addEventListener('click', function(e) {
    modal__registration.classList.toggle('active');
    body.classList.toggle('modal');
});


// АВТОРИЗАЦИЯ

async function login(event) {
    event.preventDefault();

    const inputs = Array.from(event.target.querySelectorAll('input'));

    const loginData = {};

    for (const input of inputs) {
        loginData[input.name] = input.value;
    }

    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        body: JSON.stringify(loginData),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const responseJson = await response.json();

    if (response.status === 200) {
        // Авторизация успешна
        const { accessToken, user } = responseJson;

        localStorage.accessToken = accessToken;
        localStorage.user = JSON.stringify(user);

        window.location.href = './../../account.html';
    } else {
        // Ошибка авторизации
        alert('Ошибка авторизации. Пожалуйста, проверьте введенные данные.');
    }
}


// РЕГИСТРАЦИЯ

async function registration(event) {
    event.preventDefault()

    const inputs = Array.from(event.target.querySelectorAll('input'))

    const registerData = {}

    for (const input of inputs) {
        registerData[input.name] = input.value
    }

    const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        body: JSON.stringify(registerData),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const responseJson = await response.json()

    if (response.status === 201) {
        // Регистрация успешна
        const { accessToken, user } = responseJson;

        localStorage.accessToken = accessToken;
        localStorage.user = JSON.stringify(user);

        window.location.href = "./../../account.html"
    }
}
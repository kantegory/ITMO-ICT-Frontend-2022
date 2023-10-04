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

// Получаем body
const body = document.querySelector('body');

// Открытие модального окна с входом
btn__open_account.addEventListener('click', function(e) {
    e.preventDefault(); // Предотвращаем переход по ссылке

    modal__account.classList.toggle('active');
    body.classList.toggle('modal');
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



// Получаем форму и её элементы
const form = document.getElementById('accountForm');
const emailInput = form.querySelector('input[type="email"]');
const passwordInput = form.querySelector('input[type="password"]');

// Обработка события отправки формы
form.addEventListener('submit', (e) => {
e.preventDefault(); // Предотвращаем отправку формы по умолчанию

// Получаем данные из JSON
fetch('https://egota1n.github.io/DressImpress/data.json')
    .then((response) => response.json())
    .then((data) => {
    const users = data.users;

    // Проверяем данные из формы с данными из JSON
    const user = users.find((user) => user.email === emailInput.value && user.password === passwordInput.value);

    if (user) {
        // Если данные совпадают, переходим на страницу product.js
        window.location.href = 'account.html';
    } else {
        alert('Неправильный email или пароль');
    }
    })
    .catch((error) => {
    console.error('Ошибка при загрузке данных из JSON', error);
    });
});
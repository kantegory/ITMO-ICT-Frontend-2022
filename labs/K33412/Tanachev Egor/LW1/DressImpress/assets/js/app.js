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



const accountForm = document.getElementById("accountForm");

// Добавляем обработчик события на отправку формы
accountForm.addEventListener("submit", (event) => {
    // Отменяем стандартное действие отправки формы, чтобы предотвратить перезагрузку страницы
    event.preventDefault();

    // Перенаправляем пользователя на страницу "account.html"
    window.location.href = "account.html";
});
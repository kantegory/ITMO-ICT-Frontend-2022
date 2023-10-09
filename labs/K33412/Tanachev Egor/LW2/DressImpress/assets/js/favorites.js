// МОДАЛЬНЫЕ ОКНА

// Получаем все элементы, для открытия модальных окон
const btn__open_favorites = document.querySelector('.header__management-favorite');

// Получаем модальные окна
const modal__favorites = document.querySelector('.modal__favorites');

// Получаем кнопки закрытия
const btn__close_favorites = document.querySelector('.modal__favorites .modal-close');

// Получаем body
const body = document.querySelector('body');

// Открытие модального окна с входом c избранными
btn__open_favorites.addEventListener('click', function(e) {
    e.preventDefault(); // Предотвращаем переход по ссылке

    modal__favorites.classList.toggle('active');
    body.classList.toggle('modal');
});

// Закрытие модального окна с избранными
btn__close_favorites.addEventListener('click', function(e) {
    modal__favorites.classList.toggle('active');
    body.classList.toggle('modal');
});

// // ИЗБРАННЫЕ ТОВАРЫ

// Находим контейнер для карточек
const favoritesContainer = document.getElementById("favorites-cards");

// Получаем Id из localStorage
const user = JSON.parse(localStorage.getItem('user'));
const userId = user ? user.id : null;

// Основная функция для генерации и заполнения карточек
function generateFavoriteCards(data) {
    favoritesContainer.innerHTML = '';

    data.forEach((item) => {
        // Создаем шаблон карточки
        const cardTemplate = `
            <div class="modal__favorites-card" data-card-id="${item.id}">
                <img class="modal__favorites-img" src="${item.image}" alt="${item.title}">
                <div class="modal__favorites-info">
                    <h3 class="modal__favorites-title">${item.title}</h3>
                    <p class="modal__favorites-price">${item.price}</p>
                    <button class="modal__favorites-btn" onclick="deleteFavoriteCard(${item.id}, event);">Удалить</button>
                </div>
            </div>
        `;

        // Создаем элемент карточки из шаблона и добавляем его в контейнер
        const cardElement = document.createElement('div');
        cardElement.innerHTML = cardTemplate;
        favoritesContainer.appendChild(cardElement.firstElementChild);
    });
}

async function fetchData() {
    try {
        if (!userId) {
            console.error('ID пользователя не найден в localStorage');
            return;
        }

        const response = await fetch(`http://localhost:3000/favorites?userId=${userId}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getAuthToken()}`
            }
        });

        if (!response.ok) {
            throw new Error('Ошибка при выполнении запроса');
        }

        const data = await response.json();
        // Вызываем функцию с данными из сервера
        generateFavoriteCards(data);
    } catch (error) {
        console.error('Произошла ошибка при загрузке данных:', error);
    }
}

// ДОБАВЛЕНИЕ ТОВАРА В ИЗБРАННЫЕ

function getAuthToken() {
    return localStorage.accessToken
}

function addCardFavorite(event) {
    event.preventDefault();
    const { dataset: { btnId } } = event.target;
  
    const cardId = btnId;
    const userId = JSON.parse(localStorage.getItem('user')).id;
    const image = document.querySelector(`.section__catalog-card[data-card-id='${btnId}'] img`).getAttribute("src");
    const h3 = document.querySelector(`.section__catalog-card[data-card-id='${btnId}'] h3`).textContent;
    const p = document.querySelector(`.section__catalog-card[data-card-id='${btnId}'] p`).textContent;
  
    // Создаем объект cardData и заполняем его данными
    const cardData = {
      cardId: cardId,
      userId: userId,
      image: image,
      title: h3,
      price: p
    };
  
    // Отправляем данные на сервер
    sendCardDataToServer(cardData);
}
  
  async function sendCardDataToServer(cardData) {
    const response = await fetch('http://localhost:3000/600/favorites', {
      method: "POST",
      body: JSON.stringify(cardData),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAuthToken()}`
      }
    });
  }


// УДАЛЕНИЕ КАРТОЧКИ

async function deleteFavoriteCard(cardId, event) {
    event.preventDefault();

    const response = await fetch(`http://localhost:3000/600/favorites/${cardId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${getAuthToken()}`
        }
    });

    if (response.status === 200) {
        fetchData();
    }    
}
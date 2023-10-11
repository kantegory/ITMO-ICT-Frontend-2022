// ПЕРЕКЛЮЧЕНИЕ МЕНЮ

// Получаем все ссылки с классом .header__categories-type
const links = document.querySelectorAll('.header__categories-type');

// Получаем элемент, содержимое которого мы будем изменять
const catalogName = document.querySelector('.section__catalog-name');

localStorage.catalogName = catalogName.textContent;

// Добавляем обработчик события для каждой ссылки
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Предотвращаем переход по ссылке

        // Получаем текст из ссылки и устанавливаем его в элемент .section__catalog-name
        catalogName.textContent = this.textContent;
    });
});

// Добавляем обработчик события для каждой ссылки
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Предотвращаем переход по ссылке

        // Убираем класс active у всех ссылок
        links.forEach(otherLink => {
            otherLink.classList.remove('active');
        });

        // Добавляем класс active только к выбранной ссылке
        this.classList.add('active');
    });
});


// ФИЛЬТРЫ 

const section__catalog_size_btn = document.querySelector('.section__catalog-size-btn');
const section__catalog_sort_btn = document.querySelector('.section__catalog-sort-btn');

const section__catalog_size = document.querySelector('.section__catalog-size');
const section__catalog_sort = document.querySelector('.section__catalog-sort');

section__catalog_size_btn.addEventListener('click', function(e) {
    e.preventDefault(); // Предотвращаем переход по ссылке

    section__catalog_size.classList.toggle('active');
});

section__catalog_sort_btn.addEventListener('click', function(e) {
    e.preventDefault(); // Предотвращаем переход по ссылке

    section__catalog_sort.classList.toggle('active');
});



// ВЫВОД ТОВАРОВ В КАТАЛОГ

document.addEventListener('DOMContentLoaded', async function () {
  const catalogElement = document.querySelector('#catalog');

  function getCardHtml({ id, title, price, image }) {
      return `
          <div class="section__catalog-card" data-card-id="${id}">
              <img class="section__catalog-card-img" src="${image}" alt="${title}">
              <h3 class="section__catalog-card-title">${title}</h3>
              <p class="section__catalog-card-price">${price}</p>
              <button class="section__catalog-card-btn" onclick="addCardFavorite(event);" data-btn-id="${id}">Нравится</button>
          </div>
      `;
  }

  async function loadAndDisplayCards(category = "Все товары") {
      try {
          // Формируем URL для запроса на сервер с учетом выбранной категории
          const url = category === "Все товары"
              ? 'http://localhost:3000/products'
              : `http://localhost:3000/products?category=${encodeURIComponent(category)}`;

          // Загружаем данные из JSON-сервера
          const response = await fetch(url);
          if (!response.ok) {
              throw new Error('Ошибка загрузки данных');
          }

          const data = await response.json(); // Получаем данные JSON

          // Очищаем контейнер перед загрузкой новых карточек
          catalogElement.innerHTML = '';

          // Генерируем карточки товаров из данных
          data.forEach((item) => { // Обращаемся к массиву data
              const cardHtml = getCardHtml(item);
              catalogElement.insertAdjacentHTML('beforeend', cardHtml);
          });
      } catch (error) {
          console.error('Ошибка загрузки данных:', error);
      }
  }

  // Загрузка и отображение карточек товаров при загрузке страницы
  loadAndDisplayCards();

  // Добавляем обработчик события для выбора категории
  const categoryLinks = document.querySelectorAll('.header__categories-type');
  categoryLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault(); // Предотвращаем переход по ссылке
          const selectedCategory = this.textContent;
          loadAndDisplayCards(selectedCategory);
      });
  });
});
// ВЫВОД ТОВАРОВ В КАТАЛОГ

document.addEventListener('DOMContentLoaded', function () {
    const catalogElement = document.getElementById('catalog');

    // Функция для загрузки данных из data.json
    function loadData() {
        fetch('https://egota1n.github.io/DressImpress/data.json')
            .then((response) => response.json())
            .then((data) => {
                let hoodieCount = 0; // Переменная для отслеживания количества худи
                const maxHoodies = 4; // Максимальное количество худи

                // Генерируем карточки товаров из данных
                data.forEach((item) => {
                    if (item.category === 'Худи' && hoodieCount < maxHoodies) {
                        const card = document.createElement('div');
                        card.classList.add('section__catalog-card');

                        const img = document.createElement('img');
                        img.classList.add('section__catalog-card-img');
                        img.src = item.image;

                        const title = document.createElement('h3');
                        title.classList.add('section__catalog-card-title');
                        title.textContent = item.title;

                        const price = document.createElement('p');
                        price.classList.add('section__catalog-card-price');
                        price.textContent = item.price;

                        card.appendChild(img);
                        card.appendChild(title);
                        card.appendChild(price);

                        catalogElement.appendChild(card);
                        
                        hoodieCount++; // Увеличиваем счетчик худи
                    }
                });
            })
            .catch((error) => {
                console.error('Ошибка загрузки данных:', error);
            });
    }

    // Вызываем функцию загрузки данных
    loadData();
});

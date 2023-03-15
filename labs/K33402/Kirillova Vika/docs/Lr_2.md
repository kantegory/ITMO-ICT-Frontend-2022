# Лабораторная работа 2: взаимодействие с внешним API

В данной лабораторной работе варианты остаются те же и нам нужно привязать то, что мы делали в ЛР1 к внешнему API средствами fetch/axios/xhr.

Многие теги "a" преобразовались в теги "button", чтобы была возможность взаимодействия с ними

* `db.json`


```js
{
  "users": [
    {
      "email": "example@mail.com",
      "password": "$2a$10$8xtuXfIAg62kNIB7ZcLGVevATj2VlraLav2FEzX2aUi7Roo8o66fO",
      "firstname": "test",
      "lastname": "testtest",
      "age": "20",
      "id": 1
    }
  ],
  "cards": [
    {
      "name": "Pottery studio",
      "event": "Master class",
      "place": "Zvenigorodskaya",
      "image": "./image/pottery.jpg",
      "id": 1
    },
    {
      "name": "'Мастер и Маргарита'",
      "event": "Show",
      "place": "Zvenigorodskaya",
      "image": "./image/master.jpg",
      "id": 2
    },
    {
      "name": "Culinary Studio",
      "event": "Master class",
      "place": "Gorkovskaya",
      "image": "./image/kitchen.jpg",
      "id": 3
    },
    {
      "name": "'Взрослые игры'",
      "event": "Show",
      "place": "Spasskaya",
      "image": "./image/games.png",
      "id": 4
    }
  ],
  "userCard": [
    {
      "userId": 1,
      "cardId": 3,
      "id": 1
    },
    {
      "userId": 1,
      "cardId": 1,
      "id": 7
    },
    {
      "userId": 1,
      "cardId": 2,
      "id": 8
    }
  ]
}
```

* `package.json`

```js
{
  "name": "db.json",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "py -m http.server 8000",
    "server": "json-server db.json -m ./node_modules/json-server-auth"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "json-server": "^0.17.2",
    "json-server-auth": "^2.1.0"
  }
}

```

### Скрипт написанный в main.html для фильтрации событий, а также для подписки на мероприятие
* `main.html`

```js
function filter() {
    const searchForm = document.querySelector('.search-form')
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const eventTypeValue = eventOptions.value;
      const cityTypeValue = cityOptions.value;
      console.log(eventTypeValue, cityTypeValue)

      switch(eventTypeValue) {
        case 'all':
          cards.forEach(card => {
            if (card.classList.contains(cityTypeValue)) {
              card.style.display = 'block'
            } else {
              card.style.display = 'none'
            }
          }) 
              break
        case 'Master-class':
          cards.forEach(card => {
            if (card.classList.contains('Master-class') && card.classList.contains(cityTypeValue)) {
              card.style.display = 'block'
            } else {
              card.style.display = 'none'
            }
          })
          break
        case 'Show':
        cards.forEach(card => {
          if (card.classList.contains('Show') && card.classList.contains(cityTypeValue)) {
            card.style.display = 'block'
          } else {
            card.style.display = 'none'
          }
        })
        break
      }
    })
  }

  function check() {
    if (localStorage.accessToken) {
      entry.classList.add('d-none');
      registr.classList.add('d-none');
      exit.classList.remove('d-none');
    } else {
      entry.classList.remove('d-none');
      registr.classList.remove('d-none');
      exit.classList.add('d-none');
    }
  }

  const subscribe = async (event, id) => {
    event.preventDefault();

    const userId = JSON.parse(localStorage.user).id;
    const data = {
      "userId": userId,
      "cardId": id
    }
    await fetch('http://localhost:3000/userCard', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  function logout() {
    localStorage.clear();
    window.location.href = "http://localhost:8000/signIn.html"
  }

  check();
  filter();
```
### Скрипт в registration.html для проверки авторизирован ли пользователь, а также регистрация нового
* `registration.html`

```js
const form = document.querySelector('form.d-flex-column');

    const entry = document.getElementById('entry');
    const exit = document.getElementById('exit');
    const registr = document.getElementById('registr');

    async function register(evt) {
      evt.preventDefault();

      const inputs = Array.from(evt.target.querySelectorAll('input'));

      const loginData = {}

      for (const input of inputs) {
        loginData[input.name] = input.value
      }

      const response = await fetch('http://localhost:3000/register', {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const responseJson = await response.json();

      const { accessToken, user } = responseJson;

      if (accessToken) {
        localStorage.accessToken = accessToken;
        localStorage.user = JSON.stringify(user);
      }

      window.location.href = "http://localhost:8000/main.html"
    }

    function check() {
      if (localStorage.accessToken) {
        window.location.href = "http://localhost:8000/main.html"
      } else {
        entry.classList.remove('d-none');
        registr.classList.remove('d-none');
        exit.classList.add('d-none');
      }
    }

    function logout() {
      localStorage.clear();
      window.location.href = "http://localhost:8000/signIn.html"
    }

    check()

    form.addEventListener('submit', (evt) => {
      register(evt)
    })
```

### Скрипт в signIn.html для проверки залогинин ли пользователь, а также само вхождение нашего пользователя
* `signIn.html`

```js
const form = document.querySelector('form.d-flex-column');

    const entry = document.getElementById('entry');
    const exit = document.getElementById('exit');
    const registr = document.getElementById('registr');

    async function login(evt) {
      evt.preventDefault();

      const inputs = Array.from(evt.target.querySelectorAll('input'));

      const loginData = {}

      for (const input of inputs) {
        loginData[input.name] = input.value
      }

      const response = await fetch('http://localhost:3000/login', {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const responseJson = await response.json();

      const { accessToken, user } = responseJson;

      localStorage.accessToken = accessToken;
      localStorage.user = JSON.stringify(user);

      window.location.href = "http://localhost:8000/main.html"
    }

    function check() {
      if (localStorage.accessToken) {
        window.location.href = "http://localhost:8000/main.html"
      } else {
        entry.classList.remove('d-none');
        registr.classList.remove('d-none');
        exit.classList.add('d-none');
      }
    }

    function logout() {
      localStorage.clear();
      window.location.href = "http://localhost:8000/signIn.html"
    }

    check()

    form.addEventListener('submit', (evt) => {
      login(evt)
    })
```


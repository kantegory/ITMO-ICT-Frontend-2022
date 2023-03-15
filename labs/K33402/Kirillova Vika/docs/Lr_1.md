# Лабораторная работа №1

В данной лабораторной работе надо выбрать вариант и выполнить вёрстку сайта средствами HTML, CSS и Bootstrap.

Мой вариант: 
Платформа для поиска профессиональных мероприятий (пример: https://www.meetup.com/ru-RU/)
Реализовать вёрстку следующих страниц:

Вход

Регистрация

Поиск мероприятия (фильтрации по типу мероприятия, месту проведения)

Календарь ближайших мероприятий

Страница мероприятия

Личный кабинет пользователя со списком мероприятий, на которые он записывался

### Главная страница нашего сайта с сортировкой мероприятий
* `main.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Главная страница">
  <title>Главная</title>
  <link rel="stylesheet" href="./styles/main.css">
  <link rel="stylesheet" href="./styles/light.css" media="(prefers-color-scheme: light)">
  <link rel="stylesheet" href="./styles/dark.css" media="(prefers-color-scheme: dark)">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
</head>
<body>
  <header class="container-fluid colors pb-2 pt-2">
    <nav class="navbar navbar-expand-md d-flex justify-content-between">
      <div>
        <a class="colors navbar-brand text-color fs-4 p-2" href="./main.html">Main</a>
        <a class="colors navbar-brand text-color fs-5 p-2" href="./lk.html">Personal area</a>
        <a class="colors navbar-brand text-color fs-6 p-2" href="./calendar.html">Calendar</a>
      </div>
      <div>
        <a class="colors navbar-brand text-color fs-6" href="./signIn.html">Entry</a>
        <a class="colors navbar-brand text-color fs-6 button-logout" href="#">Exit</a>
        <a class="colors navbar-brand text-color fs-6" href="./registration.html">Register</a>
      </div>
    </nav>
  </header>

  <main class="container-fluid background-main">
    <section class="d-flex flex-column align-items-center pt-5">
      <h2 class="h2 mb-4 text-color">Current events</h2>
      <div class="d-flex justify-content-center m-0">
        <p class="fs-5 pe-3 text-color">Sort</p>
        <div class="dropdown me-3">
          <select class="form-select-sm event-type" aria-label=".form-select-lg example">
            <option value="all">Select the type of event</option>
            <option value="Master-class">Master class</option>
            <option value="Show">Show</option>
          </select>
        </div>
        <div class="dropdown me-3">
          <select class="form-select-sm subway-type" aria-label=".form-select-lg example">
            <option value="everything">Choose subway</option>
            <option value="Zvenigorodskaya">Zvenigorodskaya</option>
            <option value="Gorkovskaya">Gorkovskaya</option>
            <option value="Spasskaya">Spasskaya</option>
          </select>
        </div>
        <form class="search-form d-flex justify-content-end col-12 col-sm-2 col-lg-4 col-xl-6">
          <button type="submit" id="search" class="btn btn-info btn-sm " style="background-color:#77d260; border: 1px solid #77d260;">Search</button>
        </form>
      </div>
      <div class="row justify-content-center pt-5 pb-5">
        <div class="card me-4 everything Master-class Zvenigorodskaya card-colors background text-color" style="width: 18rem;" data-event-id="1">
          <img src="./image/pottery.jpg" class="card-img-top" style="object-fit: cover;" height="262" width="262" alt="pottery studio and peoples" style="height: 11rem;">
          <div class="card-body">
            <h3 class="card-title">Pottery studio</h3>
            <p class="card-text">Master class</p>
            <p class="card-data">Zvenigorodskaya</p>
          <a href="./event.html" class="btn btn-primary">Event page</a>
          <form action="">
            <button type="submit" class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Subscribe
            </button>
          </form>
          </div>
        </div>
        <div class="card me-4 everything Show Zvenigorodskaya card-colors background text-color" style="width: 18rem;" data-event-id="2">
          <img src="./image/master.jpg" class="card-img-top" style="object-fit: cover;" height="262" width="262" alt="Concert" style="height: 11rem;">
          <div class="card-body">
            <h3 class="card-title">"Мастер и Маргарита"</h3>
            <p class="card-text">Show</p>
            <p class="card-data">Zvenigorodskaya</p>
          <a href="./event.html" class="btn btn-primary">Event page</a>
          <form action="">
            <button type="submit" class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Subscribe
            </button>
          </form>
          </div>
        </div>
        <div class="card me-4 everything Master-class Gorkovskaya card-colors background text-color" style="width: 18rem;" data-event-id="3">
          <img src="./image/kitchen.jpg" class="card-img-top" style="object-fit: cover;" height="262" width="262" alt="Culinary Studio" style="height: 11rem;">
          <div class="card-body">
            <h3 class="card-title">Culinary Studio</h3>
            <p class="card-text">Master class</p>
            <p class="card-data">Gorkovskaya</p>
          <a href="./event.html" class="btn btn-primary">Event page</a>
          <form action="">
            <button type="submit" class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Subscribe
            </button>
          </form>
          </div>
        </div>
        <div class="card me-4 everything Show Spasskaya card-colors background text-color" style="width: 18rem;" data-event-id="4">
          <img src="./image/games.png" class="card-img-top" style="object-fit: cover;" height="262" width="262" alt="Concert" style="height: 11rem;">
          <div class="card-body">
            <h3 class="card-title">"Взрослые игры"</h3>
            <p class="card-text">Show</p>
            <p class="card-data">Spasskaya</p>
          <a href="./event.html" class="btn btn-primary">Event page</a>
          <form action="">
            <button type="submit" class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Subscribe
            </button>
          </form>
          </div>
        </div>
      </div>
    </section>
  </main>

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title" id="exampleModalLabel">You are recorded</h3>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          We are waiting for you at our event in a good mood
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

  <footer class="container-fluid colors">
    <div class="d-flex justify-content-between py-4 my-4 mb-0 text-color">
      <p>Made by Vika Kirillova</p>
      <p>Frontend 2022-2023</p>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  <script>
  const eventOptions = document.querySelector('.event-type');
  const cityOptions = document.querySelector('.subway-type');
  const cards = document.querySelectorAll(".card");

  eventOptions.addEventListener('change', (event) => {
      const { value } = event.target
    })

  cityOptions.addEventListener('change', (event) => {
    const { value } = event.target
  })

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

  filter();
  </script>
</body>
</html>

```
### HTML файл для входа в учетную запись
* `signIn.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Login">
  <title>Login</title>
  <link rel="stylesheet" href="./styles/main.css">
  <link rel="stylesheet" href="./styles/light.css" media="(prefers-color-scheme: light)">
  <link rel="stylesheet" href="./styles/dark.css" media="(prefers-color-scheme: dark)">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
</head>
<body>
  <header class="container-fluid colors pb-2 pt-2">
    <nav class="navbar navbar-expand-md d-flex justify-content-between">
      <div>
        <a class="colors navbar-brand text-color fs-4 p-2" href="./main.html">Main</a>
        <a class="colors navbar-brand text-color fs-5 p-2" href="./lk.html">Personal area</a>
        <a class="colors navbar-brand text-color fs-6 p-2" href="./calendar.html">Calendar</a>
      </div>
      <div>
        <a class="colors navbar-brand text-color fs-6" href="./signIn.html">Entry</a>
        <a class="colors navbar-brand text-color fs-6 button-logout" href="#">Exit</a>
        <a class="colors navbar-brand text-color fs-6" href="./registration.html">Register</a>
      </div>
    </nav>
  </header>

  <main class="container-xl p-5 mb-5">
    <form class="d-flex-column">
      <h1 class="row mb-5 justify-content-center">Login</h1>
      <div class="row mb-3 justify-content-center">
        <label for="email" class="col-sm-1 col-form-label">Email</label>
        <div class="col-sm-3 col-md-4">
          <input type="text" class="form-control" name="email" id="email" autocomplete="off" placeholder="vika@gmail.com">
        </div>
      </div>
      <div class="row mb-3 justify-content-center">
        <label for="password" class="col-sm-1 col-form-label">Password</label>
        <div class="col-sm-3 col-md-4">
          <input type="password" class="form-control" name="password" id="password" autocomplete="off" placeholder="vika1234">
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-sm-4 col-md-5">
          <button type="submit" class="btn btn-primary">Sign in</button>
          <a class="btn btn-primary" href="./registration.html">Sign up</a>
        </div>
      </div>
    </form>
  </main>

  <footer class="container-fluid colors">
    <div class="d-flex justify-content-between py-4 my-4 mb-0 text-color">
      <p>Made by Vika Kirillova</p>
      <p>Frontend 2022-2023</p>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</body>
</html>

```

### Регистрация пользователя
* `registration.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Registration">
  <title>Registration</title>
  <link rel="stylesheet" href="./styles/main.css">
  <link rel="stylesheet" href="./styles/light.css" media="(prefers-color-scheme: light)">
  <link rel="stylesheet" href="./styles/dark.css" media="(prefers-color-scheme: dark)">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
</head>
<body>
  <header class="container-fluid colors pb-2 pt-2">
    <nav class="navbar navbar-expand-md d-flex justify-content-between">
      <div>
        <a class="colors navbar-brand text-color fs-4 p-2" href="./main.html">Main</a>
        <a class="colors navbar-brand text-color fs-5 p-2" href="./lk.html">Personal area</a>
        <a class="colors navbar-brand text-color fs-6 p-2" href="./calendar.html">Calendar</a>
      </div>
      <div>
        <a class="colors navbar-brand text-color fs-6" href="./signIn.html">Entry</a>
        <a class="colors navbar-brand text-color fs-6 button-logout" href="#">Exit</a>
        <a class="colors navbar-brand text-color fs-6" href="./registration.html">Register</a>
      </div>
    </nav>
  </header>

  <main class="container-xl p-5">
    <form class="d-flex-column" onsubmit="register(event)">
      <h1 class="row mb-5 justify-content-center">Registration</h1>
      <div class="row mb-3 justify-content-center">
        <label for="inputName3" class="col-sm-1 col-form-label">Name</label>
        <div class="col-sm-3">
          <input type="text" class="form-control" name="firstname" id="inputName3" placeholder="Vika" autocomplete="off" required>
        </div>
      </div>
      <div class="row mb-3 justify-content-center">
        <label for="inputSurname3" class="col-sm-1 col-form-label">Surname</label>
        <div class="col-sm-3">
          <input type="text" class="form-control" name="lastname" id="inputSurname3" placeholder="Kirillova" autocomplete="off" required>
        </div>
      </div>
      <div class="row mb-3 justify-content-center">
        <label for="inputEmail3" class="col-sm-1 col-form-label">Email</label>
        <div class="col-sm-3">
          <input type="email" class="form-control" name="email" id="inputEmail3" placeholder="vika@gmail.com" autocomplete="off" required>
        </div>
      </div>
      <div class="row mb-3 justify-content-center">
        <label for="inputLogin3" class="col-sm-1 col-form-label">Username</label>
        <div class="col-sm-3">
          <input type="text" class="form-control" name="login" id="inputLogin3" placeholder="Vika123" autocomplete="off" required>
        </div>
      </div>
      <div class="row mb-3 justify-content-center">
        <label for="inputPassword3" class="col-sm-1 col-form-label">Password</label>
        <div class="col-sm-3">
          <input type="password" class="form-control" name="password" id="inputPassword3" autocomplete="off" required>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-sm-4">
          <button type="submit" class="btn btn-primary">Register</button>
        </div>
      </div>
    </form>
  </main>

  <footer class="container-fluid colors">
    <div class="d-flex justify-content-between py-4 my-4 mb-0 text-color">
      <p>Made by Vika Kirillova</p>
      <p>Frontend 2022-2023</p>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</body>
</html>

```

### Календарь с нашими мероприятиями
* `calendar.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Calendar">
  <title>Calendar</title>
  <link rel="stylesheet" href="./styles/main.css">
  <link rel="stylesheet" href="./styles/light.css" media="(prefers-color-scheme: light)">
  <link rel="stylesheet" href="./styles/dark.css" media="(prefers-color-scheme: dark)">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
</head>
<body>
  <header class="container-fluid colors pb-2 pt-2">
    <nav class="navbar navbar-expand-md d-flex justify-content-between">
      <div>
        <a class="colors navbar-brand text-color fs-4 p-2" href="./main.html">Main</a>
        <a class="colors navbar-brand text-color fs-5 p-2" href="./lk.html">Personal area</a>
        <a class="colors navbar-brand text-color fs-6 p-2" href="./calendar.html">Calendar</a>
      </div>
      <div>
        <a class="colors navbar-brand text-color fs-6" href="./signIn.html">Entry</a>
        <a class="colors navbar-brand text-color fs-6 button-logout" href="#">Exit</a>
        <a class="colors navbar-brand text-color fs-6" href="./registration.html">Register</a>
      </div>
    </nav>
  </header>

  <main class="container-fluid background-main">
    <section class="row pt-5 pb-5">
      <h1 class="text-color text-center">Event calendar</h1>
      <iframe src="https://calendar.yandex.ru/embed/week?&layer_ids=20024228&tz_id=Europe/Moscow&layer_names=фронт" width="1000" height="575" frameborder="0" style="border: 1px solid #000000">Календарь</iframe>
    </section>
  </main>

  <footer class="container-fluid colors">
    <div class="d-flex justify-content-between py-4 my-4 mb-0 text-color">
      <p>Made by Vika Kirillova</p>
      <p>Frontend 2022-2023</p>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  <script src="./scripts/header.js"></script>
</body>
</html>

```

### Страница мероприятия
* `event.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Мероприятие">
  <title>Мероприятие</title>
  <link rel="stylesheet" href="./styles/main.css">
  <link rel="stylesheet" href="./styles/light.css" media="(prefers-color-scheme: light)">
  <link rel="stylesheet" href="./styles/dark.css" media="(prefers-color-scheme: dark)">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
</head>
<body>
  <header class="container-fluid colors pb-2 pt-2">
    <nav class="navbar navbar-expand-md d-flex justify-content-between">
      <div>
        <a class="colors navbar-brand text-color fs-4 p-2" href="./main.html">Main</a>
        <a class="colors navbar-brand text-color fs-5 p-2" href="./lk.html">Personal area</a>
        <a class="colors navbar-brand text-color fs-6 p-2" href="./calendar.html">Calendar</a>
      </div>
      <div>
        <a class="colors navbar-brand text-color fs-6" href="./signIn.html">Entry</a>
        <a class="colors navbar-brand text-color fs-6 button-logout" href="#">Exit</a>
        <a class="colors navbar-brand text-color fs-6" href="./registration.html">Register</a>
      </div>
    </nav>
  </header>

  <main class="container-fluid background-main">
    <section class="pt-5 pb-5 row row-cols-2 justify-content-center">
      <div class="d-flex flex-column">
        <div class="pb-5" style="margin-top: 50px;">
          <h1 class="h2 p-0 mb-4 text-color">Who created the event</h1>
          <p class="p-0 m-0 text-color">Date of creation</p>
        </div>
        <div class="">
          <h2 class="text-color">Event information</h2>
          <p class="text-color">This event will be held at this time in this place there will be so-and-so</p>
        </div>
      </div>
      <img class="w-25 text-color" src="./image/whoIAm.png" alt="Ваше изображение">
    </section>
  </main>

  <footer class="container-fluid colors">
    <div class="d-flex justify-content-between py-4 my-4 mb-0 text-color">
      <p>Made by Vika Kirillova</p>
      <p>Frontend 2022-2023</p>
    </div>
  </footer>
  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  <script src="./scripts/header.js"></script>
</body>
</html>

```

### Личный кабинет пользователя
* `lk.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Personal area">
  <title>Personal area</title>
  <link rel="stylesheet" href="./styles/main.css">
  <link rel="stylesheet" href="./styles/light.css" media="(prefers-color-scheme: light)">
  <link rel="stylesheet" href="./styles/light.css" media="(prefers-color-scheme: dark)">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
</head>
<body>
  <header class="container-fluid colors pb-2 pt-2">
    <nav class="navbar navbar-expand-md d-flex justify-content-between">
      <div>
        <a class="colors navbar-brand text-color fs-4 p-2" href="./main.html">Main</a>
        <a class="colors navbar-brand text-color fs-5 p-2" href="./lk.html">Personal area</a>
        <a class="colors navbar-brand text-color fs-6 p-2" href="./calendar.html">Calendar</a>
      </div>
      <div>
        <a class="colors navbar-brand text-color fs-6" href="./signIn.html">Entry</a>
        <a class="colors navbar-brand text-color fs-6 button-logout" href="#">Exit</a>
        <a class="colors navbar-brand text-color fs-6" href="./registration.html">Register</a>
      </div>
    </nav>
  </header>

  <main class="container-fluid background-main">
    <main class=" row mx-auto d-flex pt-5 color-main">
      <section class="container row mx-auto">
        <div class="row d-flex justify-content-start col-md-5 col-lg-5 col-xl-3 col-12 col-sm-12">
          <img src="./image/profile.jpg" alt="..." style="padding: 0;">
        </div>
        <div class="row d-flex justify-content-start col-xl-6 col-lg-7 col-md-7 col-9 col-sm-12">
          <ul>
            <h1 class="text mt-1 custom-colored-h1">Kirillova Vika</h1>
            <h2 class="text mt-4 h5 custom-colored-h1">Member of the club since January 2022</h2>
            <h3 class="text mt-4 h4 custom-colored-h1">My telegram<a class="m-5" href="https://t.me/@kirillovavi">Telegram</a></h3>
          </ul>
        </div>
      </section>
      <section class="container row mx-auto" id="container">
        <h3 class="text mt-5 h4 custom-colored-h1">My event list:</h3>

      </section>
    </main>
  </main>

  <footer class="container-fluid colors">
    <div class="d-flex justify-content-between py-4 my-4 mb-0 text-color">
      <p>Made by Vika Kirillova</p>
      <p>Frontend 2022-2023</p>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  <script src="./scripts/header.js"></script>
</body>
</html>

```

## Выводы

В данной лабораторной работе мы смогли познакомится с Boostrap и на практике изучить его принцип работы, а также потренировать наши навыки в HTML и CSS.

# Лабораторная работа №1

* `main.html`

Главная страница нашего сайта с сортировкой мероприятий

<image src="/images/main1.png">
<image src="/images/main2.png">
<image src="/images/main3.png">

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Главная</title>
		<link rel="stylesheet" href="./vendor/normalize.css">
		<link rel="stylesheet" href="./styles/main.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  </head>
  <body>
		<header class="container-fluid colors">
			<nav class="navbar navbar-expand-md d-flex justify-content-between">
				<div>
					<a class="navbar-brand text-white fs-4 p-2" href="./main.html">Главная</a>
					<a class="navbar-brand text-white fs-6 p-2" href="./calendar.html">Календарь</a>
				</div>
				<div>
					<a class="navbar-brand text-white fs-6" href="./entry.html">Вход</a>
					<a class="navbar-brand text-white fs-6" href="./reqistration.html">Регистрация</a>
					<a class="navbar-brand text-white fs-5 p-2" href="./personal-area.html">Личный кабинет</a>					
				</div>
			</nav>
		</header>

		<main class="container-fluid">
			<section class="row row-cols-2 pt-5">
				<div class="d-flex flex-column justify-content-center align-items-end col-5">
					<h2 class="w-75 h1 pb-3">События обьединяют</h2>
					<p class="w-75 pt-6">Посещайте конференции и лекции, ходите на выставки и концерты, занимайтесь саморазвитием и ищите единомышленников</p>
				</div>
				<img class="w-50" src="./image/people.jpg" alt="Радующиеся люди">
			</section>

			<section class="d-flex flex-column align-items-center pt-5">
				<h2 class="h2 mb-4">Актуальные мероприятия</h2>
				<div class="d-flex justify-content-center m-0">
					<p class="fs-5 pe-3">Сортировать</p>
					<div class="dropdown me-3">
						<a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
							По названию
						</a>
						<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
							<li><a class="dropdown-item" href="#">От а до я</a></li>
							<li><a class="dropdown-item" href="#">От я до а</a></li>
						</ul>
					</div>
					<div class="dropdown me-3">
						<a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
							По числу
						</a>
					
						<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
							<li><a class="dropdown-item" href="#">Ближайшие</a></li>
							<li><a class="dropdown-item" href="#">Недавно опубликованные</a></li>
						</ul>
					</div>
				</div>
				<div class="row justify-content-center pt-5 pb-5">
					<div class="card me-4" style="width: 18rem;">
						<img src="./image/cards/sport.jfif" class="card-img-top" alt="Люди бегут на марафоне" style="height: 11rem;">
						<div class="card-body">
							<h5 class="card-title">Марафон</h5>
							<p class="card-text">Присоединяйся к нам в очередном забеге на 21 или 42 километра, чтобы испытать себя и свое тело</p>
						<a href="./event.html" class="btn btn-primary">На сайт мероприятия</a>
						</div>
					</div>
					<div class="card me-4" style="width: 18rem;">
						<img src="./image/cards/nature.jpeg" class="card-img-top" alt="Люди убирают мусор" style="height: 11rem;">
						<div class="card-body">
							<h5 class="card-title">Спасем природу</h5>
							<p class="card-text">Собирайся со всеми своими друзьями, чтобы сделать наш мир чище, кто если не ты спасет его?
							</p>
						<a href="./event.html" class="btn btn-primary">На сайт мероприятия</a>
						</div>
					</div>
					<div class="card me-4" style="width: 18rem;">
						<img src="./image/cards/study.webp" class="card-img-top" alt="Человек учиться на дистанте" style="height: 11rem;">
						<div class="card-body">
							<h5 class="card-title">Учись вместе</h5>
							<p class="card-text">Находите, что то новое, чтобы хотелось изучить, ибо в нашем мире без развития и интереса никуда</p>
						<a href="./event.html" class="btn btn-primary">На сайт мероприятия</a>
						</div>
					</div>
					<div class="card me-4" style="width: 18rem;">
						<img src="./image/cards/tourism.webp" class="card-img-top" alt="Люди идут в поход" style="height: 11rem;">
						<div class="card-body">
							<h5 class="card-title">Путешествия</h5>
							<p class="card-text">Путешествуйте вместе с родными и близкими вам людьми, а также находить новые знакомства в походах
							</p>
						<a href="./event.html" class="btn btn-primary">На сайт мероприятия</a>
						</div>
					</div>
				</div>
			</section>
		</main>

		<footer class="container-fluid pt-5 colors">
			<div class="row justify-content-between p-2">
				<div class="col-2">
					<h5>Ваш аккаунт</h5>
					<ul class="nav flex-column">
						<li class="nav-item mb-2"><a href="./personal-area.html" class="nav-link p-0 text-white">Личный кабинет</a></li>
						<li class="nav-item mb-2"><a href="./entry.html" class="nav-link p-0 text-white">Вход</a></li>
						<li class="nav-item mb-2"><a href="./reqistration.html" class="nav-link p-0 text-white">Регистрация</a></li>
					</ul>
				</div>
	
				<div class="col-2">
					<h5>Найти</h5>
					<ul class="nav flex-column">
						<li class="nav-item mb-2"><a href="./calendar.html" class="nav-link p-0 text-white">Календарь</a></li>
						<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Поиск мероприятий</a></li>
					</ul>
				</div>
	
				<div class="col-2">
					<h5>О нас</h5>
					<ul class="nav flex-column">
						<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">ВКонтакте</a></li>
						<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Телеграм</a></li>
					</ul>
				</div>
	
				<div class="col-4 offset-1">
					<form>
						<h5>Подпишись на нас, чтобы не пропустить ничего интересного</h5>
						<div class="d-flex w-100 gap-2">
							<label for="newsletter1" class="visually-hidden">Ваша почта</label>
							<input id="newsletter1" type="text" class="form-control" placeholder="example@email.com">
							<button class="btn btn-primary" type="button">Подписаться</button>
						</div>
					</form>
				</div>
			</div>
	
			<div class="d-flex justify-content-between py-4 my-4 border-top">
				<p>&copy 2022, Кондратьев Алексей</p>
				<ul class="list-unstyled d-flex">
					<li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
					<li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
					<li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
				</ul>
			</div>
		</footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  </body>
</html>
```

* `entry.html`

HTML файл для входа в учетную запись

<image src="/images/entry1.png">

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Вход</title>
		<link rel="stylesheet" href="./vendor/normalize.css">
		<link rel="stylesheet" href="./styles/main.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  </head>
  <body>
		<header class="container-fluid colors">
			<nav class="navbar navbar-expand-md d-flex justify-content-between">
				<div>
					<a class="navbar-brand text-white fs-4 p-2" href="./main.html">Главная</a>
					<a class="navbar-brand text-white fs-6 p-2" href="./calendar.html">Календарь</a>
				</div>
				<div>
					<a class="navbar-brand text-white fs-6" href="./entry.html">Вход</a>
					<a class="navbar-brand text-white fs-6" href="./reqistration.html">Регистрация</a>
					<a class="navbar-brand text-white fs-5 p-2" href="./personal-area.html">Личный кабинет</a>					
				</div>
			</nav>
		</header>

		<main class="container-xl p-5 mb-5">
			<form class="d-flex-column">
				<h1 class="row mb-5 justify-content-center">Вход</h1>
				<div class="row mb-3 justify-content-center">
					<label for="inputLogin3" class="col-sm-1 col-form-label">Логин</label>
					<div class="col-sm-3 col-md-4">
						<input type="text" class="form-control" id="inputLogin3">
					</div>
				</div>
				<div class="row mb-3 justify-content-center">
					<label for="inputPassword3" class="col-sm-1 col-form-label">Пароль</label>
					<div class="col-sm-3 col-md-4">
						<input type="password" class="form-control" id="inputPassword3">
					</div>
				</div>
				<div class="row justify-content-center">
					<div class="col-sm-4 col-md-5">
						<button type="submit" class="btn btn-primary">Войти</button>
						<a class="btn btn-primary" href="./reqistration.html" role="button">Зарегистрироваться</a>
					</div>
				</div>
			</form>
		</main>

		<footer class="container-fluid pt-5 colors">
			<div class="row justify-content-between p-2">
				<div class="col-2">
					<h5>Ваш аккаунт</h5>
					<ul class="nav flex-column">
						<li class="nav-item mb-2"><a href="./personal-area.html" class="nav-link p-0 text-white">Личный кабинет</a></li>
						<li class="nav-item mb-2"><a href="./entry.html" class="nav-link p-0 text-white">Вход</a></li>
						<li class="nav-item mb-2"><a href="./reqistration.html" class="nav-link p-0 text-white">Регистрация</a></li>
					</ul>
				</div>
	
				<div class="col-2">
					<h5>Найти</h5>
					<ul class="nav flex-column">
						<li class="nav-item mb-2"><a href="./calendar.html" class="nav-link p-0 text-white">Календарь</a></li>
						<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Поиск мероприятий</a></li>
					</ul>
				</div>
	
				<div class="col-2">
					<h5>О нас</h5>
					<ul class="nav flex-column">
						<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">ВКонтакте</a></li>
						<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Телеграм</a></li>
					</ul>
				</div>
	
				<div class="col-4 offset-1">
					<form>
						<h5>Подпишись на нас, чтобы не пропустить ничего интересного</h5>
						<div class="d-flex w-100 gap-2">
							<label for="newsletter1" class="visually-hidden">Ваша почта</label>
							<input id="newsletter1" type="text" class="form-control" placeholder="example@email.com">
							<button class="btn btn-primary" type="button">Подписаться</button>
						</div>
					</form>
				</div>
			</div>
	
			<div class="d-flex justify-content-between py-4 my-4 border-top">
				<p>&copy 2022, Кондратьев Алексей</p>
				<ul class="list-unstyled d-flex">
					<li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
					<li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
					<li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
				</ul>
			</div>
		</footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  </body>
</html>
```


* `registration.html`

Регистрация пользователя

<image src="/images/registration1.png">

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Регистрация</title>
		<link rel="stylesheet" href="./vendor/normalize.css">
		<link rel="stylesheet" href="./styles/main.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  </head>
  <body>
		<header class="container-fluid colors">
			<nav class="navbar navbar-expand-md d-flex justify-content-between">
				<div>
					<a class="navbar-brand text-white fs-4 p-2" href="./main.html">Главная</a>
					<a class="navbar-brand text-white fs-6 p-2" href="./calendar.html">Календарь</a>
				</div>
				<div>
					<a class="navbar-brand text-white fs-6" href="./entry.html">Вход</a>
					<a class="navbar-brand text-white fs-6" href="./reqistration.html">Регистрация</a>
					<a class="navbar-brand text-white fs-5 p-2" href="./personal-area.html">Личный кабинет</a>					
				</div>
			</nav>
		</header>

		<main class="container-xl p-5">
			<form class="d-flex-column">
				<h1 class="row mb-5 justify-content-center">Регистрация</h1>
				<div class="row mb-3 justify-content-center">
					<label for="inputName3" class="col-sm-1 col-form-label">Имя</label>
					<div class="col-sm-3">
						<input type="text" class="form-control" id="inputName3" placeholder="Алексей" required>
					</div>
				</div>
				<div class="row mb-3 justify-content-center">
					<label for="inputSurname3" class="col-sm-1 col-form-label">Фамилия</label>
					<div class="col-sm-3">
						<input type="text" class="form-control" id="inputSurname3" placeholder="Кондратьев" required>
					</div>
				</div>
				<div class="row mb-3 justify-content-center">
					<label for="inputEmail3" class="col-sm-1 col-form-label">Почта</label>
					<div class="col-sm-3">
						<input type="email" class="form-control" id="inputEmail3" placeholder="example@email.com" required>
					</div>
				</div>
				<div class="row mb-3 justify-content-center">
					<label for="inputLogin3" class="col-sm-1 col-form-label">Логин</label>
					<div class="col-sm-3">
						<input type="text" class="form-control" id="inputLogin3" placeholder="9Anpanman" required>
					</div>
				</div>
				<div class="row mb-3 justify-content-center">
					<label for="inputPassword3" class="col-sm-1 col-form-label">Пароль</label>
					<div class="col-sm-3">
						<input type="password" class="form-control" id="inputPassword3" required>
					</div>
				</div>
				<div class="row mb-3 justify-content-center">
					<div class="col-sm-4">
						<div class="form-check">
							<input class="form-check-input" type="radio" id="gridCheck1">
							<label class="form-check-label" for="gridCheck1">
								Example checkbox
							</label>
						</div>
					</div>
				</div>
				<div class="row justify-content-center">
					<div class="col-sm-4">
						<button type="submit" class="btn btn-primary">Зарегистрироваться</button>
					</div>
				</div>
			</form>
		</main>

				<footer class="container-fluid pt-5 colors">
			<div class="row justify-content-between p-2">
				<div class="col-2">
					<h5>Ваш аккаунт</h5>
					<ul class="nav flex-column">
						<li class="nav-item mb-2"><a href="./personal-area.html" class="nav-link p-0 text-white">Личный кабинет</a></li>
						<li class="nav-item mb-2"><a href="./entry.html" class="nav-link p-0 text-white">Вход</a></li>
						<li class="nav-item mb-2"><a href="./reqistration.html" class="nav-link p-0 text-white">Регистрация</a></li>
					</ul>
				</div>
	
				<div class="col-2">
					<h5>Найти</h5>
					<ul class="nav flex-column">
						<li class="nav-item mb-2"><a href="./calendar.html" class="nav-link p-0 text-white">Календарь</a></li>
						<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Поиск мероприятий</a></li>
					</ul>
				</div>
	
				<div class="col-2">
					<h5>О нас</h5>
					<ul class="nav flex-column">
						<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">ВКонтакте</a></li>
						<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Телеграм</a></li>
					</ul>
				</div>
	
				<div class="col-4 offset-1">
					<form>
						<h5>Подпишись на нас, чтобы не пропустить ничего интересного</h5>
						<div class="d-flex w-100 gap-2">
							<label for="newsletter1" class="visually-hidden">Ваша почта</label>
							<input id="newsletter1" type="text" class="form-control" placeholder="example@email.com">
							<button class="btn btn-primary" type="button">Подписаться</button>
						</div>
					</form>
				</div>
			</div>
	
			<div class="d-flex justify-content-between py-4 my-4 border-top">
				<p>&copy 2022, Кондратьев Алексей</p>
				<ul class="list-unstyled d-flex">
					<li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
					<li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
					<li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
				</ul>
			</div>
		</footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  </body>
</html>
```


* `calendar.html`

Календарь с нашими мероприятиями

<image src="/images/calendar1.png">

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Календарь</title>
		<link rel="stylesheet" href="./vendor/normalize.css">
		<link rel="stylesheet" href="./styles/calendar.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  </head>
  <body>
		<header class="container-fluid colors">
			<nav class="navbar navbar-expand-md d-flex justify-content-between">
				<div>
					<a class="navbar-brand text-white fs-4 p-2" href="./main.html">Главная</a>
					<a class="navbar-brand text-white fs-6 p-2" href="./calendar.html">Календарь</a>
				</div>
				<div>
					<a class="navbar-brand text-white fs-6" href="./entry.html">Вход</a>
					<a class="navbar-brand text-white fs-6" href="./reqistration.html">Регистрация</a>
					<a class="navbar-brand text-white fs-5 p-2" href="./personal-area.html">Личный кабинет</a>					
				</div>
			</nav>
		</header>

		<main class="container-fluid">
			<section class="d-flex justify-content-center pt-5 pb-5">
				<iframe src="https://calendar.yandex.ru/embed/week?&layer_ids=20024228&tz_id=Europe/Moscow&layer_names=фронт" width="1000" height="575" frameborder="0" style="border: 1px solid #eee"></iframe>
			</section>
		</main>

		<footer class="container-fluid pt-5 colors">
			<div class="row justify-content-between p-2">
				<div class="col-2">
					<h5>Ваш аккаунт</h5>
					<ul class="nav flex-column">
						<li class="nav-item mb-2"><a href="./personal-area.html" class="nav-link p-0 text-white">Личный кабинет</a></li>
						<li class="nav-item mb-2"><a href="./entry.html" class="nav-link p-0 text-white">Вход</a></li>
						<li class="nav-item mb-2"><a href="./reqistration.html" class="nav-link p-0 text-white">Регистрация</a></li>
					</ul>
				</div>
	
				<div class="col-2">
					<h5>Найти</h5>
					<ul class="nav flex-column">
						<li class="nav-item mb-2"><a href="./calendar.html" class="nav-link p-0 text-white">Календарь</a></li>
						<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Поиск мероприятий</a></li>
					</ul>
				</div>
	
				<div class="col-2">
					<h5>О нас</h5>
					<ul class="nav flex-column">
						<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">ВКонтакте</a></li>
						<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Телеграм</a></li>
					</ul>
				</div>
	
				<div class="col-4 offset-1">
					<form>
						<h5>Подпишись на нас, чтобы не пропустить ничего интересного</h5>
						<div class="d-flex w-100 gap-2">
							<label for="newsletter1" class="visually-hidden">Ваша почта</label>
							<input id="newsletter1" type="text" class="form-control" placeholder="example@email.com">
							<button class="btn btn-primary" type="button">Подписаться</button>
						</div>
					</form>
				</div>
			</div>
	
			<div class="d-flex justify-content-between py-4 my-4 border-top">
				<p>&copy 2022, Кондратьев Алексей</p>
				<ul class="list-unstyled d-flex">
					<li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
					<li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
					<li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
				</ul>
			</div>
		</footer>

		<script src="./js/calendar.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  </body>
</html>
```


* `event.html`

Страница мероприятия

<image src="/images/mero.png">

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Мероприятие</title>
		<link rel="stylesheet" href="./vendor/normalize.css">
		<link rel="stylesheet" href="./styles/event.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  </head>
  <body>
		<header class="container-fluid colors">
			<nav class="navbar navbar-expand-md d-flex justify-content-between">
				<div>
					<a class="navbar-brand text-white fs-4 p-2" href="./main.html">Главная</a>
					<a class="navbar-brand text-white fs-6 p-2" href="./calendar.html">Календарь</a>
				</div>
				<div>
					<a class="navbar-brand text-white fs-6" href="./entry.html">Вход</a>
					<a class="navbar-brand text-white fs-6" href="./reqistration.html">Регистрация</a>
					<a class="navbar-brand text-white fs-5 p-2" href="./personal-area.html">Личный кабинет</a>					
				</div>
			</nav>
		</header>

		<main class="container-fluid">
			<section class="pt-5 pb-5 row row-cols-2 justify-content-center">
				<div class="d-flex flex-column">
					<div class="pb-5">
						<h2 class="h2 p-0 mb-4">Кто создал мероприятие</h2>
						<p class="p-0 m-0">Дата создания</p>
					</div>
					<div class="">
						<h4 class="">Сведения о мероприятие</h4>
						<p class="">Информация</p>
					</div>
					<div class="pt-5">
						<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
							Записаться
						</button>
						<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
							<div class="modal-dialog">
								<div class="modal-content">
									<div class="modal-header">
										<h5 class="modal-title" id="exampleModalLabel">Вы записаны</h5>
										<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
									</div>
									<div class="modal-body">
										Ждем вас на нашем мероприятие с хорошим настроением
									</div>
									<div class="modal-footer">
										<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<img class="w-25" src="./image/event.jpg" alt="">
			</section>
		</main>

		<footer class="container-fluid pt-5 colors">
			<div class="row justify-content-between p-2">
				<div class="col-2">
					<h5>Ваш аккаунт</h5>
					<ul class="nav flex-column">
						<li class="nav-item mb-2"><a href="./personal-area.html" class="nav-link p-0 text-white">Личный кабинет</a></li>
						<li class="nav-item mb-2"><a href="./entry.html" class="nav-link p-0 text-white">Вход</a></li>
						<li class="nav-item mb-2"><a href="./reqistration.html" class="nav-link p-0 text-white">Регистрация</a></li>
					</ul>
				</div>
	
				<div class="col-2">
					<h5>Найти</h5>
					<ul class="nav flex-column">
						<li class="nav-item mb-2"><a href="./calendar.html" class="nav-link p-0 text-white">Календарь</a></li>
						<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Поиск мероприятий</a></li>
					</ul>
				</div>
	
				<div class="col-2">
					<h5>О нас</h5>
					<ul class="nav flex-column">
						<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">ВКонтакте</a></li>
						<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Телеграм</a></li>
					</ul>
				</div>
	
				<div class="col-4 offset-1">
					<form>
						<h5>Подпишись на нас, чтобы не пропустить ничего интересного</h5>
						<div class="d-flex w-100 gap-2">
							<label for="newsletter1" class="visually-hidden">Ваша почта</label>
							<input id="newsletter1" type="text" class="form-control" placeholder="example@email.com">
							<button class="btn btn-primary" type="button">Подписаться</button>
						</div>
					</form>
				</div>
			</div>
	
			<div class="d-flex justify-content-between py-4 my-4 border-top">
				<p>&copy 2022, Кондратьев Алексей</p>
				<ul class="list-unstyled d-flex">
					<li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
					<li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
					<li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
				</ul>
			</div>
		</footer>
		
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  </body>
</html>
```


* `personal-area.html`

Личный кабинет пользователя

<image src="/images/room1.png">

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Личный кабинет</title>
		<link rel="stylesheet" href="./vendor/normalize.css">
		<link rel="stylesheet" href="./styles/personal-area.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  </head>
  <body>
		<header class="container-fluid colors">
			<nav class="navbar navbar-expand-md d-flex justify-content-between">
				<div>
					<a class="navbar-brand text-white fs-4 p-2" href="./main.html">Главная</a>
					<a class="navbar-brand text-white fs-6 p-2" href="./calendar.html">Календарь</a>
				</div>
				<div>
					<a class="navbar-brand text-white fs-6" href="./entry.html">Вход</a>
					<a class="navbar-brand text-white fs-6" href="./reqistration.html">Регистрация</a>
					<a class="navbar-brand text-white fs-5 p-2" href="./personal-area.html">Личный кабинет</a>					
				</div>
			</nav>
		</header>

		<main class="container-fluid">
			<section class="pt-5 pb-5">
				<div class="d-flex flex-column align-items-center pt-5 pb-5">
					<div class="d-flex flex-column align-items-center">
						<h2 class="h2 p-0 mb-2">Ваш личный кабинет</h2>
						<p class="p-0 m-2">Ваши записи</p>
					</div>
					<div class="row justify-content-center">
						<div class="card me-4" style="width: 18rem;">
							<img src="./image/cards/sport.jfif" class="card-img-top" alt="Люди бегут на марафоне" style="height: 11rem;">
							<div class="card-body">
								<h5 class="card-title">Марафон</h5>
								<p class="card-text">Присоединяйся к нам в очередном забеге на 21 или 42 километра, чтобы испытать себя и свое тело</p>
								<a href="./event.html" class="btn btn-primary mb-2">На сайт мероприятия</a>
								<button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
									Отписаться
								</button>
								<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
									<div class="modal-dialog">
										<div class="modal-content">
											<div class="modal-header">
												<h5 class="modal-title" id="exampleModalLabel">Оповещение</h5>
												<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
											</div>
											<div class="modal-body">
												Вы были отписаны от мероприятия
											</div>
											<div class="modal-footer">
												<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="card me-4" style="width: 18rem;">
							<img src="./image/cards/tourism.webp" class="card-img-top" alt="Люди идут в поход" style="height: 11rem;">
							<div class="card-body">
								<h5 class="card-title">Путешествия</h5>
								<p class="card-text">Путешествуйте вместе с родными и близкими вам людьми, а также находить новые знакомства в походах
								</p>
								<a href="./event.html" class="btn btn-primary mb-2">На сайт мероприятия</a>
								<button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
									Отписаться
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>

		<footer class="container-fluid pt-5 colors">
			<div class="row justify-content-between p-2">
				<div class="col-2">
					<h5>Ваш аккаунт</h5>
					<ul class="nav flex-column">
						<li class="nav-item mb-2"><a href="./personal-area.html" class="nav-link p-0 text-white">Личный кабинет</a></li>
						<li class="nav-item mb-2"><a href="./entry.html" class="nav-link p-0 text-white">Вход</a></li>
						<li class="nav-item mb-2"><a href="./reqistration.html" class="nav-link p-0 text-white">Регистрация</a></li>
					</ul>
				</div>
	
				<div class="col-2">
					<h5>Найти</h5>
					<ul class="nav flex-column">
						<li class="nav-item mb-2"><a href="./calendar.html" class="nav-link p-0 text-white">Календарь</a></li>
						<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Поиск мероприятий</a></li>
					</ul>
				</div>
	
				<div class="col-2">
					<h5>О нас</h5>
					<ul class="nav flex-column">
						<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">ВКонтакте</a></li>
						<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Телеграм</a></li>
					</ul>
				</div>
	
				<div class="col-4 offset-1">
					<form>
						<h5>Подпишись на нас, чтобы не пропустить ничего интересного</h5>
						<div class="d-flex w-100 gap-2">
							<label for="newsletter1" class="visually-hidden">Ваша почта</label>
							<input id="newsletter1" type="text" class="form-control" placeholder="example@email.com">
							<button class="btn btn-primary" type="button">Подписаться</button>
						</div>
					</form>
				</div>
			</div>
	
			<div class="d-flex justify-content-between py-4 my-4 border-top">
				<p>&copy 2022, Кондратьев Алексей</p>
				<ul class="list-unstyled d-flex">
					<li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
					<li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
					<li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
				</ul>
			</div>
		</footer>

		<script src="./js/calendar.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  </body>
</html>
```

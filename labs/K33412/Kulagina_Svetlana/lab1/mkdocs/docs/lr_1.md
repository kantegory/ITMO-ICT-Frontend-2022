# Лабораторная работа №1

## Вариант 2

* `entrance.html`

* Вход

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
	</head>
	<body>
		<main class="container pt-5">
			<div class="form-group row justify-content-center"> 
				<div class="col-md-4 mb-3">
					<label for="exampleInputEmail1">Логин</label>
					<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
				</div>
			</div>
			<div class="form-group row justify-content-center">
				<div class="col-md-4 mb-3">
					<label for="exampleInputPassword1">Пароль</label>
					<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-md-4 mb-3">
					<div class="form-check">
						<input type="checkbox" class="form-check-input" id="exampleCheck1">
						<label class="form-check-label" for="exampleCheck1">Запомнить меня</label>
					</div>
					<a role="button" href="./main.html" class="btn btn-primary">Войти</a>
					<a role="button" href="./registration.html" class="btn btn-primary">Зарегистрироваться</a>
				</div>
			</div>
		</main>
	</body>
</html>
```

* `registration.html`

* Регистрация

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
	</head>
	<body>
		<main class="container pt-5">
				<div class="form-row">
					<div class="col-md-4 mb-3">
						<label for="validationDefault01">Имя</label>
						<input type="text" class="form-control" id="validationDefault01" placeholder="Светлана" required>
					</div>
					<div class="col-md-4 mb-3">
						<label for="validationDefault02">Фамилия</label>
						<input type="text" class="form-control" id="validationDefault02" placeholder="Кулагина" required>
					</div>
					<div class="col-md-4 mb-3">
						<label for="validationDefaultUsername">Имя пользователя</label>
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text" id="inputGroupPrepend2">@</span>
							</div>
							<input type="text" class="form-control" id="validationDefaultUsername" placeholder="ras_svet" aria-describedby="inputGroupPrepend2" required>
						</div>
					</div>
					<div class="col-md-4 mb-3">
						<label for="exampleInputPassword1">Пароль</label>
						<input type="password" class="form-control" id="exampleInputPassword1" required>
					</div>
				</div>
				<div class="form-check">
					<input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
					<label class="form-check-label" for="invalidCheck2">
						Согласен(на) на обработку персональных данных
					</label>
				</div>
				<a class="btn btn-primary" role="button" href="./main.html">Зарегистрироваться</a>
			</form>
		</main>
	</body>
</html>	
```

* `main.html`

* Главная страница с сортировкой

```html
<!DOCTYPE html>
<html lang="ru">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Bootstrap demo</title>
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
		<link href="../css/main.css" rel="stylesheet">
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
	</head>
	<body>
		<header class="colors">
			<nav class="navbar navbar-expand-lg navbar-expand-xl navbar-dark" style="background-color:#1f4e60">
				<div class="container">
					<a class="navbar-brand text-white" href="./calendar.html">Календрь мероприятий</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<a class="nav-link active text-white" href="./entrance.html">Вход</a>
							</li>
							<li>
								<a class="nav-link active text-white" href="./lk.html">Личный кабинет</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
		<main class="container pt-5">
			<style>
				.fig {
				 text-align: center;
				}
			 </style>
			<h1 class="custom-colored-h1">Отдых, веселье, семья - это всё про нас</h1>
			<p class="fig"><img src="./young-group-people-celebrating-let-party-begin-text-men-women-party-happy-birthday-different-people-144910132.jpg" class="img"></p>
			<section class="filtration">
				<div class="container justify-content-start">
					<div class="row mt-5 row mx-auto">
						<div class="form col-12 col-sm-6 col-lg-4 col-md-5 col-xl-3">
							<select class="form-select-sm" aria-label=".form-select-lg example">
								<option selected>Выберите, чем хотите заняться</option>
								<option value="1">Активный отдых</option>
								<option value="2">Театр</option>
							</select>
							</div>
							<div class="form col-12 col-sm-6 col-lg-4 col-md-5 col-xl-3">
								<select class="form-select-sm" aria-label=".form-select-lg example">
									<option selected>Выберите район город</option>
									<option value="1">Петроградский</option>
									<option value="2">Московский</option>
									<option value="3">Приморский</option>
								</select>
							</div>
							<div class="d-flex justify-content-end col-12 col-sm-2 col-lg-4 col-xl-6">
								<button type="button" class="btn btn-info btn-sm " style="background-color:#fcc149">Поиск</button>
							</div>
						</div>
					</div>
			</section>
			<section class="container justify-content-between mt-5 row mx-auto">
				<div class="col-12 col-xl-3 col-md-5 col-lg-5 card ">
					<img src="./музик холл1.jpg" class="card-img-top" alt="...">
					<div class="card-body">
						<h5 class="card-title">Мюзик холл</h5>
						<p class="card-text"><img src="./location_53876-25530.jpg" width="20px">Парк Александрийский,д.4</p>
						<p class="card-text"><img src="./new-teaser-1200x900-2.png" width="20px">Горьковская</p>
						<p class="card-text">Санкт-Петербургский Мюзик-холл - уникальный театр по своей жанровой природе и сегодня единственный в России...</p>
						<a href="./musichall.html" class="btn btn-dark" style="background-color:#1f4e60">Подробнее</a>
					</div>
				</div>
				<div class="col-12 col-xl-3 col-md-5 col-lg-5 card ">
					<img src="./a_1_38.jpg" class="card-img-top" alt="...">
					<div class="card-body">
						<h5 class="card-title">Дворец культуры им.Ленсовета</h5>
						<p class="card-text"><img src="./location_53876-25530.jpg" width="20px">пр. Каменноостровский, д. 42</p>
						<p class="card-text"><img src="./new-teaser-1200x900-2.png" width="20px">Горьковская, Петроградская</p>
						<p class="card-text">В 1931-1938 годах по проекту Е.А.Левинсона и В.О.Мунца строится здание Дворца культуры промкооперации или "Промка"...</p>
						<a href="#" class="btn btn-dark" style="background-color:#1f4e60">Подробнее</a>
					</div>
				</div>
				<div class="col-12 col-xl-3 col-md-5 col-lg-5 card ">
					<img src="./a_18_0.jpg" class="card-img-top" alt="...">
					<div class="card-body">
						<h5 class="card-title">Открытый ледовый каток</h5>
						<p class="card-text"><img src="./location_53876-25530.jpg" width="20px">ул. Кузнецовская, д. 25</p>
						<p class="card-text"><img src="./new-teaser-1200x900-2.png" width="20px">Парк Победы</p>
						<p class="card-text">Вход на каток платный. Есть прокат коньков и заточка. Каждая пара коньков выдаются под...</p>
						<a href="#" class="btn btn-dark" style="background-color:#1f4e60">Подробнее</a>
					</div>
				</div>
				<div class="col-12 col-xl-3 col-md-5 col-lg-5 card ">
					<img src="./o_L-ubkbkoMrE_0.jpg" class="card-img-top" alt="...">
					<div class="card-body">
						<h5 class="card-title">GorillaPark</h5>
						<p class="card-text"><img src="./location_53876-25530.jpg" width="20px">л. Долгоозерная, д. 14, к.2</p>
						<p class="card-text"><img src="./new-teaser-1200x900-2.png" width="20px">Комендантский проспект, Пионерская</p>
						<p class="card-text">Взрослых гостей и детей от 7 лет ждут спортивные и очень весёлые локации: - 22 зоны скалодрома...</p>
						<a href="#" class="btn btn-dark" style="background-color:#1f4e60">Подробнее</a>
					</div>
				</div>
				</div>
			</section>
		</main>
		<footer class="text-center text-white" style="background-color:#a5b8bf;">
			<div class="container pt-4">
				<section class="mb-4">
					<a
						class="btn btn-link btn-floating btn-lg text-dark m-1"
						href="#!"
						role="button"
						data-mdb-ripple-color="dark"
						><img srcset="https://img.icons8.com/doodle/344/facebook-new.png 2x" width="30" height="30">
					</a>
					<a
						class="btn btn-link btn-floating btn-lg text-dark m-1"
						href="#!"
						role="button"
						data-mdb-ripple-color="dark"
						><img  srcset="https://img.icons8.com/doodle/344/vk-messenger.png 2x" width="30" height="30"></a>
					<a
						class="btn btn-link btn-floating btn-lg text-dark m-1"
						href="#!"
						role="button"
						data-mdb-ripple-color="dark"
						><img srcset="https://img.icons8.com/doodle/344/twitter-squared.png 2x" width="30" height="30"></a>
					<a
						class="btn btn-link btn-floating btn-lg text-dark m-1"
						href="#!"
						role="button"
						data-mdb-ripple-color="dark"
						><img srcset="https://img.icons8.com/doodle/344/instagram--v1.png 2x" width="30" height="30"
					></a>
					<a
						class="btn btn-link btn-floating btn-lg text-dark m-1"
						href="#!"
						role="button"
						data-mdb-ripple-color="dark"
						><img srcset="https://img.icons8.com/plasticine/344/telegram-app.png 2x" width="30" height="30"
					></a>
				</section>
			</div>
			<div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
				© 2022 Copyright:
				<a class="text-dark" href="http://t.me/rassvet2002">Kulagina Svetlava</a>
			</div>
		</footer>
	</body>
</html>
```

* `musichall.html`
* Страница мероприятия
```html
<!DOCTYPE html>
<html lang="ru">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Bootstrap demo</title>
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
		<link href="../css/musichall.css" rel="stylesheet">
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
	</head>
	<body>
		<header class="colors">
			<nav class="navbar navbar-expand-lg navbar-expand-xl navbar-light" style="background-color:#e388a9">
				<div class="container">
					<a class="navbar-brand text-white" href="./main.html">Главная</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<a class="nav-link active text-white" href="./entrance.html">Вход</a>
							</li>
							<li>
								<a class="nav-link active text-white" href="./lk.html">Личный кабинет</a>
							</li>
							<li>
								<a class="nav-link active text-white" href="./calendar.html">Календарь мероприятий</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
		<main class="container row mx-auto d-flex pt-5">
			<section class="container row mx-auto">
			<h1 class="help mb-5">Мюзик Холл</h1>
				<div class="row d-flex col-md-3 col-lg-2 col-sm-3 col-4 col-xl-2 col-2">
					<ul>
						<h6 class="information">Адрес:</h6>
						<h6 class="information mt-5">Рйон:</h6>
						<h6 class="information mt-5">Метро:</h6>
						<h6 class="information mt-5">Телефон:</h6>
						<h6 class="information mt-5">Сайт:</h6>
						<h6 class="information mt-5">Часы работы:</h6>
					</ul>
				</div>
				<div class="row d-flex col-md-9 col-lg-6 col-sm-9 col-9 col-xl-5">
					<ul>
						<h6 class="text">Парк Александровский, д. 4</h6>
						<h6 class="text mt-5">Петроградский район</h6>
						<h6 class="text mt-5">Горьковская (409 м)</h6>
						<h6 class="text mt-5">+7 (812) 233-09-24</h6>
						<h6 class="text mt-5"><a href="	http://www.musichallspb.ru">http://www.musichallspb.ru</h6></a>
						<h6 class="text mt-5">кассы: пн-вс: с 12:00 до 19:15</h6>
					</ul>
				</div>
				<div class="row d-flex justify-content-lg-center col-md-12 col-lg-12 col-xl-5">
					<img src="./музик холл1.jpg" class="musicimg" alt="...">
					<div class="container d-flex justify-center-between">
					<img src="./мх1 (1)_0.jpg" class="musicimg" style="width: 25%" alt="...">
					<img src="./мх2 (3)_0.jpg" class="musicimg" style="width: 25%" alt="...">
					<img src="./мх3 (5).jpg" class="musicimg" style="width: 25%" alt="...">
					<img src="./мх4.jpg" class="musicimg" style="width: 25%" alt="...">
					</div>
				</div>
			</section>
			<section class="container row mx-auto pt-5">
			<h3 class="colored-h3">Пойдешь с нами?)</h3>
				<div class="pt-3">
					<a role="button" href="./lk.html" class="btn btn-light" style="background:#46abc5">Записаться</a>
				</div>
			</section>
			<section class="container row mx-auto pt-5">
				<div class="container">
					<div class="accordion" id="accordionExample">
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingOne">
								<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
									Описание
								</button>
							</h2>
							<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
								<div class="accordion-body">
									<p>Санкт-Петербургский Мюзик-холл - уникальный театр по своей жанровой природе и сегодня единственный в России. Украшение всех постановок коллектива - балетная труппа. Каждый новый спектакль - это всегда совершенно оригинальное произведение,в котором использованы хореография, вокал, оригинальные номера самого высокого класса и все это - единый и ни на что не похожий сплав искусств, созданный с оригинальным образным решением в сочетании великолепных красок, костюмов, декораций и световых решений.</p>
									<p>Создал театр народный артист России И.Рахлин - известный режиссер театра и эстрады. Сегодня репертуар театра необычайно широк и богат - от ревю, шоу до мюзикла и даже оперы.</p>
									<p>Каждые пятницу, субботу и воскресенье новая площадка Мюзик-Холла, театр-бар "Синий БАРхат" представляет спектакли в жанре кабаре, варьете и мюзикла. "Синий БАРхат" - уютное двухэтажное пространство, где объединены сценическая площадка и театральный буфет.</p>
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingTwo">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
									Отзывы
								</button>
							</h2>
							<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
								<div class="accordion-body">
									<strong>Оценка: 4/10</strong>
									<p>7 января 2020 г. 20:22</p>
									<p>Насчёт обслуживания : не знаю кто виноват в том, что покупая билеты на ряд перед проходом, рассчитывая что переплатил за билеты и получил хорошие места, в итоге перед тобой оказывается ещё один ряд. Удивительно. Весь спектакль перед нами вставали и садились люди, удтверждая, что они из руководства. Отвратительное отношение к зрителю , купившему билет. Интерьер бедноватый. Ремонта видимо не было давно. Обшарпанные стены и разломанные музыкальные инструменты в вестибюле.Добираться удобно. От метро в шаговой доступности.Мюзикл «Сказ о серебряных крыльях» очень понравился, детям было интересно.Волк в исполнении Андрея Гульнева просто очаровал.</p>
									<strong>Оценка: 8/10</strong>
									<p>3 сентября 2018 г. 20:02</p>
									<p>Обслуживание как обслуживание: ничего особенного.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> 
		</main>
		<footer class="text-center text-white" style="background-color: #f3cfdc;">
			<div class="container pt-4">
				<section class="mb-4">
					<a
						class="btn btn-link btn-floating btn-lg text-dark m-1"
						href="#!"
						role="button"
						data-mdb-ripple-color="dark"
						><img srcset="https://img.icons8.com/doodle/344/facebook-new.png 2x" width="30" height="30">
					</a>
					<a
						class="btn btn-link btn-floating btn-lg text-dark m-1"
						href="#!"
						role="button"
						data-mdb-ripple-color="dark"
						><img  srcset="https://img.icons8.com/doodle/344/vk-messenger.png 2x" width="30" height="30"></a>
					<a
						class="btn btn-link btn-floating btn-lg text-dark m-1"
						href="#!"
						role="button"
						data-mdb-ripple-color="dark"
						><img srcset="https://img.icons8.com/doodle/344/twitter-squared.png 2x" width="30" height="30"></a>
					<a
						class="btn btn-link btn-floating btn-lg text-dark m-1"
						href="#!"
						role="button"
						data-mdb-ripple-color="dark"
						><img srcset="https://img.icons8.com/doodle/344/instagram--v1.png 2x" width="30" height="30"
					></a>
					<a
						class="btn btn-link btn-floating btn-lg text-dark m-1"
						href="#!"
						role="button"
						data-mdb-ripple-color="dark"
						><img srcset="https://img.icons8.com/plasticine/344/telegram-app.png 2x" width="30" height="30"
					></a>
				</section>
			</div>
			<div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
				© 2022 Copyright:
				<a class="text-dark" href="http://t.me/rassvet2002">Kulagina Svetlava</a>
			</div>
		</footer>
	</body>
</html>
```

* `lk.html`

* Личный кабинет пользователя

```html
<!DOCTYPE html>
<html lang="ru">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Bootstrap demo</title>
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
		<link href="../css/lk.css" rel="stylesheet">
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
	</head>
	<body>
		<header class="colors">
			<nav class="navbar navbar-expand-lg navbar-expand-xl navbar-light" style="background-color:#1f4e60">
				<div class="container">
					<a class="navbar-brand text-white" href="./main.html">Главная</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<a class="nav-link active text-white" href="./entrance.html">Вход</a>
							</li>
							<li>
								<a class="nav-link active text-white" href="./calendar.html">Календарь мероприятий</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
		<main class="container row mx-auto d-flex pt-5">
			<section class="container row mx-auto">
				<div class="row d-flex justify-content-start col-md-5 col-lg-5 col-xl-3 col-12 col-sm-12">
					<img src="./я.jpg">
				</div>
				<div class="row d-flex justify-content-start col-xl-6 col-lg-7 col-md-7 col-9 col-sm-12">
					<ul>
						<h1 class="text mt-1">Светлана Кулагина</h1>
						<h5 class="text mt-2">Участник с Марта 2022г</h5>
						<h4 class="text mt-2">Предпочтения: театры/выставки/искусство</h4>
						<h4 class="text mt-4">Страница вк:<a href="https://vk.com/pacsvet">https://vk.com/pacsvet</a></h4>
						<button type="button" class="btn btn-primary mt-5" style="background-color:#1f4e60">Редактировать профиль</button>
					</ul>
				</div>
			</section>
			<section class="container row mx-auto">
				<h4 class="text mt-5">Выбранные мероприятия:</h4>
					<div class="card" style="width: 18rem;">
						<div class="card-body">
							<h5 class="card-title">Каток</h5>
							<p class="card-text">27.09.2022</p>
							<p class="card-text"><img src="./location_53876-25530.jpg" width="20px">Парк Александрийский,д.4</p>
							<p class="card-text"><img src="./new-teaser-1200x900-2.png" width="20px">Горьковская</p>
							<a href="#" class="btn btn-primary" style="background-color:#1f4e60">Отписаться</a>
						</div>
					</div>
					<div class="card" style="width: 18rem;">
						<div class="card-body">
							<h5 class="card-title">Дворец культуры им.Ленсовета</h5>
							<p class="card-text">30.09.2022</p>
							<p class="card-text"><img src="./location_53876-25530.jpg" width="20px">пр. Каменноостровский, д. 42</p>
							<p class="card-text"><img src="./new-teaser-1200x900-2.png" width="20px">Горьковская, Петроградская</p>
							<a href="#" class="btn btn-primary" style="background-color:#1f4e60">Отписаться</a>
						</div>
					</div>
					<div class="card" style="width: 18rem;">
						<div class="card-body">
							<h5 class="card-title">Мюзик холл</h5>
							<p class="card-text">01.12.2022</p>
							<p class="card-text"><img src="./location_53876-25530.jpg" width="20px">Парк Александрийский,д.4</p>
							<p class="card-text"><img src="./new-teaser-1200x900-2.png" width="20px">Горьковская</p>
							<a href="#" class="btn btn-primary" style="background-color:#1f4e60">Отписаться</a>
						</div>
					</div>
					<div class="card" style="width: 18rem;">
						<div class="card-body">
							<h5 class="card-title">GorillaPark</h5>
							<p class="card-text">05.01.2023</p>
							<p class="card-text"><img src="./location_53876-25530.jpg" width="20px">л. Долгоозерная, д. 14, к.2</p>
							<p class="card-text"><img src="./new-teaser-1200x900-2.png" width="20px">Комендантский проспект, Пионерская</p>
							<a href="#" class="btn btn-primary" style="background-color:#1f4e60">Отписаться</a>
						</div>
					</div>
					<div class="card" style="width: 18rem;">
						<div class="card-body">
							<h5 class="card-title">Кино</h5>
							<p class="card-text">06.01.2023</p>
							<p class="card-text">27.09.2022</p>
							<p class="card-text"><img src="./location_53876-25530.jpg" width="20px">ТЦ "Великан Парк"</p>
							<p class="card-text"><img src="./new-teaser-1200x900-2.png" width="20px">Горьковская</p>
							<a href="#" class="btn btn-primary" style="background-color:#1f4e60">Отписаться</a>
						</div>
					</div>
			</section>
		</main>
	</body>
</html>
```

* `calendar.html`

* Календарь мероприятий

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Bootstrap demo</title>
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
	</head>
	<body>
		<header class="colors">
			<nav class="navbar navbar-expand-lg navbar-expand-xl navbar-dark" style="background-color:#1f4e60">
				<div class="container">
					<a class="navbar-brand text-white" href="./main.html">Главная</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<a class="nav-link active text-white" href="./entrance.html">Вход</a>
							</li>
							<li>
								<a class="nav-link active text-white" href="./lk.html">Личный кабинет</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
		<main>
			<div>
				<iframe src="https://calendar.google.com/calendar/embed?src=e09c487eb226fb4ce6783af581ee2e2879ee6e7d97558eac4e7fae3ec94baf1b%40group.calendar.google.com&ctz=Europe%2FMoscow" style="border: 0" width="100%" height="700" frameborder="0" scrolling="no"></iframe>	
			</div>
		</main>
	</body>
</html>
```

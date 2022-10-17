# Лабораторная работа №1

## Вариант 2

###**Платформа для поиска профессиональных мероприятий**
Реализовать вёрстку следующих страниц:

- Вход

- Регистрация

- Поиск мероприятия (фильтрации по типу мероприятия, месту проведения)

- Календарь ближайших мероприятий

- Страница мероприятия

- Личный кабинет пользователя со списком мероприятий, на которые он записывался


####Вход
* `log_in.html`
```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Log in</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="./css/style.css">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</head>

<body class="bg-light">
	<header>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		    <div class="container-xxl">
		    	<a class="navbar-brand" href="index.html">Eventika</a>
		    	<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		      		<span class="navbar-toggler-icon"></span>
		    	</button>
		    	<div class="collapse navbar-collapse" id="navbarNav">
		      		<ul class="navbar-nav">
		      			<li class="nav-item">
		          			<a class="nav-link" href="index.html">Events</a>
		        		</li>
		        		<li class="nav-item">
		          			<a class="nav-link" href="calendar.html">Calendar</a>
		        		</li>
		     	    </ul>
		    	</div>
		    	<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
		      		<ul class="navbar-nav">
		        		<li class="nav-item">
		          			<a class="nav-link" href="log_in.html">Log in</a>
		        		</li>
		        		<li class="nav-item">
		          			<a class="nav-link" href="sign_up.html">Sign up</a>
		        		</li>
		     	    </ul>
		    	</div>
		  	</div>
		</nav>
	</header>

	<section style="margin-top: 50px;">
		<div class="card container-xxl col-5 p-5">
			<h2 class="text-center">Log in to Eventika</h2>

			<form class="mt-5">

				<div class="mb-4">
				    <label for="InputEmail" class="form-label">Enter your email</label>
				    <input type="email" class="form-control" id="InputEmail" placeholder="name@example.com">
				</div>

				<div class="mb-4">
				    <label for="InputPassword" class="form-label">Enter your password</label>
				    <input type="password" class="form-control" id="InputPassword" placeholder="Password">
				</div>

				<div class="row mb-4">
			        <div class="col-md-6 d-flex justify-content-start">
			            <div class="form-check mb-3 mb-md-0">
			                <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
			            	<label class="form-check-label" for="loginCheck"> Remember me </label>
			            </div>
			        </div>
			        <div class="col-md-6 d-flex justify-content-end text-body">
			            <a href="#!">Forgot password?</a>
			        </div>
			    </div>

	            <a href="#" class="btn btn-dark w-100 py-3 mt-4">Log in</a>

	            <p class="text-center text-muted mt-5">Not a member?  <a href="sign_up.html" class="fw-bold text-body"><u>Register</u></a></p>

	        </form>

		</div>
	</section>

	<footer class="text-center text-white bg-dark" style="margin-top:160px">
		<div class="row p-4 justify-content-center">
			<div class="col-3 text-start">
				<h5>Your account</h5>
				<ul class="nav flex-column">
					<li class="nav-item mb-2">
						<a href="sign_up.html" class="nav-link p-0 text-white">Sign up</a>
					</li>
					<li class="nav-item mb-2">
						<a href="log_in.html" class="nav-link p-0 text-white">Log in</a>
					</li>
					<li class="nav-item mb-2">
						<a href="#" class="nav-link p-0 text-white">Help</a>
					</li>
				</ul>
			</div>
			<div class="col-3 text-start">
				<h5>Discover</h5>
				<ul class="nav flex-column">
					<li class="nav-item mb-2">
						<a href="index.html" class="nav-link p-0 text-white">Events</a>
					</li>
					<li class="nav-item mb-2">
						<a href="calendar.html" class="nav-link p-0 text-white">Calendar</a>
					</li>
				</ul>
			</div>
			<div class="col-3 text-start">
				<h5>Contact</h5>
				<ul class="nav flex-column">
					<li class="nav-item mb-2">
						<a href="#" class="nav-link p-0 text-white">eventika@gmail.com</a>
					</li>
					<li class="nav-item mb-2">
						<a href="#" class="nav-link p-0 text-white">+79042753422</a>
					</li>
				</ul>
			</div>
		</div>
	    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
	    	© 2022 Eventika
	    </div>
	</footer>
</body>
</html>
```

####Регистрация
* `sign_up.html`
```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Sign up</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="./css/style.css">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</head>

<body class="bg-light">
	<header>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		    <div class="container-xxl">
		    	<a class="navbar-brand" href="index.html">Eventika</a>
		    	<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		      		<span class="navbar-toggler-icon"></span>
		    	</button>
		    	<div class="collapse navbar-collapse" id="navbarNav">
		      		<ul class="navbar-nav">
		      			<li class="nav-item">
		          			<a class="nav-link" href="index.html">Events</a>
		        		</li>
		        		<li class="nav-item">
		          			<a class="nav-link" href="calendar.html">Calendar</a>
		        		</li>
		     	    </ul>
		    	</div>
		    	<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
		      		<ul class="navbar-nav">
		        		<li class="nav-item">
		          			<a class="nav-link" href="log_in.html">Log in</a>
		        		</li>
		        		<li class="nav-item">
		          			<a class="nav-link" href="sign_up.html">Sign up</a>
		        		</li>
		     	    </ul>
		    	</div>
		  	</div>
		</nav>
	</header>

	<section style="margin-top: 50px;">
		<div class="card container-xxl col-5 p-5">
			<h2 class="text-center">Create an account</h2>

			<form class="mt-5">

				<div class="mb-4">
				    <label for="InputName" class="form-label">Name</label>
				    <input type="text" class="form-control" id="InputName" placeholder="Your Name">
				</div>

				<div class="mb-4">
				    <label for="InputEmail" class="form-label">Email address</label>
				    <input type="email" class="form-control" id="InputEmail" placeholder="name@example.com">
				</div>

				<div class="mb-4">
				    <label for="InputPassword" class="form-label">Password</label>
				    <input type="password" class="form-control" id="InputPassword" placeholder="Your Password">
				</div>

				<div class="mb-4">
				    <label for="InputRepeatPassword" class="form-label">Repeat Password</label>
				    <input type="password" class="form-control" id="InputRepeatPassword" placeholder="Repeat Your Password">
				</div>

	            <a href="#" class="btn btn-dark w-100 py-3 mt-4">Register</a>

	            <p class="text-center text-muted mt-5">Have already an account?  <a href="log_in.html" class="fw-bold text-body"><u>Log in here</u></a></p>

	        </form>

		</div>
	</section>

	<footer class="text-center text-white bg-dark" style="margin-top:160px">
		<div class="row p-4 justify-content-center">
			<div class="col-3 text-start">
				<h5>Your account</h5>
				<ul class="nav flex-column">
					<li class="nav-item mb-2">
						<a href="sign_up.html" class="nav-link p-0 text-white">Sign up</a>
					</li>
					<li class="nav-item mb-2">
						<a href="log_in.html" class="nav-link p-0 text-white">Log in</a>
					</li>
					<li class="nav-item mb-2">
						<a href="#" class="nav-link p-0 text-white">Help</a>
					</li>
				</ul>
			</div>
			<div class="col-3 text-start">
				<h5>Discover</h5>
				<ul class="nav flex-column">
					<li class="nav-item mb-2">
						<a href="index.html" class="nav-link p-0 text-white">Events</a>
					</li>
					<li class="nav-item mb-2">
						<a href="calendar.html" class="nav-link p-0 text-white">Calendar</a>
					</li>
				</ul>
			</div>
			<div class="col-3 text-start">
				<h5>Contact</h5>
				<ul class="nav flex-column">
					<li class="nav-item mb-2">
						<a href="#" class="nav-link p-0 text-white">eventika@gmail.com</a>
					</li>
					<li class="nav-item mb-2">
						<a href="#" class="nav-link p-0 text-white">+79042753422</a>
					</li>
				</ul>
			</div>
		</div>
	    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
	    	© 2022 Eventika
	    </div>
	</footer>
</body>
</html>
```

####Поиск мероприятия (Главная)
* `index.html`
```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Eventika</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="./css/style.css">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</head>

<body class="bg-light">
	<header>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		    <div class="container-xxl">
		    	<a class="navbar-brand" href="index.html">Eventika</a>
		    	<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		      		<span class="navbar-toggler-icon"></span>
		    	</button>
		    	<div class="collapse navbar-collapse" id="navbarNav">
		      		<ul class="navbar-nav">
		      			<li class="nav-item">
		          			<a class="nav-link" href="index.html">Events</a>
		        		</li>
		        		<li class="nav-item">
		          			<a class="nav-link" href="calendar.html">Calendar</a>
		        		</li>
		     	    </ul>
		    	</div>
		    	<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
		      		<ul class="navbar-nav">
		        		<li class="nav-item">
		          			<a class="nav-link" href="log_in.html">Log in</a>
		        		</li>
		        		<li class="nav-item">
		          			<a class="nav-link" href="sign_up.html">Sign up</a>
		        		</li>
		     	    </ul>
		    	</div>
		  	</div>
		</nav>
	</header>

	<section style="margin-top: 50px;">
		<div class="container-xxl pt-5">
			<div class="row">
				<div class="col-6 pt-4">
					<h1>Find your event</h1>
					<p class="w-75 pt-3">with Eventika people organize events, make friends, find support, grow a business, and explore their interests. Hundreds of events are happening every day—join the fun.</p>
				</div>
				<div class="col-6">
					<img class="w-100" src="./img/event.jpg">
				</div>
			</div>
		</div>
	</section>
	
	<section>
		<div class="container-xxl" style="margin-top: 160px;">
			<h2>Upcoming events</h2>
			<div class="d-flex justify-content-end">
				<div class="dropdown  ms-3">
	  				<a class="nav-link dropdown-toggle btn btn-outline-secondary text-dark py-1 px-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
	            		Any day
	          		</a>
		  			<ul class="dropdown-menu">
					    <li><a class="dropdown-item" href="#">Any day</a></li>
					    <li><a class="dropdown-item" href="#">Today</a></li>
					    <li><a class="dropdown-item" href="#">Tomorrow</a></li>
					    <li><a class="dropdown-item" href="#">This week</a></li>
					    <li><a class="dropdown-item" href="#">Custom</a></li>
		  			</ul>
				</div>
				<div class="dropdown  ms-3">
	  				<a class="nav-link dropdown-toggle btn btn-outline-secondary text-dark py-1 px-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
	            		Any type
	          		</a>
		  			<ul class="dropdown-menu">
					    <li><a class="dropdown-item" href="#">Any type</a></li>
					    <li><a class="dropdown-item" href="#">Online</a></li>
					    <li><a class="dropdown-item" href="#">In person</a></li>
		  			</ul>
				</div>
				<div class="dropdown  ms-3">
	  				<a class="nav-link dropdown-toggle btn btn-outline-secondary text-dark py-1 px-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
	            		Any category
	            	</a>
		  			<ul class="dropdown-menu">
					    <li><a class="dropdown-item" href="#">Any category</a></li>
					    <li><a class="dropdown-item" href="#">Art & Culture</a></li>
					    <li><a class="dropdown-item" href="#">Career & Business</a></li>
					    <li><a class="dropdown-item" href="#">Health</a></li>
					    <li><a class="dropdown-item" href="#">Sports</a></li>
					    <li><a class="dropdown-item" href="#">Technology</a></li>
		  			</ul>
				</div>
				<div class="dropdown  ms-3">
	  				<a class="nav-link dropdown-toggle btn btn-secondary text-white py-1 px-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
	            		Sort by: Relevance
	            	</a>
		  			<ul class="dropdown-menu">
					    <li><a class="dropdown-item" href="#">Date</a></li>
					    <li><a class="dropdown-item" href="#">Relevance</a></li>
		  			</ul>
				</div>
			</div>
	
			<div class="row mt-5">
				<div class="col">
				    <div class="card">
						<img src="./img/card1.webp" class="card-img-top">
						<div class="card-body">
							<h5 class="card-title">Frontend Development Lightning Talks</h5>
							<p class="card-event-date pt-2">Thu, Oct 13 · 8:45 PM</p>
							<p class="card-event-location">2 Bankside, London</p>
							<a href="#" class="btn btn-dark mt-3">About event</a>
						</div>
					</div>
				</div>
				<div class="col">
				    <div class="card">
						<img src="./img/card2.webp" class="card-img-top">
						<div class="card-body">
							<h5 class="card-title">What is the Metaverse? Meta explains it all.</h5>
							<p class="card-event-date pt-2">Wed, Oct 19 · 6:00 PM</p>
							<p class="card-event-location">Online</p>
							<a href="#" class="btn btn-dark mt-3">About event</a>
						</div>
					</div>
				</div>
				<div class="col">
				    <div class="card">
						<img src="./img/card3.webp" class="card-img-top">
						<div class="card-body">
							<h5 class="card-title">AutoML for Natural Language Processing</h5>
							<p class="card-event-date pt-2">Mon, Oct 17 · 7:30 PM</p>
							<p class="card-event-location">Principal Place, London</p>
							<a href="event.html" class="btn btn-dark mt-3">About event</a>
						</div>
					</div>
				</div>
				<div class="col">
				    <div class="card">
						<img src="./img/card4.webp" class="card-img-top">
						<div class="card-body">
							<h5 class="card-title">Visit the OM Yoga show</h5>
							<p class="card-event-date pt-2">Fri, Oct 14 · 1:00 PM</p>
							<p class="card-event-location">Alexandra Palace, London</p>
							<a href="#" class="btn btn-dark mt-3">About event</a>
						</div>
					</div>
				</div>
			</div>
			<div class="row mt-4">
				<div class="col">
				    <div class="card">
						<img src="./img/card5.webp" class="card-img-top">
						<div class="card-body">
							<h5 class="card-title">Hampstead Heath Wellness Day - Pilates and Nature</h5>
							<p class="card-event-date pt-2">Sun, Oct 23 · 4:00 PM</p>
							<p class="card-event-location">Hampstead Tube Station, London</p>
							<a href="#" class="btn btn-dark mt-3">About event</a>
						</div>
					</div>
				</div>
				<div class="col">
				    <div class="card">
						<img src="./img/card6.webp" class="card-img-top">
						<div class="card-body">
							<h5 class="card-title">On Kotlin: #4</h5>
							<p class="card-event-date pt-2">Thu, Oct 20 · 8:00 PM</p>
							<p class="card-event-location">WeWork - Office Space & Coworking, London</p>
							<a href="#" class="btn btn-dark mt-3">About event</a>
						</div>
					</div>
				</div>
				<div class="col">
				    <div class="card">
						<img src="./img/card7.webp" class="card-img-top">
						<div class="card-body">
							<h5 class="card-title">[Free Workshop] Energy as Food & Medicine</h5>
							<p class="card-event-date pt-2">Sat, Oct 22 · 9:30 PM</p>
							<p class="card-event-location">Online</p>
							<a href="#" class="btn btn-dark mt-3">About event</a>
						</div>
					</div>
				</div>
				<div class="col">
				    <div class="card">
						<img src="./img/card8.webp" class="card-img-top">
						<div class="card-body">
							<h5 class="card-title">London Hack Night</h5>
							<p class="card-event-date pt-2">Wed, Oct 12 · 8:30 PM</p>
							<p class="card-event-location">Confluent Europe Ltd, London</p>
							<a href="#" class="btn btn-dark mt-3">About event</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<footer class="text-center text-white bg-dark" style="margin-top:160px">
		<div class="row p-4 justify-content-center">
			<div class="col-3 text-start">
				<h5>Your account</h5>
				<ul class="nav flex-column">
					<li class="nav-item mb-2">
						<a href="sign_up.html" class="nav-link p-0 text-white">Sign up</a>
					</li>
					<li class="nav-item mb-2">
						<a href="log_in.html" class="nav-link p-0 text-white">Log in</a>
					</li>
					<li class="nav-item mb-2">
						<a href="#" class="nav-link p-0 text-white">Help</a>
					</li>
				</ul>
			</div>
			<div class="col-3 text-start">
				<h5>Discover</h5>
				<ul class="nav flex-column">
					<li class="nav-item mb-2">
						<a href="index.html" class="nav-link p-0 text-white">Events</a>
					</li>
					<li class="nav-item mb-2">
						<a href="calendar.html" class="nav-link p-0 text-white">Calendar</a>
					</li>
				</ul>
			</div>
			<div class="col-3 text-start">
				<h5>Contact</h5>
				<ul class="nav flex-column">
					<li class="nav-item mb-2">
						<a href="#" class="nav-link p-0 text-white">eventika@gmail.com</a>
					</li>
					<li class="nav-item mb-2">
						<a href="#" class="nav-link p-0 text-white">+79042753422</a>
					</li>
				</ul>
			</div>
		</div>
	    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
	    	© 2022 Eventika
	    </div>
	</footer>
</body>
</html>
```

####Календарь ближайших мероприятий
* `calendar.html`
```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Calendar</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="./css/style.css">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</head>

<body class="bg-light">
	<header>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		    <div class="container-xxl">
		    	<a class="navbar-brand" href="index.html">Eventika</a>
		    	<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		      		<span class="navbar-toggler-icon"></span>
		    	</button>
		    	<div class="collapse navbar-collapse" id="navbarNav">
		      		<ul class="navbar-nav">
		      			<li class="nav-item">
		          			<a class="nav-link" href="index.html">Events</a>
		        		</li>
		        		<li class="nav-item">
		          			<a class="nav-link" href="calendar.html">Calendar</a>
		        		</li>
		     	    </ul>
		    	</div>
		    	<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
		      		<ul class="navbar-nav">
		        		<li class="nav-item">
		          			<a class="nav-link" href="log_in.html">Log in</a>
		        		</li>
		        		<li class="nav-item">
		          			<a class="nav-link" href="sign_up.html">Sign up</a>
		        		</li>
		     	    </ul>
		    	</div>
		  	</div>
		</nav>
	</header>

	<section>
		<div class="justify-content-center py-5 d-flex">
			<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FMoscow&hl=en&src=MWMzY2Q2MTQ0MWU1MmFjNTJkZjA5YjI1NWYxZjBlZWNiMmMxMWU3ZTc0YTQyNzNkMmFjMTcwYTI3M2M1ZjFjN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23EF6C00" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>
		</div>
	</section>

	<footer class="text-center text-white bg-dark" style="margin-top:160px">
		<div class="row p-4 justify-content-center">
			<div class="col-3 text-start">
				<h5>Your account</h5>
				<ul class="nav flex-column">
					<li class="nav-item mb-2">
						<a href="sign_up.html" class="nav-link p-0 text-white">Sign up</a>
					</li>
					<li class="nav-item mb-2">
						<a href="log_in.html" class="nav-link p-0 text-white">Log in</a>
					</li>
					<li class="nav-item mb-2">
						<a href="#" class="nav-link p-0 text-white">Help</a>
					</li>
				</ul>
			</div>
			<div class="col-3 text-start">
				<h5>Discover</h5>
				<ul class="nav flex-column">
					<li class="nav-item mb-2">
						<a href="index.html" class="nav-link p-0 text-white">Events</a>
					</li>
					<li class="nav-item mb-2">
						<a href="calendar.html" class="nav-link p-0 text-white">Calendar</a>
					</li>
				</ul>
			</div>
			<div class="col-3 text-start">
				<h5>Contact</h5>
				<ul class="nav flex-column">
					<li class="nav-item mb-2">
						<a href="#" class="nav-link p-0 text-white">eventika@gmail.com</a>
					</li>
					<li class="nav-item mb-2">
						<a href="#" class="nav-link p-0 text-white">+79042753422</a>
					</li>
				</ul>
			</div>
		</div>
	    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
	    	© 2022 Eventika
	    </div>
	</footer>
</body>
</html>
```

####Страница мероприятия
* `event.html`
```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>AutoML for Natural Language Processing</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="./css/style.css">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</head>

<body class="bg-light">
	<header>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		    <div class="container-xxl">
		    	<a class="navbar-brand" href="index.html">Eventika</a>
		    	<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		      		<span class="navbar-toggler-icon"></span>
		    	</button>
		    	<div class="collapse navbar-collapse" id="navbarNav">
		      		<ul class="navbar-nav">
		      			<li class="nav-item">
		          			<a class="nav-link" href="index.html">Events</a>
		        		</li>
		        		<li class="nav-item">
		          			<a class="nav-link" href="calendar.html">Calendar</a>
		        		</li>
		     	    </ul>
		    	</div>
		    	<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
		      		<ul class="navbar-nav">
		        		<li class="nav-item">
		          			<a class="nav-link" href="log_in.html">Log in</a>
		        		</li>
		        		<li class="nav-item">
		          			<a class="nav-link" href="sign_up.html">Sign up</a>
		        		</li>
		     	    </ul>
		    	</div>
		  	</div>
		</nav>
	</header>
	
	<section>
		<div class="container-xxl col-9 d-flex bg-white border py-4
		px-5" style="margin-top: 50px;">
			<h2 class="col-10">AutoML for Natural Language Processing</h2>
			<a href="#" class="btn btn-dark col-2">Join the event</a>
		</div>
	</section>

	<section class="container-xxl col-9 mt-4">
		<div class="row justify-content-center">
			<div class="col-9" style="padding-right: 50px;">
				<img src="./img/card3.webp" class="w-100">
				<h5 class="mt-5">About this Event</h5>
				<p class="mt-3">Automated machine learning (AutoML) is a process that automates some of the more complex or benign steps of the machine-learning lifecycle. This helps those without a deep theoretical background or practical experience with machine learning participate in AI development and help to accelerate the whole end to end journey.</p>
				<p>The demand for expert-level knowledge in machine learning is outpacing supply. This is manifesting itself through open positions that far exceed the number of qualified applicants. AutoML aims to narrow this gap by automating processes that would otherwise be too complex for anyone other than a field expert.</p>
				<p>This automation has led to user-friendly machine learning software with simple interfaces that anyone with beginner technical knowledge and time to learn the toolset can use, enabling non-data-science analysts, marketers, and IT staff to implement machine learning into their workflows. By scaling machine learning across various industries, all organizations benefit from boosted efficiency and effectiveness in the fields that need it most.</p>
				<p>Civilization wouldn’t have been possible without language. Language is the cornerstone of our existence. We communicate and share ideas through languages. Everything we express verbally or in written form contains a great deal of information. The tone, word choice, and pauses all contribute to the depth and importance of the language. Advances in ML have led to machines that are able to read, understand, and derive meaning from languages and communicate back to you like humans. NLP has become increasingly important and relevant in solving business problems. However NLP is still considered by most non data scientists as a complex research area where you need a lot of theoretical knowledge and practical experience. In this session, we want to show you how combining AutoML and NLP can help fill that gap for many business users and also speed up the time it takes to deliver NLP projects. AutoML NLP gives you the power to build and deploy custom ML models that are capable of analyzing text documents, categorizing them, finding important information, or analyzing their sentiments.</p>
				<a href="#" class="btn btn-dark w-100 py-3">Join the event</a>
				<h5 class="mt-5">Events you may like</h5>
				<div class="row mt-4">
					<div class="col">
					    <div class="card card2">
							<img src="./img/card1.webp" class="card-img-top">
							<div class="card-body">
								<h5 class="card-title">Frontend Development Lightning Talks</h5>
								<p class="card-event-date pt-2">Thu, Oct 13 · 8:45 PM</p>
								<p class="card-event-location">2 Bankside, London</p>
								<a href="#" class="btn btn-dark mt-3">About event</a>
							</div>
						</div>
					</div>
					<div class="col">
					    <div class="card card2">
							<img src="./img/card2.webp" class="card-img-top">
							<div class="card-body">
								<h5 class="card-title">What is the Metaverse? Meta explains it all.</h5>
								<p class="card-event-date pt-2">Wed, Oct 19 · 6:00 PM</p>
								<p class="card-event-location">Online</p>
								<a href="#" class="btn btn-dark mt-3">About event</a>
							</div>
						</div>
					</div>
					<div class="col">
					    <div class="card card2">
							<img src="./img/card6.webp" class="card-img-top">
							<div class="card-body">
								<h5 class="card-title">On Kotlin: #4</h5>
								<p class="card-event-date pt-2">Thu, Oct 20 · 8:00 PM</p>
								<p class="card-event-location">WeWork - Office Space & Coworking, London</p>
								<a href="#" class="btn btn-dark mt-3">About event</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col bg-white border h-100 pb-2 right-block-sticky">
				<div class="p-3">
					<h5>Date & Time</h5>
					<p>Mon, Oct 17 · 7:30 PM</p>
					<h5 class="mt-4">Location</h5>
					<p>Principal Place, London</p>
				</div>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.527039981535!2d-0.08138018428164229!3d51.52189247963755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb10a2721e7%3A0x6a92d93fc7b70414!2sPrincipal%20Place!5e0!3m2!1sru!2sru!4v1665956949308!5m2!1sru!2sru"style="border:0;" class="w-100" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			</div>
		</div>	
	</section>

	<footer class="text-center text-white bg-dark" style="margin-top:160px">
		<div class="row p-4 justify-content-center">
			<div class="col-3 text-start">
				<h5>Your account</h5>
				<ul class="nav flex-column">
					<li class="nav-item mb-2">
						<a href="sign_up.html" class="nav-link p-0 text-white">Sign up</a>
					</li>
					<li class="nav-item mb-2">
						<a href="log_in.html" class="nav-link p-0 text-white">Log in</a>
					</li>
					<li class="nav-item mb-2">
						<a href="#" class="nav-link p-0 text-white">Help</a>
					</li>
				</ul>
			</div>
			<div class="col-3 text-start">
				<h5>Discover</h5>
				<ul class="nav flex-column">
					<li class="nav-item mb-2">
						<a href="index.html" class="nav-link p-0 text-white">Events</a>
					</li>
					<li class="nav-item mb-2">
						<a href="calendar.html" class="nav-link p-0 text-white">Calendar</a>
					</li>
				</ul>
			</div>
			<div class="col-3 text-start">
				<h5>Contact</h5>
				<ul class="nav flex-column">
					<li class="nav-item mb-2">
						<a href="#" class="nav-link p-0 text-white">eventika@gmail.com</a>
					</li>
					<li class="nav-item mb-2">
						<a href="#" class="nav-link p-0 text-white">+79042753422</a>
					</li>
				</ul>
			</div>
		</div>
	    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
	    	© 2022 Eventika
	    </div>
	</footer>
</body>
</html>
```

####Личный кабинет
* `profile.html`
```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Profile</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="./css/style.css">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</head>

<body class="bg-light">
	<header>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		    <div class="container-xxl">
		    	<a class="navbar-brand" href="#">Eventika</a>
		    	<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		      		<span class="navbar-toggler-icon"></span>
		    	</button>
		    	<div class="collapse navbar-collapse" id="navbarNav">
		      		<ul class="navbar-nav">
		      			<li class="nav-item">
		          			<a class="nav-link" href="index.html">Events</a>
		        		</li>
		        		<li class="nav-item">
		          			<a class="nav-link" href="calendar.html">Calendar</a>
		        		</li>
		     	    </ul>
		    	</div>
		    	<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
		      		<ul class="navbar-nav">
		        		<li class="nav-item">
		          			<a class="nav-link text-white" href="profile.html">Kyunney</a>
		        		</li>
		     	    </ul>
		    	</div>
		  	</div>
		</nav>
	</header>

	<div class="container-xxl col-9" style="margin-top: 50px;">
		<div class="row justify-content-center">
			<div class="col-md-3">
				<div class="py-5 bg-dark rounded-top">
		            <img src="./img/avatar.svg" class="w-50 mx-auto d-block">
		            <h5 class="text-white text-center mt-4">Kyunney Nikiforova</h5>
		        </div>
		        <ul class="list-group">
		            <li class="list-group-item">
		                <a class="text-decoration-none link-dark" href="#">My profile</a>
		            </li>
		            <li class="list-group-item list-group-item-secondary">
		                <a class="text-decoration-none link-dark active" aria-current="true" href="#">My events</a>
		            </li>
		            <li class="list-group-item">
		                <a class="text-danger text-decoration-none link-dark" href="index.html">Log out</a>
		            </li>
		        </ul>
			</div>

			<div class="col-md-9" style="padding-left: 50px;">
				<h3>My events</h3>
				<div class="row mt-4">
					<div class="col">
					    <div class="card card2">
							<img src="./img/card1.webp" class="card-img-top">
							<div class="card-body">
								<h5 class="card-title">Frontend Development Lightning Talks</h5>
								<p class="card-event-date pt-2">Thu, Oct 13 · 8:45 PM</p>
								<p class="card-event-location">2 Bankside, London</p>
								<a href="#" class="btn btn-dark mt-3">About event</a>
								<a href="#" class="btn btn-outline-dark mt-3">Cancel</a>
							</div>
						</div>
					</div>
					<div class="col">
					    <div class="card card2">
							<img src="./img/card2.webp" class="card-img-top">
							<div class="card-body">
								<h5 class="card-title">What is the Metaverse? Meta explains it all.</h5>
								<p class="card-event-date pt-2">Wed, Oct 19 · 6:00 PM</p>
								<p class="card-event-location">Online</p>
								<a href="#" class="btn btn-dark mt-3">About event</a>
								<a href="#" class="btn btn-outline-dark mt-3">Cancel</a>
							</div>
						</div>
					</div>
					<div class="col">
					    <div class="card card2">
							<img src="./img/card6.webp" class="card-img-top">
							<div class="card-body">
								<h5 class="card-title">On Kotlin: #4</h5>
								<p class="card-event-date pt-2">Thu, Oct 20 · 8:00 PM</p>
								<p class="card-event-location">WeWork - Office Space & Coworking, London</p>
								<a href="#" class="btn btn-dark mt-3">About event</a>
								<a href="#" class="btn btn-outline-dark mt-3">Cancel</a>
							</div>
						</div>
					</div>
				</div>
			</div>		
		</div>
	</div>	

	<footer class="text-center text-white bg-dark" style="margin-top:160px">
		<div class="row p-4 justify-content-center">
			<div class="col-3 text-start">
				<h5>Your account</h5>
				<ul class="nav flex-column">
					<li class="nav-item mb-2">
						<a href="sign_up.html" class="nav-link p-0 text-white">Sign up</a>
					</li>
					<li class="nav-item mb-2">
						<a href="log_in.html" class="nav-link p-0 text-white">Log in</a>
					</li>
					<li class="nav-item mb-2">
						<a href="#" class="nav-link p-0 text-white">Help</a>
					</li>
				</ul>
			</div>
			<div class="col-3 text-start">
				<h5>Discover</h5>
				<ul class="nav flex-column">
					<li class="nav-item mb-2">
						<a href="index.html" class="nav-link p-0 text-white">Events</a>
					</li>
					<li class="nav-item mb-2">
						<a href="calendar.html" class="nav-link p-0 text-white">Calendar</a>
					</li>
				</ul>
			</div>
			<div class="col-3 text-start">
				<h5>Contact</h5>
				<ul class="nav flex-column">
					<li class="nav-item mb-2">
						<a href="#" class="nav-link p-0 text-white">eventika@gmail.com</a>
					</li>
					<li class="nav-item mb-2">
						<a href="#" class="nav-link p-0 text-white">+79042753422</a>
					</li>
				</ul>
			</div>
		</div>
	    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
	    	© 2022 Eventika
	    </div>
	</footer>
</body>
</html>
```


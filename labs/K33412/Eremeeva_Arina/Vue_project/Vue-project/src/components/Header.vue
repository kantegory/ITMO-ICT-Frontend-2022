<template>
	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" display="none">

		//иконка календарь
		<symbol id="calendar" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" fill="currentColor" viewBox="0 0 50 50">
			<path fill-rule="evenodd" d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"/>
		</symbol>

		//иконка вход
		<symbol id="ent" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
		width="24" height="24"
		fill="currentColor"
		viewBox="0 0 24 24">
			<path fill-rule="evenodd" d="M 12 1 C 8.6761905 1 6 3.6761905 6 7 L 6 8 C 4.9 8 4 8.9 4 10 L 4 20 C 4 21.1 4.9 22 6 22 L 18 22 C 19.1 22 20 21.1 20 20 L 20 10 C 20 8.9 19.1 8 18 8 L 18 7 C 18 3.6761905 15.32381 1 12 1 z M 12 3 C 14.27619 3 16 4.7238095 16 7 L 16 8 L 8 8 L 8 7 C 8 4.7238095 9.7238095 3 12 3 z M 12 13 C 13.1 13 14 13.9 14 15 C 14 16.1 13.1 17 12 17 C 10.9 17 10 16.1 10 15 C 10 13.9 10.9 13 12 13 z"/>
		</symbol>

		//иконка выход
		<symbol id="exit" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
		width="24" height="24"
		fill="currentColor"
		viewBox="0 0 24 24">
			<path fill-rule="evenodd" d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"/>
		</symbol>

		//личный кабинет
		<symbol id="lk" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
			<path d="M 12 2 C 7.582 2 4 5.582 4 10 L 4 11 L 4 11.902344 C 3.426291 12.449411 3 13.153146 3 14 C 3 15.241968 3.8575508 16.162904 4.9433594 16.613281 C 6.2443933 19.723094 8.8502365 22 12 22 C 15.149764 22 17.755607 19.723094 19.056641 16.613281 C 20.142449 16.162904 21 15.241968 21 14 C 21 13.153146 20.573709 12.449411 20 11.902344 L 20 11 L 20 10 C 20 5.582 16.418 2 12 2 z M 7 10 L 17 10 C 17.552 10 18 10.448 18 11 L 18 12 L 18 12.271484 A 1.0001 1.0001 0 0 0 18.501953 13.138672 C 18.805591 13.312973 19 13.615008 19 14 C 19 14.515121 18.631169 14.912712 18.138672 14.980469 A 1.0001 1.0001 0 0 0 17.339844 15.613281 C 16.309043 18.299502 14.258448 20 12 20 C 9.7415517 20 7.6909574 18.299502 6.6601562 15.613281 A 1.0001 1.0001 0 0 0 5.8613281 14.980469 C 5.3688308 14.912712 5 14.515121 5 14 C 5 13.615008 5.1944088 13.312973 5.4980469 13.138672 A 1.0001 1.0001 0 0 0 6 12.271484 L 6 12 L 6 11 C 6 10.448 6.448 10 7 10 z"/>
		</symbol>
			
		//иконка адрес
		<symbol id="addr" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 48 48">
			<path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z"/>
		</symbol>

		//иконка тип мероприятия
		<symbol id="type" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-train-front" viewBox="0 0 24 24">
			<path d="M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10s10-4.477,10-10S17.523,2,12,2z M12,17L12,17c-0.552,0-1-0.448-1-1v-4 c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v4C13,16.552,12.552,17,12,17z M12.5,9h-1C11.224,9,11,8.776,11,8.5v-1 C11,7.224,11.224,7,11.5,7h1C12.776,7,13,7.224,13,7.5v1C13,8.776,12.776,9,12.5,9z"/>
		</symbol>

		//записаться
		<symbol id="add" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 24 24">
			<path d="M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10s10-4.477,10-10S17.523,2,12,2z M16,13h-3v3c0,0.552-0.448,1-1,1h0 c-0.552,0-1-0.448-1-1v-3H8c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h3V8c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v3h3 c0.552,0,1,0.448,1,1v0C17,12.552,16.552,13,16,13z"/>
		</symbol>
	</svg>

	<header class="header pt-2">
		<nav class="navbar navbar-expand-lg navbar-expand-xl navbar-light">
			<div class="container">
				<a class="navbar-brand nav-text" href="#" @click="$router.push('/')">
					Главная
				</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="quit navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link active nav-text" href="#" id="enter" @click="$router.push('/enter/')">
								<svg class="icon-main">
									<use xlink:href="#ent"></use>
								</svg>
								Вход
							</a>
						</li>
						<li>
							<a class="nav-link active nav-text" href="#"  id="enterlk" @click="$router.push('/lk/')">
								<svg class="icon-main">
									<use xlink:href="#lk"></use>
								</svg>
								Кабинет</a>
						</li>
						<li>
							<a class="nav-link active nav-text" id="logout" href="#" @click="exit">
								<svg class="icon-main">
									<use xlink:href="#exit"></use>
								</svg>
								Выход</a>
						</li>
						<li>
							<a class="nav-link active nav-text" id="main" href="#" @click="$router.push('/calendar/')">
								<svg class="icon-main">
									<use xlink:href="#calendar"></use>
								</svg>
								Календарь</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'HeaderBlock',

	methods: {
		check() {
			const idLogOut = document.querySelector('#logout');
			const idLogIn = document.querySelector('#enter');
			const enterLK = document.querySelector('#enterlk');

			if (localStorage.accessToken){
				idLogIn.classList.add("d-none");
				idLogOut.classList.remove("d-none");
			} else {
				idLogIn.classList.remove("d-none");
				enterLK.classList.add("d-none");
				idLogOut.classList.add("d-none");
			}
		},

		exit() {
			const idLogOut = document.querySelector('#logout');
			const idLogIn = document.querySelector('#enter');
			const enterLK = document.querySelector('#enterlk');
			localStorage.clear();
			idLogIn.classList.remove("d-none");
			enterLK.classList.add("d-none");
			idLogOut.classList.add("d-none");
		}
	},

	mounted() {
		this.check()
	}
}
</script>
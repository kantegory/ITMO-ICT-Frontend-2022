<template>
	<main class="row mx-auto d-flex pt-5 color-main pb-5">
		<section class="note container row mx-auto" data-event-id="1">
			<h1 class="help mb-5 custom-colored-h1" name="mero">Талисман в дорогу</h1>
			<h4 class="help mb-5 custom-colored-h1">Музей современного искусства Эрарта представляет выставку «Талисман в дорогу» </h4>
			<h5 class="help mb-5 color-text">
				<div class="row d-flex col-md-3 col-lg-2 col-sm-3 col-4 col-xl-2 col-2 row mt-5">
					<ul>
						<h6 class="color-text">Адрес:</h6>
						<h6 class="mt-5 color-text">Время проведения</h6>
						<h6 class="color-text mt-5">Метро:</h6>
						<h6 class="color-text mt-5">Телефон:</h6>
						<h6 class="color-text mt-5">Сайт:</h6>
						<h6 class="color-text mt-5">Часы работы:</h6>
					</ul>
				</div>
				<div class=" row d-flex col-md-9 col-lg-6 col-sm-9 col-9 col-xl-5 row mt-5">
					<ul>
						<h6 class="text address color-text" name="address">29-я линия, дом 2, Выставочное крыло, 2 этаж</h6>
						<h6 class="text mt-5 data color-text" name="data">23 марта 2023 — 23 июля 2023</h6>
						<h6 class="text mt-5 metro color-text" name="metro">Спортивная, Приморская  Василеостровская</h6>
						<h6 class="text mt-5 color-text">+7 (812) 324 08 09</h6>
						<h6 class="text mt-5 color-text"><a href="https://www.erarta.com/ru/calendar/exhibitions/detail/29122201/">Сайт мероприятия</h6></a>
						<h6 class="text mt-5 color-text">ежедневно, кроме вторника, с 10:00 до 22:00</h6>
					</ul>
				</div> 
		</section>
		<section class="container row mx-auto pt-5">
		<h3 class="colored-h3 text-card">Пойдешь с нами?)</h3>
			<form onsubmit="addNote()">
				<div class="pt-3">
					<button type="submit" class="btn btn-light button-color">Записаться</button>
				</div>
			</form>
		</section> 
	</main>
</template>

<script>
export default {
	name: 'MusBlock'
}
</script>
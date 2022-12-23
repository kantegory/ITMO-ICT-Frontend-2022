<template>
	<main class="container-fluid background-main">
		<section class="pt-5 pb-5">
			<div class="d-flex flex-column align-items-center pt-5 pb-5">
				<div class="d-flex flex-column align-items-center">
					<h1 class="h2 p-0 mb-2 text-color">Ваш личный кабинет</h1>
					<p class="p-0 m-2 text-color">Ваши записи</p>
				</div>
				<div class="row justify-content-center pt-5 pb-5" id="container">
					<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<h2 class="modal-title" id="exampleModalLabel">Оповещение</h2>
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
		</section>
	</main>
</template>

<script>
export default {
	name: 'PersonalBlock'
}
</script>
<template>
	<main class="container-xl p-5 mb-5">
		<form class="d-flex-column">
			<h1 class="row mb-5 justify-content-center">Вход</h1>
			<div class="row mb-3 justify-content-center">
				<label for="email" class="col-sm-1 col-form-label">Почта</label>
				<div class="col-sm-3 col-md-4">
					<input type="text" class="form-control" name="email" id="email">
				</div>
			</div>
			<div class="row mb-3 justify-content-center">
				<label for="password" class="col-sm-1 col-form-label">Пароль</label>
				<div class="col-sm-3 col-md-4">
					<input type="password" class="form-control" name="password" id="password">
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
</template>

<script>
export default {
	name: 'EntryBlock'
}
</script>

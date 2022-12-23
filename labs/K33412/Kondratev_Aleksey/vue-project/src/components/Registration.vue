<template>
	<main class="container-xl p-5">
		<form class="d-flex-column" onsubmit="register(event)">
			<h1 class="row mb-5 justify-content-center">Регистрация</h1>
			<div class="row mb-3 justify-content-center">
				<label for="inputName3" class="col-sm-1 col-form-label">Имя</label>
				<div class="col-sm-3">
					<input type="text" class="form-control" name="firstname" id="inputName3" placeholder="Алексей" required>
				</div>
			</div>
			<div class="row mb-3 justify-content-center">
				<label for="inputSurname3" class="col-sm-1 col-form-label">Фамилия</label>
				<div class="col-sm-3">
					<input type="text" class="form-control" name="lastname" id="inputSurname3" placeholder="Кондратьев" required>
				</div>
			</div>
			<div class="row mb-3 justify-content-center">
				<label for="inputEmail3" class="col-sm-1 col-form-label">Почта</label>
				<div class="col-sm-3">
					<input type="email" class="form-control" name="email" id="inputEmail3" placeholder="example@email.com" required>
				</div>
			</div>
			<div class="row mb-3 justify-content-center">
				<label for="inputLogin3" class="col-sm-1 col-form-label">Логин</label>
				<div class="col-sm-3">
					<input type="text" class="form-control" name="login" id="inputLogin3" placeholder="9Anpanman" required>
				</div>
			</div>
			<div class="row mb-3 justify-content-center">
				<label for="inputPassword3" class="col-sm-1 col-form-label">Пароль</label>
				<div class="col-sm-3">
					<input type="password" class="form-control" name="password" id="inputPassword3" required>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-sm-4">
					<button type="submit" class="btn btn-primary">Зарегистрироваться</button>
				</div>
			</div>
		</form>
	</main>
</template>

<script>
export default {
	name: 'RegistrationBlock'
}
</script>

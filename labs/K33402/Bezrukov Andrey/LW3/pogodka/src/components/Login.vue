<template>
    <section class=" p-5">
        <div class="container">
            <div class = "d-md-flex align-items-center justify-content-around">
                <h3 class="mb-3">Already have an account? Log in!</h3>
                    <form>
                        <div class="mb-3">
                            <label for="InputEmail" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="InputPassword" class="form-label">Password</label>
                            <input type="password" class="form-control" id="InputPassword">
                        </div>
                        <button type="submit" class="btn btn-light">Log in</button>
                    </form>
                </div>
            </div>
    </section>
</template>

<script>
export default {
  name: 'Login'
}
</script>

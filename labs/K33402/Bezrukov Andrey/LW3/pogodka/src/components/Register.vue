<template>
  <section class="p-5">
        <div class="container">
            <div class = "d-md-flex align-items-center justify-content-around">
                <h3 class="mb-3">First time here? Sign up!</h3>
                    <form>
                        <div class="mb-3">
                            <label for="InputName" class="form-label">Name</label>
                            <input type="name" class="form-control" id="InputName">
                        </div>
                        <div class="mb-3">
                            <label for="InputEmail" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="InputPassword" class="form-label">Password</label>
                            <input type="password" class="form-control" id="InputPassword">
                        </div>
                        <div class="mb-3">
                            <label for="InputPassword" class="form-label">Repeat the password</label>
                            <input type="password" class="form-control" id="InputPassword">
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1" required>I agree to the <a href='#'>terms and conditions</a></label>
                          </div>
                        <button type="submit" class="btn btn-light">Sign up</button>
                    </form>
                </div>
            </div>
    </section>
  </template>

<script>
export default {
  name: 'Register'
}
</script>

<style>
  section{
    background-color: #00539CFF;
}
  h3, label {
    color: white;
  }
</style>

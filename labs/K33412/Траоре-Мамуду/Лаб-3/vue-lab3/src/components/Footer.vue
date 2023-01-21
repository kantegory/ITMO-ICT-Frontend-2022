<template>
  <footer>
    <div style="width:100%" class="d-flex">
      <div class="footer">
        <form class="d-flex flex-column form-container2">
          <div class="d-flex align-items-center">
            <div style="padding-right: 15px;">Create your own group.</div>
            <button class="button2">Get Started</button>
          </div>
          <hr>
          <div class="d-flex justify-content-between text-decoration-none">
            <div class="d-flex flex-column align-items-stretch fs-6">
              <span class="h5">Your Account</span>
              <div style="color: rgb(168, 161, 161);" class="d-flex flex-column justify-content-center fs-6 p-2">
                <a>Sign up</a>
                <a>Log in</a>
                <a>Help</a>
              </div>
            </div>
            <div class="d-flex flex-column align-items-stretch fs-6">
              <span class="h5">Discover</span>
              <div style="color: rgb(168, 161, 161);" class="d-flex flex-column fs-6 p-2">
                <a>Groups</a>
                <a>Calendar</a>
                <a>Topics</a>
                <a>Citites</a>
                <a>Online Events</a>
                <a>Local Guides</a>
              </div>
            </div>
            <div class="d-flex flex-column align-items-stretch fs-6">
              <span class="h5">Meetup</span>
              <div style="color: rgb(168, 161, 161);" class="d-flex flex-column fs-6 p-2">
                <a>About</a>
                <a>Blog</a>
                <a>Careers</a>
                <a>Apps</a>
              </div>
            </div>
          </div>
          <div style="padding-bottom:0.5rem;" class="h5">Follow us</div>
          <div class="d-flex align-items-baseline">
            <i style="font-size: 30px;" class="pe-4 fa fa-facebook"></i>
            <i style="font-size: 30px;" class="pe-4 fa fa-twitter icon-size"></i>
            <i style="font-size: 30px;" class="pe-4 fa fa-youtube icon-size"></i>
            <i style="font-size: 30px;" class="pe-4 fa fa-instagram icon-size"></i>
          </div>
          <div class="d-flex justify-content-start">
            <div class="py-4 pe-3"><i class="fa fa-copyright"></i> 2022 Traore Mamoudou</div>
            <div class="py-4 pe-3">Terms of Service</div>
            <div class="py-4 pe-3">Privacy Policy</div>
            <div class="py-4 pe-3">Cookie Policy</div>
            <div class="py-4 pe-3">Help</div>
          </div>
        </form>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style>
footer {
  background-color: rgb(29, 29, 29);
  color: white;
  display: flex;
  justify-content: center;
  width: 100%;
}

.footer {
  width: 70%;
  height: fit-content;
  margin: 0 auto;
  position: relative;
}

.button2 {
  padding: 8px 12px;
  font-size: 1rem;
  line-height: 24px;
  border-radius: 8px;
  border: 3px solid white;
  background-color: rgb(29, 29, 29);
  color: #ffffff;
}
</style>
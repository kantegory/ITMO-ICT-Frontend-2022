<template>
  <main>
    <section class="d-flex align-items-center p-3">
      <div class="pa"></div>
      <div class="d-flex flex-column justify-content-center pa2">
        <div class="fw-bold fs-4 pink m-1">BECOME AN ORGANIZER</div>
        <span class="m-1 fs-3 fw-bolder f1">
          We'll walk you through a few steps to build your local community</span
        >
        <button class="b4 fw-bold m-1" type="submit">Get started</button>
      </div>
      <div class="pa"></div>
    </section>
    <section class="p-5"></section>
    <section
      style="background-color: #00455d"
      class="d-flex align-items-center p-3"
    >
      <div class="pa"></div>
      <div class="d-flex flex-column pa2">
        <h1 style="color: white" class="pb-3 fs-3 fw-bold">
          People start Meetup groups to make new friends, pursue passions, and
          turn side hustles into careers.
        </h1>
        <div class="d-flex">
          <img class="i-s" src="../assets/images/meeting.jpeg" />
          <div
            style="color: white"
            class="d-flex flex-column justify-content-center"
          >
            <h4 class="pb-2">Make an impact</h4>
            <p>
              "Hosting oyster tasting events on Meetup allows me to create a
              larger impact beyond my blog and get more people interested in and
              involved with sustainable seafood."
            </p>
            <p>Mamoudou . Saint-Petersbourg</p>
          </div>
        </div>

        <div class="mb-5"></div>
      </div>
      <div class="pa"></div>
    </section>
    <section class="d-flex align-items-start p-3">
      <div class="pa"></div>
      <div class="d-flex flex-column pa2">
        <h1 class="pw-bold pb-3">Organize your way, on your schedule</h1>
        <div class="container">
          <div class="row row-cols-3">
            <div class="col">
              <div class="d-flex flex-column justify-content-evenly">
                <img src="../assets/images/section3-1.png" />
                <h2>Find your members</h2>
                <p>
                  We’ll help you find interested members and you can approve
                  them to be sure they’ll be a good fit for your community.
                </p>
              </div>
            </div>
            <div class="col">
              <div class="d-flex flex-column">
                <img src="../assets/images/section3-2.png" />
                <h2>Schedule events in minutes</h2>
                <p>
                  Organizer tools make it easy to schedule and manage your
                  events. You decide when, where, and how often your group
                  meets.
                </p>
              </div>
            </div>
            <div class="col">
              <div class="d-flex flex-column">
                <img src="../assets/images/section3-3.png" />
                <h2>Have others help you host</h2>
                <p>
                  You don’t have to do it alone. Recruit a leadership team to
                  help you host events and manage your group.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pa"></div>
    </section>
    <section class="p-5"></section>
    <section class="d-flex align-items-start p-3">
      <div class="pa"></div>
      <div class="d-flex flex-column justify-content-center pa2">
        <h1 class="pw-bold pb-3">What would you like your group to do?</h1>
        <p>Try starting simple with one of these common event formats</p>
        <div class="container">
          <div class="row row-cols-2">
            <div class="col">
              <div class="d-flex flex-column">
                <img class="i-s2 mb-3" src="../assets/images/section4-1.jpg" />
                <h2>Hang out</h2>
                <p>
                  Organize a get-together at a bar or local coffee shop to
                  discuss something you're interested in
                </p>
                <a class="text-decoration-none text-viridian"
                  >Start a group that hangs out ></a
                >
              </div>
            </div>
            <div class="col">
              <div class="d-flex flex-column">
                <img class="i-s2 mb-3" src="../assets/images/section4-2.jpg" />
                <h2>Learn</h2>
                <p>
                  Teach a class, host a workshop, or invite guest speakers to
                  share their expertise with the group.
                </p>
                <a class="text-decoration-none text-viridian"
                  >Start a group that learns ></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pa"></div>
    </section>
  </main>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style>
.b4 {
  background-color: #f65858;
  width: 14rem;
  height: 3rem;
  color: white;
  border-radius: 0.5rem;
  border: 1px solid #f65858;
}

.b4:hover {
  opacity: 0.8;
}

.i-s {
  width: 400px;
  height: 300px;
  border-radius: 5px;
  margin-right: 20px;
}
</style>

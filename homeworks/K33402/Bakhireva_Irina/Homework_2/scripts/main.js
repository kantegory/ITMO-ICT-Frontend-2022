const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const eventName = document.querySelector("#event-name").value.toLowerCase();
  const eventLocation = document.querySelector("#event-location").value.toLowerCase();
  const eventElements = document.querySelectorAll(".card");


  eventElements.forEach((event) => {

    const name = event.querySelector(".my-0.font-weight-normal").textContent.toLowerCase();;
    console.log("Name", name);
    const location = event.querySelector(".text-muted").textContent.toLowerCase();;
    console.log("Location", location);
    if (name.includes(eventName) && location.includes(eventLocation)) {

      event.style.display = "";
    } else {

      event.style.display = "none";
    }
  });
});

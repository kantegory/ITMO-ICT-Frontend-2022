document.getElementById("main-action").onclick = function () {
    document.getElementById("events").scrollIntoView({behavior: "smooth"});
}
var buttons = document.getElementsByClassName("event-button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("price").scrollIntoView({behavior: "smooth"});
    }
}
document.getElementById("price-action").onclick = function () {
    if (document.getElementById("name").value === "") {
        alert("Заполните поле имя!");
    } else if (document.getElementById("phone").value === "") {
        alert("Заполните поле телефон!");
    } else if (document.getElementById("event").value === "") {
        alert("Заполните поле мероприятие!");
    } else {
        alert("Спасибо за заявку, мы свяжемся с вами а ближайшее время!")
    }
}
document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.2) / 9) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll')
});

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()

    const isVisible =
        oninput().toLowerCase().includes(value) ||
        oninput().element.classList.toggle("hide", !isVisible)

})

let switchMode = document.getElementById("switchMode");
switchMode.onclick = function (){
    let theme = document.getElementById("theme");
    if (theme.getAttribute("href") == "styles/light.css"){
        theme.href = "styles/dark.css"
    }
    else {
        theme.href = "styles/light.css"
    }
}
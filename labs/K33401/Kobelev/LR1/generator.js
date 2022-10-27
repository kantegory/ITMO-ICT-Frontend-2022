function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function func(url) {
    return fetch(url)
        .then(response => response.json())
}

function setAuthorInfo(elem) {
    let character = randomIntFromInterval(1, 826)
    func('https://rickandmortyapi.com/api/character/' + character.toString())
        .then(result => {
            $(elem).find("img")[0].src = result.image
            $(elem).find("small")[0].textContent = result.name;
        })
}

const authors = document.getElementsByClassName("author");
for (let i = 0; i < authors.length; i++) {
    setAuthorInfo(authors.item(i));
}

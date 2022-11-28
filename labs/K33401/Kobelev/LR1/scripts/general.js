function changeSorting(button) {
    const icon = button.getElementsByTagName("use")[0];
    if (button.value === "asc") {
        button.value = "desc";
        button.innerHTML =
            "<svg class=\"icon\">\n" +
            "   <use xlink:href=\"#s-desc\"></use>\n" +
            "   <title>Sort</title>\n" +
            "</svg>\n" +
            "Descending"
    } else {
        button.value = "asc";
        button.innerHTML =
            "<svg class=\"icon\">\n" +
            "   <use xlink:href=\"#s-asc\"></use>\n" +
            "   <title>Sort</title>\n" +
            "</svg>\n" +
            "Ascending"
    }
}

let selectedTags = 0
let maxTags = 3
const tagsHeader = document.getElementById("tagsHeader")

function selectTag(button) {
    if ($(button).hasClass('active')) {
        $(button).toggleClass('btn-secondary').toggleClass('btn-light');
        $(button).toggleClass('active');
        selectedTags -= 1;
    } else if (selectedTags < maxTags) {
        $(button).toggleClass('btn-secondary').toggleClass('btn-light');
        $(button).toggleClass('active');
        selectedTags += 1;
    }

    tagsHeader.innerHTML = "Tags (" + selectedTags.toString() + "/" + maxTags.toString() + "):";
}

async function likeScenario(id, button) {
    const likeData = {}
    const userLikeData = {}

    let scenarios_url = "http://localhost:3000/scenarios"
    let response = await fetch(`${scenarios_url}?id=${id}`, {
        headers: {
            "Authorization": `Bearer ${getAuthToken()}`
        }
    })

    let responseJson = await response.json()

    let currentLikes = responseJson[0].likes

    let users_url = "http://localhost:3000/users"
    let user_id = JSON.parse(getUser()).id

    response = await fetch(`${users_url}?id=${user_id}`, {
        headers: {
            "Authorization": `Bearer ${getAuthToken()}`
        }
    })

    responseJson = await response.json()

    let likes = responseJson[0].likes

    if (button.classList.contains('active')) {
        currentLikes += 1
        likes.push(id)
    } else {
        currentLikes -= 1
        let index = likes.indexOf(id);
        likes.splice(index, 1);
    }

    userLikeData['likes'] = likes
    likeData['likes'] = currentLikes

    scenarios_url = `${scenarios_url}/${id}`
    await fetch(scenarios_url, {
        method: "PATCH", body: JSON.stringify(likeData), headers: {
            'Content-Type': 'application/json'
        }
    })

    users_url = `${users_url}/${user_id}`
    await fetch(users_url, {
        method: "PATCH", body: JSON.stringify(userLikeData), headers: {
            'Content-Type': 'application/json'
        }
    })

    localStorage.user.likes = likes

    button.textContent = currentLikes
}

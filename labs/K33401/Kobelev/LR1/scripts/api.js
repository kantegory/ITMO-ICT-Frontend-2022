function getCardHtml({id, name, description, likes, image}, tags, author, liked) {
    return `
        <div class="col" data-card-id="${id}">
            <div class="card shadow-sm rounded h-100">
                <div class="d-flex flex-column h-100">
                    <div class="card-body row flex-grow-1 p-0">
                        <div class="col-lg-4 d-none d-sm-none d-md-none d-lg-block">
                            <img src=${image} class="card-img-top img-fluid text-center" alt="...">
                        </div>
                        <div class="col-md-12 col-lg-8">
                            <div class="d-block d-md-block d-lg-none">
                                <img src=${image} class="card-img-top-horizontal img-fluid text-center" alt="...">
                            </div>
                            <h5 class="card-title mx-2 mt-2 mb-1">${name}</h5>
                            <div class="d-flex flex-row flex-wrap my-1">
                                ${tags}
                            </div>
                            <p class="mx-2 my-1 lh-base"><small>${description}</small></p>
                        </div>
                    </div>
                    <div class="card-footer px-2 py-1 d-flex justify-content-between align-items-center">
                        <button type="button" data-bs-toggle="button" class="btn ${liked} btn-sm btn-outline-danger shadow-sm rounded"
                            onclick="likeScenario(${id}, this)">
                            ${likes}
                        </button>
                        <div class="author">
                            <small class="fw-light">${author}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      `
}

function getScenarioTagHtml({name}) {
    return `
        <span class="badge rounded-pill fw-normal px-2 py-1 mx-1 my-1"><small>${name}</small></span>
        `
}

function getTagButtonHtml({id, name}) {
    return `
        <button type="button" class="btn btn-sm btn-light rounded-pill py-0 px-3"
                                    onclick="selectTag(this)" value="${id}"><small>${name}</small></button>
        `
}

function getSystemCheckboxHtml({id, name}) {
    return `
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value=${id} id="gameSystem${id}" checked>
            <label class="form-check-label" for="gameSystem${id}">${name}</label>
        </div>
        `
}

async function loadScenarios(searchParams) {
    const searchString = searchParams.toString()

    document.querySelector("#scenarios").innerHTML = ""

    let users_url = "http://localhost:3000/users"
    let user = getUser()
    let scenarios_liked = []

    if (user !== null) {
        let user_id = JSON.parse(user).id;
        users_url = `${users_url}?id=${user_id}`

        let response = await fetch(users_url, {
            headers: {
                "Authorization": `Bearer ${getAuthToken()}`
            }
        })

        let responseJson = await response.json()
        scenarios_liked = responseJson[0].likes
    }

    let scenarios_url = "http://localhost:3000/scenarios"
    scenarios_url = `${scenarios_url}?${searchString}`

    const selectedTags = searchParams.getAll("tag");
    const selectedTab = searchParams.get("tab");

    response = await fetch(scenarios_url, {
        headers: {
            "Authorization": `Bearer ${getAuthToken()}`
        }
    })

    responseJson = await response.json()

    for (const scenario of responseJson) {
        const tags = scenario.tags
        let relevantScenario = true

        for (const tag of selectedTags) {
            if (tags.includes(Number(tag)) === false) {
                relevantScenario = false
                break
            }
        }

        if (scenario.name.toString().includes(searchParams.get("search")) === false && searchParams.get("search") != null){
            relevantScenario = false
        }

        if (selectedTab === 'liked' && scenarios_liked.includes(scenario.id) === false) {
            continue
        }
        else if (selectedTab === 'published' && scenario.author !== JSON.parse(user).id) {
            continue
        }

        if (relevantScenario === false) {
            continue
        }

        let t = ""
        for (const tag of tags) {
            t += await loadTags(tag)
        }

        let users_url = "http://localhost:3000/users"
        users_url = `${users_url}?id=${scenario.author}`

        const response = await fetch(users_url, {
            headers: {
                "Authorization": `Bearer ${getAuthToken()}`
            }
        })

        const responseJson = await response.json()
        const author = responseJson[0].username

        let liked = ''
        if (scenarios_liked.includes(scenario.id)) {
            liked = 'active'
        }

        if (user === null) {
            liked = 'disabled'
        }

        document.querySelector("#scenarios").innerHTML += getCardHtml(scenario, t, author, liked)
    }
}

async function loadTags(searchString = "") {
    let url = "http://localhost:3000/tags"

    if (searchString) {
        const searchParams = new URLSearchParams()
        searchParams.set('id', searchString)

        const searchParamsString = searchParams.toString()

        url = `${url}?${searchParamsString}`
    }

    const response = await fetch(url, {
        headers: {
            "Authorization": `Bearer ${getAuthToken()}`
        }
    })

    const responseJson = await response.json()

    if (searchString) {
        return getScenarioTagHtml(responseJson[0])
    }

    for (const tag of responseJson) {
        document.querySelector("#tagsButtons").innerHTML += getTagButtonHtml(tag)
    }
}

async function loadSystems() {
    let url = "http://localhost:3000/systems"

    const response = await fetch(url, {
        headers: {
            "Authorization": `Bearer ${getAuthToken()}`
        }
    })

    const responseJson = await response.json()

    for (const system of responseJson) {
        document.querySelector("#gameSystems").innerHTML += getSystemCheckboxHtml(system)
    }
}

function search() {
    const query = new URLSearchParams()

    const checkBoxesSelected = document.querySelector("#gameSystems").querySelectorAll('input[type="checkbox"]:checked');
    for (const checkBoxSelected of checkBoxesSelected) {
        query.append("system", checkBoxSelected.getAttribute("value"));
    }

    const tabSelected = document.querySelector("#scenariosTabs").querySelector('input[type="radio"]:checked')
    query.append("tab", tabSelected.value);

    const tagsSelected = document.querySelector("#tagsButtons").querySelectorAll(".active")
    for (const tagSelected of tagsSelected) {
        query.append("tag", tagSelected.value);
    }

    query.append("adult", "0");
    if (document.getElementById("checkerAdultContent").checked) {
        query.append("adult", "1");
    }

    if (document.getElementById("checkerOnlyFinished").checked) {
        query.set("finished", "1");
    }

    query.set("search", searchBar.value);

    query.set("_sort", document.querySelector('input[name="sortingOption"]:checked').value);
    query.set("_order", document.getElementById("sortingOrder").value);

    loadScenarios(query)
}

const searchBar = document.getElementById("searchBar")
searchBar.addEventListener('change', search);


document.addEventListener('DOMContentLoaded', () => {
    loadScenarios(new URLSearchParams())
    loadTags()
    loadSystems()
})

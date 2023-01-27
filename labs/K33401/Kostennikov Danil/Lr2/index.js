//const submit = document.getElementById("form_submit");
//console.log(submit);
//submit.addEventListener("click", (event) => console.log(event, "submit was clicked"));

function onSubmit() {
    var email = document.getElementById("email");
    console.log(email.value);
}

async function signUp(event) {
    event.preventDefault();
    const inputs = Array.from(event.target.querySelectorAll("input"));
    console.log(inputs);
    var email = document.getElementById("emailUp");
    console.log(email.value);

    const Data = {};

    for (const input of inputs) {
        if (input.name != "confPwd") {
            Data[input.name] = input.value;
        }
    }

    console.log("user data", Data);

    const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        body: JSON.stringify(Data),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const responseJson = await response.json();
    if (responseJson === "Email already exists") {
        alert("User with this email already exists");
    } else {
        const { accessToken, user } = responseJson;

        console.log("response", responseJson);

        localStorage.accessToken = accessToken;
        localStorage.user = JSON.stringify(user);

        checkAuth();
        window.location.href = "main.html";
    }
}

async function signIn(event) {
    event.preventDefault();
    const inputs = Array.from(event.target.querySelectorAll("input"));
    console.log(inputs);
    var email = document.getElementById("emailUp");
    console.log(email.value);

    const Data = {};

    for (const input of inputs) {
        if (input.name != "confPwd") {
            Data[input.name] = input.value;
        }
    }

    console.log("user data", Data);

    const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        body: JSON.stringify(Data),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const responseJson = await response.json();
    if (
        responseJson === "Email and password are required" ||
        responseJson === "Cannot find user" ||
        responseJson === "Incorrect password"
    ) {
        alert("Try again!");
    } else {
        const { accessToken, user } = responseJson;

        console.log("response", responseJson);

        localStorage.accessToken = accessToken;
        localStorage.user = JSON.stringify(user);
        window.location.href = "main.html";
    }
}

async function logout() {
    localStorage.clear();
    window.location.href = "main.html";
}

async function loadEvents() {
    document.querySelector("#events").innerHTML = "";
    const response = await fetch("http://localhost:3000/events", {});

    const responseJson = await response.json();

    console.log("response", responseJson);

    for (const card of responseJson) {
        document.querySelector("#events").innerHTML += getCardHtml(card);
    }
}

function getCardHtml({ photoPath, title, date, location, id }) {
    return `
        <div class="col">
                    <div class="card">
                        <img src=${photoPath} class="card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-event-date">${date}</p>
                            <p class="card-event-location">${location}</p>
                            <a href="#" onclick="addEventToUser(event, ${id})" class="btn btn-dark mt-3">Add event</a>
                        </div>
                    </div>
                </div>
      `;
}

document.addEventListener("DOMContentLoaded", () => {
    loadEvents();
});

async function addEventToUser(event, id) {
    const user = localStorage.user;
    if (user) {
        console.log(user);
        console.log(id);
        const userJson = JSON.parse(user);

        const getResponse = await fetch("http://localhost:3000/644/userEvents", {});
        console.log("get response", getResponse);
        const getResposneJson = await getResponse.json();
        for (const event of getResposneJson) {
            if (event.userId == userJson.id && event.eventId == id) {
                alert("Event already added");
                return false;
            }
        }
        const Data = {};
        Data["eventId"] = id;
        Data["userId"] = userJson.id;
        console.log(Data);
        const postResponse = await fetch("http://localhost:3000/644/userEvents", {
            method: "POST",
            body: JSON.stringify(Data),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.accessToken}`,
            },
        });
        const responseJson = await postResponse.json();
        console.log(responseJson);
        alert("Added");
    } else {
        alert("Login to add events");
    }
}

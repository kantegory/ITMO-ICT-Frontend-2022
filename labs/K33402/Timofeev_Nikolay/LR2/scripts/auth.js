if (!backendUrl) {
    const backendUrl = "http://194.87.248.78:8000";
}

registerUser = (username, password, email) => {
    fetch(`${backendUrl}/users`, {
        // ?username=${username}&password=${password}
        method: "POST",
        body: JSON.stringify({
            username,
            password,
            email,
        }),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
    })
        .then(() => {
            document.getElementById("closeSignUpModal").click();
        })
        .catch((e) => alert(e));
};

loginUser = (username, password) => {
    fetch(`${backendUrl}/token?username=${username}&password=${password}`)
        .then((res) => {
            if (res.status !== 200) {
                throw "Wrong username or password!";
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
            localStorage.setItem("token", data);
            document.getElementById("closeLoginModal").click();
            window.location.reload();
        })
        .catch((e) => {
            document.getElementById("loginErrorMessage").innerHTML = e;
        });
};

logout = () => {
    window.location.reload();
    localStorage.removeItem("token");
};

disableAccess = () => {
    const secure = document.querySelectorAll("#secure");
    for (const el of secure) {
        // disable secured elements
        el.setAttribute("disabled", "");
        // remove all links
        el.setAttribute("href", "#");
    }
    Toastify({
        text: "Login to get access to all features!",
        duration: 3000,
        gravity: "bottom",
    }).showToast();
};

checkLogin = () => {
    const token = localStorage.getItem("token");
    if (token) {
        fetch(`${backendUrl}/me`, {
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
                token,
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                document.getElementById(
                    "authUser"
                ).innerHTML = `<a href="/profile" class="nav-link px-2 link-dark">Welcome, ${data.username}!</a>`;
                document.getElementById(
                    "loginIcon"
                ).innerHTML = `<a href="#" alt='logout' class="nav-link px-2 link-dark"><i class="bi bi-box-arrow-left"></i></a>`;
                document.getElementById("loginIcon").onclick = logout;
                const username = document.getElementById('username')
                if (username) {
                    username.innerHTML = data.username
                }
                const uncleSamSection = document.querySelectorAll("#uncleSam")
                if (uncleSamSection) uncleSamSection.forEach(el => {el.remove()});
            });
    } else {
        disableAccess();
    }
};

document.getElementById("loginButton").onclick = () =>
    loginUser(document.getElementById("loginUsername").value, document.getElementById("loginPass").value);

document.getElementById("signUpButton").onclick = () =>
    registerUser(
        document.getElementById("signUpUsername").value,
        document.getElementById("signUpPass").value,
        document.getElementById("signUpEmail").value
    );

checkLogin();

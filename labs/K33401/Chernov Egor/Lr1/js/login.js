// Our web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAot7rgWsJ8JmcKv0t1kAg6Li7rev8msrI",
    authDomain: "coins-79d33.firebaseapp.com",
    projectId: "coins-79d33",
    storageBucket: "coins-79d33.appspot.com",
    messagingSenderId: "1063940474842",
    appId: "1:1063940474842:web:ce491946887f41f9cb22e3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Initialize var
const auth = firebase.auth()
const database = firebase.database()

function login() {
    // Get our fields
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    // Validate fields
    if (validateEmail(email) === false || validatePassword(password) === false) {
        alert("Email or password is wrong!!")
        return
    }

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user
            var databaseRef = database.ref()
            const date = Date.now()

            databaseRef.child("users").child(user.uid).get().then((snapshot) => {
                if (snapshot.exists()) {
                    const firstName = snapshot.val().first_name
                    const secondName = snapshot.val().second_name

                    var divTag = document.getElementById("container")
                    var childNodes = divTag.getElementsByTagName('*');
                    for (var node of childNodes) {
                        node.style.display = 'none';
                    }

                    const today = new Date(date)
                    divTag.innerHTML = "<h1>Auntification...</h1>" +
                        "<div class=\"\">\n" +
                        "  <div class=\"\">\n" +
                        "    <p class='invisible'>invisible</p>\n" +
                        "  </div>\n" +
                        "</div>" +
                        "<div class=\"card text-center\">\n" +
                        "  <div class=\"card-header\">\n" +
                        "    Success\n" +
                        "  </div>\n" +
                        "  <div class=\"card-body\">\n" +
                        `    <h5 class=\"card-title\">${firstName} ${secondName}</h5>\n` +
                        "    <p class=\"card-text\">Now you can use our web-site for trading criptocurrency.</p>\n" +
                        `    <a href=\"../html/account.html?id=${user.uid}\" class=\"btn btn-primary\">My profile</a>\n` +
                        "  </div>\n" +
                        "  <div class=\"card-footer text-muted\">\n" +
                        `    Today: ${today.toUTCString()}\n` +
                        "  </div>\n" +
                        "</div>" +
                        "<div class=\"\">\n" +
                        "  <div class=\"\">\n" +
                        "    <p class='invisible'>invisible</p>\n" +
                        "  </div>\n" +
                        "</div>"

                    var divTag2 = document.getElementById("form1")
                    var childNodes2 = divTag2.getElementsByTagName('*');
                    for (var node2 of childNodes2) {
                        node2.style.display = 'none';
                    }
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                alert(error.message)
            })
        })
        .catch(function(error) {
            var errorCode = error.code
            var errorMessage = error.message

            alert(errorMessage)
        })

}

function validateEmail(email) {
    const expression = /^[^@]+@\w+(\.\w+)+\w$/
    return expression.test(email) === true;
}

function validatePassword(password) {
    return password > 6;
}

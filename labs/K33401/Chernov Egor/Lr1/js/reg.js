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

function register() {
    // Get our fields
    const firstName = document.getElementById('firstName').value
    const secondName = document.getElementById('secondName').value
    const age = document.getElementById('age').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    // Validate fields
    if (validateEmail(email) === false || validatePassword(password) === false) {
        alert("Email or password is wrong!!")
        return
    }
    if (validateField(firstName) === true || validateField(secondName) === true) {
        alert("First or second name is wrong!!")
        return
    }
    if (validateAge(age) === false) {
        alert("Sorry, you can't use this site!!")
        return
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then(function() {
            var userID = firebase.auth().currentUser.uid;
            var databaseRef = database.ref()

            var userData = {
                email: email,
                first_name: firstName,
                second_name: secondName,
                age: age,
            }

            var userCriptoData = {
                count: 0
            }

            databaseRef.child('users/' + userID).set(userData)
            databaseRef.child('profile/' + userID).set(userCriptoData)

            var divTag = document.getElementById("container")
            var childNodes = divTag.getElementsByTagName('*');
            for (var node of childNodes) {
                node.style.display = 'none';
            }

            const date = Date.now()
            const today = new Date(date)
            divTag.innerHTML = "<h1>Congratulations!!! You have successfully registered!!!</h1>" +
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
                `    <a href=\"../html/account.html?id=${userID}\" class=\"btn btn-primary\">My profile</a>\n` +
                "  </div>\n" +
                "  <div class=\"card-footer text-muted\">\n" +
                `    Acc create: ${today.toUTCString()}\n` +
                "  </div>\n" +
                "</div>" +
                "<div class=\"\">\n" +
                "  <div class=\"\">\n" +
                "    <p class='invisible'>invisible</p>\n" +
                "  </div>\n" +
                "</div>"
        })
        .catch(function(error) {
            var errorCode = error.code
            var errorMessage = error.message

            alert(errorMessage)
        })

}

function validateAge(age) {
    return age >= 18;
}

function validateEmail(email) {
    const expression = /^[^@]+@\w+(\.\w+)+\w$/
    return expression.test(email) === true;
}

function validatePassword(password) {
    return password > 6;
}

function validateField(field) {
    return field === null || field.length <= 0;
}

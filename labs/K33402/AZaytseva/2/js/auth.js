initAuth()

function initAuth() {
  document.querySelector('.login-button').addEventListener('click', login);
  document.querySelector('.signup-button').addEventListener('click', signup);
  document.querySelector('.login-icon-button').addEventListener('click', logout);

  if (!window.localStorage.getItem('user')) {
    document.querySelector('.cart-icon-button').setAttribute('hidden', '');
  }
}

function login(e, em, pass) {
  hideLoginError();
  const email = em || document.getElementsByName('login_email')[0].value;
  const password = pass || document.getElementsByName('login_password')[0].value;

  if (!email || !password) {
    showLoginError('<strong>Ошибка! Введите email и пароль.</strong>');
    return;
  }

  fetchUserByEmail(email).then((users) => {
    if (!users.length || users[0].password !== password) {
      showLoginError('<strong>Ошибка! Неверно указан email или пароль.</strong>');
      return;
    }

    window.localStorage.setItem('user', email);
    location.reload();
  })
}

function logout() {
    if (window.localStorage.getItem('user')) {
        window.localStorage.removeItem('user');
        location.reload();
    }
}

function signup() {
  const signupForm = document.querySelector('.signup-form');
  hideSignupError();
  const name = document.getElementsByName('name')[0].value;
  const email = document.getElementsByName('email')[0].value;
  const password = document.getElementsByName('password')[0].value;

  if (!email || !password || !name) {
    showSignupError('<strong>Ошибка! Введите имя, email и пароль.</strong>');
    return;
  }

  const data = new URLSearchParams();
  for (const pair of new FormData(signupForm)) {
      data.append(pair[0], pair[1]);
  }
  fetch('http://localhost:3000/users', {
    method: 'POST',
    body: data
  }).then(response => login(null, email, password));
}

function fetchUserByEmail(email) {
    return fetch('http://localhost:3000/users?email=' + email)
        .then(response => response.json())
}

function showLoginError(content) {
    const loginError = document.querySelector('.login-error');
    loginError.innerHTML = content;
    loginError.removeAttribute('hidden');
}

function hideLoginError() {
    document.querySelector('.login-error').setAttribute('hidden', '');
}

function showSignupError(content) {
    const loginError = document.querySelector('.signup-error');
    loginError.innerHTML = content;
    loginError.removeAttribute('hidden');
}

function hideSignupError() {
    document.querySelector('.signup-error').setAttribute('hidden', '');
}

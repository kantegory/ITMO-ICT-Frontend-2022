## Лабораторная работа №1

### Вариант 5 - сайт бренда одежды

Главная страница сайта

* `main.html`
```html
<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
<link rel="stylesheet" href="styles/style.css">
<title>Bohemin</title>
    
</head>
<body>
<header>
    <!-- Navbar для маленького экрана -->
    <nav class="navbar navbar-expand-sm">
    <div class="container-fluid">
        <a class="navbar-brand" href="main.html"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="bohemin_collection.html">BOHEMIN COLLECTION</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="sign_in.html">SIGN IN/REGISTER</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="search.html">SEARCH</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
</header>

<main class="container-lg my-3">
    <div class="row">
    <h1 class="title-h1">BOHEMIN</h1>
    <div class="col-lg-4">
        <!-- Прячем колонку с навигацией для маленького экрана -->
        <div class="row d-none d-sm-block">
        <!-- Наваигация -->
        <ul class="nav flex-column">
            <li class="nav-item">
                <p style="margin-top:75px; margin-bottom: 30px;"><a class="nav-link active text-dark" aria-current="page" href="bohemin_collection.html" target="_blank">BOHEMIN COLLECTION</a></p>
            </li>
            <li class="nav-item">
            <p style="margin-top:75px; margin-bottom: 30px;"><a class="nav-link text-dark" href="sign_in.html" target="_blank">SIGN IN/REGISTER</a></p>
            </li>
            <li class="nav-item">
                <p style="margin-top: 20px;"><a class="nav-link text-dark" href="search.html" target="_blank">SEARCH</a></p>
            </li>
        </ul>
        </div>
    </div>
    
    <!-- реализация ряда с картинкой -->
    <div class="col-lg-8 my-5">
        <img src="images/item01.jpg" class="img-fluid" alt="main">
    </div>
    </div>
</main>

<footer>
    <div class="container-lg my-3">
    <div class="row">
        <div class="col-lg-4">
        </div>
        <div class="col-lg-8">
        <div class="d-flex justify-content-between">
            <div class="p-2 title-h6">
            <div class="row">
                <div class="col-sm-6 col-md-6 col-lg-6 offset-md-0">
                <p>LOCATION</p>
                </div>
                <div class="col-sm-6 col-md-6 offset-md-0">
                <p class="text-start">Dubai UAE</p>
                </div>
            </div>
            </div>
            <div class="p-2 title-h6">
            <p class="text-end">CONTACT US</p>
            <div class="row">
                <div class="col-sm-6 col-md-5">
                <p class="text-end"><a class="nav-link active text-dark" href="https://instagram.com/bohemin.ae?igshid=NzNkNDdiOGI=">Instagram</a></p>
                </div>
                <div class="col-sm-6 col-md-5 offset-md-1">
                <p class="text-end"><a class="nav-link active text-dark" href="https://wa.me/message/KTMI7SHLNZUJK1">WhatsApp</a></p>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
</footer>
</body>
</html>
```



Страница, на которой представлены категории одежды, всего их три

* `bohemin_collection.html`
```html
<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="styles/style.css">
  <title>Bohemin Collection</title>
    
</head>
<body>
  <header>
    <!-- Navbar для маленького экрана -->
    <nav class="navbar navbar-expand-sm">
      <div class="container-fluid">
        <a class="navbar-brand" href="main.html"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="main.html">BOHEMIN</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="sign_in.html">SIGN IN/REGISTER</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="search.html">SEARCH</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <main class="container-lg my-3">
    <div class="row">
      <h1 class="title-h1"><a class="nav-link text-dark" href="main.html">BOHEMIN</a></h1>
      <div class="col-lg-4 my-5">
        <p>BOHEMIN COLLECTION</p>
        <!-- Прячем колонку с навигацией для маленького экрана -->
        <div class="row d-none d-sm-block">
        <!-- Наваигация -->
          <ul class="nav flex-column">
            <li class="nav-item">
                <p style="margin-top:75px; margin-bottom: 30px;"><a class="nav-link active text-dark" aria-current="page" href="sign_in.html" target="_blank">SIGN IN/REGISTER</a></p>
            </li>
            <li class="nav-item">
                <p style="margin-top: 20px;"><a class="nav-link text-dark" href="search.html" target="_blank">SEARCH</a></p>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="col-lg-8 my-5">
        <!-- карточки с каталогом одежды -->
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          <div class="col">
            <div class="card">
              <img src="images/prof/images for main page/photo_2022-10-08_00-46-11.jpg" class="card-img-top" alt="dress">
              <div class="card-body">
                <h5 class="title-h6 text-center"><a class="nav-link active text-dark" href="dresses.html" target="_blank">Dresses</a></h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="images/prof/images for main page/photo_2022-10-08_00-46-26.jpg" class="card-img-top" alt="skirt">
              <div class="card-body">
                <h5 class="title-h6 text-center"><a class="nav-link active text-dark" href="skirts.html" target="_blank">Skirts</a></h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="images/prof/images for main page/photo_2022-10-08_00-46-35 — копия.jpg" class="card-img-top" alt="shirt">
              <div class="card-body">
                <h5 class="title-h6 text-center"><a class="nav-link active text-dark" href="shirts.html" target="_blank">Shirts</a></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer>
    <!-- футер -->
    <div class="container-lg my-3">
      <div class="row">
        <div class="col-lg-4">
        </div>
        <div class="col-lg-8">
          <div class="d-flex justify-content-between">
            <div class="p-2 title-h6">
                <div class="row">
                  <div class="col-sm-6 col-md-6 col-lg-6 offset-md-0">
                    <p>LOCATION</p>
                  </div>
                  <div class="col-sm-6 col-md-6 offset-md-0">
                    <p class="text-start">Dubai UAE</p>
                  </div>
                </div>
            </div>
            <div class="p-2 title-h6">
              <p class="text-end">CONTACT US</p>
              <div class="row">
                <div class="col-sm-6 col-md-5">
                  <p class="text-end"><a class="nav-link active text-dark" href="https://instagram.com/bohemin.ae?igshid=NzNkNDdiOGI=">Instagram</a></p>
                </div>
                <div class="col-sm-6 col-md-5 offset-md-1">
                  <p class="text-end"><a class="nav-link active text-dark" href="https://wa.me/message/KTMI7SHLNZUJK1">WhatsApp</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </footer>
</body>
</html>
```


На этой страничку осущевляется вход

* `sign_in.html`
```html 
<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="styles/style.css">
  <title>SIGN IN/REGISTRATION</title>
    
</head>
<body>
  <header>
    <!-- Navbar для маленького экрана -->
    <nav class="navbar navbar-expand-sm">
      <div class="container-fluid">
        <a class="navbar-brand" href="main.html"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="main.html">BOHEMIN</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="sign_in.html">SIGN IN/REGISTER</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="search.html">SEARCH</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <main class="container-lg my-3">
    <div class="row">
      <h1 class="title-h1"><a class="nav-link text-dark" href="main.html">BOHEMIN</a></h1>
      <div class="col-lg-4 my-5">
        <p>SIGN IN/REGISTRATION</p>
        <!-- Прячем колонку с навигацией для маленького экрана -->
        <div class="row d-none d-sm-block">
        <!-- Наваигация -->
          <ul class="nav flex-column">
            <li class="nav-item">
                <p style="margin-top:75px; margin-bottom: 30px;"><a class="nav-link active text-dark" aria-current="page" href="bohemin_collection.html" target="_blank">BOHEMIN COLLECTION</a></p>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-8 my-5">
        <!-- Typical sign in / login form with additional register buttons -->
        <form>
          <div class="row">
            <!-- Email input -->
            <div class="form-outline mb-4">
              <label class="form-label" for="form1Example1">EMAIL ADDRESS</label>
              <input type="email" id="form1Example1" class="form-control" placeholder="name@example.com" required>
            </div>
            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example2">PASSWORD</label>
              <input type="password" id="form2Example2" class="form-control" placeholder="password" required>
            </div>
          
            <!-- Checkbox -->
            <div class="form-outline mb-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="form3Example3" checked>
                <label class="form-check-label" for="form3Example3"><p>Remember me</p></label>
              </div>
            </div>
            <!-- Submit button -->
            <div class="justify-content">
              <a href="profile.html"><button type="button" class="w-100 btn btn-dark btn-sm mb-5">SIGN IN</button></a>
            </div>
            <!-- Register buttons -->
            <div class="text-center mb-5">
              <p>Not a member? <a class="nav-link active text-dark" href="register.html"><u>Register</u></a></p>
            </div>
          </div>
        </form>
    
      </div>
    </div>
  </main>

  <footer>
    <!-- футер -->
    <div class="container-lg my-3">
      <div class="row">
        <div class="col-lg-4">
        </div>
        <div class="col-lg-8">
          <div class="d-flex justify-content-between">
            <div class="p-2 title-h6">
                <div class="row">
                  <div class="col-sm-6 col-md-6 col-lg-6 offset-md-0">
                    <p>LOCATION</p>
                  </div>
                  <div class="col-sm-6 col-md-6 offset-md-0">
                    <p class="text-start">Dubai UAE</p>
                  </div>
                </div>
            </div>
            <div class="p-2 title-h6">
              <p class="text-end">CONTACT US</p>
              <div class="row">
                <div class="col-sm-6 col-md-5">
                  <p class="text-end"><a class="nav-link active text-dark" href="https://instagram.com/bohemin.ae?igshid=NzNkNDdiOGI=">Instagram</a></p>
                </div>
                <div class="col-sm-6 col-md-5 offset-md-1">
                  <p class="text-end"><a class="nav-link active text-dark" href="https://wa.me/message/KTMI7SHLNZUJK1">WhatsApp</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</body>
</html>
```


Здесь пользователь может зарегистрироваться

* `register.html`
```html
<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="styles/style.css">
  <title>Registration</title>
    
</head>
<body>
  <header>
    <!-- Navbar для маленького экрана -->
    <nav class="navbar navbar-expand-sm">
      <div class="container-fluid">
        <a class="navbar-brand" href="main.html"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="main.html">BOHEMIN</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="sign_in.html">SIGN IN/REGISTER</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="search.html">SEARCH</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <main class="container-lg my-3">
    <div class="row">
      <h1 class="title-h1"><a class="nav-link text-dark" href="main.html">BOHEMIN</a></h1>
      <div class="col-lg-4 my-5">
        <p>REGISTRATION</p>
        <!-- Прячем колонку с навигацией для маленького экрана -->
        <div class="row d-none d-sm-block">
        <!-- Наваигация -->
          <ul class="nav flex-column">
            <li class="nav-item">
                <p style="margin: top 20px; margin-bottom: 30px;"><a class="nav-link active text-dark" aria-current="page" href="sign_in.html">SIGN IN</a></p>
            </li>
            <li class="nav-item">
                <p style="margin-top:20px;"><a class="nav-link active text-dark" aria-current="page" href="bohemin_collection.html" target="_blank">BOHEMIN COLLECTION</a></p>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-8 my-5">
        <!-- Typical sign up form with additional buttons -->
        <form>
          <div class="row">
            <div class="form-outline mb-4">
                <label for="exampleInputName1">NAME</label>
                <input type="name" class="form-control" id="exampleInputName1" placeholder="Your Name" required>
            </div>
            <div class="form-outline mb-4">
                <label for="exampleInputEmail1">EMAIL ADDRESS</label>
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Email" required>
            </div>  
            <div class="form-outline mb-4">
                <label for="exampleInputPassword1">PASSWORD</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required>
            </div> 
            <div class="form-outline mb-4">
                <label for="exampleInputRepeatPassword1">REPEAT PASSWORD</label>
                <input type="password" class="form-control" id="exampleInputRepeatPassword1" placeholder="Repeat your password" required>
            </div> 
            <div class="form-outline mb-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked>
                <label class="form-check-label" for="form2Example31"><p>I agree to the processing of personal data</p></label>
              </div>
            </div>
            <div class="justify-content">
              <a href="profile.html"><button type="button" class="w-100 btn btn-dark btn-sm mb-5"><small>REGISTER</small></button></a>
            </div>
          </div>
        </form>
    
      </div>
    </div>
  </main>

  <footer>
    <!-- футер -->
    <div class="container-lg my-3">
      <div class="row">
        <div class="col-lg-4">
        </div>
        <div class="col-lg-8">
          <div class="d-flex justify-content-between">
            <div class="p-2 title-h6">
                <div class="row">
                  <div class="col-sm-6 col-md-6 col-lg-6 offset-md-0">
                    <p>LOCATION</p>
                  </div>
                  <div class="col-sm-6 col-md-6 offset-md-0">
                    <p class="text-start">Dubai UAE</p>
                  </div>
                </div>
            </div>
            <div class="p-2 title-h6">
              <p class="text-end">CONTACT US</p>
              <div class="row">
                <div class="col-sm-6 col-md-5">
                  <p class="text-end"><a class="nav-link active text-dark" href="https://instagram.com/bohemin.ae?igshid=NzNkNDdiOGI=">Instagram</a></p>
                </div>
                <div class="col-sm-6 col-md-5 offset-md-1">
                  <p class="text-end"><a class="nav-link active text-dark" href="https://wa.me/message/KTMI7SHLNZUJK1">WhatsApp</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</body>
</html>
```


Личный кабинет пользователя

* `profile.html` 
```html
<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="styles/style.css">
  <title>Profile</title>
    
</head>
<body>
  <header>
    <!-- Navbar для маленького экрана -->
    <nav class="navbar navbar-expand-sm">
      <div class="container-fluid">
        <a class="navbar-brand" href="main.html"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="main.html">BOHEMIN</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="sign_in.html">SIGN IN/REGISTER</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="search.html">SEARCH</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <main class="container-lg my-3">
    <div class="row">
      <h1 class="title-h1"><a class="nav-link text-dark" href="main.html">BOHEMIN</a></h1>
      <div class="col-lg-4 my-5">
        <p>MY ACCOUNT</p>
        <!-- Прячем колонку с навигацией для маленького экрана -->
        <div class="row d-none d-sm-block">
        <!-- Наваигация -->
          <ul class="nav flex-column">
            <li class="nav-item">
                <p style="margin-top:75px; margin-bottom: 30px;"><a class="nav-link active text-dark" aria-current="page" href="bohemin_collection.html" target="_blank">BOHEMIN COLLECTION</a></p>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-8 my-5">
        <form>
          <div class="row">
            <div class="text-start">
              <h6><b>MY INFORMATION</b></h6>
            </div>
            <div class="form-group mt-4 mb-3">
              <label class="form-label" for="form1Name1">FIRST NAME</label>
              <input type="text" id="form1Name1" class="form-control">
            </div>
            <div class="form-outline mb-3">
              <label class="form-label" for="form2Name2">LAST NAME</label>
              <input type="text" id="form2Name2" class="form-control">
            </div>
            <div class="form-outline">
              <label class="form-label" for="form3Birth">DATE OF BIRTH (MM/DD/YYYY)</label>
              <input type="text" id="form3Birth" class="form-control">
            </div>
            <div class="justify-content">
              <button class="w-100 btn btn-dark btn-sm mt-3 mb-5" type="button"><small>SAVE</small></button>
            </div>
            <h6><b>ACCOUNT INFORMATION</b></h6>
            <div class="form-outline mt-2 mb-5">
              <label class="form-label" for="form4Email">EMAIL</label>
              <input type="text" id="form4Email" class="form-control">
            </div>
            <h6><b>MESSAGE</b></h6>
            <div class="form-outline mt-2 mb-3">
              <textarea class="form-control" id="form5Mess" rows="4"></textarea>
              <label class="form-label" for="form5Mess"></label>
            </div>
            <div class="justify-content">
              <button class="w-100 btn btn-dark btn-sm mb-5" type="button"><small>SEND</small></button>
            </div>
          </div>
        </form>
    
      </div>
    </div>
  </main>

  <footer>
    <!-- футер -->
    <div class="container-lg my-3">
      <div class="row">
        <div class="col-lg-4">
        </div>
        <div class="col-lg-8">
          <div class="d-flex justify-content-between">
            <div class="p-2 title-h6">
                <div class="row">
                  <div class="col-sm-6 col-md-6 col-lg-6 offset-md-0">
                    <p>LOCATION</p>
                  </div>
                  <div class="col-sm-6 col-md-6 offset-md-0">
                    <p class="text-start">Dubai UAE</p>
                  </div>
                </div>
            </div>
            <div class="p-2 title-h6">
              <p class="text-end">CONTACT US</p>
              <div class="row">
                <div class="col-sm-6 col-md-5">
                  <p class="text-end"><a class="nav-link active text-dark" href="https://instagram.com/bohemin.ae?igshid=NzNkNDdiOGI=">Instagram</a></p>
                </div>
                <div class="col-sm-6 col-md-5 offset-md-1">
                  <p class="text-end"><a class="nav-link active text-dark" href="https://wa.me/message/KTMI7SHLNZUJK1">WhatsApp</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</body>
</html>
```

Далее будет представлена галерия одежды отдельно под 

* `dresses.html`
```html
<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="styles/style.css">
  <title>Bohemin Dresses</title>
    
</head>
<body>
  <header>
    <!-- Navbar для маленького экрана -->
    <nav class="navbar navbar-expand-sm">
      <div class="container-fluid">
        <a class="navbar-brand" href="main.html"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="bohemin_collection.html">BOHEMIN COLLECTION</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="sign_in.html">SIGN IN/REGISTER</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="search.html">SEARCH</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <main class="container-lg my-3">
    <div class="row">
      <h1 class="title-h1"><a class="nav-link text-dark" href="main.html">BOHEMIN</a></h1>
      <div class="col-lg-4 my-5">
        <p><a class="nav-link active text-dark" href="bohemin_collection.html" target="_blank">BOHEMIN COLLECTION</a>/DRESSES/</p>
        <p><a class="nav-link active text-dark" href="skirts.html">/SKIRTS/</a></p>
        <p><a class="nav-link active text-dark" href="shirts.html">/SHIRTS/</a></p>
        <!-- Прячем колонку с навигацией для маленького экрана -->
        <div class="row d-none d-sm-block">
        <!-- Наваигация -->
          <ul class="nav flex-column">
            <li class="nav-item">
                <p style="margin-top:75px; margin-bottom: 30px;"><a class="nav-link active text-dark" aria-current="page" href="sign_in.html" target="_blank">SIGN IN/REGISTER</a></p>
            </li>
            <li class="nav-item">
                <p style="margin-top: 20px;"><a class="nav-link text-dark" href="search.html" target="_blank">SEARCH</a></p>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="col-lg-8 my-5">
        <!-- карточки с каталогом одежды -->
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-5">
          <div class="col">
            <div class="card">
              <img src="images/prof/images for page with dresses/photo_2022-10-08_00-46-16.jpg" class="card-img-top" alt="grey silk dress">
              <div class="card-body">
                <h5 class="title-h6 text-center">Silk Maxi Dress with Long Flared Sleeves</h5>
                <p class="title-carddes card-text text-center">1270 AED</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="images/prof/images for page with dresses/photo_2022-10-08_00-46-13.jpg" class="card-img-top" alt="milk dress">
              <div class="card-body">
                <h5 class="title-h6 text-center">Maxi Sleeveless Milk Dress</h5>
                <p class="title-carddes card-text text-center">890 AED</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="images/prof/images for page with dresses/photo_2022-10-08_00-46-28.jpg" class="card-img-top" alt="perple dress">
              <div class="card-body">
                <h5 class="title-h6 text-center">Purple Dress</h5>
                <p class="title-carddes card-text text-center">1300 AED</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="images/prof/images for page with dresses/photo_2022-10-08_00-46-34 — копия.jpg" class="card-img-top" alt="blue dress">
              <div class="card-body">
                <h5 class="title-h6 text-center">Midnight Blue Knitted Fabric Dress</h5>
                <p class="title-carddes card-text text-center">1500 AED</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="images/prof/images for page with dresses/photo_2022-10-08_00-46-14.jpg" class="card-img-top" alt="maxi grey dress">
              <div class="card-body">
                <h5 class="title-h6 text-center">Grey Sillk Dress</h5>
                <p class="title-carddes card-text text-center">1450 AED</p>

              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="images/prof/images for page with dresses/photo_2022-10-08_00-46-37 — копия.jpg" class="card-img-top" alt="Sleeveless dress">
              <div class="card-body">
                <h5 class="title-h6 text-center">Sleeveless Dress</h5>
                <p class="title-carddes card-text text-center">760 AED</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer>
    <!-- футер -->
    <div class="container-lg my-3">
      <div class="row">
        <div class="col-lg-4">
        </div>
        <div class="col-lg-8">
          <div class="d-flex justify-content-between">
            <div class="p-2 title-h6">
                <div class="row">
                  <div class="col-sm-6 col-md-6 col-lg-6 offset-md-0">
                    <p>LOCATION</p>
                  </div>
                  <div class="col-sm-6 col-md-6 offset-md-0">
                    <p class="text-start">Dubai UAE</p>
                  </div>
                </div>
            </div>
            <div class="p-2 title-h6">
              <p class="text-end">CONTACT US</p>
              <div class="row">
                <div class="col-sm-6 col-md-5">
                  <p class="text-end"><a class="nav-link active text-dark" href="https://instagram.com/bohemin.ae?igshid=NzNkNDdiOGI=">Instagram</a></p>
                </div>
                <div class="col-sm-6 col-md-5 offset-md-1">
                  <p class="text-end"><a class="nav-link active text-dark" href="https://wa.me/message/KTMI7SHLNZUJK1">WhatsApp</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</body>
</html>
```



* `skirts.html`

```html
<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="styles/style.css">
  <title>Bohemin Skirts</title>
    
</head>
<body>
  <header>
    <!-- Navbar для маленького экрана -->
    <nav class="navbar navbar-expand-sm">
      <div class="container-fluid">
        <a class="navbar-brand" href="main.html"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="bohemin_collection.html">BOHEMIN COLLECTION</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="sign_in.html">SIGN IN/REGISTER</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="search.html">SEARCH</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <main class="container-lg my-3">
    <div class="row">
      <h1 class="title-h1"><a class="nav-link text-dark" href="main.html">BOHEMIN</a></h1>
      <div class="col-lg-4 my-5">
        <p><a class="nav-link active text-dark" href="bohemin_collection.html" target="_blank">BOHEMIN COLLECTION</a>/SKIRTS/</p>
        <p><a class="nav-link active text-dark" href="dresses.html">/DRESSES/</a></p>
        <p><a class="nav-link active text-dark" href="shirts.html">/SHIRTS/</a></p>
        <!-- Прячем колонку с навигацией для маленького экрана -->
        <div class="row d-none d-sm-block">
        <!-- Наваигация -->
          <ul class="nav flex-column">
            <li class="nav-item">
                <p style="margin-top:75px; margin-bottom: 30px;"><a class="nav-link active text-dark" aria-current="page" href="sign_in.html" target="_blank">SIGN IN/REGISTER</a></p>
            </li>
            <li class="nav-item">
                <p style="margin-top: 20px;"><a class="nav-link text-dark" href="search.html" target="_blank">SEARCH</a></p>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="col-lg-8 my-5">
        <!-- карточки с каталогом одежды -->
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-5">
          <div class="col">
            <div class="card mb-3">
              <img src="images/prof/images for page with skirts/photo_2022-10-08_00-46-30 — копия.jpg" class="card-img-top" alt="skirt 1">
              <div class="card-body">
                <h5 class="title-h6 text-center">Midi Skirt with Fringe</h5>
                <p class="title-carddes card-text text-center">600 AED</p>

              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="images/prof/images for page with skirts/photo_2022-10-08_00-46-23.jpg" class="card-img-top" alt="skirt 2">
              <div class="card-body">
                <h5 class="title-h6 text-center">Wrap Midi Skirt</h5>
                <p class="title-carddes card-text text-center">550 AED</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer>
    <!-- футер -->
    <div class="container-lg my-3">
      <div class="row">
        <div class="col-lg-4">
        </div>
        <div class="col-lg-8">
          <div class="d-flex justify-content-between">
            <div class="p-2 title-h6">
                <div class="row">
                  <div class="col-sm-6 col-md-6 col-lg-6 offset-md-0">
                    <p>LOCATION</p>
                  </div>
                  <div class="col-sm-6 col-md-6 offset-md-0">
                    <p class="text-start">Dubai UAE</p>
                  </div>
                </div>
            </div>
            <div class="p-2 title-h6">
              <p class="text-end">CONTACT US</p>
              <div class="row">
                <div class="col-sm-6 col-md-5">
                  <p class="text-end"><a class="nav-link active text-dark" href="https://instagram.com/bohemin.ae?igshid=NzNkNDdiOGI=">Instagram</a></p>
                </div>
                <div class="col-sm-6 col-md-5 offset-md-1">
                  <p class="text-end"><a class="nav-link active text-dark" href="https://wa.me/message/KTMI7SHLNZUJK1">WhatsApp</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</body>
</html>
```



* `shirts.html`
```html
<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="styles/style.css">
  <title>Bohemin Shirts</title>
    
</head>
<body>
  <header>
    <!-- Navbar для маленького экрана -->
    <nav class="navbar navbar-expand-sm">
      <div class="container-fluid">
        <a class="navbar-brand" href="main.html"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="bohemin_collection.html">BOHEMIN COLLECTION</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="sign_in.html">SIGN IN/REGISTER</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="search.html">SEARCH</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <main class="container-lg my-3">
    <div class="row">
      <h1 class="title-h1"><a class="nav-link text-dark" href="main.html">BOHEMIN</a></h1>
      <div class="col-lg-4 my-5">
        <p><a class="nav-link active text-dark" href="bohemin_collection.html" target="_blank">BOHEMIN COLLECTION</a>/SHIRTS/</p>
        <p><a class="nav-link active text-dark" href="dresses.html">/DRESSES/</a></p>
        <p><a class="nav-link active text-dark" href="skirts.html">/SKIRTS/</a></p>
        <!-- Прячем колонку с навигацией для маленького экрана -->
        <div class="row d-none d-sm-block">
        <!-- Наваигация -->
          <ul class="nav flex-column">
            <li class="nav-item">
                <p style="margin-top:75px; margin-bottom: 30px;"><a class="nav-link active text-dark" aria-current="page" href="sign_in.html" target="_blank">SIGN IN/REGISTER</a></p>
            </li>
            <li class="nav-item">
                <p style="margin-top: 20px;"><a class="nav-link text-dark" href="search.html" target="_blank">SEARCH</a></p>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="col-lg-8 my-5">
        <!-- карточки с каталогом одежды -->
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-5">
          <div class="col">
            <div class="card mb-3">
              <img src="images/prof/images for page with shirts/photo_2022-10-08_00-46-35 — копия.jpg" class="card-img-top" alt="shoulder shirt">
              <div class="card-body">
                <h5 class="title-h6 text-center">Accent Shoulder Shirt</h5>
                <p class="title-carddes card-text text-center">540 AED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer>
    <!-- футер -->
    <div class="container-lg my-3">
      <div class="row">
        <div class="col-lg-4">
        </div>
        <div class="col-lg-8">
          <div class="d-flex justify-content-between">
            <div class="p-2 title-h6">
                <div class="row">
                  <div class="col-sm-6 col-md-6 col-lg-6 offset-md-0">
                    <p>LOCATION</p>
                  </div>
                  <div class="col-sm-6 col-md-6 offset-md-0">
                    <p class="text-start">Dubai UAE</p>
                  </div>
                </div>
            </div>
            <div class="p-2 title-h6">
              <p class="text-end">CONTACT US</p>
              <div class="row">
                <div class="col-sm-6 col-md-5">
                  <p class="text-end"><a class="nav-link active text-dark" href="https://instagram.com/bohemin.ae?igshid=NzNkNDdiOGI=">Instagram</a></p>
                </div>
                <div class="col-sm-6 col-md-5 offset-md-1">
                  <p class="text-end"><a class="nav-link active text-dark" href="https://wa.me/message/KTMI7SHLNZUJK1">WhatsApp</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</body>
</html>
```


На этой странице пользователь сможет отфильтровать одежду по определенную коллекцию, а также доступна возможность поиска определенного товара

* `search.html`
```html
<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="styles/style.css">
  <title>SEARCH</title>
    
</head>
<body>
  <header>
    <!-- Navbar для маленького экрана -->
    <nav class="navbar navbar-expand-sm">
      <div class="container-fluid">
        <a class="navbar-brand" href="main.html"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="main.html">BOHEMIN</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="sign_in.html">SIGN IN/REGISTER</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="search.html">SEARCH</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <main class="container-lg my-3">
    <div class="row">
      <h1 class="title-h1"><a class="nav-link text-dark" href="main.html">BOHEMIN</a></h1>
      <div class="col-lg-4 my-5">
        <p>SEARCH</p>
        <!-- Прячем колонку с навигацией для маленького экрана -->
        <div class="row d-none d-sm-block">
        <!-- Наваигация -->
          <ul class="nav flex-column">
            <li class="nav-item">
                <p style="margin-top:75px; margin-bottom: 30px;"><a class="nav-link active text-dark" aria-current="page" href="bohemin_collection.html">BOHEMIN COLLECTION</a></p>
            </li>
            <li class="nav-item">
              <p style="margin-top:20px;"><a class="nav-link active text-dark" aria-current="page" href="sign_in.html" target="_blank">SIGN IN/REGISTER</a></p>
          </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-8 my-5">
        <div class="d-flex justify-content-between">
          <div class="col-lg-4">
            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
              <option selected>COLLECTIONS</option>
              <option value="1">DESERT</option>
              <option value="2">CITY</option>
            </select>
          </div>
          <div class="col-lg-4">
            <!-- поле поиска -->
            <div class="input-group">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <button type="button">search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer>
    <!-- футер -->
    <div class="container-lg my-3">
      <div class="row">
        <div class="col-lg-4">
        </div>
        <div class="col-lg-8">
          <div class="d-flex justify-content-between">
            <div class="p-2 title-h6">
                <div class="row">
                  <div class="col-sm-6 col-md-6 col-lg-6 offset-md-0">
                    <p>LOCATION</p>
                  </div>
                  <div class="col-sm-6 col-md-6 offset-md-0">
                    <p class="text-start">Dubai UAE</p>
                  </div>
                </div>
            </div>
            <div class="p-2 title-h6">
              <p class="text-end">CONTACT US</p>
              <div class="row">
                <div class="col-sm-6 col-md-5">
                  <p class="text-end"><a class="nav-link active text-dark" href="https://instagram.com/bohemin.ae?igshid=NzNkNDdiOGI=">Instagram</a></p>
                </div>
                <div class="col-sm-6 col-md-5 offset-md-1">
                  <p class="text-end"><a class="nav-link active text-dark" href="https://wa.me/message/KTMI7SHLNZUJK1">WhatsApp</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</body>
</html>
```

Подключены кастомные шрифты и назначены размеры для определенных заголовков

* `style.css`
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=Roboto&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Lora:wght@500&display=swap');

body{
    font-family: 'Roboto', sans-serif;
    font-size: 15px;


}
.title-h1{
    font-size: 50px;
    font-family: 'Playfair Display', serif;
}
.title-h6{
    font-family: 'Playfair Display', serif;
    font-size: 13px;

}
.title-carddes{
    font-family: 'Lora', serif;
    font-size: 11px;
}
```
    
    
    
    
    
    


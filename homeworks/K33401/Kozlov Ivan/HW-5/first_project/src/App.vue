<template>
  <main id="app">
    <nav class="navbar navbar-expand-md navbar-light sidebarNavigation color-me "
      data-sidebarClass="navbar-dark bg-dark" style="background-color: #145ee7;">
      <div class="container-fluid">
        <a class="navbar-brand" href="" style="color: #ffffff;">IK</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="nav navbar-nav nav-flex-icons ms-auto">
            <li class="nav-item">

              <a class="nav-link" href="#" style="color: #ffffff;"> Главаня страница
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="workers.html" style="color: #ffffff;">Сотрудники</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="goods_monitor.html" style="color: #ffffff;">Учет товара</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="graphis.html" style="color: #ffffff;">Графики продаж</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="login.html" style="color: #ffffff;">Войти</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="registration.html" style="color: #ffffff;">Регистрация</a>
            </li>
            <li>
              <button type="button" class="btn btn-danger" onclick="logout()">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </main>

</template>




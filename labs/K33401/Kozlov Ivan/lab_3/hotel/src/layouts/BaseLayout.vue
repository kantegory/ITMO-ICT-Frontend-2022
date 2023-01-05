<template>
    <nav class="navbar navbar-expand-md navbar-light sidebarNavigation color-me "
         data-sidebarClass="navbar-dark bg-dark" style="background-color: #145ee7;">
        <div class="container-fluid">
            <a class="navbar-brand" href="/" style="color: #ffffff;">IK</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="nav navbar-nav nav-flex-icons ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/" style="color: #ffffff;"> Главаня страница
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/all_workers" style="color: #ffffff;">Сотрудники</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="" style="color: #ffffff;">Номера</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="" style="color: #ffffff;">Графики продаж</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="" style="color: #ffffff;">Бронирование</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="" style="color: #ffffff;">Постояльцы</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="l" style="color: #ffffff;">Войти</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="" style="color: #ffffff;">Регистрация</a>
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

    <slot/>

</template>


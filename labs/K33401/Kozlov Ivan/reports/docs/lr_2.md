# Лабораторная работа № 2 
<h2> Работа с API </h2>
`Описание:`
Основывается на лабораторной работе № 1, только теперь формирование данных идет динамически по API

`Вариант:` сайт администратора интернет-магазина 

Необходимо реализовать:

- Вход

- Регистрация

- Учёт товара на складе

- Графики по продажам тех или иных товаров

- Управление сотрудниками

<hr>

# Сотрудники

* `workers.html` - таблица с сотрудниками

- Добавлен поиск по должности с помощью JS
- Пояивлось возможность удаление и редактирование сотрудников

> **Скриншот**

![Screenshot](img/lr_2/workers.png)
<p>&nbsp;</p>

![Screenshot1](img/lr_2/edit_workers.png)

<p>&nbsp;</p>

![Screenshot1](img/lr_2/delete_workers.png)

> **Код**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> Войти </title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>

<body>
    <nav class="navbar navbar-expand-md navbar-light sidebarNavigation color-me "
        data-sidebarClass="navbar-dark bg-dark" style="background-color: #145ee7;">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html" style="color: #ffffff;">IK</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="nav navbar-nav nav-flex-icons ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html" style="color: #ffffff;"> Главаня страница
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
    <a href="add_workers.html" style="text-decoration: none;">
        <div class="d-flex justify-content-end ">
            <button type="button" class="btn-dark p-2 flex-grow-1">Добавить сотрудника</button>
        </div>
    </a>

    <table class="table table-hover table-bordered" style="color: rgb(0, 0, 0)" id="myTable">
        <thead>
            <tr>
                <th scope="col">№</th>
                <th scope="col">Имя</th>
                <th scope="col">Фамилия</th>
                <th scope="col">Телефон</th>
                <th scope="col">Email</th>
                <th scope="col"> <input class="form-control me-2" type="search" placeholder="Поиск по должности"
                        id="myInput" onkeyup="findPosition()">
                    </div> Должность</th>
                <th scope="col">Действия</th>
            </tr>
        </thead>
        <tbody id="my_table_rows">


        </tbody>
    </table>

    <!-- Modal -->
    <div class=" modal fade" id="edit_workers" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Изменить сотрудника</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <article class="card-body">
                        <form onsubmit="update_worker(event)">

                            <label>Имя </label>
                            <input type="text" class="form-control" placeholder="" name="name" id="name" value="">

                            <label>Фамилия </label>
                            <input type="text" class="form-control" placeholder="" name="last_name" id="last_name"
                                value="">

                            <label>Телефон</label>
                            <input required type="text" class="form-control" name="phone" id="phone"
                                pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}" value="">

                            <label>Email</label>
                            <input required type="email" class="form-control" placeholder="" name="email" id="email"
                                value="">

                            <label>Должность</label>
                            <input required type="text" class="form-control" name="position" id="position" value="">

                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                                <button type="" class="btn btn-primary">Сохранить изменения</button>
                            </div>

                        </form>
                    </article> <!-- card-body end .// -->
                </div>

            </div>
        </div>
    </div>



    </div>

    <script>
        function findPosition() {
            var input, filter, table, tr, td, i;
            input = document.getElementById("myInput");
            filter = input.value.toUpperCase();
            table = document.getElementById("myTable");
            tr = table.getElementsByTagName("tr");
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[3];
                if (td) {
                    if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }

        async function fill_forms(obj) {

            var link = "http://localhost:3000/workers/" + obj.id

            window.needed_id = obj.id

            const response = await fetch(link, {
                method: "GET"
            })

            const responseJson = await response.json()

            document.getElementById('name').value = responseJson.name
            document.getElementById('last_name').value = responseJson.last_name
            document.getElementById('email').value = responseJson.email
            document.getElementById('phone').value = responseJson.phone
            document.getElementById('position').value = responseJson.position


        }

        async function delete_row(obj) {

            var link = 'http://localhost:3000/workers/' + obj.id

            if (confirm("Вы уверены, что хотите удалить данного сотрудника?\nЭта операция не восстановима.")) {
                const response = await fetch(link, {
                    method: "DELETE"
                })
            };


        }

        async function update_worker(event) {
            event.preventDefault()

            const inputs = Array.from(event.target.querySelectorAll('input'))

            const up_data = {}

            for (const input of inputs) {
                up_data[input.name] = input.value
            }

            console.log('update data', up_data)

            var link = 'http://localhost:3000/workers/' + needed_id

            const response = await fetch(link, {
                method: "PUT",
                body: JSON.stringify(up_data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

        }

        function get_field_table({ id, name, last_name, phone, email, position }) {
            return `
            <tr>
                <td>${id}</td>        
                <td>${name}</td>
                <td>${last_name}</td>
                <td>${phone}</td>
                <td>${email}</td>
                <td>${position}</td>
                <td class="d-flex justify-content-start gap-2">
                        <button id="${id}" type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit_workers"
                            onclick="fill_forms(this)">Редактировать</button>
                        <button id="${id}" type=" button" class="btn btn-danger" onclick="delete_row(this)">Удалить</button>
                </td>
            </tr>

            `
        }

        async function load_table() {
            const response = await fetch("http://localhost:3000/workers", {
                method: "GET"
            })
            const responseJson = await response.json()


            console.log('response', responseJson)
            console.log('response99', responseJson[0].name)

            for (const row of responseJson) {
                console.log('response*1', row)
                document.querySelector("#my_table_rows").innerHTML += get_field_table(row)
            }
        }

        function logout() {
            localStorage.clear()
            window.location.href = "http://127.0.0.1:5501/lab_1/index.html"
        }

        document.addEventListener('DOMContentLoaded', () => {
            load_table();
        })

    </script>

</body>

</html>
```

<hr>
 
# Учет товаров

* `goods_monitor.html` - таблица с товаром

- Добавлен поиск по наименованию и типу товара с помощью JS
- Пояивлось возможность удаление и редактирование товара

> **Скриншот**

![Screenshot](img/lr_2/goods.png)
<p>&nbsp;</p>

![Screenshot1](img/lr_2/edit_goods.png)

<p>&nbsp;</p>

![Screenshot1](img/lr_2/delete_goods.png)

> **Код**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> Войти </title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
</head>

<body>
    <nav class="navbar navbar-expand-md navbar-light sidebarNavigation color-me "
        data-sidebarClass="navbar-dark bg-dark" style="background-color: #145ee7;">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html" style="color: #ffffff;">IK</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="nav navbar-nav nav-flex-icons ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html" style="color: #ffffff;"> Главаня страница
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

    <a href="add_goods.html" style="text-decoration: none;">
        <div class="d-flex justify-content-end">
            <button type="button" class="btn-dark p-2 flex-grow-1">
                Добавить товар
            </button>
        </div>
    </a>


    <div class="table-responsive" id="myTable">
        <table class="table table-hover table-bordered " style="color: rgb(0, 0, 0)">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Артикул</th>
                    <th scope="col"> <input class="form-control me-2" type="search" placeholder="Поиск по наимнованию"
                            id="myInput" onkeyup="findName()"> Наименование</th>
                    <th scope="col"> <input class="form-control me-2" type="search" placeholder="Поиск по типу"
                            id="myInput_2" onkeyup="findType()"> Тип </th>
                    <th scope="col">Количество</th>
                    <th scope="col">Действия</th>
                </tr>
            </thead>

            <tbody id="my_table_rows">

            </tbody>
        </table>
    </div>

    <div class=" modal fade" id="edit_workers" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Изменить товар</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <article class="card-body">
                        <form onsubmit="update_goods(event)">

                            <label>Артикул </label>
                            <input type="text" class="form-control" placeholder="" name="articul" id="articul" value="">

                            <label>Наименование </label>
                            <input type="text" class="form-control" placeholder="" name="name" id="name"
                                value="">

                            <label>Тип</label>
                            <input required type="text" class="form-control" name="type" id="type" value="">

                            <label>Количество</label>
                            <input required type="number" class="form-control" placeholder="" name="count" id="count"
                                value="">

                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                                <button type="" class="btn btn-primary">Сохранить изменения</button>
                            </div>

                        </form>
                    </article> <!-- card-body end .// -->
                </div>

            </div>
        </div>
    </div>

    <script>

         function findType() {
            var input, filter, table, tr, td, i;
            input = document.getElementById("myInput_2");
            filter = input.value.toUpperCase();
            table = document.getElementById("myTable");
            tr = table.getElementsByTagName("tr");
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[1];
                if (td) {
                    if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }

        function findName() {
            var input, filter, table, tr, td, i;
            input = document.getElementById("myInput");
            filter = input.value.toUpperCase();
            table = document.getElementById("myTable");
            tr = table.getElementsByTagName("tr");
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[0];
                if (td) {
                    if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }

        async function fill_forms(obj) {

            var link = "http://localhost:3000/goods_monitor/" + obj.id

            window.needed_id = obj.id

            const response = await fetch(link, {
                method: "GET"
            })

            const responseJson = await response.json()

            document.getElementById('articul').value = responseJson.articul
            document.getElementById('name').value = responseJson.name
            document.getElementById('type').value = responseJson.type
            document.getElementById('count').value = responseJson.count


        }

        async function delete_row(obj) {

            var link = 'http://localhost:3000/goods_monitor/' + obj.id

            if (confirm("Вы уверены, что хотите удалить этот товар?\nЭта операция не восстановима.")) {
                const response = await fetch(link, {
                    method: "DELETE"
                })
            };


        }

        async function update_goods(event) {
            event.preventDefault()

            const inputs = Array.from(event.target.querySelectorAll('input'))

            const up_data = {}

            for (const input of inputs) {
                up_data[input.name] = input.value
            }

            console.log('update data', up_data)

            var link = 'http://localhost:3000/goods_monitor/' + needed_id

            const response = await fetch(link, {
                method: "PUT",
                body: JSON.stringify(up_data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

        }

        function get_field_table({ id, articul, name, type, count }) {
            return `
            <tr>
                <th>${id}</th>
                <td>${articul}</td>
                <td>${name}</td>
                <td>${type}</td>
                <td>${count}</td>
                <td class="d-flex justify-content-start gap-2">
                    <button id="${id}" type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit_workers"
                        onclick="fill_forms(this)">Редактировать</button>
                    <button id="${id}" type=" button" class="btn btn-danger" onclick="delete_row(this)">Удалить</button>
            </td>
            </tr>

            `
        }

        async function load_table() {
            const response = await fetch("http://localhost:3000/goods_monitor", {
                method: "GET"
            })
            const responseJson = await response.json()


            console.log('response', responseJson)
            console.log('response99', responseJson[0].name)

            for (const row of responseJson) {
                console.log('response*1', row)
                document.querySelector("#my_table_rows").innerHTML += get_field_table(row)
            }
        }

        function logout() {
            localStorage.clear()
            window.location.href = "http://127.0.0.1:5501/lab_1/index.html"
        }

        document.addEventListener('DOMContentLoaded', () => {
            load_table();
        })


    </script>

</body>

</html>

```

<hr>

# График продаж

* `graphis.html` - график

- График формируется с помощью запроса к json серверу по API

> **Скриншот**

![Screenshot](img/lr_2/empty_graph.png)
<p>&nbsp;</p>

![Screenshot](img/lr_2/request_graph.png)

`↓`

![Screenshot](img/lr_2/needed_graph.png)


<hr>

# Вывод

В ходе работы были сделаны авторизация, регистрация, редактирование и удаление товаров и сотрудников с помощью API, фильтрация и отрисовка графика средствами JS
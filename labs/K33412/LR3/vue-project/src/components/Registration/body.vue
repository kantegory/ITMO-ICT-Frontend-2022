<template>
    <div class="bg-color reg_page">
        <div>
            <table class="top_table">
                <tr>
                    <td>
                        <a href="/"><img style ="width:120px; height:20px" src="@/assets/img/Coinbase.png" alt="Coinbase"></a>
                    </td>
                    <td style="text-align: right">
                        <a class="iksweb" href="/Login">Войти в систему</a>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div class="main_table" style="margin-top: 60px">
        <div class="reg_table">
            <!--                <div class="form_table">-->
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h1> Создать учетную запись</h1>
                        <label style="color: #050000; margin-top: 15px"> Обязательные поля отмечены звездочкой: *</label>
                        <div class="row">
                            <div class="col d-flex flex-column input-group">
                                <label>Имя*</label>
                                <form action="#" method="POST">
                                    <input class="form-control" id="first_name" type="text" name="first_name" placeholder="Имя">
                                </form>
                            </div>
                            <div class="col d-flex flex-column input-group">
                                <label>Фамилия*</label>
                                <form action="#" method="POST">
                                    <input class="form-control" id="last_name" type="text" name="last_name" placeholder="Фамилия">
                                </form>
                            </div>
                        </div>
                        <div class="d-flex flex-column input-group mt-4">
                            <label>Электронная почта*</label>
                            <form action="#" method="POST">
                                <input class="form-control" id="email" type="text" name="email" placeholder="Электронная почта">
                            </form>
                        </div>
                        <div class="d-flex flex-column input-group mt-4">
                            <label>Пароль*</label>
                            <form action="#" method="POST">
                                <input class="form-control" id="password" aria-invalid="false" type="password" name="password" placeholder="Минимум 8 символов">
                            </form>
                        </div>
                        <div class="d-flex flex-column mt-4">
                            <a class="iksweb_2" style="text-align: center; font-weight: bold;  line-height: 63px" href="/Login">Создать учетную запись</a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h1> Расширьте свои возможности в мире криптовалюты благодаря Coinbase</h1>
                        <label style="color: #5b616e; margin-top: 15px">
                            Чтобы начать торговлю криптовалютой,
                            настройте учетную запись и подтвердите свою личность
                            удостоверением с фотографией.
                        </label>
                        <img
                            style="height: 30%; margin-top: 30px; margin-left: 200px"
                            src="../../assets/img/Crypto-1.svg" alt="">
                    </div>
                </div>
            </div>
            <!--                </div>-->
        </div>
    </div>

</template>

<script>
export default {
    name: "bodyBlockRegistration"
}
</script>

<style scoped>
.bg-color {
    background-color: rgb(255, 255, 255);
}

.reg_page {
    width: 100%;
}

.top_table{
    height: 60px;
    width: 100%;
    border: #dadada 1px solid;
    border-radius: 0;
}

.iksweb{ /*кнопка войти в систему*/
    display: inline-block;
    cursor: pointer;
    font-size: 14px;
    text-decoration: none;
    padding: 10px 25px;
    color: #ffffff;
    background: #0051ff;
    border-radius: 6px;
    border: 2px solid #0051ff;
    margin-top: 0;
}

.iksweb:hover{
    background:#185abc;
    color:#ffffff;
    border:2px solid #185abc;
    transition: all 0.2s ease;
}

.main_table {
    height: 700px;
    border: #818385 0 solid;
    border-radius: 0;
}

.reg_table {
    width: 95%;
    height: 700px;
    border: #818385 0 solid;
    border-radius: 0;
    margin-left: auto;
    margin-right: auto;
}

/*.form_table {
    width: 90%;
    height: 700px;
    border: #818385 0 solid;
    border-radius: 0;
    margin-left: auto;
    margin-right: auto;
}*/

#first_name{
    text-align: start;
    min-width: 0;
    color: #818385;
    background-color: #fff;
    flex-grow: 2;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    width: 100%;
    text-padding: 10px;
    position: relative;
    border-radius: 10px;
    height: 63px;
    border-width: 1.2px;
}

#first_name:focus {
    box-shadow: none;
    border-color: blue;
    outline-style: none;
    border-width: 2px;
}

#last_name{
    text-align: start;
    min-width: 0;
    color: #818385;
    background-color: #fff;
    flex-grow: 2;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    width: 100%;
    text-padding: 10px;
    position: relative;
    border-radius: 10px;
    height: 63px;
    border-width: 1.2px;
}

#last_name:focus {
    box-shadow: none;
    border-color: blue;
    outline-style: none;
    border-width: 2px;
}

#email{
    text-align: start;
    min-width: 0;
    color: #818385;
    background-color: #fff;
    flex-grow: 2;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    width: 100%;
    text-padding: 10px;
    position: relative;
    border-radius: 10px;
    height: 63px;
    border-width: 1.2px;
}

#email:focus {
    box-shadow: none;
    border-color: blue;
    outline-style: none;
    border-width: 2px;
}

#password{
    text-align: start;
    min-width: 0;
    color: #818385;
    background-color: #fff;
    flex-grow: 2;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    width: 100%;
    text-padding: 10px;
    position: relative;
    border-radius: 10px;
    height: 63px;
    border-width: 1.2px;
}

#password:focus {
    box-shadow: none;
    border-color: blue;
    outline-style: none;
    border-width: 2px;
}

.iksweb_2{ /*кнопка создать учетную запись*/
    display: inline-block;
    cursor: pointer;
    font-size: 16px;
    text-decoration: none;
    /*padding-bottom: ;*/
    /*padding:15px 140px;*/
    color: #ffffff;
    height: 63px;
    background: #0051ff;
    border-radius: 30px;
    border: 2px solid #0051ff;
    /*margin-top: 30px;*/
}

.iksweb_2:hover{
    background:#185abc;
    color:#ffffff;
    border:2px solid #185abc;
    transition: all 0.2s ease;
}

</style>


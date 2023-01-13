<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: white!important;">
        <div class="container-fluid" style="padding-right: 40px;padding-left: 40px;">
            <div class="navbar-header">
                <a href="/"><img src="https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg" height="20" width="112" alt="Логотип Coinbase"></a>
            </div>
            <div>
                <ul class="nav navbar-nav">
                    <a href="/Login" class="pull-right loginIn" style="margin-right: 10px; color: black; display: flex; align-items: center;">Войти в систему</a>
                    <a class="iksweb" href="/Registration" title="Начать">Начать</a>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "headerBlock"
}
</script>

<style scoped>
.loginIn{

    font-family: 'NotoSansDisplay', sans-serif;
    font-size: 14px;
    font-weight: bold;
}
.loginIn:hover{
    color:#0051ff;

}
/* Стили кнопки */
.iksweb
{
    display: inline-block;
    cursor: pointer;
    font-size: 13px;
    text-decoration:none;
    padding:10px 20px;
    color:#ffffff;
    background:#0051ff;
    border-radius:5px;
    border:2px solid #0052ff;
}
.iksweb:hover{
    display: inline-block;
    cursor: pointer;
    font-size: 13px;
    text-decoration:none;
    padding:10px 20px;
    color:#ffffff;
    background: #063498;
    border-radius:5px;
    border:2px solid #0052ff;
}

</style>

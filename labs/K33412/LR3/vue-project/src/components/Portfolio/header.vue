<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: white!important;">
        <div class="container-fluid" style="padding-right: 40px;padding-left: 40px;">
            <div class="navbar-header">
                <a href="/"><img src="https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg" height="20" width="112" alt="Логотип Coinbase"></a>
            </div>
            <div>
                <ul class="nav navbar-nav">
                    <a href="" class="pull-right to_portfolio" style="margin-right: 10px; color: black; display: flex; align-items: center;">Купить криптовалюту</a>
                    <a href="/" class="pull-right loginOut" style="margin-right: 10px; color: black; display: flex; align-items: center;">Выйти</a>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "headerBlockPortfolio"
}
</script>


<style scoped>

.loginOut{

    /*font-family: 'NotoSansDisplay', sans-serif;*/
    font-size: 16px;
    font-weight: bold;
}
.loginOut:hover{
    color:#0051ff;
}

</style>

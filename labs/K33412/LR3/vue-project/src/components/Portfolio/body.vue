<template>
    <section class="container">
        <div class="dataTable-wrapper d-flex justify-content-center">
            <table class="table align-middle border-light mt-5 w-75">
                <thead>
                <tr class="head-row fw-normal titles">
                    <th>Название</th>
                    <th>Цена</th>
                    <th>Количество</th>
                    <th>Итого</th>
                    <th>&nbsp</th>
                </tr>
                </thead>
                <tbody>
                <tr class="align-middle alert border-light" role="alert">
                    <td class="d-flex align-items-center">
                        <img class="pic rounded-circle"
                             src="@/assets/img/bitcoin-btc-logo.svg"
                             style="width: 30px; height: 30px"
                             alt="">
                        <div class="ms-2">
                            <p class="m-0 fw-bold">Bitcoin</p>
                            <p class="m-0 text-muted">BTC</p>
                        </div>
                    </td>
                    <td>
                        <p class="fw-normal mb-0 price">RUB 1,069,941.60</p>
                    </td>
                    <td>
                        <label>
                            <input class="input amount" type="text" placeholder="0" value="5">
                        </label>
                    </td>
                    <td>
                        <div class="fw-normal mb-0 result">
                            RUB 5,349,708.00
                        </div>
                    </td>
                    <td>
                        <button type="button" class="iksweb_buy">
                            Купить
                        </button>
                    </td>
                    <td>
                        <button type="button" class="iksweb_sell">
                            Продать
                        </button>
                    </td>
                </tr>
                <tr class="align-middle alert border-light" role="alert">
                    <td class="d-flex align-items-center ">
                        <img class="pic rounded-circle"
                             src="@/assets/img/ethereum-eth-logo.svg"
                             style="width: 30px; height: 30px"
                             alt="">
                        <div class="ms-2">
                            <p class="m-0 fw-bold">Ethereum</p>
                            <p class="m-0 text-muted">ETH</p>
                        </div>
                    </td>
                    <td>
                        <p class="fw-normal mb-0 price">RUB 79,091.46</p>
                    </td>
                    <td>
                        <label>
                            <input class="input amount" type="text" placeholder="0" value="21.006">
                        </label>
                    </td>
                    <td>
                        <div class="fw-normal mb-0 result">
                            RUB 1,661,395.208
                        </div>
                    </td>
                    <td>
                        <button type="button" class="iksweb_buy">
                            Купить
                        </button>
                    </td>
                    <td>
                        <button type="button" class="iksweb_sell">
                            Продать
                        </button>
                    </td>
                </tr>
                <tr class="align-middle border-light" role="alert">
                    <td class="d-flex align-items-center">
                        <img class="pic rounded-circle"
                             src="@/assets/img/tether-usdt-logo.svg"
                             style="width: 30px; height: 30px"
                             alt="">
                        <div class="ms-2">
                            <p class="m-0 fw-bold">Tether</p>
                            <p class="m-0 text-muted">USDT</p>
                        </div>
                    </td>
                    <td>
                        <p class="fw-normal mb-0 price">RUB 63.00</p>
                    </td>
                    <td>
                        <label>
                            <input class="input amount" type="text" placeholder="0" value="10000">
                        </label>
                    </td>
                    <td>
                        <div class="fw-normal mb-0 result">
                            RUB 630,000.00
                        </div>
                    </td>
                    <td>
                        <button type="button" class="iksweb_buy">
                            Купить
                        </button>
                    </td>
                    <td>
                        <button type="button" class="iksweb_sell">
                            Продать
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
export default {
    name: "bodyBlockPortfolio"
}
</script>


<style scoped>

.titles{
    /*font-family: 'NotoSansDisplay', sans-serif;*/
    font-size: 16px;
    font-weight: bold;
}

/*.top_table{*/
/*    height: 60px;*/
/*    width: 100%;*/
/*    border: #dadada 1px solid;*/
/*    border-radius: 0;*/
/*}*/

.iksweb_buy{ /*кнопка купить*/
    display: inline-block;
    cursor: pointer;
    font-size: 14px;
    text-decoration: none;
    padding: 6px 20px;
    color: #ffffff;
    background: #d30909;
    border-radius: 20px;
    border: 2px solid #d30909;
    margin-top: 0;
}

.iksweb_buy:hover{
    background: #00d678;
    color:#ffffff;
    border:2px solid #00d678;
    transition: all 0.2s ease;
}


.iksweb_sell{ /*кнопка продать*/
    display: inline-block;
    cursor: pointer;
    font-size: 14px;
    text-decoration: none;
    padding: 6px 15px;
    color: #ffffff;
    background: #d30909;
    border-radius: 20px;
    border: 2px solid #d30909;
    margin-top: 0;
}

.iksweb_sell:hover{
    background: #00d678;
    color:#ffffff;
    border:2px solid #00d678;
    transition: all 0.2s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /*font-family: 'NotoSansDisplay', sans-serif*/
}

/*.nav-logo {*/
/*    width: 40%;*/
/*}*/

/*.nav-link {*/
/*    font-family: NotoSansDisplay, sans-serif;*/
/*    font-weight: bold;*/
/*}*/

.table {
    border: 2px solid;
}

.head-row {
    border-bottom: 2px solid;
    font-weight: normal;
}

/*.search-row {*/
/*    height: 65px;*/
/*}*/

/*.btn-link {*/
/*    width: 100px;*/
/*}*/

/*.logo-item {*/
/*    padding-left: 15px;*/
/*}*/

.pic {
    width: 50px;
    height: 50px;
    object-fit: contain;
}

.head-row {
    font-weight: normal;
}

.table thead th {
    padding: 30px;
    font-weight: bold;
}

.container .table-wrap {

    margin: 20px auto;
    overflow-x: auto
}

.input {
    width: 100px;
    height: 30px;
    padding: 8px;
    border: none;
}

::placeholder {
    color: black;
    font-weight: 600;
}


.table tbody td {
    padding: 30px;
    margin: 0;
}

</style>

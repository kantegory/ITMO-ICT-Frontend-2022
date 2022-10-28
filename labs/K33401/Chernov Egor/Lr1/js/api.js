const axios = require('axios');

const apiUrl = 'https://api.coingecko.com/api/v3'


function parseData(f_data) {
    let f_dataList = []
    for (let i in f_data) {
        f_dataList.push({
        image: f_data[i].image,
        fullName: f_data[i].name,
        shortName: f_data[i].id,
        price: f_data[i].current_price,
        per: f_data[i].price_change_percentage_1h_in_currency,
        chartData: f_data[i].sparkline_in_7d.price
        })
    }
    return f_dataList
}


function getCoinChartData(f_dataListEl) {
    let f_coinChartData = {name: f_dataListEl.fullName, data: null}
    const f_price = f_dataListEl.chartData
    let f_priceList = []

    let hour = 1
    let day = 1
    for (let i of f_price) {
        if (hour == 24) {
        f_priceList.push({label: `${day}d`, y: i})
        ++day
        hour = 0
        }
        else {
        f_priceList.push({label: `${hour}h`, y: i})
        }
        ++hour
    }
    f_coinChartData["data"] = f_priceList
    return f_coinChartData;
}


function setLiData(f_data) {
    var ol = document.getElementById("coinList");
    var li = document.createElement("LI").classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-start");
    var divI = document.createElement("DIV").classList.add("ms-2", "mt-1");
    var divN = document.createElement("DIV").classList.add("ms-2", "me-auto", "row");
    var divP = document.createElement("DIV").classList.add("ms-2", "row", "text-end");

    var img = document.createElement("IMG");
    img.src=f_data.image;
    img.alt="icon";
    img.wirdth="40";
    var fullName = document.createElement("span").classList.add("fw-bold", "main--text-color");
    fullName.textContent=f_data.fullName;
    var shortName = document.createElement("SPAN").classList.add("main--text-color");
    shortName.textContent=f_data.shortName;
    var price = document.createElement("SPAN").classList.add("fw-bold", "main--text-color");
    price.textContent=f_data.price;
    var divPPer = document.createElement("DIV");
    var per = document.createElement("SPAN").classList.add("badge", "fw-semibold", "rounded-pill", "percent--up--color");
    per.textContent=f_data.per;

    ol.appendChild(li)
    li.appendChild(divI)
    li.appendChild(divN)
    li.appendChild(divP)

    divI.appendChild(image)
    divN.appendChild(fullName)
    divN.appendChild(shortName)
    divP.appendChild(price)
    divP.appendChild(divPPer)
    divPPer.appendChild(per)
}

let mdata = ''

async function myResponse() {
    const res = await axios
        .get(`${apiUrl}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=true&price_change_percentage=1h`)
        
        return res.data
    }

const response = myResponse()

console.log(response)
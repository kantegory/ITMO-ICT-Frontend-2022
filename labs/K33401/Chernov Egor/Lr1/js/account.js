// Our web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAot7rgWsJ8JmcKv0t1kAg6Li7rev8msrI",
    authDomain: "coins-79d33.firebaseapp.com",
    projectId: "coins-79d33",
    storageBucket: "coins-79d33.appspot.com",
    messagingSenderId: "1063940474842",
    appId: "1:1063940474842:web:ce491946887f41f9cb22e3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Initialize var
const auth = firebase.auth()
const database = firebase.database()

function filterList(idFilter) {
    loadListData(0, 10, '&category=' + idFilter)
}

function rounded(number){
    return +number.toFixed(2);
}

function perUpOrDown(per) {
    if (per > 0.0) {
        return 'percent--up--color'
    }
    return 'percent--down--color'
}

async function setCriptoData(f_parseData) {
    var gridBody = document.getElementById("gridCripto")
    gridBody.innerHTML = ""
    let count = 1
    for (let data of f_parseData) {
        let tr = document.createElement('tr');
        tr.innerHTML =
            "    <td class=\"\">\n" +
            "        <div class=\"form-check form-switch\">\n" +
            `            <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"criptoSwitch${count}\" ${await checkSwitch(data.shortName)} onclick=\"clickSwitch('${data.shortName}')\">\n` +
            "        </div>\n" +
            "    </td>\n" +
            "    <td class=\"\">\n" +
            `        <span>${count}</span>\n` +
            "    </td>\n" +
            "    <td class=\"\">\n" +
            `        <img loading=\"lazy\" width=\"20\" height=\"20\" alt=\"${data.shortName}\"\n` +
            `             src=\"${data.image}\">\n` +
            `            <a class=\"\" href=\"https://www.coingecko.com/en/coins/${data.shortName}\">\n` +
            `                <span>${data.fullName}</span>\n` +
            "            </a>\n" +
            "    </td>\n" +
            "    <td class=\"text-end\">\n" +
            `        <span>$${data.price}</span>\n` +
            "    </td>\n" +
            "    <td class=\"text-end\">\n" +
            `        <span class=\"badge fw-semibold rounded-pill ${perUpOrDown(rounded(data.per1h))}\">${rounded(data.per1h)}%</span>\n` +
            "    </td>\n" +
            "    <td>\n" +
            "        <div class=\"row align-items-center\">\n" +
            "            <div class=\"col text-center d-none d-md-block\"><span\n" +
            `                class=\"badge fw-semibold rounded-pill ${perUpOrDown(rounded(data.per24h))}\">${rounded(data.per24h)}%</span></div>\n` +
            "            <div class=\"col text-end d-none d-sm-block\">\n" +
            `                <img loading=\"lazy\" alt=\"dogecoin\" src=\"https://www.coingecko.com/coins/${data.image.split("/")[5]}/sparkline\">\n` +
            "            </div>\n" +
            "        </div>\n" +
            "    </td>\n"
        gridBody.append(tr)
        count += 1
    }
}

async function setMyCriptoData(f_parseData) {
    var gridBody = document.getElementById("gridMyCripto")
    gridBody.innerHTML = ""
    let count = 1
    for (let data of f_parseData) {
        let tr = document.createElement('tr');
        tr.innerHTML =
            "    <td class=\"\">\n" +
            "        <div class=\"form-check form-switch\">\n" +
            `            <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"criptoMySwitch${count}\" checked onclick=\"clickMySwitch('${data.shortName}')\">\n` +
            "        </div>\n" +
            "    </td>\n" +
            "    <td class=\"\">\n" +
            `        <span>${count}</span>\n` +
            "    </td>\n" +
            "    <td class=\"\">\n" +
            `        <img loading=\"lazy\" width=\"20\" height=\"20\" alt=\"${data.shortName}\"\n` +
            `             src=\"${data.image}\">\n` +
            `            <a class=\"\" href=\"https://www.coingecko.com/en/coins/${data.shortName}\">\n` +
            `                <span>${data.fullName}</span>\n` +
            "            </a>\n" +
            "    </td>\n" +
            "    <td class=\"text-end\">\n" +
            `        <span>$${data.price}</span>\n` +
            "    </td>\n" +
            "    <td class=\"text-end\">\n" +
            `        <span class=\"badge fw-semibold rounded-pill ${perUpOrDown(rounded(data.per1h))}\">${rounded(data.per1h)}%</span>\n` +
            "    </td>\n" +
            "    <td>\n" +
            "        <div class=\"row align-items-center\">\n" +
            "            <div class=\"col text-center d-none d-md-block\"><span\n" +
            `                class=\"badge fw-semibold rounded-pill ${perUpOrDown(rounded(data.per24h))}\">${rounded(data.per24h)}%</span></div>\n` +
            "            <div class=\"col text-end d-none d-sm-block\">\n" +
            `                <img loading=\"lazy\" alt=\"dogecoin\" src=\"https://www.coingecko.com/coins/${data.image.split("/")[5]}/sparkline\">\n` +
            "            </div>\n" +
            "        </div>\n" +
            "    </td>\n"
        gridBody.append(tr)
        count += 1
    }
}

function parseData(f_data) {
    let f_dataList = []
    for (let data of f_data) {
        f_dataList.push({
            image: data.image,
            fullName: data.name,
            shortName: data.id,
            price: data.current_price,
            per1h: data.price_change_percentage_1h_in_currency,
            per24h: data.price_change_percentage_24h_in_currency,
            chartData: data.sparkline_in_7d.price
        })
    }
    return f_dataList
}

function getCoinChartData(f_parseData) {
    let coinChartData = []
    for (let data of f_parseData) {
        let f_coinChartData = {name: data.fullName, data: null}
        const f_price = data.chartData.slice(0, 240)
        let f_priceList = []

        let hour = 1
        let day = 1
        for (let i of f_price) {
            if (hour === 24) {
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
        coinChartData.push(f_coinChartData)
    }
    return coinChartData;
}

function next(idPage) {
    let page = document.getElementById(idPage)
    let count = Number(page.textContent) + 1
    page.innerText = count

    if (idPage === 'pageCripto') {
        let start = (count - 1) * 10
        let end = start + 10
        loadListData(start, end)
    } else if (idPage === 'pageChart') {
        let start = count * 3 - 3
        let end = start + 3
        loadChartData(start, end)
    } else {

    }
}

function back(idPage) {
    let page = document.getElementById(idPage)
    let count = Number(page.textContent)
    if (count !== 1) {
        count -= 1
        page.innerText = count

        if (idPage === 'pageCripto') {
            let start = (count - 1) * 10
            let end = count * 10
            loadListData(start, end)
        } else if (idPage === 'pageChart') {
            let start = count * 3 - 3
            let end = start + 3
            loadChartData(start, end)
        } else {

        }
    }
}

function searchCripto(idSearcher) {
    let cripto = document.getElementById(idSearcher).value
    if (cripto.length !== 0) {
        loadSearchListData(cripto)
    } else {
        loadListData()
    }
}

async function loadSearchListData(cripto) {
    const response = await fetch(`${apiUrl}/search?query=${cripto}`)
    const data = await response.json()
    const coinInfoList = data.coins
    let coinIdsList = []
    let coinDataList = []

    for (let coin of coinInfoList) {
        coinIdsList.push(coin.id)
    }

    for (let ids of coinIdsList) {
        const response = await fetch(`${apiUrl}//coins/markets?vs_currency=usd&ids=${ids}&order=market_cap_desc&page=1&sparkline=true&price_change_percentage=1h,24h`)
        const data = await response.json()
        coinDataList.push(data[0])
    }
    const parseCoinData = parseData(coinDataList)

    setCriptoData(parseCoinData)
}

async function loadListData(start=0, end=10, category='') {
    const response = await fetch(`${apiUrl}/coins/markets?vs_currency=usd${category}&order=market_cap_desc&page=1&sparkline=true&price_change_percentage=1h,24h`)
    const data = await response.json()
    const mdata = parseData(data)
    const tenData = mdata.slice(start, end)
    setCriptoData(tenData)
}

async function loadChartData(start=0, end=3, category='') {
    const response = await fetch(`${apiUrl}/coins/markets?vs_currency=usd${category}&order=market_cap_desc&page=1&sparkline=true&price_change_percentage=1h,24h`)
    const data = await response.json()
    const mdata = parseData(data)
    const threeData = mdata.slice(start, end)
    const coinChartData = getCoinChartData(threeData)
    const nameContainer = ["chartContainer1", "chartContainer2", "chartContainer3"]

    for (let i in nameContainer) {
        var chart = new CanvasJS.Chart(nameContainer[i], {
            theme: "light2", // "light2", "dark1", "dark2"
            animationEnabled: true,
            title:{
                text: coinChartData[i].name
            },
            data: [
                {
                    type: "spline", // "bar", "area", "spline", "pie", etc.
                    dataPoints: coinChartData[i].data
                }
            ]
        });
        chart.render();
    }
}

async function checkSwitch(idCoin) {
    const databaseRef = database.ref()

    let check = await databaseRef.child("profile").child(idUser).get().then((snapshot) => {
        if (snapshot.exists()) {
            let values = Object.values(snapshot.val())
            for (let val of values) {
                if (val === idCoin) {
                    return 'checked'
                }
            }
        } else {
            console.log("No such user");
        }
    }).catch((error) => {
        console.log(error.message)
    })
    if (await check === 'checked') {
        return 'checked'
    }
    return ''
}

function clickSwitch(idCoin) {
    const databaseRef = database.ref()

    databaseRef.child("profile").child(idUser).get().then((snapshot) => {
        if (snapshot.exists()) {
            console.log("Have data");
            const data = snapshot.val()
            let values = Object.values(data)
            let keys = Object.keys(data)
            let count = Number(data['count'])
            let check = true
            for (let i in values) {
                if (i === '0') {
                    continue
                }
                if (idCoin === values[i]) {
                    databaseRef.child("profile").child(idUser).update({count: count - 1})
                    databaseRef.child("profile").child(idUser).child(keys[i]).remove()
                    check = false
                    loadMyCriptoData()
                }
            }
            if (check) {
                databaseRef.child("profile").child(idUser).update({count: count + 1})
                databaseRef.child("profile").child(idUser).push(idCoin)
                loadMyCriptoData()
            }
        } else {
            console.log("No such user");
        }
    }).catch((error) => {
        console.log(error.message)
    })
}

function clickMySwitch(idCoin) {
    const databaseRef = database.ref()

    databaseRef.child("profile").child(idUser).get().then((snapshot) => {
        if (snapshot.exists()) {
            console.log("Have data");
            const data = snapshot.val()
            let values = Object.values(data)
            let keys = Object.keys(data)
            let count = Number(data['count'])
            for (let i in keys) {
                if (values[i] === idCoin) {
                    databaseRef.child("profile").child(idUser).update({count: count - 1})
                    databaseRef.child("profile").child(idUser).child(keys[i]).remove()
                    loadMyCriptoData()
                    loadListData()
                }
            }
        } else {
            console.log("No such user");
        }
    }).catch((error) => {
        console.log(error.message)
    })
}

async function loadMyCriptoData() {
    const databaseRef = database.ref()

    const data = await databaseRef.child("profile").child(idUser).get().then((snapshot) => {
        if (snapshot.exists()) {
            return snapshot.val()
        } else {
            console.log("No such user");
        }
    }).catch((error) => {
        alert(error.message)
    })

    let values = Object.values(data)
    let keys = Object.keys(data)
    let coinDataList = []
    for (let i in keys) {
        if (keys[i] === 'count') {
            continue
        }
        let ids = values[i]
        const response = await fetch(`${apiUrl}/coins/markets?vs_currency=usd&ids=${ids}&order=market_cap_desc&page=1&sparkline=true&price_change_percentage=1h,24h`)
        const data = await response.json()
        const mdata = parseData(data)[0]
        coinDataList.push(mdata)
    }
    console.log(coinDataList)
    setMyCriptoData(coinDataList)
}

const apiUrl = 'https://api.coingecko.com/api/v3'
const idUser = document.documentURI.split("?")[1].split("=")[1].split("#")[0]
loadListData()
loadChartData()
loadMyCriptoData()

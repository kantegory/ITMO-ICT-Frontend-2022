const backendUrl = "http://194.87.248.78:8000";

processPrices = (pair, func, mode) => {
    let resp = fetch(`https://api.kraken.com/0/public/Ticker?pair=${pair}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(`Price for ${pair} is ` + Number(Object.values(data.result)[0].a[0]));
            console.log(Number(Object.values(data.result)[0].a[0]));
            switch (mode) {
                case "single":
                    console.log(mode);
                    func(Object.values(data.result)[0].a[0].a);
                case "all":
                    func(Object.values(data.result));
                default:
                    break;
            }
        })
        .catch(_);
    return resp;
};

renderPrice = (price) => {
    let container = document.querySelector("#price");
    try {
        console.log(price[0].a[0]);
        container.innerHTML = Number(price[0].a[0]) + "$";
    } catch (_) {
        container.innerHTML = 99999.99 + "$";
    }
};

buyCrypto = () => {
    const amount = document.getElementById("cryptoAmount").value;
    const token = localStorage.getItem("token");
    if (!amount || !token) {
        return;
    }
    fetch(`${backendUrl}/crypto?currency=BTC&amount=${amount}`, {
        headers: {
            Accept: "application/json",
            Token: token,
        },
        method: "POST",
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            Toastify({
                text: "Success! Bought " + amount + " BTC!",
                duration: 3000,
            }).showToast();
            document.getElementById("closeBuyCrypto").click();
        })
        .catch((e) =>
            Toastify({
                text: "Error!",
                duration: 3000,
            }).showToast()
        );
};

document.getElementById("buyCrypto").onclick = buyCrypto;

processPrices("BTCUSD", renderPrice, "single");

renderEveryMarket = () => {

}

renderMarket = () => {
    const container = document.getElementById("btcChart");
    if (!container || !document.getElementById('price')) {
        return;
    }
    // random because Kraken fails with CORS
    const rates = [];
    const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (const v of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
        rates.push(Math.floor(Math.random() * 10000 + 8200 + Math.random() * v));
    }

    const BTCData = {
        labels: labels,
        datasets: [
            {
                label: "BTC",
                backgroundColor: "rgb(0, 255, 0)",
                borderColor: "rgb(0, 0, 0)",
                data: rates,
            },
        ],
    };

    const BTCConfig = {
        type: "line",
        data: BTCData,
        options: {},
    };

    const btcChart = new Chart(document.getElementById("btcChart"), BTCConfig);
};

renderMarket();

getPortfolio = () => {
    const graph = document.getElementById("portfolioChart");
    const stats = document.getElementById("listPortfolio");
    const token = localStorage.getItem("token");
    if (!graph || !stats || !token) {
        return;
    }

    fetch("http://194.87.248.78:8000/crypto", {
        headers: {
            Accept: "application/json",
            Token: token,
        },
    })
        .then((res) => {
            stats.innerHTML = "";
            return res.json();
        })
        .then((data) => {
            const labels = []
            const values = []
            for (const [key, value] of Object.entries(data)) {
                console.log(`${key}: ${value}`);
                labels.push(key);
                values.push(value);
                stats.innerHTML += `<li class="list-group-item bg-danger text-white d-inline-flex justify-content-between">
                <span>${key} ${value}</span><span>-${Math.round(Math.random() * 85)}%</span>
            </li>`;
            }

            const chartData = {
                labels: labels,
                datasets: [
                    {
                        label: "Portfolio",
                        data: values,
                        backgroundColor: ["green", "purple", "orange", "black"],
                        hoverOffset: 1,
                    },
                ],
            };

            const config = {
                type: "doughnut",
                data: chartData,
            };

            const portfolioChart = new Chart(document.getElementById("portfolioChart"), config);
        });
};

getPortfolio();

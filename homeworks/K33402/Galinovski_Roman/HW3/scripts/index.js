function searchResults() {
    const countrys = {
        "Россия" : "RU", 
        "США" : "US",
        "Украина" : "UA",
        "Франция" : "FR",
        "Великобритания" : "GB",
        "Китай" : "KN"
    };
    let country = document.getElementById("country").value;
    let arrivalDatetime = document.getElementById("arrival-datetime").value;

    let redirect_path = "./searchres.html"
    let query_params = `?`

    if (country) {
        query_params += `&country=${countrys[country]}`
    }
    if (arrivalDatetime) {
        query_params += `&arrival-datetime=${arrivalDatetime.slice(0,4)}`
    }

    window.location.href = redirect_path + query_params;
}
<<<<<<< HEAD
let city = document.querySelector('.city')
let temp = document.querySelector('.temp')
let desc = document.querySelector('.desc')
let icon = document.querySelector('.icon')
let feels_temp = document.querySelector('.feels_temp')
let inputValue = document.querySelector('#inputValue')
let button = document.querySelector('#search')
let button_geo = document.querySelector('#get-geo')


button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=314864fa7ae959cda85ac9d534443060&units=metric')
        .then(response => response.json())
        .then(data => {
            let cityValue = data['name'];
            let tempValue = Math.floor(data['main']['temp']);
            let feels_tempValue = Math.floor(data['main']['feels_like']);
            let descValue = data['weather'][0]['description'];
            let idValue = data['weather'][0]['id'];

            city.innerHTML = 'City: ' + cityValue;
            temp.innerHTML = 'Temperature: '+ tempValue + '&deg' +'C';
            feels_temp.innerHTML = 'Feels like ' + feels_tempValue + '&deg' +'C';
            desc.innerHTML = descValue;
            if(idValue == 800){
                icon.src = "icons/clear.svg";
            }else if(idValue >= 200 && idValue <= 232){
                icon.src = "icons/storm.svg";  
            }else if(idValue >= 600 && idValue <= 622){
                icon.src = "icons/snow.svg";
            }else if(idValue >= 701 && idValue <= 781){
                icon.src = "icons/haze.svg";
            }else if(idValue >= 801 && idValue <= 804){
                icon.src = "icons/cloud.svg";
            }else if((idValue >= 500 && idValue <= 531) || (idValue >= 300 && idValue <= 321)){
                icon.src = "icons/rain.svg";
            }
    
        })
})

function getLocation(pos) {
    let crd = pos.coords;
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+crd.latitude+'&lon='+crd.longitude+'&appid=314864fa7ae959cda85ac9d534443060&units=metric')
          .then(response => response.json())
          .then(data => {
              let cityValue = data['name'];
              let tempValue = Math.floor(data['main']['temp']);
              let feels_tempValue = Math.floor(data['main']['feels_like']);
              let descValue = data['weather'][0]['description'];
              let idValue = data['weather'][0]['id'];

              city.innerHTML = 'City: '+ cityValue;
              temp.innerHTML = 'Temperature: ' + tempValue + '&deg' +'C';
              feels_temp.innerHTML = 'Feels like ' + feels_tempValue + '&deg' + 'C';
              desc.innerHTML = descValue;
              if(idValue == 800){
                icon.src = "icons/clear.svg";
            }else if(idValue >= 200 && idValue <= 232){
                icon.src = "icons/storm.svg";  
            }else if(idValue >= 600 && idValue <= 622){
                icon.src = "icons/snow.svg";
            }else if(idValue >= 701 && idValue <= 781){
                icon.src = "icons/haze.svg";
            }else if(idValue >= 801 && idValue <= 804){
                icon.src = "icons/cloud.svg";
            }else if((idValue >= 500 && idValue <= 531) || (idValue >= 300 && idValue <= 321)){
                icon.src = "icons/rain.svg";
            }
          })
}

button_geo.addEventListener('click', function(){
    navigator.geolocation.getCurrentPosition(getLocation);
})
=======
const wrapper = document.querySelector(".wrapper"),
inputPart = document.querySelector(".input-part"),
infoTxt = inputPart.querySelector(".info-txt"),
inputField = inputPart.querySelector("input"),
locationBtn = inputPart.querySelector("button"),
weatherPart = wrapper.querySelector(".weather-part"),
wIcon = weatherPart.querySelector("img"),
arrowBack = wrapper.querySelector("header i");

let api;

inputField.addEventListener("keyup", e =>{
    // if user pressed enter btn and input value is not empty
    if(e.key == "Enter" && inputField.value != ""){
        requestApi(inputField.value);
    }
});

locationBtn.addEventListener("click", () =>{
    if(navigator.geolocation){ // if browser support geolocation api
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }else{
        alert("Your browser not support geolocation api");
    }
});

function requestApi(city){
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=314864fa7ae959cda85ac9d534443060`;
    fetchData();
}

function onSuccess(position){
    const {latitude, longitude} = position.coords; // getting lat and lon of the user device from coords obj
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=314864fa7ae959cda85ac9d534443060`;
    fetchData();
}

function onError(error){
    // if any error occur while getting user location then we'll show it in infoText
    infoTxt.innerText = error.message;
    infoTxt.classList.add("error");
}

function fetchData(){
    infoTxt.innerText = "Getting weather details...";
    infoTxt.classList.add("pending");
    // getting api response and returning it with parsing into js obj and in another 
    // then function calling weatherDetails function with passing api result as an argument
    fetch(api).then(res => res.json()).then(result => weatherDetails(result)).catch(() =>{
        infoTxt.innerText = "Something went wrong";
        infoTxt.classList.replace("pending", "error");
    });
}

function weatherDetails(info){
    if(info.cod == "404"){ // if user entered city name isn't valid
        infoTxt.classList.replace("pending", "error");
        infoTxt.innerText = `${inputField.value} isn't a valid city name`;
    }else{
        //getting required properties value from the whole weather information
        const city = info.name;
        const country = info.sys.country;
        const {description, id} = info.weather[0];
        const {temp, feels_like, humidity} = info.main;

        // using custom weather icon according to the id which api gives to us
        if(id == 800){
            wIcon.src = "icons/clear.svg";
        }else if(id >= 200 && id <= 232){
            wIcon.src = "icons/storm.svg";  
        }else if(id >= 600 && id <= 622){
            wIcon.src = "icons/snow.svg";
        }else if(id >= 701 && id <= 781){
            wIcon.src = "icons/haze.svg";
        }else if(id >= 801 && id <= 804){
            wIcon.src = "icons/cloud.svg";
        }else if((id >= 500 && id <= 531) || (id >= 300 && id <= 321)){
            wIcon.src = "icons/rain.svg";
        }
        
        //passing a particular weather info to a particular element
        weatherPart.querySelector(".temp .numb").innerText = Math.floor(temp);
        weatherPart.querySelector(".weather").innerText = description;
        weatherPart.querySelector(".location span").innerText = `${city}, ${country}`;
        weatherPart.querySelector(".temp .numb-2").innerText = Math.floor(feels_like);
        weatherPart.querySelector(".humidity span").innerText = `${humidity}%`;
        infoTxt.classList.remove("pending", "error");
        infoTxt.innerText = "";
        inputField.value = "";
        wrapper.classList.add("active");
    }
}

arrowBack.addEventListener("click", ()=>{
    wrapper.classList.remove("active");
});
>>>>>>> dd78f249d9b4b162410477cd86fc804138152366

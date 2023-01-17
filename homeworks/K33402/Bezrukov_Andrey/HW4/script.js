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
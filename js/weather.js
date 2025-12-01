const cityInput = document.querySelector(".city-input");
const searchBtn = document.querySelector(".search-btn");
const apikey = '6350a60642afa820e560351ad616d33c';
const errscreen = document.querySelector(".not-found");
const searchsection = document.querySelector(".search-city");
const weathersection = document.querySelector(".weather-info");
const countrytxt = document.querySelector(".country-txt");
const temptxt = document.querySelector(".temp-txt");
const feelstxt = document.querySelector(".feels-txt");
const conditiontxt = document.querySelector(".condition-txt");
const humiditytxt = document.querySelector(".humidity-value-txt");
const windtxt = document.querySelector(".wind-value-txt");
const weatherimg = document.querySelector(".weather-summary-img");
const currentdate = document.querySelector(".current-date-txt");
const forecastContainer = document.querySelector(".forecast-items-container");


function getCurrentDate(){
    const date = new Date();
    const options = {
        weekday: "short",
        month: "short",
        day: "2-digit"
    };
    return date.toLocaleDateString("en-US", options);
}

async function getFetchData(endpoint, city){
    const apiurl = `https://api.openweathermap.org/data/2.5/${endpoint}?q=${city}&appid=${apikey}&units=imperial`;
    const response = await fetch(apiurl);
    return await response.json();
}

function updateForecastItems(weatherData){
    const {
        dt_txt: date,
        weather: [{id}],
        main: {temp}
    } = weatherData;
    const dateTaken = new Date(date)
    const options= {day: "2-digit",
                    month: "short"};
    const future = dateTaken.toLocaleDateString("en-US", options);

    const forecastItem = `<div class="forecast-item">
                    <h5 class="forecast-item-date regular-txt">${future}</h5>
                    <img src="${getWeatherIcon(id)}" class="forecast-item-img">
                    <h5 class="forecast-item-temp">${temp.toFixed(1)}°F</h5>
    </div>`;
    forecastContainer.insertAdjacentHTML("beforeend",forecastItem);
}

async function updateForecast(city){
    const data = await getFetchData("forecast",city);
    console.log(data);
    const timeTaken = "12:00:00";
    const date = new Date().toISOString().split('T')[0];
    forecastContainer.innerHTML = "";


    data.list.forEach(forecastWeather =>{
                if(forecastWeather.dt_txt.includes(timeTaken) 
            && !forecastWeather.dt_txt.includes(getCurrentDate())){
        updateForecastItems(forecastWeather);

        }
    });
}

function getWeatherIcon(id){
    if(id <= 232){return "svg/thunderstorm.svg";}
    if(id <= 321){return "svg/drizzle.svg";}
    if(id <= 531){return "svg/rain.svg";}
    if(id <= 622){return "svg/snow.svg";}
    if(id <= 781){return "svg/caution.svg";}
    if(id <= 800){return "svg/sunny.svg";}
    else return "svg/cloudy.svg";

}

function showDisplaySection(section){
    [errscreen, searchsection, weathersection].forEach(section => section.style.display = "none");
    section.style.display = "flex";
    
}

async function updateWeatherInfo(city){
    const weatherData = await getFetchData("weather", city);
    
    if(weatherData.cod != 200){
        showDisplaySection(errscreen);
        return ;
    }
    console.log(weatherData);

    const {name: place, 
            main: {temp, feels_like, humidity}, 
            sys: {country},
            weather: [{id, main}],
            wind: {speed, gust}}= weatherData;

    await updateForecast(city);
    showDisplaySection(weathersection);
    countrytxt.textContent = `${place}, ${country}`;
    currentdate.textContent = getCurrentDate();
    temptxt.textContent = temp.toFixed(1)+ "°F"; 
    feelstxt.textContent = `Feels Like: ${feels_like.toFixed(0)}°F`;  
    conditiontxt.textContent = main;
    humiditytxt.textContent = humidity + "%";
    if(!gust){windtxt.textContent = `${speed.toFixed(0)} MPH`}
    else{windtxt.textContent = `${gust.toFixed(0)} MPH`;}

    weatherimg.src = getWeatherIcon(id);
}
searchBtn.addEventListener("click", () =>{
    if(cityInput.value.trim() != ""){
        updateWeatherInfo(cityInput.value);
        cityInput.value = "";
        cityInput.blur();
    }
});
cityInput.addEventListener("keydown", (event)=>{
    if(event.key == "Enter" && 
        cityInput.value.trim() != ""
    ){
    event.preventDefault();
    updateWeatherInfo(cityInput.value);
    cityInput.value = "";
    cityInput.blur();
}   
});

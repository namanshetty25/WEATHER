const apiKey = 'e1e10e99151b6780e98a2ab220a1c881';
document.getElementById("getWeatherBtn").addEventListener("click", getWeather)
async function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new error("City not found");
        }
        const data = await response.json();
        displayWeather(data);
    }
    catch(error){
        alert(error.message);
    }
}
function displayWeather(data) {
    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temp").innerHTML = Math.round(data.main.temp - 273);
    document.getElementById("desc").innerText = data.weather[0].description;
}
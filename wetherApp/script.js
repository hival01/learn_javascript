const button = document.getElementById("search-button");
const InputCityName = document.getElementById("input_city-name");

const CityName = document.getElementById("city-name");
const CityTemp = document.getElementById("city-temp");
const LocalTime = document.getElementById("local-time");
async function getWeather(city) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=9687f17a69824429ad4122500240308&q=${city}&aqi=yes
`
  );
  return await response.json();
}
button.addEventListener("click", async () => {
  const value = InputCityName.value;
  const result = await getWeather(value);

  CityName.innerText = `${result.location.name} ,${result.location.region}, ${result.location.country}`;
  LocalTime.innerText = result.location.localtime;
  CityTemp.innerText = `${result.current.temp_c}°C`;
});

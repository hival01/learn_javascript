const button = document.querySelector('button');


async function getWeather(latitude, longitude) {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=9687f17a69824429ad4122500240308&q=${latitude},${longitude}&aqi=yes`
    );
    return await response.json();
}

// ask for location permission
async function onGeolocationSuccess(data){
    // console.log(data)
    //if location get successfully then fetch the wether data using api 
    const result = await getWeather(data.coords.latitude, data.coords.longitude);
    console.log(result)

}
function onGeolocationError(error){
    console.log(error)
}
button.addEventListener('click',()=>{
    navigator.geolocation.getCurrentPosition(onGeolocationSuccess, onGeolocationError);
})
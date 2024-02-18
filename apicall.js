const apiKey = '8a7f4ad860dc08038043adbabd1d2363&units=metric';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=ranchi&appid=${apiKey}`;


const getData = async () => {
    console.log("Getting the data");
    let response = await fetch(apiUrl);
    response = await response.json();
    console.log(response.main.temp);
}

getData()
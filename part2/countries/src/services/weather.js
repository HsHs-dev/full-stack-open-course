import axios from "axios"

const getWeather = (city) => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
  const req = axios.get(url)
  return req.then(response => response.data)
}

export default { getWeather }
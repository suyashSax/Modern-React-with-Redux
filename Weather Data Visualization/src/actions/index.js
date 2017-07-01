import axios from 'axios'

const API_KEY = 'df37d2f15c9c54dd5c5e368601aa3894'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?q=`
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
    const URL = `${ROOT_URL}${city},us&appid=${API_KEY}`
    const request = axios.get(URL)
    console.log('Request: ', request)
    return{
        type: FETCH_WEATHER,
        payload: request
    }
}
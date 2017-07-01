import React, {Component} from 'react'
import {connect} from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends Component{
    
    renderWeather(cityData){
        
        const name = cityData.city.name
        const temps = cityData.list.map(weather => weather.main.temp-273)
        const pressures = cityData.list.map(weather => weather.main.pressure)
        const humidities = cityData.list.map(weather => weather.main.humidity)
        
//      const lat = cityData.city.coord.lat
//      const lon = cityData.city.coord.lon
        
        const {lon, lat} = cityData.city.coord;
        
        console.log(temps)
        
        return(
            <tr key={name}>
                <td>
                    <GoogleMap lon={lon} lat={lat}></GoogleMap>
                </td>
                <td>
                    <Chart data={temps} color={'orange'} units='C'></Chart>
                </td>
                <td>
                    <Chart data={pressures} color={'green'} units='hPa'></Chart>
                </td> 
                <td>
                    <Chart data={humidities} color={'black'} units='%'></Chart>
                </td>
            </tr>
        )
    }
        
    render(){
        return(
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>    
        )
    }
}

function mapStateToProps({weather}){        //state, but we only want weather prop so... let weather = state.weather
    return{                                 // weather = state.weather => weather : weather => weather
        weather                             
    }
}

export default connect(mapStateToProps)(WeatherList)
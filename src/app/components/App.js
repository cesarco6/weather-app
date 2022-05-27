import React, { Component } from 'react'

import WeatherInfo from './WeatherInfo'
import WeatherForm from './WeatherForm'

import {W_K_Cx} from '../keys'

class App extends Component {

    state = {
        temperature: '',
        description: '',
        humidity: '',
        wind_speed: '',
        city: '',
        country: '',
        error: null
    }

    getWeather = async (e) => {
        e.preventDefault()
        const { city, country } = e.target.elements
        const cityVal = city.value
        const countryVal = country.value
        //console.log(cityVal, countryVal)
        if (cityVal && countryVal) {
                const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}, 
                                ${countryVal}&appid=${W_K_Cx}&units=metric`
                
                const response = await fetch(API_URL)
                const info = await response.json()
                //console.log(info)   
                
                this.setState({
                    temperature: info.main.temp,
                    description: info.weather[0].description,
                    humidity: info.main.humidity,
                    wind_speed: info.wind.speed,
                    city: info.name,
                    country: info.sys.country,
                    error: null
                })
        } else {
            this.setState({error: 'Ingresa una ciudad y pais'})
        }
    }
        

    render() {
        return  (
            <div className='container p-4'>
                <div className='row'>
                    <div className='col-md-4 mx-auto'>
                        <WeatherForm getWeather={this.getWeather}/>
                        <WeatherInfo {...this.state}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
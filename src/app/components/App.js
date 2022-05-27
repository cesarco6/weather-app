import React, { Component } from 'react'

import WeatherInfo from './WeatherInfo'
import WeatherForm from './WeatherForm'

class App extends Component {

    getWeather = (e) => {
        
        const { city, country } = e.target.elements
        const cityVal = city.value
        const countryVal = country.value
        console.log(cityVal, countryVal)
        e.preventDefault()
    }

    render() {
        return  (
            <div className='container p-4'>
                <div className='row'>
                    <div className='col-md-4 mx-auto'>
                        <WeatherForm getWeather={this.getWeather}/>
                        <WeatherInfo/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
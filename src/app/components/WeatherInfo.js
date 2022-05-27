import React, { Fragment } from 'react'

const WeatherInfo = props => {
    console.log(props)
    return(
    <>
        {
            props.error && 
            <div className='alert alert-danger'>
                <p>{props.error}</p>
            </div>
        }
        {
            props.temperature ? 
           <div className='card card-body'>
                <p>
                    Ubicación: {props.city}, {props.country}
                </p>
                <p>
                    Temperatura: {props.temperature}°C, {props.description}
                </p>
                <p>
                    Humedad: {props.humidity}% <br/>
                    velocidad del viento: {props.wind_speed}km/h
                </p>                            
            </div>
            :
            <div className='card card-body'>
                <p>No hay petición aun.</p>
            </div>
        }
        
    </>
    )
}

export default WeatherInfo
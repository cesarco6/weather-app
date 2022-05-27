import React from 'react'

const WeatherForm = props => (
    <div className='card card-body'>
        <form onSubmit={props.getWeather}>
            <div className='form-group'>
                <input type="text" name='city' className='form-control' placeholder='Nombre de la ciudad' autoFocus/>                
            </div>
            <div className='form-group'>
                <input type="text" name="country" className="form-control" placeholder='Nombre del país'/>                
            </div>
            <button type='submit' className='btn btn-primary btn-block'>Obten clima</button>
        </form>
    </div>
)

export default WeatherForm

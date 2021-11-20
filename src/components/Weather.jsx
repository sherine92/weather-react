import React from 'react'

export default function Weather(props) {
    return (
        <div className='info'>
            {props.temp && <p className='info-key'> Tempurture:<span className='info-value'> {props.temp} </span></p>}
            {props.city && <p className='info-key'>City:<span className='info-value'> {props.city} </span></p>}
            {props.country && <p className='info-key'>Country: <span className='info-value'> {props.country} </span></p>}
            {props.humidity && <p className='info-key'>Humidity: <span className='info-value'>{props.humidity} </span></p>}
            {props.desc && <p className='info-key'>Description: <span className='info-value'>{props.desc} </span></p>}
            {props.error && <p className='info-key'><span className='info-value'> {props.error} </span></p>}

        </div>
    )
}


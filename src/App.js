import React, { Component } from 'react'
import Form from './components/Form'
import Weather from './components/Weather'


const API_KEY ='e36ed364400282e43250b6c4c0274d44'

export default class App extends Component {
    
   state={
     temp:'',
     city:'',
     country:'',
     humidity:'',
     desc:'',
     error:''
   }
  
  getWeather= async(e)=>{
    console.log(e);
    e.preventDefault()
    const city=e.target.city.value
    const country=e.target.country.value
    const api =await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const data=await  api.json()
  if(city&&country){
    this.setState({
      temp:data.main.temp,
      city:data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      desc:data.weather[0].description,
      error:''
     })
  }else{
   this.setState({
    
    error:'You Should Enter A Country'
   })
  }}


  render() {
    return (
      <div className='wrapper'>
        <div className='from-container'>
        <Form weather={this.getWeather}/>
        <Weather
        temp={this.state.temp}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        desc={this.state.desc}
        error={this.state.error}
        />
        </div>
      </div>
    )
  }
}


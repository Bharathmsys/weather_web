import React, { useState } from 'react'

const Weather = () => {
    const [city,setCity] = useState("")
    const [temperature,setTemperature] = useState()
    const city2 = city.charAt(0).toUpperCase() + city.slice(1);
    const add = (e)=>{
        e.preventDefault()
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
            .then(responce=> responce.json()).then(data=>{
                // console.log(data.main.temp-273.15)
                const celsius=Math.round((data.main.temp-273.15)) // actual value is kelvin is kelvin is covert to celsius  by using  kelvin value - 273.15
                setTemperature(<h2 className='temp'>Temperature At {city2} {celsius}°C</h2>)
            }).catch(err=>{
                console.log(err)
                alert("Please Enter Correct City")
            })
            setCity('')
    }
  return (
    <center>
      <div className='container'>
        <h1 className='heading'>Weather App</h1>
        <form onSubmit={add}>
        <input value={city} onChange={event=>{setCity(event.target.value)}} className='input' type='text' placeholder='Please Enter Your City' required/><br/>
        <input className='button' type='submit' value='Get Temperature'/>
        </form>
        <h3>{temperature}</h3>
      </div>
    </center>
  )
}

export default Weather

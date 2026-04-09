import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const apiKey = "144ca7b69c6a1ec690bc6c029b772f0e"

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (city.trim() === "") return

    setLoading(true)

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

    const data = await res.json()

    setWeather(data)
    setLoading(false)
    console.log(data)
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Weather App</h2>
        <div className="Weather-box">
          <input onChange={(e) => setCity(e.target.value)} type="text" placeholder='Enter Your City' value={city} />
          <button type='submit'>Search</button>
        </div>
      </form>

      {loading && <p>Loadingg your Data...</p>}

      {weather && weather.cod === 200 && (
        <div className='Weather-info'>
          <h3>{weather.name},{weather.sys.country}</h3>
          <h1>{Math.round(weather.main.temp)}°C</h1>
          <p>{weather.weather[0].main}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind: {weather.wind.speed} m/s</p>

        </div>
      )}


      {weather && weather.cod !== 200 && (
        <p>{weather.message}</p>
      )}

    </div>
  )
}

export default App
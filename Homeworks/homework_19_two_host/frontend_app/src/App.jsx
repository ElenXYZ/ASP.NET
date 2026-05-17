import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [forecasts, setForecasts] = useState([])

  useEffect(() => {
    fetch('/weatherforecast')
      .then(res => res.json())
      .then(data => setForecasts(data))
  }, [])

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 40 }}>
      <h1>Weather Forecast</h1>
      <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp (°C)</th>
            <th>Temp (°F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((f, i) => (
            <tr key={i}>
              <td>{f.date}</td>
              <td>{f.temperatureC}</td>
              <td>{f.temperatureF}</td>
              <td>{f.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App

import React, { useState, useEffect } from 'react';

export function Home() {
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/weatherforecast')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => setForecast(data))
      .catch(err => setError(err.message));
  }, []);

  return (
    <div>
      <h1>Weather Forecast</h1>
      {error && <p style={{ color: '#e53e3e' }}>Error: {error}</p>}
      {!forecast && !error && <p><em>Loading...</em></p>}
      {forecast && (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Temp. (C)</th>
              <th>Temp. (F)</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {forecast.map((day, i) => (
              <tr key={i}>
                <td>{day.date}</td>
                <td>{day.temperatureC}</td>
                <td>{day.temperatureF}</td>
                <td>{day.summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

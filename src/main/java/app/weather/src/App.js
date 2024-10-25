import logo from './logo.png';
import setting from './settings.png';
import './App.css';
import { useState, useEffect } from 'react';

import Card from './component/Card';

function App() {
  const [city, setCity] = useState('Pappireddipatti');
  const [units, setUnits] = useState('celsius');
  const [country, setCountry] = useState('IN');
  const [lat, setLat] = useState(11.9145813);
  const [lon, setLon] = useState(78.346893);
  const [pincode, setPincode] = useState(636905);
  const [time, setTime] = useState(5);
  const [API_KEY, setAPI_KEY] = useState('48ec71b9474a7b839364e58751eae18b');

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [Chennai, setChennai] = useState({
    "coord": {
      "lon": 78.3784,
      "lat": 12.0021
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 299.23,
      "feels_like": 299.23,
      "temp_min": 299.23,
      "temp_max": 299.23,
      "pressure": 1013,
      "humidity": 72,
      "sea_level": 1013,
      "grnd_level": 964
    },
    "visibility": 10000,
    "wind": {
      "speed": 0.65,
      "deg": 39,
      "gust": 0.87
    },
    "rain": {
      "1h": 0.22
    },
    "clouds": {
      "all": 42
    },
    "dt": 1729485226,
    "sys": {
      "type": 1,
      "id": 9223,
      "country": "IN",
      "sunrise": 1729471005,
      "sunset": 1729513507
    },
    "timezone": 19800,
    "id": 1260681,
    "name": "Pallippatti",
    "cod": 200
  });
  const [Mumbai, setMumbi] = useState({
    "coord": {
      "lon": 78.3784,
      "lat": 12.0021
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 299.23,
      "feels_like": 299.23,
      "temp_min": 299.23,
      "temp_max": 299.23,
      "pressure": 1013,
      "humidity": 72,
      "sea_level": 1013,
      "grnd_level": 964
    },
    "visibility": 10000,
    "wind": {
      "speed": 0.65,
      "deg": 39,
      "gust": 0.87
    },
    "rain": {
      "1h": 0.22
    },
    "clouds": {
      "all": 42
    },
    "dt": 1729485226,
    "sys": {
      "type": 1,
      "id": 9223,
      "country": "IN",
      "sunrise": 1729471005,
      "sunset": 1729513507
    },
    "timezone": 19800,
    "id": 1260681,
    "name": "Pallippatti",
    "cod": 200
  });
  const [Kolkata, setkolkata] = useState({
    "coord": {
      "lon": 78.3784,
      "lat": 12.0021
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 299.23,
      "feels_like": 299.23,
      "temp_min": 299.23,
      "temp_max": 299.23,
      "pressure": 1013,
      "humidity": 72,
      "sea_level": 1013,
      "grnd_level": 964
    },
    "visibility": 10000,
    "wind": {
      "speed": 0.65,
      "deg": 39,
      "gust": 0.87
    },
    "rain": {
      "1h": 0.22
    },
    "clouds": {
      "all": 42
    },
    "dt": 1729485226,
    "sys": {
      "type": 1,
      "id": 9223,
      "country": "IN",
      "sunrise": 1729471005,
      "sunset": 1729513507
    },
    "timezone": 19800,
    "id": 1260681,
    "name": "Pallippatti",
    "cod": 200
  });
  const [Delhi, setDheli] = useState({
    "coord": {
      "lon": 78.3784,
      "lat": 12.0021
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 299.23,
      "feels_like": 299.23,
      "temp_min": 299.23,
      "temp_max": 299.23,
      "pressure": 1013,
      "humidity": 72,
      "sea_level": 1013,
      "grnd_level": 964
    },
    "visibility": 10000,
    "wind": {
      "speed": 0.65,
      "deg": 39,
      "gust": 0.87
    },
    "rain": {
      "1h": 0.22
    },
    "clouds": {
      "all": 42
    },
    "dt": 1729485226,
    "sys": {
      "type": 1,
      "id": 9223,
      "country": "IN",
      "sunrise": 1729471005,
      "sunset": 1729513507
    },
    "timezone": 19800,
    "id": 1260681,
    "name": "Pallippatti",
    "cod": 200
  });
  const [fetcData, setfetcData] = useState({
    "coord": {
      "lon": 0.0,
      "lat": 0.0
    },
    "weather": [
      {
        "id": 500,
        "main": "NA",
        "description": "NA",
        "icon": "0"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 0.00,
      "feels_like": 0.00,
      "temp_min": 0.00,
      "temp_max": 0.00,
      "pressure": 0.00,
      "humidity": 0,
      "sea_level": 0.00,
      "grnd_level": 0
    },
    "visibility": 0,
    "wind": {
      "speed": 0.00,
      "deg": 0,
      "gust": 0.00
    },
    "rain": {
      "1h": 0.00
    },
    "clouds": {
      "all": 0
    },
    "dt": 0,
    "sys": {
      "type": 0,
      "id": 0,
      "country": "NA",
      "sunrise": 0.00,
      "sunset": 0.00
    },
    "timezone": 0,
    "id": 0,
    "name": "NA",
    "cod": 0
  });

  const fetchCities = async () => {
    const promises = [
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=Chennai,IN&appid=${API_KEY}`).then(response => response.json()),
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=Mumbai,IN&appid=${API_KEY}`).then(response => response.json()),
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kolkata,IN&appid=${API_KEY}`).then(response => response.json()),
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=Delhi,IN&appid=${API_KEY}`).then(response => response.json()),
    ];

    const results = await Promise.all(promises);
    setChennai(results[0]);
    setMumbi(results[1]);
    setkolkata(results[2]);
    setDheli(results[3]);
    setLoading(false);
  }

  useEffect(() => {
    fetchCities();
  }, []);

  const handleUnitChange = (event) => {
    event.preventDefault();
    setUnits({
      option: event.target.value
    });
  }

  const fetchfetcData = async (event) => {
    event.preventDefault();
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    const data = await response.json();
    setfetcData(data);
  }

  if (loading) {
    return <div className="App"> Loading...!</div>;
  } else {
    return (
      <div className="App">
        <body>
          <nav className='logo-text'>
            <img className='logo' src={logo} alt="Logo" /> <div className="title">Weather Forecast</div>
          </nav>
          <main>


            <div className='cities'>
              <Card title={Delhi.name} body={Delhi} footer="Footer" />
              <Card title={Mumbai.name} body={Mumbai} footer="Footer" />
              <Card title={Kolkata.name} body={Kolkata} footer="Footer" />
              <Card title={Chennai.name} body={Chennai} footer="Footer" />
            </div>

            <div className='search'>

              <fieldset>
                <legend> <img className='parm-logo' src={setting} alt="setting" /><div className='text-conf-title'>DataFetching Configuration</div></legend>
                <div className='txt-gio'>
                  <label className='txt'>Lat & Long</label>
                  <input onChange={evt => setLat(evt.target.value)} value={lat} type="text" placeholder='Lat' />
                  <input onChange={evt => setLon(evt.target.value)} value={lon} type="text" placeholder='Lon' /> 
                </div>
                <label className='or-label'>Or</label>

                <div className='txt-pin'>
                  <label className='txt'>Zip Code</label>
                  <input onChange={evt => setPincode(evt.target.value)} value={pincode} type="text" placeholder='PinCode' />
                  
                </div>
                <label className='or-label'>Or</label>

                <div className='txt-city'>
                  <label className='txt'>City Name</label>
                  <input onChange={evt => setCity(evt.target.value)} value={city} type="text" placeholder='City Name' />
                  <input onChange={evt => setCountry(evt.target.value)} value={country} type="text" placeholder='Contory Code' />
                </div>

                <div className='date'>
                  <label className='txt'>Time & Units</label>
                  <input onChange={evt => setTime(evt.target.value)} value={time} type="number" placeholder='Frequency in Munites' />

                  <select onChange={handleUnitChange}>
                    <option value="select">Select Units</option>
                    <option value="Celsius"> °C</option>
                    <option value="Fahrenheit"> °F</option>
                  </select>

                </div>
                <div className='date'>
                  <div className='date'><label className='txt'>Start Date</label>
                    <input type="date" /> </div>
                  <div className='txt'> <label className='txt'>End Date</label></div>
                  <input type="date" />
                </div>

                <input className='submit' type="Submit" onClick={fetchfetcData} value="Fetch" />

                <div className='button-bar'>
                  
                </div>

              </fieldset>


              <div className='info-panel'>

                <div>
                  <div className='text-title'>
                    <img className='parm-logo' src={logo} alt="Logo" />

                    Weather Parameters of {fetcData.name}

                  </div>

                </div>

                <div >
                  <div className='text-row'>Avg Temp :{fetcData.main.temp}</div>
                </div>


                <div className='text-row'>Min Temp :{fetcData.main.temp_min}</div>
                <div className='text-row'>Max Temp :{fetcData.main.temp_max}</div>
                <div className='text-row'>Wind Speed :{fetcData.wind.speed}</div>
                <div className='text-row'>Humidity :{fetcData.main.humidity}</div>
                <div className='text-row'>Weather Condition :{fetcData.weather[0].description}</div>

              </div>

            </div>

          </main>

        </body>

      </div>
    );
  }


}

export default App;
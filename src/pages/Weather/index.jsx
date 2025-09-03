import { useState } from "react";
import WeatherCard from "../../components/WeatherCard";

function Weather() {
    const weatherData = {
        "hanoi": { city: "Hà Nội", temp: 28, weather: "Nắng", humidity: 65 },
        "hcm": { city: "TP.HCM", temp: 32, weather: "Có mây", humidity: 78 },
        "danang": { city: "Đà Nẵng", temp: 30, weather: "Mưa nhẹ", humidity: 82 }
    };
    const [weatherdata, setWeatherdata] = useState(weatherData);
    const [cities, setCities] = useState(Object.keys(weatherdata));
    const [cityName, setCityName] = useState('all');
    const allCities = Object.keys(weatherdata)

    const handleCityChange = (e) => {
        setCityName(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (cityName === "all") {
            setCities(Object.keys(weatherdata))
        } else {
            const newCities = allCities.filter(city => city === cityName);
            setCities(newCities);
        }
    }

    const handleTempChange = (item) => {
        let random = Math.floor(Math.random() * 11) - 5;
        setWeatherdata({
            ...weatherdata,
            [item]: {
                city: weatherdata[item].city,
                temp: weatherdata[item].temp + random,
                weather: weatherdata[item].weather,
                humidity: weatherdata[item].humidity,
            }
        });
        console.log(random);
        setCities(Object.keys(weatherdata));
    }

    return (
        <>
            <h1>Weather!</h1>
            <form className="weather-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="cityWeather">Choose city</label>
                    <select id="cityWeather" className="form-select" onInput={handleCityChange}>
                        <option
                            value="all"
                            key="all"
                            defaulvalue="true"
                        >
                            -- All city --
                        </option>
                        {allCities.map(item => {
                            return (
                                <option
                                    value={item}
                                    key={item}
                                >
                                    {weatherData[item].city}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div className="form-btn-control">
                    <button className="form-submit-btn">
                        Find
                    </button>
                </div>
            </form>
            <div className="weather-wrapper">
                {cities.map(item => {
                    return <WeatherCard
                        key={item}
                        city={weatherdata[item].city}
                        temp={weatherdata[item].temp}
                        weather={weatherdata[item].weather}
                        humidity={weatherdata[item].humidity}
                        handleClick={() => handleTempChange(item)}
                    />
                })}
            </div>
        </>
    )
}

export default Weather;
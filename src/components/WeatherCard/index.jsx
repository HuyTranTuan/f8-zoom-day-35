function WeatherCard({ city, temp, weather, humidity, handleClick }) {
    const getWeatherClass = (weather) => {
        switch (weather) {
            case "Nắng":
                return "sun";
            case "Có mây":
                return "cloud";
            case "Mưa nhẹ":
                return "rain";
        }
    }

    return (
        <div className="weather-card london">
            <div className={`weather-icon ${getWeatherClass(weather)}`}></div>
            <h2>{temp}</h2>
            <div className="weather-info">
                <p>{city}</p>
                <p>{humidity}</p>
            </div>
            <button
                className="weather-refesh-btn"
                onClick={handleClick}
            >
                Refesh
            </button>
        </div>
    )
}

export default WeatherCard;
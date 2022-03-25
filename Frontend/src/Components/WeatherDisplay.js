import { useFetch } from "react-async";
import config from "../Config.json";

export default function WeatherDisplay() {
    const { data, error } = useFetch(`https://api.openweathermap.org/data/2.5/weather?lat=${config.LATITUDE}&lon=${config.LONGITUDE}&appid=${config.API_KEY}`, {
        headers: { accept: "application/json" }
    });
    if (error || !data) return null;
    return (
        <>
            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" className="weather" />
        </>
    );
};


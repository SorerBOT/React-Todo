import image from "../Assets/icon-moon.svg"
import WeatherDisplay from "./WeatherDisplay"
export default function Header() {
    return (
        <div className="header">
            <h1>TO DO</h1>
            <div className="header-functionality">
                <WeatherDisplay />
                <img src={image} alt="" className="theme"></img>
            </div>
        </div>
    )
}
import Theme from "./Theme";
import { dark, light } from "../Utils/Colours";
import WeatherDisplay from "./WeatherDisplay";
export default function Header({ theme, setTheme }) {
    return (
        <div className="header">
            <h1 style={{ color: theme ? light : dark }}>TO DO</h1>
            <div className="header-functionality">
                <WeatherDisplay />
                <Theme theme={theme} setTheme={setTheme} />
            </div>
        </div>
    )
}
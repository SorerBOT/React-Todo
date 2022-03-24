import Theme from "./Theme";
import WeatherDisplay from "./WeatherDisplay";
export default function Header({ theme, setTheme }) {
    return (
        <div className="header">
            <h1>TO DO</h1>
            <div className="header-functionality">
                <WeatherDisplay />
                <Theme theme={theme} setTheme={setTheme} />
            </div>
        </div>
    )
}
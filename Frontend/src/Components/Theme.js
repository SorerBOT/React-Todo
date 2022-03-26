import lightTheme from "../Assets/icon-sun.svg";
import darkTheme from "../Assets/icon-moon.svg";
export default function Theme({ theme, setTheme }) {
    return (
        <button className="theme" onClick={() => {
            setTheme(!theme);
        }}>
            <img src={theme ? darkTheme : lightTheme} alt=""></img>
        </button >
    )
}
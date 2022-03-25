import { buttonTextColour, currentDisplayModeColour } from "../Utils/Colours";
export default function Button({ theme, displayMode, text, setDisplayMode, currentDisplayMode }) {
    return (
        <>
            <button
                className="buttons"
                style={{ color: displayMode === currentDisplayMode ? currentDisplayModeColour : buttonTextColour }}
                onClick={() => {
                    setDisplayMode(displayMode);
                }}>{text}
            </button>
        </>
    )
}
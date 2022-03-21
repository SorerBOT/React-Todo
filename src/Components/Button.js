export default function Button({ displayMode, text, setDisplayMode, currentDisplayMode }) {
    return (
        <>
            <button
                className="buttons"
                style={{ color: displayMode === currentDisplayMode ? "hsl(220, 98%, 61%)" : "hsl(233, 14%, 35%)" }}
                onClick={() => {
                    setDisplayMode(displayMode);
                }}>{text}</button>
        </>
    )
}
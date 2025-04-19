import "../../../styles/components/ToggleButton.css"

const ToggleButton = ({labelText, toggle, handleToggle}) => {
    return (
        <div className="toggle-container">
            <span className="toggle-label">{labelText}</span>
            <label className="switch">
                <input type="checkbox" checked={toggle} onChange={handleToggle} />
                <span className="slider"></span>
            </label>
        </div>
    )
}

export default ToggleButton;
// CSS is loaded for its side effects; the project does not provide CSS module typings.
import "../../styles/components/ToggleButton.css"
import type { ChangeEvent } from "react"

type ToggleButtonProps = {
    labelText: string
    toggle: boolean
    handleToggle: (event: ChangeEvent<HTMLInputElement>) => void
}

const ToggleButton = ({labelText, toggle, handleToggle}: ToggleButtonProps) => {
    return (
        <div className="toggle-container">
            <span className="toggle-label">{labelText}</span>
            <label className="switch" aria-label={labelText}>
                <input type="checkbox" checked={toggle} onChange={handleToggle} />
                <span className="slider"></span>
            </label>
        </div>
    )
}

export default ToggleButton;
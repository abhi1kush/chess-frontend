import React, {useState} from "react"
import PropTypes from "prop-types";

const ToggleButton= ({
    initialText,
    alternateText,
    onClickHandler, // The additional click handler prop
  }) => {
    const [buttonText, setButtonText] = useState(initialText);
  
    const handleClick = () => {
      setButtonText((prevText) =>
        prevText === initialText ? alternateText : initialText
      );
      if (onClickHandler) {
        onClickHandler(); // Call the additional click handler
      }
    };
  
    return <button onClick={handleClick} className="action-button">{buttonText}</button>;
  };
  
  
  export default ToggleButton;

  ToggleButton.prototype = {
  initialText: PropTypes.string.isRequired,
  alternateText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
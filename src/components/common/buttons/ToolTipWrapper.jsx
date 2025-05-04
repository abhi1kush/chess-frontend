import React, { useState } from "react";
import "../../../styles/components/ToolTipWrapper.css"; // Import the CSS file

function ToolTipWrapper({component, message}) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
    setTimeout(() => setShow(false), 2000);
  };

  return (
    <div className="toast-wrapper">
      <button onClick={handleClick} className="toast-button">
        {component}
      </button>
      {show && (
        <div className="toast-message">
          {message}
        </div>
      )}
    </div>
  );
}

export default ToolTipWrapper;
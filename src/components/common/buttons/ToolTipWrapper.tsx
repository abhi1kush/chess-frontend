import React, { useState } from "react";
// The bundler loads this stylesheet; TypeScript does not have declarations for CSS imports.
// @ts-ignore
import "../../../styles/components/ToolTipWrapper.css";

function ToolTipWrapper(
  {component,message}: 
  {readonly component: React.ReactNode; readonly message: React.ReactNode;}) 
{
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
    setTimeout(() => setShow(false), 2000);
  };

  return (
    <div className="toast-wrapper">
      <button type="button" onClick={handleClick} className="toast-button">
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
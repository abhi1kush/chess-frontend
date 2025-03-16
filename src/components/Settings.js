import React, { useState, useRef, useEffect } from "react";
import "../styles/Settings.css";

const Settings = ({ theme, setTheme, enableSound, setEnableSound }) => {
  const [isOpen, setIsOpen] = useState(false);
  const settingsRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="settings-container" ref={settingsRef}>
      <button className="settings-button" onClick={toggleDropdown}>
        ⚙ Settings
      </button>

      {isOpen && (
        <div className="settings-dropdown">
          <div className="dropdown-item">
            <h4>Theme:</h4>
            <select onChange={(e) => setTheme(e.target.value)} value={theme}>
              <option value="classic">Classic</option>
              <option value="wood">Wood</option>
              <option value="marble">Marble</option>
              <option value="dark">Dark Mode</option>
            </select>
          </div>
          <div className="dropdown-item">
            <label>
              <input type="checkbox" checked={enableSound} onChange={(e) => setEnableSound(e.target.checked)} />
              Enable Move Sound
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;

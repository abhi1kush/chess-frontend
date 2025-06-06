// src/components/Settings.js
import React from 'react';
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setTheme, setSound } from '../../redux/actions/settingsActions';
import "../../styles/components/settings.css"

const Settings = React.memo(() => {
  const dispatch = useDispatch();
  const { theme, enableSound } = useSelector((state) => state.settings);
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

  const handleThemeChange = (event) => {
    dispatch(setTheme(event.target.value));
  };

  const handleSoundChange = (event) => {
    dispatch(setSound(event.target.checked));
  };
  console.log("render setting");
  return (
    <div className="settings-container" ref={settingsRef}>
      <button id="settings-button" className="action-button" onClick={toggleDropdown}>
        ⚙️ <span className='settings-label'> Settings </span>
      </button>

      {isOpen && (
      <div className="settings-dropdown">
        <div className="dropdown-item">
          <label htmlFor="themeSelect">Theme</label>
          <select id="themeSelect" value={theme} onChange={handleThemeChange}>
            <option value="default">Default</option>
            <option value="classic">Green</option>
            <option value="marble">Marble</option>
            <option value="wood">Wood</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      <div className="checkbox-item"> 
        <label htmlFor="soundToggle">Sound</label>
        <input
          type="checkbox"
          id="soundToggle"
          checked={enableSound}
          onChange={handleSoundChange}
        />
      </div>
    </div>)}
    </div>
  );
});

export default Settings;
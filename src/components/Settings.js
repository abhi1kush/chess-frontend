import React from "react";

const Settings = ({ theme, setTheme, enableSound, setEnableSound }) => {
  return (
    <div className="settings">
      <button className="settings-button" onClick={() => setTheme((prev) => !prev)}>⚙ Settings</button>
      <div className="settings-menu">
        <h4>Select Theme:</h4>
        <select onChange={(e) => setTheme(e.target.value)} value={theme}>
          <option value="classic">Classic</option>
          <option value="wood">Wood</option>
          <option value="marble">Marble</option>
          <option value="dark">Dark Mode</option>
        </select>
        <label>
          <input type="checkbox" checked={enableSound} onChange={(e) => setEnableSound(e.target.checked)} />
          Enable Move Sound
        </label>
      </div>
    </div>
  );
};

export default Settings;

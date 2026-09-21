// src/components/Settings.js
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme, setSound, setPlayMovesDuringReview } from '../../redux/actions/settingsActions';
import { toggleEngine } from '../../redux/actions/engineActions';
import type { RootState } from '../../redux/reducers/reducers';
import "../../styles/components/settings.css";

type SettingsTab = 'appearance' | 'engine';

const Settings = React.memo(() => {
  const dispatch = useDispatch();
  const { theme, enableSound, playMovesDuringReview } = useSelector(
    (state: RootState) => state.settings,
  );
  const engineEnabled = useSelector((state: RootState) => state.engine.enabled);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<SettingsTab>('appearance');
  const settingsRef = useRef<HTMLDivElement | null>(null);
  const playThrough = playMovesDuringReview !== false;

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setTheme(event.target.value));
  };

  const handleSoundChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSound(event.target.checked));
  };

  return (
    <div className="settings-container" ref={settingsRef}>
      <button
        id="settings-button"
        type="button"
        className={`top-icon-button top-icon-button--with-tooltip${isOpen ? ' top-icon-button--active' : ''}`}
        onClick={toggleDropdown}
        data-tooltip="Settings"
        aria-label="Settings"
      >
        ⚙️
      </button>

      {isOpen && (
      <div className="settings-dropdown">
        <div className="settings-tabs" role="tablist" aria-label="Settings sections">
          <button
            type="button"
            role="tab"
            id="settings-tab-appearance"
            aria-selected={activeTab === 'appearance'}
            className={`settings-tab${activeTab === 'appearance' ? ' settings-tab--active' : ''}`}
            onClick={() => setActiveTab('appearance')}
          >
            Appearance
          </button>
          <button
            type="button"
            role="tab"
            id="settings-tab-engine"
            aria-selected={activeTab === 'engine'}
            className={`settings-tab${activeTab === 'engine' ? ' settings-tab--active' : ''}`}
            onClick={() => setActiveTab('engine')}
          >
            Engine & Review
          </button>
        </div>

        {activeTab === 'appearance' && (
          <div className="settings-tab-panel" role="tabpanel" aria-labelledby="settings-tab-appearance">
            <div className="dropdown-item">
              <label htmlFor="themeSelect">Theme</label>
              <select id="themeSelect" value={theme} onChange={handleThemeChange}>
                <option value="default">Default</option>
                <option value="classic">Green</option>
                <option value="marble">Marble</option>
                <option value="wood">Wood</option>
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
          </div>
        )}

        {activeTab === 'engine' && (
          <div className="settings-tab-panel" role="tabpanel" aria-labelledby="settings-tab-engine">
            <div className="checkbox-item">
              <label htmlFor="engineToggle">Chess engine</label>
              <input
                type="checkbox"
                id="engineToggle"
                checked={engineEnabled}
                onChange={() => dispatch(toggleEngine())}
              />
            </div>
            <div className="checkbox-item">
              <label htmlFor="reviewPlayThroughToggle">Play moves while reviewing</label>
              <input
                type="checkbox"
                id="reviewPlayThroughToggle"
                checked={playThrough}
                onChange={(event) => dispatch(setPlayMovesDuringReview(event.target.checked))}
              />
            </div>
            <p className="settings-hint">
              When off, Review analyzes the whole PGN without stepping the board move by move.
            </p>
          </div>
        )}
    </div>)}
    </div>
  );
});

export default Settings;

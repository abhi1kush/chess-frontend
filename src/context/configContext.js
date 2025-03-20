import React, { createContext, useContext, useState, useEffect } from "react";
import CONFIG from "../config";

const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {

   // Load settings from LocalStorage (or use defaults)
   const getStoredConfig = (key, defaultValue) => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
  };

   const [theme, setTheme] = useState(() => getStoredConfig(CONFIG.THEME_KEY, CONFIG.THEME));
   const [enableSound, setEnableSound] = useState(() => getStoredConfig(CONFIG.ENABLE_SOUND_KEY, CONFIG.ENABLE_SOUND));
   const [timerDuration, setTimerDuration] = useState(() => getStoredConfig(CONFIG.TIMER_DURATION_KEY, CONFIG.TIMER_DURATION))
   const [isFlipped, setIsFlipped] = useState(() => getStoredConfig(CONFIG.IS_FLIPPED_KEY, CONFIG.IS_FLIPPED));

    // Save settings to LocalStorage when they change
    useEffect(() => localStorage.setItem(CONFIG.THEME_KEY, JSON.stringify(theme)), [theme]);
    useEffect(() => localStorage.setItem(CONFIG.ENABLE_SOUND_KEY, JSON.stringify(enableSound)), [enableSound]);
    useEffect(() => localStorage.setItem(CONFIG.TIMER_DURATION_KEY, JSON.stringify(timerDuration)), [timerDuration]);
    useEffect(() => localStorage.setItem(CONFIG.IS_FLIPPED_KEY, JSON.stringify(isFlipped)), [isFlipped]);

  return (
    <ConfigContext.Provider value={{ theme, setTheme, enableSound, setEnableSound , timerDuration, setTimerDuration, isFlipped, setIsFlipped}}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => useContext(ConfigContext);
import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import CONFIG from "../config";

type ConfigContextValue = {
  theme: typeof CONFIG.THEME;
  setTheme: React.Dispatch<React.SetStateAction<typeof CONFIG.THEME>>;
  enableSound: typeof CONFIG.ENABLE_SOUND;
  setEnableSound: React.Dispatch<React.SetStateAction<typeof CONFIG.ENABLE_SOUND>>;
  timerDuration: typeof CONFIG.TIMER_DURATION;
  setTimerDuration: React.Dispatch<React.SetStateAction<typeof CONFIG.TIMER_DURATION>>;
  isFlipped: typeof CONFIG.IS_FLIPPED;
  setIsFlipped: React.Dispatch<React.SetStateAction<typeof CONFIG.IS_FLIPPED>>;
};

const ConfigContext = createContext<ConfigContextValue | undefined>(undefined);

export const ConfigProvider = ({ children }: { children: React.ReactNode }) => {

   // Load settings from LocalStorage (or use defaults). Safe against invalid/corrupted JSON
   // (e.g. raw "system" or other non-JSON values that break JSON.parse).
   const getStoredConfig = <T,>(key: string, defaultValue: T): T => {
    try {
      const storedValue = localStorage.getItem(key);
      
      if (storedValue === null || storedValue === undefined) {
        return defaultValue;
      }
      const parsed: unknown = JSON.parse(storedValue);
      return parsed !== undefined ? (parsed as T) : defaultValue;
    } catch {
      return defaultValue;
    }
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

  const contextValue = useMemo(
    () => ({
      theme,
      setTheme,
      enableSound,
      setEnableSound,
      timerDuration,
      setTimerDuration,
      isFlipped,
      setIsFlipped,
    }),
    [theme, enableSound, timerDuration, isFlipped]
  );

  return (
    <ConfigContext.Provider value={contextValue}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error("useConfig must be used within ConfigProvider");
  }
  return context;
};
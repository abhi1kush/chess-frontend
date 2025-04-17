import React, { useEffect, useState } from "react";

const DarkThemeToggleButton = () => {
  const [isDarkThemeApplied, setIsDarkThemeApplied] = useState(document.body.classList.contains('dark-theme')); 

  const toggleTheme = () => {
    document.body.classList.toggle("dark-theme");
    setIsDarkThemeApplied(!isDarkThemeApplied);
  };

  const isNight = () => {
    const now = new Date();
    const hours = now.getHours(); // 0 to 23
    return (hours < 6 || hours > 18) 
  }

  useEffect(() => {
    if (isNight() != isDarkThemeApplied) {
      toggleTheme();
    } 
  }, []);

  return (
    <button onClick={toggleTheme} className="theme-toggle-btn">
      { isDarkThemeApplied ?  "☀️" : "🌙" }
    </button>
  );
};

export default DarkThemeToggleButton;
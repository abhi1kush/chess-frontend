import React from "react";

const DarkThemeToggleButton = () => {
  const toggleTheme = () => {
    document.body.classList.toggle("dark-theme");
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle-btn">
      🌙
    </button>
  );
};

export default DarkThemeToggleButton;
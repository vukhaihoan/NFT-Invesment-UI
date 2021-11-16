//ThemeToggle.js
import React from "react";

import { ThemeContext } from "contexts/ThemeContext";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className=""
        >
          change to light
        </button>
      ) : (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className=""
        >
          change to dark
        </button>
      )}
    </div>
  );
};

export default Toggle;

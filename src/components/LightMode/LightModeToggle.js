import React, { useState } from "react";
import "./LightMode.css";

function LightModeToggle() {
  const getTheme = () => {
    return JSON.parse(localStorage.getItem("LightMode")) || false;
  };

  const [lightMode, setLightMode] = useState(getTheme());

  React.useEffect(() => {
    localStorage.setItem("LightMode", JSON.stringify(lightMode));
    // apply the dark theme by adding a dark class to the body element
    if (localStorage.getItem("LightMode") == "true") {
      document.body.classList.add("light");
      localStorage.setItem("LightMode", lightMode);
    } else {
      document.body.classList.remove("light");
      localStorage.setItem("LightMode", lightMode);
    }
  }, [lightMode]);

  return (
    <>
      <label className="header vm__checkbox my-2">
      <input
      type="checkbox"
      id="switch"
      onChange={() => setLightMode(!lightMode)}
      checked={lightMode ? 0 : 1}
      />
      <div className="slider"></div>
      </label>
    </>
  );
}

export default LightModeToggle;

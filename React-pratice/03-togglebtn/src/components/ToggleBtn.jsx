import { useState } from "react";
import "./toggle.css";

function ToggleBtn() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div
      className={`toggle-btn ${isOn ? "turnon" : "turnoff"}`}
      onClick={handleToggle}
    >
      <div className={`toggle ${isOn ? "active" : "off"}`}>
        <span className="toggle-label">{isOn ? "OFF" : "ON"}</span>
      </div>
    </div>
  );
}

export default ToggleBtn;

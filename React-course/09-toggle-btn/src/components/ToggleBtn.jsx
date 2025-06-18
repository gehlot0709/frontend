import { useEffect, useState } from "react";
import "./toggle.css";

export default function ToggleBtn() {
  const [ison, setIson] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = ison ? "black" : "white";
  }, [ison]);

  return (
    <div className="toggle-btn" onClick={() => setIson(!ison)}>
      <div className={`toggle ${ison ? "on" : "off"}`}>
        <i className={`fa-solid ${ison ? "fa-moon" : "fa-sun"}`}></i>
      </div>
    </div>
  );
}

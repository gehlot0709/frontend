import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [data, setData] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Please enter your username"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </form>
      <div className="container">
        <h2>Logo</h2>
        <nav>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          {/* Optional link */}
          <NavLink to={`/user/${data}`}>User</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;

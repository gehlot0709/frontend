import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="flex align-center">
            <h2>Logo</h2>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">about</Link>
              <Link to="/contact">contact</Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

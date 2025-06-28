import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;

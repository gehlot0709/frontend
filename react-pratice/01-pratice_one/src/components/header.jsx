export default function Header() {
  return (
    <header>
      <div className="container bg-secondary">
        <div className="d-flex align-items-center py-1">
          <h2 className="text-warning text-uppercase">Logo</h2>
          <nav className="ms-auto">
            <ul className="d-flex align-items-center my-0">
              <li className="me-5">
                <a href="#" className="text-light">Home</a>
              </li>
              <li className="me-5">
                <a href="#" className="text-light">About</a>
              </li>
              <li className="me-5">
                <a href="#" className="text-light">Contact</a>
              </li>
            </ul>
          </nav>
           <a href="" className="btn btn-primary px-5">login</a>
        </div>
      </div>
    </header>
  );
}

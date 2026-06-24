import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="nav">
        <div className="nav-links">
          <Link to="/" className="logo">
            <h1>PRIMEFLIX</h1>
          </Link>
          <Link to="/meus-filmes" className="nav-link">
            <h2>MEUS FILMES</h2>
          </Link>
        </div>
      </nav>
    </header>
  );
}
export default Header;

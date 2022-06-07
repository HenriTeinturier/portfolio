import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/Navbar.scss';
import ReorderIcon from '@material-ui/icons/Reorder';

function NavBar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  // permet de connaître la location(url) actuelle.
  const location = useLocation();

  // Action mise en place à chaque changement d'URL.(clic sur un bouton du menu burger)
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <nav
      className="navbar"
      id={expandNavbar ? 'open' : 'close'}
    >
      <div className="toggleButton">
        <button
          type="button"
          onClick={() => {
            setExpandNavbar(!expandNavbar);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link
          to="/"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        > Home
        </Link>
        {/* <Link to="/"><a href="#skills2"> Skills </a></Link> */}
        <a href="#skills"> Skills </a>
        {/* <Link to="/projets"> Projets </Link> */}
        <a href="#projets"> Projets </a>
        {/* <Link to="/experience"> Experience </Link> */}
        <a href="#experience"> Experience </a>
      </div>
    </nav>
  );
}

export default NavBar;

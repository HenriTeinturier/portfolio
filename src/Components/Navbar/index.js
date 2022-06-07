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
        <Link to="/"> Home </Link>
        <Link to="/"> Skills </Link>
        <Link to="/projets"> Contact </Link>
        <Link to="/projets"> Projets </Link>
        <Link to="/projets">Testimonial </Link>
        <Link to="/experience"> Experience </Link>
      </div>
    </nav>
  );
}

export default NavBar;

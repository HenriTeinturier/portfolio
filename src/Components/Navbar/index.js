import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
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
        <Link
          to="/#skills"
        > Skills
        </Link>
        <Link
          to="/#projets"
        > Projets
        </Link>
        {/* <Link to="/experience"> Experience </Link> */}
        <Link
          to="/#experience"
        > Experience
        </Link>
        <Link
          to="/#contact"
        > Contact
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;

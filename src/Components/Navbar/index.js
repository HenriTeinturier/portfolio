import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import '../../styles/Navbar.scss';
import ReorderIcon from '@material-ui/icons/Reorder';

function NavBar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);
  // permet de connaître la location(url) actuelle.
  const location = useLocation();

  window.addEventListener('scroll', () => {
    if (window.pageYOffset < 200) {
      setIsNavbarTransparent(true);
    }
    else {
      setIsNavbarTransparent(false);
    }
  });

  // TODO plus necessaire car tout est sur la page home?
  // Action mise en place à chaque changement d'URL.(clic sur un bouton du menu burger)
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <nav
      className={isNavbarTransparent ? 'navbar' : 'navbar opacity1'}
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

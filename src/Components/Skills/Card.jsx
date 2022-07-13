// import react from '../../logos/react.png';
// import javascript from '../../logos/javascript.png';
import PropTypes from 'prop-types';

function Card({ logo, background, label }) {
  return (
    <div className="card">
      <div className="card__header" />
      <div className="card__main">
        <img src={logo} alt="" />
      </div>
      <div className="card__footer" style={{ backgroundColor: background }}>
        {label}
      </div>
    </div>
  );
}

Card.propTypes = {
  logo: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Card;

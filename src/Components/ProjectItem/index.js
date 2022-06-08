import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProjectItem({ image, name, idx }) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate(`/projet/${idx}`);
        window.scrollTo(0, 0);
      }}
    >
      {/*  div for background projet */}
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bgImage"
      />
      <h1>{name}</h1>
    </div>
  );
}

ProjectItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
};

export default ProjectItem;

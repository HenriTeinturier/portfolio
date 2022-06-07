import { useNavigate } from 'react-router-dom';

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

export default ProjectItem;

import "../styles/ProjectCard.css";
import PropTypes from "prop-types";

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
};

export default function ProjectCard(props) {
  const cardStyle = {
    backgroundImage: `url(${props.img})`,
    backgroundSize: "cover",
  };

  return (
    <div>
      <div className="ProjectCard" style={cardStyle}>
        <h3>{props.title}</h3>
      </div>
    </div>
  );
}

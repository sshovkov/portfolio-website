import "../styles/Projects.css";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import BlockBuilderImg from "../assets/block-builder.png";
import RaspberryPiImg from "../assets/raspberry-pi.jpeg";

export default function Projects() {
  return (
    <div>
      <SectionTitle title="projects" />
      <div className="Projects">
        <ProjectCard title="Three.js Block Builder" img={BlockBuilderImg} />
        <ProjectCard title="Raspberry Pi Train Time" img={RaspberryPiImg} />
        <ProjectCard title="Mini ML Library" />
      </div>
    </div>
  );
}

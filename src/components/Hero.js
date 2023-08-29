import "../styles/Hero.css";
import placeholderImage from "../assets/placeholder.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Hero() {
  return (
    <div className="Hero">
      <img
        src={placeholderImage}
        alt="Placeholder Animation"
        className="AnimationImage"
      />
      <h1>Sophia Shovkovy</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="SocialIcons">
        <button className="EmailButton">Email me</button>
        <a
          href="https://github.com/sshovkov"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className="GitHubIcon" />
        </a>
        <a
          href="https://x.com/sophiashovkovy?s=21&t=6bsK3GqIfBdX7dOOeyOaOw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon className="TwitterIcon" />
        </a>
        <a
          href="https://linkedin.com/in/sophia-shovkovy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon className="LinkedInIcon" />
        </a>
      </div>
    </div>
  );
}

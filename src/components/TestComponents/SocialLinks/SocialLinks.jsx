import IconButton from "../../IconButton/IconButton";
import "./SocialLinks.css";
import links from "./links.js";

function SocialLinks() {
  return (
    <div className="social-links__container">
      {links.map((link) => (
        <a href={link.url} target="_blank" key={link.name}>
          <IconButton>{<img src={link.logo} alt={link.name} />}</IconButton>
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;

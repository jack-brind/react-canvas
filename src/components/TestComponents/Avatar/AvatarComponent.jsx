import "./Avatar.css";
import { User } from "lucide-react";

const Avatar = ({
  size = "lg",
  intent = "fallback",
  colour = "grey",
  initials = "JB",
  photo = "",
  logo = "",
  hasStatus = false,
  className = "",
}) => {
  const renderAvatarContent = () => {
    switch (intent) {
      case "initials":
        return <span className="avatar__initials">{initials}</span>;

      case "photo":
        return <img src={photo} alt="User avatar" className="avatar__image" />;

      case "logo":
        return <img src={logo} alt="Logo" className="avatar__image" />;

      case "fallback":
      default:
        return <User className={`avatar-icon--${size}`} />;
    }
  };

  return (
    <div
      className={`avatar avatar--${size} avatar--${colour} avatar--${intent} ${className} ${intent === "photo" ? "clip" : ""}`}
    >
      {renderAvatarContent()}

      {hasStatus && <div className="avatar__status"></div>}
    </div>
  );
};

export default Avatar;

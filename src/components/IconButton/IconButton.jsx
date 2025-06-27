import "./IconButton.css";

function IconButton({
  size = "md",
  type = "ghost",
  children,
  onClick,
  className,
  isMuted,
}) {
  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      className={`icon-button icon-button__${type} icon-button__${size} ${className || ""} ${isMuted && "muted__icon"}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default IconButton;

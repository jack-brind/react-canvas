import "./IconButton.css";

function IconButton({
  size = "md",
  type = "ghost",
  icon,
  onClick,
  disabled = false,
  ariaLabel,
  className,
  isMuted,
  ...props
}) {
  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      className={`icon-button icon-button__${type} icon-button__${size} ${className || ""} ${isMuted && "muted__icon"} ${disabled && "disabled"} `}
      onClick={handleClick}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {icon}
    </button>
  );
}

export default IconButton;

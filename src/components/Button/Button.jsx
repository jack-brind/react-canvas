import "./Button.css";

function Button({
  size = "md",
  type = "default",
  leadingIcon,
  trailingIcon,
  label,
  onClick,
  disabled,
  className,
  ariaLabel,
  fullWidth,
  primaryColour = "var(--colour-brand)",
}) {
  // Handle click events
  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
  };

  const buttonStyle =
    type === "primary" && primaryColour
      ? { backgroundColor: primaryColour }
      : {};

  return (
    <button
      className={`Button Button__${type} Button__${size} ${className || ""} ${disabled && "disabled"} ${fullWidth && "full-width"} ${type === "primary" && primaryColour ? primaryColour : ""}`}
      style={buttonStyle}
      onClick={handleClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      <div className="Button__content">
        {leadingIcon && (
          <span
            className={`Button__leading-icon Button__leading-icon--${size}`}
          >
            {leadingIcon}
          </span>
        )}
        <span className={`Button__label--${size}`}>{label}</span>
        {trailingIcon && (
          <span
            className={`Button__trailing-icon Button__trailing-icon--${type}`}
          >
            {trailingIcon}
          </span>
        )}
      </div>
    </button>
  );
}

export default Button;

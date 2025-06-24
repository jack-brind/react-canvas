import "./IconButton.css";

function IconButton({ size = "md", type = "ghost", children, onClick }) {
  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      className={`icon-button__${type} icon-button__${size}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default IconButton;

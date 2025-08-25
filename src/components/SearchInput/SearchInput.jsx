import "./SearchInput.css";
import { Search } from "lucide-react";
import Cross from "../../assets/icons/Cross";
import IconButton from "../IconButton/IconButton.jsx";

function SearchInput({
  searchTerm,
  onSearchChange,
  className,
  placeholder = "Search...",
  width = "100%",
}) {
  const searchStyle = {
    width: "100%",
    display: "flex",
    height: "32px",
    zIndex: "0",
    alignItems: "center",
    padding: "0.4rem 0.5rem 0.4rem 1.75rem",
    background: "var(--background-component-default)",
    borderRadius: "var(--radius-md)",
  };

  const containerStyle = {
    width: width,
  };

  function handleClearTerm() {
    onSearchChange("");
  }

  return (
    <div className="search-container" style={containerStyle}>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearchChange(e.target.value)}
        value={searchTerm}
        style={searchStyle}
        className={className}
      />
      <Search className="search-icon" />
      {searchTerm.length > 0 && (
        <IconButton
          onClick={handleClearTerm}
          size="xs"
          isMuted
          className="clear-icon"
          icon={<Cross className="clear-icon-svg" onClick={handleClearTerm} />}
        />
      )}
    </div>
  );
}
export default SearchInput;

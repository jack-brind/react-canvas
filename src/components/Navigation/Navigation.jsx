import NavigationItem from "../NavigationItem/NavigationItem";
import pages from "../../pages";
import "./Navigation.css";
import { useState } from "react";
import SearchInput from "../SearchInput/SearchInput";

function Navigation({ currentPage, onPageChange }) {
  const [term, setTerm] = useState("");

  const filteredItems = pages.filter((item) =>
    item.caption.toLowerCase().includes(term.toLowerCase()),
  );

  return (
    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          <img src="/react.svg" className="nav__logo--image" />
          <span className="nav__logo--name">React Canvas</span>
        </div>
        <SearchInput
          searchTerm={term}
          onSearchChange={setTerm}
          placeholder="Filter..."
        />
      </div>

      <div className="nav__items">
        {filteredItems < 1 ? (
          <span className="no-nav-items">No matching items</span>
        ) : (
          filteredItems.map((page) => {
            const IconComponent = page.icon;
            return (
              <button
                key={page.link}
                onClick={() => onPageChange(page.link)}
                className={`nav-links ${currentPage === page.link ? "active" : ""}`}
              >
                <IconComponent size={16} />
                {page.caption}
              </button>
            );
          })
        )}
      </div>
    </nav>
  );
}

export default Navigation;

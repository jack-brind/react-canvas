import NavigationItem from "../NavigationItem/NavigationItem";
import pages from "../../pages";
import "./Navigation.css";

function Navigation({ currentPage, onPageChange }) {
  return (
    <nav>
      <div className="nav__logo">
        <img src="/react.svg" className="nav__logo--image" />
        <span className="nav__logo--name">React Canvas</span>
      </div>

      <div className="nav__items">
        {pages.map((page) => {
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
        })}
      </div>
    </nav>
  );
}

export default Navigation;

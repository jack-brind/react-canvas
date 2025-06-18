import "./NavBar.css";
import PageContent from "../../PageContent/PageContent";
import pages from "../../../pages.js";
import { useState } from "react";
import Avatar from "../Avatar/AvatarComponent.jsx";
import navItems from "./NavBar.js";
import { Menu, X } from "lucide-react";

// Segment to choose the breakpoint - to be moved into separate file at some point
function Segments() {
  return (
    <>
      <h3>Container size</h3>
      <div className="segment">
        <button className="segment-control__option segment-control__option--active">
          Desktop / tablet
        </button>
        <button className="segment-control__option">Smartphone</button>
        <button className="segment-control__option">Manual</button>
      </div>
    </>
  );
}

// Avatar, name and job title
function Home() {
  const handleClick = (e) => {
    e.preventDefault();
    alert("Home button clicked");
  };

  return (
    <a href="#" onClick={handleClick} className="navigation__home">
      <Avatar size="sm" photo="/headshot.png" intent="photo" />
      <span className="nav__name">Jack Brind</span>
      <span className="nav__title">Senior Product Designer</span>
    </a>
  );
}

// Links container
function Links() {
  return (
    <ul className="navigation__items">
      {navItems.map((item) => (
        <Link key={item.label} label={item.label} link={item.link} />
      ))}
    </ul>
  );
}

// Link component
function Link({ label, link }) {
  const handleClick = (e) => {
    e.preventDefault();
    alert(`${link} clicked`);
  };
  return (
    <li>
      <a className="navigation__links" href="#" onClick={handleClick}>
        {label}
      </a>
    </li>
  );
}

// Entire navigation component
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="nav__container">
      <div className="navigation">
        <Home />
        <div className="navigation__links-container">
          <Links />
          <button className="navigation__toggle" onClick={handleMenuToggle}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {/* <div className="navigation__mobile">
        <Links />
      </div> */}
    </div>
  );
}

// React canvas container
function NavigationBar() {
  const currentPageData = pages.find((page) => page.link === "navBar");

  return (
    <>
      <PageContent
        className="nav-page"
        icon={<currentPageData.icon size={32} />}
        title={currentPageData.caption}
        subtitle="This component forms the basis of the new NavBar component in my new React / Next.js based portfolio site in the future. This will have options to change the breakpoint sizes and have fully responsive behaviour on mobile. ⚠️ Absolutely stumped by container queries on this one. I'll come back to it."
      />
      <Segments />
      <div className="breakpoint-harness">
        <div className="navbar-container">
          <Navigation />
        </div>
      </div>
    </>
  );
}

export default NavigationBar;

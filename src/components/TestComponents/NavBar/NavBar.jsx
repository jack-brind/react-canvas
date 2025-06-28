import "./NavBar.css";
import PageContent from "../../PageContent/PageContent";
import pages from "../../../pages.js";
import { useState } from "react";
import Avatar from "../Avatar/AvatarComponent.jsx";
import navItems from "./NavBar.js";
import { Menu, X, Smartphone, Tablet, Laptop, Monitor } from "lucide-react";
import SocialLinks from "../SocialLinks/SocialLinks";
import { Segment, SegmentOption } from "../../Segment/Segment";
import { Squeeze as Hamburger } from "hamburger-react";

// React canvas container
export default function NavigationBar() {
  const currentPageData = pages.find((page) => page.link === "navBar");
  const [selectedOption, setSelectedOption] = useState("full");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Test breakpoint harness widths
  const breakpointContainer = {
    width: `${selectedOption === "full" ? "100%" : "400px"}`,
  };

  const handleBreakpointChange = (option) => {
    setSelectedOption(option);
    if (option === "full") {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <PageContent
        className="nav-page"
        icon={<currentPageData.icon size={32} />}
        title={currentPageData.caption}
        subtitle="This component forms the basis of the new NavBar component in my new React / Next.js based portfolio site in the future. This will have options to change the breakpoint sizes and have fully responsive behaviour on mobile."
      />
      <h3>Breakpoints</h3>
      <div className="breakpoint-sizes">
        <Segment>
          <SegmentOption
            icon={<Monitor size={12} />}
            text="Desktop"
            active={selectedOption === "full"}
            onClick={() => handleBreakpointChange("full")}
          />
          <SegmentOption
            icon={<Smartphone size={12} />}
            text="Mobile"
            active={selectedOption === "mobile"}
            onClick={() => handleBreakpointChange("mobile")}
          />
        </Segment>
      </div>

      <div style={breakpointContainer}>
        <div className="navbar-container">
          <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </div>
      <div style={breakpointContainer}>
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    </>
  );
}

// Entire navigation component
function Navigation({ isMenuOpen, setIsMenuOpen }) {
  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <img
        src="/cities/tokyo.jpg"
        style={{
          height: "180px",
          width: "400px",
          margin: "0px",
          position: "absolute",
          display: "none",
        }}
      />
      <div className="nav__container">
        <div className="navigation">
          <Home />
          <div className="navigation__links--container">
            <Links />
            <button className="navigation__toggle" onClick={handleMenuToggle}>
              <Hamburger
                toggled={isMenuOpen}
                toggle={setIsMenuOpen}
                size={16}
                duration={0.15}
                color="var(--text-muted)"
                rounded
              />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`navigation__links--container-mobile ${isMenuOpen ? "open" : ""}`}
      >
        <Links />
      </div>
    </>
  );
}

// Avatar, name and job title
function Home() {
  const handleGoToHome = (e) => {
    alert("Home button clicked");
    e.preventDefault();
  };

  return (
    <a href="/" onClick={handleGoToHome} className="navigation__home">
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
  const handleLinkClick = (e) => {
    e.preventDefault();
    alert(`${link} clicked`);
  };
  return (
    <li>
      <a className="navigation__links" href="#" onClick={handleLinkClick}>
        {label}
      </a>
    </li>
  );
}

function Footer() {
  return (
    <div className="footer">
      <Copyright />
      <SocialLinks />
    </div>
  );
}

function Copyright() {
  const currentYear = new Date().getFullYear();

  return <p className="copyright">&copy; Jack Brind {currentYear}</p>;
}

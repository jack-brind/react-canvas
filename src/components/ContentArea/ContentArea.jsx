import "./ContentArea.css";
import { useEffect } from "react";
import EventCountdown from "../TestComponents/EventCountdown/EventCountdown";
import ProfileCard from "../TestComponents/ProfileCard/ProfileCard";
import HouseCards from "../TestComponents/HouseCards/HouseCards";
import ShoppingList from "../TestComponents/ShoppingList/ShoppingList.jsx";
import NavigationBar from "../TestComponents/NavBar/NavBar.jsx";
import Tabs from "../TestComponents/Tabs/Tabs";
import { Avatars } from "../TestComponents/Avatar/Avatar.jsx";
import Accordion from "../TestComponents/Accordion/Accordion";
import Checkout from "../TestComponents/Checkout/Checkout";
import WeatherData from "../TestComponents/Weather/Weather";
import CaseStudyHeaderComponent from "../TestComponents/CaseStudyHeader/CaseStudyHeader";
import PricingComponent from "../TestComponents/Pricing/Pricing";
import UserFeedbackComponent from "../TestComponents/UserFeedback/UserFeedback";
import StackedAvatarComponent from "../TestComponents/StackedAvatars/StackedAvatars";
import LoginSignup from "../TestComponents/LoginSignup/LoginSignup";

function ContentArea({ currentPage }) {
  const pageComponents = {
    houseCards: <HouseCards />,
    tabs: <Tabs />,
    eventCountdown: <EventCountdown />,
    shoppingList: <ShoppingList />,
    profileCard: <ProfileCard />,
    avatar: <Avatars />,
    navBar: <NavigationBar />,
    accordion: <Accordion />,
    checkout: <Checkout />,
    weather: <WeatherData />,
    caseStudyHeader: <CaseStudyHeaderComponent />,
    pricing: <PricingComponent />,
    userFeedback: <UserFeedbackComponent />,
    stackedAvatars: <StackedAvatarComponent />,
    loginSignup: <LoginSignup />,
  };
  useEffect(() => {
    // Set the document title based on the current page
    const captions = {
      houseCards: "House Cards",
      tabs: "Tabs",
      eventCountdown: "Event Countdown",
      shoppingList: "Shopping List",
      profileCard: "Profile Card",
      avatar: "Avatars",
      navBar: "Navigation Bar",
      accordion: "Accordion",
      checkout: "Checkout",
      weather: "Weather",
      caseStudyHeader: "Case Study Header",
      pricing: "Pricing",
      userFeedback: "User Feedback",
      stackedAvatars: "Stacked Avatars",
      loginSignup: "Login / Sign up",
    };
    document.title = captions[currentPage] || "React Canvas";
  }, [currentPage]);

  return (
    <div className="floating__content">
      <div className="floating__content--content">
        {pageComponents[currentPage]}
      </div>
    </div>
  );
}

export default ContentArea;

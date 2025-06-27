import "./ContentArea.css";
import EventCountdown from "../TestComponents/EventCountdown/EventCountdown";
import ProfileCard from "../TestComponents/ProfileCard/ProfileCard";
import HouseCards from "../TestComponents/HouseCards/HouseCards";
import ShoppingList from "../TestComponents/ShoppingList/ShoppingList.jsx";
import NavigationBar from "../TestComponents/NavBar/NavBar.jsx";
import Tabs from "../TestComponents/Tabs/Tabs";
import { Avatars } from "../TestComponents/Avatar/Avatar.jsx";
import Accordion from "../TestComponents/Accordion/Accordion";
import Checkout from "../TestComponents/Checkout/Checkout";
import ObjectCrud from "../TestComponents/ObjectCrud/ObjectCrud";
import CaseStudyHeaderComponent from "../TestComponents/CaseStudyHeader/CaseStudyHeader";

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
    objectCrud: <ObjectCrud />,
    caseStudyHeader: <CaseStudyHeaderComponent />,
  };
  return (
    <div className="floating__content">
      <div className="floating__content--content">
        {pageComponents[currentPage]}
      </div>
    </div>
  );
}

export default ContentArea;

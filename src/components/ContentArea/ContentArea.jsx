import "./ContentArea.css";
import EventCountdown from "../TestComponents/EventCountdown/EventCountdown.jsx";
import ProfileCard from "../TestComponents/ProfileCard/ProfileCard.jsx";
import HouseCards from "../TestComponents/HouseCards/HouseCards";
import Tabs from "../TestComponents/Tabs/Tabs";

function ContentArea({ currentPage }) {
  const pageComponents = {
    houseCards: <HouseCards />,
    tabs: <Tabs />,
    eventCountdown: <EventCountdown />,
    profileCard: <ProfileCard />,
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

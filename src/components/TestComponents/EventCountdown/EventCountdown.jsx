import "./EventCountdown.css";
import PageContent from "../../PageContent/PageContent.jsx";
import pages from "../../../pages.js";
// import { events } from "./Events.js";

// ========
// Create components here.active
// ========

function Buttons() {
  const currentPageData = pages.find((page) => page.link === "eventCountdown");

  return (
    <>
      <PageContent
        icon={<currentPageData.icon size={32} />}
        title={currentPageData.caption}
        subtitle="This component is a series of Countdown cards that countdown to an event. This uses date-fns for calculating dates and has some filters as well. You can also favourite events to pin to a favourites section."
      />
    </>
  );
}

export default Buttons;

import "./EventCountdown.css";
import PageContent from "../../PageContent/PageContent.jsx";
import pages from "../../../pages.js";
import { eventsAscending } from "./Events.js";
import { differenceInCalendarDays, format } from "date-fns";
import { Star, RefreshCcw } from "lucide-react";
import { IconMobiledata, IconRotateClockwise2 } from "@tabler/icons-react";

import { useState } from "react";

// Day calculation helper
function getDays(date) {
  const daysUntil = differenceInCalendarDays(date, new Date());
  return daysUntil;
}

function Events() {
  return (
    <div className="event__rail">
      {eventsAscending.map((event) => (
        <Event
          key={event.eventName}
          name={event.eventName}
          date={event.date}
          days={getDays(event.date)}
          categories={event.categories}
          photo={event.photo}
          repeats={event.repeats}
        />
      ))}
    </div>
  );
}

function Event({ name, date, days, categories, photo, repeats }) {
  const [showDate, setShowDate] = useState(false);

  return (
    <div className={`event__container ${days < 0 ? "disabled" : ""}`}>
      <div>
        <img src={photo} />
        <button className="toggle">
          <Star />
        </button>
      </div>
      <div className="content">
        <div className="event__details">
          <div className="event__name">
            <p className="name">{name}</p>
            {repeats && (
              <div className="pill">
                <IconRotateClockwise2 />
                Repeats
              </div>
            )}
          </div>
          <div className="event__date">
            <div className="days-date">
              {showDate ? (
                <p className="date">{format(date, "dd MMMM yyyy")}</p>
              ) : (
                <p className="days">
                  {days === 0
                    ? "Today"
                    : days > 0
                      ? `In ${days} day${days > 1 ? "s" : ""}`
                      : `${Math.abs(days)} day${Math.abs(days) > 1 ? "s" : ""} ago`}
                </p>
              )}
              <button onClick={() => setShowDate(!showDate)}>
                <IconMobiledata />
              </button>
            </div>
          </div>
        </div>
        <div className="categories">
          {categories.map((category, index) => (
            <div className="pill" key={index}>
              {category}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EventCountdown() {
  const currentPageData = pages.find((page) => page.link === "eventCountdown");

  return (
    <>
      <PageContent
        icon={<currentPageData.icon size={32} />}
        title={currentPageData.caption}
        subtitle="This component is a series of Countdown cards that countdown to an event. This uses date-fns for calculating dates and eventually, will have some filters and a way to favourite cards which will be displayed in a separate section."
      />
      <Events />
    </>
  );
}

export default EventCountdown;

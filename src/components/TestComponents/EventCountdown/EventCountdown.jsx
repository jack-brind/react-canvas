import "./EventCountdown.css";
import PageContent from "../../PageContent/PageContent.jsx";
import pages from "../../../pages.js";
import { eventsAscending } from "./Events.js";
import { differenceInCalendarDays, format } from "date-fns";
import { Star, RefreshCcw } from "lucide-react";
import { TbMobiledata, TbRotateClockwise2 } from "react-icons/tb";
import { useState } from "react";
import SearchInput from "../../SearchInput/SearchInput";
import Checkbox from "../../Checkbox/Checkbox";

// Day calculation helper
function getDays(date) {
  const daysUntil = differenceInCalendarDays(date, new Date());
  return daysUntil;
}

function EventCountdown() {
  const currentPageData = pages.find((page) => page.link === "eventCountdown");
  const [term, setTerm] = useState("");
  //const [showOldEvents, setShowOldEvents] = useState(false);

  return (
    <>
      <PageContent
        icon={<currentPageData.icon size={32} />}
        title={currentPageData.caption}
        subtitle="This component is a series of Countdown cards that countdown to an event. This uses date-fns for calculating dates and eventually, will have some filters and a way to favourite cards which will be displayed in a separate section."
      />

      <div className="event__filters">
        <SearchInput
          searchTerm={term}
          onSearchChange={setTerm}
          placeholder="Filter by name..."
          width="340px"
        />
        {/* <Checkbox />
        <div className="checkbox-wrapper-4">
          <input
            type="checkbox"
            class="inp-cbx"
            id="old-events"
            name="old-events"
            checked={showOldEvents}
            onChange={(e) => setShowOldEvents(e.target.checked)}
          />
          <label class="cbx" htmlFor="old-events">
            <span>
              <svg width="12px" height="10px">
                <use xlink:href="#check-4"></use>
              </svg>
            </span>
            <span>Show old events</span>
          </label>
          <svg class="inline-svg">
            <symbol id="check-4" viewbox="0 0 12 10">
              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
            </symbol>
          </svg>
        </div> */}
      </div>

      <Events term={term} />
    </>
  );
}

function Events({ term, oldEvents }) {
  const filtered = eventsAscending
    .filter((event) =>
      event.eventName.toLowerCase().includes(term.toLowerCase()),
    )
    .filter((event) => {
      if (oldEvents) {
        return true;
      } else {
        return getDays(event.date) >= 0;
      }
    });

  return (
    <div className="event__rail">
      {filtered.map((event) => (
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
        {/* <button className="toggle">
          <Star />
        </button> */}
      </div>
      <div className="content">
        <div className="event__details">
          <div className="event__name">
            <p className="name">{name}</p>
            {repeats && (
              <div className="pill">
                <TbRotateClockwise2 />
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
                <TbMobiledata />
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

export default EventCountdown;

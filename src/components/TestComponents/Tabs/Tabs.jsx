import { useState } from "react";
import "./Tabs.css";
import PageContent from "../../PageContent/PageContent";
import pages from "../../../pages.js";
import tabContent from "./TabContent.js";
import { Coins, Clock10, Users, TextQuote, MapPin } from "lucide-react";

// Tabs component
function TabComponent() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="container">
        <div className="tabs-container">
          <div className="tab-rail">
            {/* Active indicator line */}
            <div className="active-indicator" />
            {tabContent.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`tab ${index === activeTab ? "tab-active" : ""}`}
              >
                {tab.city}
              </button>
            ))}
          </div>
        </div>
        <Tab
          city={tabContent[activeTab].city}
          flag={tabContent[activeTab].flag}
          country={tabContent[activeTab].country}
        >
          <TabContent
            flag={tabContent[activeTab].flag}
            populationInMillions={tabContent[activeTab].populationInMillions}
            currency={tabContent[activeTab].currency}
            timezone={tabContent[activeTab].timezone}
            photo={tabContent[activeTab].photo}
            summary={tabContent[activeTab].summary}
          />
        </Tab>
      </div>
    </>
  );
}

// The actual tab content
function Tab({ flag, city, country, children }) {
  return (
    <>
      <div className="content__container">
        <h2 className="tab__header">
          {flag} {city}
        </h2>
        <div className="data-2">
          <MapPin />
          <h4>{country}</h4>
        </div>
        {children}
      </div>
    </>
  );
}

// Renders just the content of the selected tab
function TabContent({
  populationInMillions,
  currency,
  timezone,
  photo,
  summary,
}) {
  return (
    <>
      <div className="tab__content--details">
        <div className="country-data">
          <div className="data-1">
            <Users color="var(--text-secondary)" />
            <h4 className="header-label">Population</h4>
            {`${populationInMillions} million`}
          </div>

          <div className="data-1">
            <Coins color="var(--text-secondary)" />
            <h4 className="header-label">Currency</h4>
            {currency}
          </div>
          <div className="data-1">
            <Clock10 color="var(--text-secondary)" />
            <h4 className="header-label">Timezone</h4>
            {timezone}
          </div>

          <div className="data-1 summary">
            <TextQuote color="var(--text-secondary)" />
            <h4 className="header-label">Summary</h4>
          </div>
          <p>{summary}</p>
        </div>
        <div>
          <img src={photo} className="city-photo" />
        </div>
      </div>
    </>
  );
}

// Parent component (tab view)
function Tabs() {
  const currentPageData = pages.find((page) => page.link === "tabs");
  return (
    <>
      <PageContent
        icon={<currentPageData.icon size={32} />}
        title={currentPageData.caption}
        subtitle="This is a tab component that displays cities. It uses state to change the content of the tab and the data is driven from an array of objects. It is currently not generic and only takes fixed tabContent."
      />
      <TabComponent />
    </>
  );
}

export default Tabs;

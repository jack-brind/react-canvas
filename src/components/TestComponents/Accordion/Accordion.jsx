import "./Accordion.css";
import PageContent from "../../PageContent/PageContent.jsx";
import pages from "../../../pages.js";
import faqs from "./faqs.js";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function AccordionComponent({ data }) {
  const [currentlyOpen, setCurrentlyOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordianItem
          currentlyOpen={currentlyOpen}
          onOpen={setCurrentlyOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordianItem>
      ))}
    </div>
  );
}

function AccordianItem({ title, num, currentlyOpen, onOpen, children }) {
  const isOpen = num === currentlyOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className="item" onClick={handleToggle}>
      <span>
        {isOpen ? <Minus className="icon" /> : <Plus className="icon" />}
      </span>
      <h3 className="title">{title}</h3>
      <div className={`content-box ${!isOpen ? "collapsed" : ""}`}>
        <p>{children}</p>
      </div>
    </div>
  );
}

function Accoridon() {
  const currentPageData = pages.find((page) => page.link === "accordion");

  return (
    <>
      <PageContent
        icon={<currentPageData.icon size={32} />}
        title={currentPageData.caption}
        subtitle="This accordion component mirrors many others and only shows one item at a time. I might add a toggle in the future to allow multiple items to be open at a time as well."
      />
      <div>
        <h2>Apple Order FAQs</h2>
        <p className="short-description">
          Find out more about ordering through Apple.
        </p>
        <div className="accordion__container">
          <AccordionComponent data={faqs} />
        </div>
      </div>
    </>
  );
}

export default Accoridon;

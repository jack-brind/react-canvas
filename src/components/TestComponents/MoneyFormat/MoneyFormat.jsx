import "./MoneyFormat.css";
import { useState } from "react";
import PageContent from "../../PageContent/PageContent.jsx";
import pages from "../../../pages.js";

function MoneyFormatComponent() {
  const currentPageData = pages.find((page) => page.link === "moneyFormat");
  return (
    <>
      <PageContent
        icon={<currentPageData.icon size={32} />}
        title={currentPageData.caption}
        subtitle="TBC – Component to choose your format to display money with lots of different options."
      />
      <MoneyFormat />
    </>
  );
}

export default MoneyFormatComponent;

function MoneyFormat() {
  function handleValue(e) {
    setValue(e.target.value);
  }

  const [value, setValue] = useState(1);
  return (
    <div>
      <input
        type="range"
        onChange={handleValue}
        value={value}
        min="1"
        max="10"
      />{" "}
      {value}
      <div className="emoji__list">
        {Array.from({ length: value }, () => (
          <span>🖤</span>
        ))}
      </div>
    </div>
  );
}

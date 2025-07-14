import "./Pricing.css";
import PageContent from "../../PageContent/PageContent.jsx";
import pages from "../../../pages.js";
import { PricingCard } from "./PricingCard";
import pricingTiers from "./pricingData";
import { useState } from "react";

export default function PricingComponent() {
  const currentPageData = pages.find((page) => page.link === "pricing");
  const [selectedOption, setSelectedOption] = useState(1);

  function handleSelectedOption(selectedOption) {
    setSelectedOption(selectedOption);
  }
  return (
    <>
      <PageContent
        icon={<currentPageData.icon size={32} />}
        title={currentPageData.caption}
        subtitle="This component mirrors PandaDoc's pricing information on the website and uses state to update the monthly and annual cost. "
      />
      <Pricing
        tiers={pricingTiers}
        selectedOption={selectedOption}
        onsSelectedOption={handleSelectedOption}
      />
    </>
  );
}

function Pricing({ tiers, selectedOption, onsSelectedOption }) {
  return (
    <>
      <div className="pricing">
        <div className="price__option">
          {/* <Segment>
            <SegmentOption
              text="Monthly"
              active={selectedOption === 0}
              onClick={() => onsSelectedOption(0)}
            />
            <SegmentOption
              text="Annually"
              active={selectedOption === 1}
              onClick={() => onsSelectedOption(1)}
            />
          </Segment> */}
        </div>
        <div className="pricing-card__container">
          {tiers.map((tier) => (
            <PricingCard
              key={tier.name}
              tiers={tier}
              price={selectedOption}
              selectedOption={selectedOption}
              onsSelectedOption={onsSelectedOption}
            />
          ))}
        </div>
      </div>
    </>
  );
}

import { PricingFeatures } from "./PricingFeatures";
import Button from "../../Button/Button";
import Tick from "../../../assets/icons/Tick";
import { Check } from "lucide-react";
import { Segment, SegmentOption } from "../../Segment/Segment.jsx";

export function PricingCard({
  tiers,
  price,
  selectedOption,
  onsSelectedOption,
}) {
  const featureLabels = {
    Starter: "Key features:",
    Business: "Everything in Starter, plus:",
    Enterprise: "Everything in Business, plus:",
  };

  return (
    <>
      <div
        className={`pricing-card ${tiers.name === "Business" ? "popular" : ""}`}
      >
        <div className="pricing__header">
          <h2>{tiers.name}</h2>
          <p className="pricing__description">{tiers.description}</p>
        </div>
        {tiers.name !== "Enterprise" ? (
          <div
            className={`plan__segment ${tiers.name === "Enterprise" ? "invisible" : ""}`}
          >
            <Segment>
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
            </Segment>
          </div>
        ) : (
          <div className='annual-billing'>
            <p>Billed Annually</p>
          </div>
        )}
        <div className="pricing__details">
          <div className="pricing__price-info">
            <h2 className="pricing__price">
              {price === 0
                ? tiers.name !== "Enterprise"
                  ? `$${tiers.priceMonthly} USD`
                  : "Let's talk"
                : tiers.name !== "Enterprise"
                  ? `$${tiers.priceAnnually} USD`
                  : "Let's talk"}
            </h2>
            <p className="pricing__description">
              {tiers.name === "Enterprise"
                ? "Per‑seat or per‑document pricing"
                : "Seat cost per month"}
            </p>
          </div>
          <div className="pricing__button">
            <Button
              fullWidth
              primaryColour="primaryButton"
              size="lg"
              label={tiers.buttonCaption}
              type={tiers.name === "Business" ? "primary" : "default"}
            />
            <p
              className={`pricing__description ${tiers.name === "Enterprise" ? "invisible" : ""}`}
            >
              No credit card required
            </p>
            <hr className="separator" />
          </div>
        </div>
        <div className="features__list">
            <h4 className="features__header">{featureLabels[tiers.name]}</h4>
            <div className="features">
              {tiers.features.map((feature) => (
                <div key={feature} className="feature-item">
                  <Check className="feature__icon" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
        </div>
      </div>
    </>
  );
}

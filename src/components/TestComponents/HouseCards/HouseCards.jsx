import "./HouseCards.css";
import { useState } from "react";
import PageContent from "../../PageContent/PageContent";
import pages from "../../../pages.js";
import {
  BedDouble,
  Bath,
  Airplay,
  ChevronRight,
  ChartPie,
  ChevronLeft,
  ChevronDown,
  Check,
  Save,
  Plus,
  ArrowRight,
  ArrowUpRight,
  Trash2,
  Link,
  QrCode,
} from "lucide-react";
import houses from "./Houses.js";
import IconButton from "../../IconButton/IconButton.jsx";
import Button from "../../Button/Button.jsx";
import Rating from "../../Rating/Rating";

function House({
  addressLineOne,
  town,
  postalCode,
  propertyType,
  beds,
  baths,
  price,
  isSold,
  photo,
}) {
  return (
    <div className="house__card">
      <div className="house-card__photo-container">
        <img src={photo} alt={photo} className="house-card__photo" />
        {isSold && (
          <div className="sold">
            <div className="sold-tag">Sold</div>
          </div>
        )}
      </div>
      <div className="house__card--details">
        <h2>{addressLineOne}</h2>
        <div className="details">
          {town}, {postalCode}
        </div>
        <div className="details">{propertyType}</div>
        <div className="bed-bath">
          <div className="icon-count">
            <BedDouble size={16} />
            {<div className="details">{beds}</div>}
          </div>
          <div className="icon-count">
            <Bath size={16} />
            {<div className="details">{baths}</div>}
          </div>
        </div>
        <span className="house__card--price">
          {new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
            maximumFractionDigits: 0,
          }).format(price)}
        </span>
      </div>
    </div>
  );
}

function Houses() {
  const [currentHouse, setCurrentHouse] = useState(0);
  const house = houses[currentHouse];

  return (
    <>
      <Rating icon="heart" />

      <House {...house} />

      <div className="nav__buttons">
        <span className="count">{`${currentHouse + 1} of ${houses.length}`}</span>
        <IconButton
          onClick={() => setCurrentHouse(currentHouse - 1)}
          disabled={currentHouse === 0}
          type="default"
          size="sm"
          icon={<ChevronLeft />}
        />
        <IconButton
          onClick={() => setCurrentHouse(currentHouse + 1)}
          disabled={currentHouse === houses.length - 1}
          type="default"
          size="sm"
          icon={<ChevronRight />}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginTop: "56px",
        }}
      >
        <Button leadingIcon={<Airplay />} label="Airplay" size="sm" />
        <Button trailingIcon={<ChevronDown />} label="Environment" />
        <Button
          leadingIcon={<ChartPie />}
          trailingIcon={<ChevronDown />}
          label="Chart type"
        />
        <Button label="Open link" />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginTop: "32px",
        }}
      >
        <Button type="primary" leadingIcon={<Check />} label="Submit" />
        <Button
          type="primary"
          size="sm"
          trailingIcon={<ArrowRight />}
          label="Open library"
        />
        <Button
          type="primary"
          leadingIcon={<Save />}
          trailingIcon={<ChevronDown />}
          label="Save changes"
        />
        <Button type="primary" label="Complete" />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginTop: "32px",
        }}
      >
        <Button type="ghost" leadingIcon={<Plus />} label="New project" />
        <Button
          type="ghost"
          trailingIcon={<ArrowRight />}
          label="Go to favourites"
        />
        <Button
          type="ghost"
          leadingIcon={<QrCode />}
          trailingIcon={<ChevronDown />}
          label="Authenticate"
        />
        <Button type="ghost" label="Cancel" />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginTop: "32px",
        }}
      >
        <Button type="destructive" leadingIcon={<Trash2 />} label="Delete" />
        <Button type="destructive" label="Discard" />
      </div>
    </>
  );
}

function HouseCards() {
  const currentPageData = pages.find((page) => page.link === "houseCards");
  return (
    <>
      <PageContent
        icon={<currentPageData.icon size={32} />}
        title={currentPageData.caption}
        subtitle="This component is a list of houses for sale. It features a card with the details of the house (from an array of house objects), buttons to cycle through the houses (using state) and a counter to show what house you are on out of the total houses in the list."
      />
      <Houses />
    </>
  );
}

export default HouseCards;

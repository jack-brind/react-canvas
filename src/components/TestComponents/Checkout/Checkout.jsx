import "./Checkout.css";
//import { useState } from "react";
import PageContent from "../../PageContent/PageContent.jsx";
import pages from "../../../pages.js";

function Checkout() {
  const currentPageData = pages.find((page) => page.link === "checkout");
  return (
    <>
      <PageContent
        icon={<currentPageData.icon size={32} />}
        title={currentPageData.caption}
        subtitle="This component is a list of houses for sale. It features a card with the details of the house (from an array of house objects), buttons to cycle through the houses (using state) and a counter to show what house you are on out of the total houses in the list."
      />
    </>
  );
}

export default Checkout;

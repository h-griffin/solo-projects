import PropTypes from "prop-types";
import React from "react";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Who Are We</h5>
          <h1>Welcome To KolaMarket</h1>
          <p>
            KolaMarket is your ultimate source of all deals you want to find
            online. We help our customers find deals online that save them
            considerable amounts of money on goods and services that they want
            and need at heavily discounted prices from our very long list of
            partners that have millions of products on sale. We partner with all
            the major online retailers and even those you have never heard of,
            to bring the best deals to our customers on a daily basis and always
            choose the biggest discounts to present. We have deals from every
            category, spanning electronics, beauty products, furniture, apparel,
            pet products and also financial services and credit cards. Every day
            presents the opportunity to get you a deal of a lifetime. Check
            KolaMarket every morning and you’ll start the day off on a bright
            note.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default SectionTitleWithText;

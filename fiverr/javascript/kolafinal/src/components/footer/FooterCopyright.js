import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const FooterCopyright = ({ footerLogo, spaceBottomClass }) => {
  return (
    <div className={`copyright ${spaceBottomClass ? spaceBottomClass : ""}`}>
      <div className="footer-logo">
        <Link to={process.env.PUBLIC_URL + "/"}>
          <img
            alt=""
            src={process.env.PUBLIC_URL + footerLogo}
            style={{  width: "100%" }}
          />
        </Link>
        {/* <Link to="/" className="textlogo" style={{marginTop:"35px"}}>KolaMarket.</Link> */}
      </div>
      <p>
        © 2022 KolaMarket. .<br /> All Rights Reserved
      </p>
    </div>
  );
};

FooterCopyright.propTypes = {
  footerLogo: PropTypes.string,
  spaceBottomClass: PropTypes.string,
};

export default FooterCopyright;

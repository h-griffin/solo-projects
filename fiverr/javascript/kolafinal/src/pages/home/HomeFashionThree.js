import React, { Fragment, useState } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderTen from "../../wrappers/hero-slider/HeroSliderTen";
import ShopProducts from "../../wrappers/product/ShopProducts";
import SectionTitleTwo from "../../components/section-title/SectionTitleTwo";

const HomeFashionThree = () => {
  const [layout, setLayout] = useState("grid");

  return (
    <Fragment>
      <MetaTags>
        <title>KolaMarket | Home</title>
        <meta
          name="description"
          content="Fashion home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        {/* hero slider */}
        <HeroSliderTen />
        <br />
        {/* feature icon */}
        {/* <FeatureIconTwo spaceTopClass="pt-100" spaceBottomClass="pb-60" /> */}
        {/* product grid */}
        <div className="product-area pb-60 section-padding-1">
          <div className="container-fluid">
            {/* <SectionTitleTwo
              titleText="New Arrival"
              subTitleText="Lorem ipsum dolor sit amet conse ctetu."
              positionClass="text-center"
              spaceClass="mb-60"
            /> */}
            <br />
            <div className="shop-top-bar mb-35">
              <div className="select-shoing-wrap">
                {/* <p>Showing 18 products</p> */}
              </div>

              <div className="shop-tab">
                {/* <button
          onClick={e => {
            getLayout("grid two-column");
            setActiveLayout(e);
          }}
        >
          <i className="fa fa-th-large" />
        </button> */}
                <button
                  onClick={(e) => {
                    setLayout("grid three-column");
                  }}
                >
                  <i className="fa fa-th" />
                </button>
                <button
                  onClick={(e) => {
                    setLayout("list");
                  }}
                >
                  <i className="fa fa-list-ul" />
                </button>
              </div>
            </div>

            <ShopProducts layout={layout} category="Computers" limit={18} />
          </div>
        </div>

        {/* <NewProductGrid layout={layout} category="accessories" limit={18} /> */}
        {/* blog featured */}
        {/* <BlogFeatured spaceBottomClass="pb-55" /> */}
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashionThree;

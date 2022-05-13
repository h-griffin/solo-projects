import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";
import axios from "axios";

const Product = ({ location }) => {
  const { pathname } = location;

  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      var str = window.location.pathname;
      var n = str.lastIndexOf("/");
      var result = str.substring(n + 1);
      setProductId(result);

      const data = await axios.get(`/api/product/ById/${result}`);
      setProduct(data.data);
      setLoading(false);
    })();
  }, [productId]);

  if (loading) {
    return (
      <center>
        <h1>Loading...</h1>
      </center>
    );
  } else {
    return (
      <Fragment>
        <MetaTags>
          <title>KolaMarket | Product Page</title>
          <meta
            name="description"
            content="Product page of flone react minimalist eCommerce template."
          />
        </MetaTags>

        <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
          Home
        </BreadcrumbsItem>
        <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
          Shop Product
        </BreadcrumbsItem>

        <LayoutOne headerTop="visible">
          {/* breadcrumb */}
          <Breadcrumb />

          {/* product description with image */}
          <ProductImageDescription
            spaceTopClass="pt-100"
            spaceBottomClass="pb-100"
            product={product}
          />

          {/* product description tab */}
          {/* <ProductDescriptionTab
            spaceBottomClass="pb-90"
            productFullDesc={product.fullDescription}
          /> */}

          {/* related product slider */}
          <RelatedProductSlider
            spaceBottomClass="pb-95"
            category={product.category[0]}
          />
        </LayoutOne>
      </Fragment>
    );
  }
};

Product.propTypes = {
  location: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => {};

export default connect(mapStateToProps)(Product);

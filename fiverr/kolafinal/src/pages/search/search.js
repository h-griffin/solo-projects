import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import MetaTags from "react-meta-tags";
import Paginator from "react-hooks-paginator";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import { getSortedProducts } from "../../helpers/product";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import ShopProducts from "../../wrappers/product/ShopProducts";

const Search = ({ location, products }) => {
  const [layout, setLayout] = useState("grid");
  const sortType = "";
  const sortValue = "";
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  const pageLimit = 15;
  const { pathname } = location;

  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  let value = params.search; // "some_value"

  return (
    <Fragment>
      <MetaTags>
        <title>KolaMarket | Search Page</title>
        <meta
          name="description"
          content="Shop page of flone react minimalist eCommerce template."
        />
      </MetaTags>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Search
      </BreadcrumbsItem>

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

        <div className="shop-area pb-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                {/* shop topbar default */}
                <div className="shop-top-bar mb-35">
                  <div className="select-shoing-wrap">
                    {/* <p>Showing 18 result</p> */}
                  </div>

                  <div className="shop-tab">
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

                {/* shop page content default */}
                <ShopProducts
                  layout={layout}
                  search={true}
                  keyword={value}
                  limit={18}
                />
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Search.propTypes = {
  location: PropTypes.object,
  products: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    products: state.productData.products,
  };
};

export default connect(mapStateToProps)(Search);

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

const ShopGridNoSidebar = ({ location, products }) => {
  const [layout, setLayout] = useState("grid");
  const sortType = "";
  const sortValue = "";
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const pageLimit = 18;
  const { pathname } = location;

  const getLayout = (layout) => {
    setLayout(layout);
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  useEffect(() => {
    setCategory(
      window.location.pathname
        .substring(window.location.pathname.indexOf("/") + 10)
        .replace(/-/g, " ")
    );
  }, []);

  return (
    <Fragment>
      <MetaTags>
        <title>KolaMarket | Shop Page</title>
        <meta
          name="description"
          content="Shop page of flone react minimalist eCommerce template."
        />
      </MetaTags>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        {
          /[^/]*$/.exec(
            window.location.pathname.substring(
              0,
              window.location.pathname.lastIndexOf("/")
            )
          )[0]
        }
        &nbsp;&nbsp;&nbsp;/ &nbsp;&nbsp;&nbsp;
        {/[^/]*$/.exec(window.location.pathname)[0]}
      </BreadcrumbsItem>

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

        <div className="shop-area pb-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <br />
                <div className="shop-top-bar mb-35">
                  <div className="select-shoing-wrap">
                    {/* <p>Showing 18 products</p> */}
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
                  limit={18}
                  category={/[^/]*$/.exec(window.location.pathname)[0]}
                />
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

ShopGridNoSidebar.propTypes = {
  location: PropTypes.object,
  products: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    products: state.productData.products,
  };
};

export default connect(mapStateToProps)(ShopGridNoSidebar);

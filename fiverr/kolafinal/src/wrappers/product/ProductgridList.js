import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { addToWishlist } from "../../redux/actions/wishlistActions";
import { addToCompare } from "../../redux/actions/compareActions";
import ProductGridListSingle from "../../components/product/ProductGridListSingle";
import { getProducts } from "../../helpers/product";

import Paginator from "react-hooks-paginator";
import axios from "axios";

const ProductGrid = ({
  currency,
  addToCart,
  addToWishlist,
  addToCompare,
  cartItems,
  wishlistItems,
  compareItems,
  sliderClassName,
  spaceBottomClass,
  layout,
  category,
  search,
  keyword,
  brand,
  b,

  type,
  limit,
}) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [pageLimit, setPagelimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    (async () => {
      if (search === true) {
        //kola.interdept.com/api/product/search/jacket?pageNumber=2&pageSize=1
        const result = await axios.get(
          `/api/product/search/${keyword}?pageNumber=${currentPage}&pageSize=${pageLimit}`
        );
        setProducts(result.data.products);
        setTotalRecords(result.data.productPageSetting.totalProductCount);
        setPagelimit(result.data.productPageSetting.pageSize);
        setCurrentPage(result.data.productPageSetting.currentPageNumber);

        setLoading(false);
      } else if (b === true) {
        const result = await axios.get(
          `/api/product/brand/${brand}?pageNumber=${currentPage}&pageSize=${pageLimit}`
        );
        setProducts(result.data.products);
        setTotalRecords(result.data.productPageSetting.totalProductCount);
        setPagelimit(result.data.productPageSetting.pageSize);
        setCurrentPage(result.data.productPageSetting.currentPageNumber);

        setLoading(false);
      } else {
        const result = await axios.get(
          `/api/product/category/${category}?pageNumber=${currentPage}&pageSize=${pageLimit}`
        );
        setProducts(result.data.products);
        setTotalRecords(result.data.productPageSetting.totalProductCount);
        setPagelimit(result.data.productPageSetting.pageSize);
        setCurrentPage(result.data.productPageSetting.currentPageNumber);

        setLoading(false);
      }
    })();
  }, [currentPage]);

  useEffect(() => {
    (async () => {
      console.log("category change");
      if (search === true) {
        //kola.interdept.com/api/product/search/jacket?pageNumber=2&pageSize=1
        const result = await axios.get(
          `/api/product/search/${keyword}?pageNumber=1&pageSize=${pageLimit}`
        );
        setProducts(result.data.products);
        setTotalRecords(result.data.productPageSetting.totalProductCount);
        setPagelimit(result.data.productPageSetting.pageSize);
        setCurrentPage(result.data.productPageSetting.currentPageNumber);

        setLoading(false);
      } else if (b === true) {
        const result = await axios.get(
          `/api/product/brand/${brand}?pageNumber=${currentPage}&pageSize=${pageLimit}`
        );
        setProducts(result.data.products);
        setTotalRecords(result.data.productPageSetting.totalProductCount);
        setPagelimit(result.data.productPageSetting.pageSize);
        setCurrentPage(result.data.productPageSetting.currentPageNumber);

        setLoading(false);
      } else {
        const result = await axios.get(
          `/api/product/category/${category}?pageNumber=1&pageSize=${pageLimit}`
        );
        setProducts(result.data.products);
        setTotalRecords(result.data.productPageSetting.totalProductCount);
        setPagelimit(result.data.productPageSetting.pageSize);
        setCurrentPage(result.data.productPageSetting.currentPageNumber);

        setLoading(false);
      }
    })();
  }, [category, brand]);

  if (loading) {
    return (
      <center>
        <h1>Loading...</h1>
      </center>
    );
  } else {
    return (
      <>
        <div className="select-shoing-wrap" style={{ marginTop: "-60px" }}>
          <p>Showing {products.length} products</p>
        </div>
        <br />
        <br />
        <div className="pro-pagination-style text-center mt-30">
          <Paginator
            totalRecords={totalRecords}
            pageLimit={pageLimit}
            pageNeighbours={2}
            setOffset={setOffset}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageContainerClass="mb-0 mt-0"
            pagePrevText="«"
            pageNextText="»"
          />
        </div>
        <br />
        <br />
        <div
          className={`row ${layout ? layout : ""}`}
          style={{ padding: "15px" }}
        >
          <Fragment>
            {products.length > 0 ? (
              products.map((product) => {
                return (
                  <ProductGridListSingle
                    sliderClassName={sliderClassName}
                    spaceBottomClass={spaceBottomClass}
                    product={product}
                    currency={currency}
                    addToCart={addToCart}
                    addToWishlist={addToWishlist}
                    addToCompare={addToCompare}
                    cartItem={
                      cartItems.filter(
                        (cartItem) => cartItem.id === product.id
                      )[0]
                    }
                    wishlistItem={
                      wishlistItems.filter(
                        (wishlistItem) => wishlistItem.id === product.id
                      )[0]
                    }
                    compareItem={
                      compareItems.filter(
                        (compareItem) => compareItem.id === product.id
                      )[0]
                    }
                    key={product.id}
                  />
                );
              })
            ) : (
              <>
                <br />
                <center>
                  <h1>No Products Found</h1>
                </center>
              </>
            )}
          </Fragment>
        </div>
        <br />
        <br />
        <div className="pro-pagination-style text-center mt-30">
          <Paginator
            totalRecords={totalRecords}
            pageLimit={pageLimit}
            pageNeighbours={2}
            setOffset={setOffset}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageContainerClass="mb-0 mt-0"
            pagePrevText="«"
            pageNextText="»"
          />
        </div>
      </>
    );
  }
};

ProductGrid.propTypes = {
  addToCart: PropTypes.func,
  addToCompare: PropTypes.func,
  addToWishlist: PropTypes.func,
  cartItems: PropTypes.array,
  compareItems: PropTypes.array,
  currency: PropTypes.object,
  products: PropTypes.array,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  wishlistItems: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => {
  return {
    currency: state.currencyData,
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    compareItems: state.compareData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (
      item,
      addToast,
      quantityCount,
      selectedProductColor,
      selectedProductSize
    ) => {
      dispatch(
        addToCart(
          item,
          addToast,
          quantityCount,
          selectedProductColor,
          selectedProductSize
        )
      );
    },
    addToWishlist: (item, addToast) => {
      dispatch(addToWishlist(item, addToast));
    },
    addToCompare: (item, addToast) => {
      dispatch(addToCompare(item, addToast));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid);
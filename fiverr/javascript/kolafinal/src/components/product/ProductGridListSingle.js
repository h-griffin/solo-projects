import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { getDiscountPrice } from "../../helpers/product";
import ProductModal from "./ProductModal";

const ProductGridListSingle = ({
  product,
  currency,
  addToCart,
  addToWishlist,
  addToCompare,
  cartItem,
  wishlistItem,
  compareItem,
  sliderClassName,
  spaceBottomClass,
}) => {
  const [modalShow, setModalShow] = useState(false);
  const { addToast } = useToasts();

  const discountedPrice = getDiscountPrice(product.price, product.discount);
  const finalProductPrice = +(product.price * currency.currencyRate).toFixed(2);
  const finalDiscountedPrice = +(
    discountedPrice * currency.currencyRate
  ).toFixed(2);

  return (
    <Fragment>
      <div
        style={{
          border: "2px solid #EBECF0",
          borderRadius: "15px",
          marginBottom: "15px",
        }}
        className={`col-xl-4 col-sm-6 ${
          sliderClassName ? sliderClassName : ""
        }`}
      >
        <div
          className={`product-wrap ${spaceBottomClass ? spaceBottomClass : ""}`}
        >
          <div className="product-img">
            <Link
              to={process.env.PUBLIC_URL + "/product/" + product.id}
              style={{ display: "contents" }}
            >
              <img
                className="default-img"
                style={{ width: "100%" }}
                src={process.env.PUBLIC_URL + product.image[0]}
                alt=""
              />
              {product.image.length > 1 ? (
                <img
                  className="hover-img"
                  src={process.env.PUBLIC_URL + product.image[1]}
                  alt=""
                />
              ) : (
                ""
              )}
            </Link>
            {product.discount || product.new ? (
              <div className="product-img-badges">
                {product.discount ? (
                  <span className="pink">-{product.discount}%</span>
                ) : (
                  ""
                )}
                {product.new ? <span className="purple">New</span> : ""}
              </div>
            ) : (
              ""
            )}

            <div className="product-action">
              <div className="pro-same-action pro-wishlist">
                <button
                  className={wishlistItem !== undefined ? "active" : ""}
                  disabled={wishlistItem !== undefined}
                  title={
                    wishlistItem !== undefined
                      ? "Added to wishlist"
                      : "Add to wishlist"
                  }
                  onClick={() => addToWishlist(product, addToast)}
                >
                  <i className="pe-7s-like" />
                </button>
              </div>

              <div className="pro-same-action pro-quickview">
                <button onClick={() => setModalShow(true)} title="Quick View">
                  <i className="pe-7s-look" />
                </button>
              </div>
            </div>
          </div>
          <div className="product-content text-center">
            <h3>
              <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
                {product.name}
              </Link>
            </h3>

            <div className="product-price">
              {discountedPrice !== null ? (
                <Fragment>
                  <span
                    className="old"
                    style={{ marginLeft: "0px", color: "gray" }}
                  >
                    {currency.currencySymbol + finalProductPrice}
                  </span>
                  {"    "}
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    {currency.currencySymbol + finalDiscountedPrice}
                  </span>
                </Fragment>
              ) : (
                <span>{currency.currencySymbol + finalProductPrice} </span>
              )}
            </div>
          </div>
        </div>
        <div className="shop-list-wrap">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-xl-2 col-md-3 col-sm-6">
              <div
                className={`product-wrap-2 ${
                  spaceBottomClass ? spaceBottomClass : ""
                }`}
              >
                <div className="product-img">
                  <Link
                    to={process.env.PUBLIC_URL + "/product/" + product.id}
                    style={{ display: "contents" }}
                  >
                    <img
                      style={{ width: "100%" }}
                      className="default-img"
                      src={process.env.PUBLIC_URL + product.image[0]}
                      alt=""
                    />
                    {product.image.length > 1 ? (
                      <img
                        className="hover-img"
                        src={process.env.PUBLIC_URL + product.image[1]}
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                  </Link>
                  {product.discount || product.new ? (
                    <div className="product-img-badges">
                      {product.discount ? (
                        <span className="pink">-{product.discount}%</span>
                      ) : (
                        ""
                      )}
                      {product.new ? <span className="purple">New</span> : ""}
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="product-action-2">
                    <button
                      onClick={() => setModalShow(true)}
                      title="Quick View"
                    >
                      <i className="fa fa-eye"></i>
                    </button>
                    <a
                      href={product.productshopurl}
                      rel="noopener noreferrer"
                      target="_blank"
                      title="Get Deal"
                    >
                      {" "}
                      <i className="fa fa-shopping-cart"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-10 col-md-9 col-sm-6">
              <div className="shop-list-content">
                <h3>
                  <Link
                    to={process.env.PUBLIC_URL + "/product/" + product.id}
                    style={{ fontSize: "16px", fontWeight: "bold" }}
                  >
                    {product.name}
                  </Link>
                </h3>
                <div className="product-list-price">
                  {discountedPrice !== null ? (
                    <Fragment>
                      <span
                        className="old"
                        style={{ marginLeft: "0px", color: "gray" }}
                      >
                        {currency.currencySymbol + finalProductPrice}
                      </span>
                      {"    "}
                      <span style={{ fontWeight: "bold", color: "black" }}>
                        {currency.currencySymbol + finalDiscountedPrice}
                      </span>
                      <span className="shop-list-btn btn-hover ml-3">
                        <button
                          className="active"
                          onClick={() => setModalShow(true)}
                        >
                          View Deal
                        </button>
                        &nbsp;&nbsp;
                        <a
                          className="active"
                          href={product.productshopurl}
                          target="_blank"
                        >
                          Get Deal
                        </a>
                      </span>
                      <span className="shop-list-wishlist ml-3">
                        <button
                          className={wishlistItem !== undefined ? "active" : ""}
                          disabled={wishlistItem !== undefined}
                          title={
                            wishlistItem !== undefined
                              ? "Added to wishlist"
                              : "Add to wishlist"
                          }
                          onClick={() => addToWishlist(product, addToast)}
                        >
                          <i className="pe-7s-like" />
                        </button>
                      </span>
                    </Fragment>
                  ) : (
                    <span>{currency.currencySymbol + finalProductPrice} </span>
                  )}
                </div>

                {product.shortDescription ? (
                  <p className="text2">{product.shortDescription}</p>
                ) : (
                  ""
                )}

                <div className="shop-list-actions d-flex align-items-center">
                  {/* <div className="shop-list-btn btn-hover">
                    <button
                      className="active"
                      onClick={() => setModalShow(true)}
                    >
                      View Deal
                    </button>
                    &nbsp;&nbsp;
                    <a
                      className="active"
                      href={product.productshopurl}
                      target="_blank"
                    >
                      Get Deal
                    </a>
                  </div> */}

                  {/* <div className="shop-list-wishlist ml-10">
                    <button
                      className={wishlistItem !== undefined ? "active" : ""}
                      disabled={wishlistItem !== undefined}
                      title={
                        wishlistItem !== undefined
                          ? "Added to wishlist"
                          : "Add to wishlist"
                      }
                      onClick={() => addToWishlist(product, addToast)}
                    >
                      <i className="pe-7s-like" />
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        currency={currency}
        discountedprice={discountedPrice}
        finalproductprice={finalProductPrice}
        finaldiscountedprice={finalDiscountedPrice}
        cartitem={cartItem}
        wishlistitem={wishlistItem}
        compareitem={compareItem}
        addtocart={addToCart}
        addtowishlist={addToWishlist}
        addtocompare={addToCompare}
        addtoast={addToast}
      />
    </Fragment>
  );
};

ProductGridListSingle.propTypes = {
  addToCart: PropTypes.func,
  addToCompare: PropTypes.func,
  addToWishlist: PropTypes.func,
  cartItem: PropTypes.object,
  compareItem: PropTypes.object,
  currency: PropTypes.object,
  product: PropTypes.object,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  wishlistItem: PropTypes.object,
};

export default ProductGridListSingle;

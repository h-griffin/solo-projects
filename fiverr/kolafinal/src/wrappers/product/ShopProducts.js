import PropTypes from "prop-types";
import React from "react";
import ProductGridSix from "./ProductGridSix";
import ProductgridList from "./ProductgridList";

const ShopProducts = ({
  category,
  layout,
  limit,
  search,
  keyword,
  brand,
  b,
}) => {
  return (
    <div className="shop-bottom-area mt-35">
      {layout === "list" ? (
        <ProductgridList
          layout={layout}
          category={category}
          search={search}
          brand={brand}
          b={b}
          keyword={keyword}
          limit={limit}
          spaceBottomClass="mb-25"
        />
      ) : (
        <>
          <ProductGridSix
            layout={layout}
            category={category}
            search={search}
            brand={brand}
            b={b}
            keyword={keyword}
            limit={limit}
            spaceBottomClass="mb-25"
          />
        </>
      )}
    </div>
  );
};

ShopProducts.propTypes = {
  layout: PropTypes.string,
};

export default ShopProducts;

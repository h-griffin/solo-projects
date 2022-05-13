import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const MobileNavMenu = ({ strings }) => {
  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        {/* <li>
          <Link to={process.env.PUBLIC_URL + "/"}>
            {strings["home"]}
          </Link>
         </li> */}
        <li className="menu-item-has-children">
          <Link>Electronics&nbsp;</Link>
          <ul className="sub-menu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/category/Electronics/TVs"}>
                TVs
              </Link>
            </li>
            <li>
              <Link
                to={process.env.PUBLIC_URL + "/category/Electronics/Computers"}
              >
                Computers
              </Link>
            </li>
            <li>
              <Link
                to={process.env.PUBLIC_URL + "/category/Electronics/Drones"}
              >
                Drones
              </Link>
            </li>
            <li>
              <Link
                to={process.env.PUBLIC_URL + "/category/Electronics/Phones"}
              >
                Phones
              </Link>
            </li>
            <li>
              <Link
                to={process.env.PUBLIC_URL + "/category/Electronics/Appliances"}
              >
                Appliances
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/category/Electronics/Other"}>
                Other
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link>Beauty&nbsp;</Link>
          <ul className="sub-menu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/category/Beauty/Hair-Care"}>
                Hair Care
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/category/Beauty/Skin-Care"}>
                Skin Care
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/category/Beauty/Makeup"}>
                Makeup
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/category/Beauty/Fragnance"}>
                Fragnance
              </Link>
            </li>
            <li>
              <Link
                to={process.env.PUBLIC_URL + "/category/Beauty/Beauty-Other"}
              >
                Other
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link>Furniture&nbsp;</Link>
          <ul className="sub-menu">
            <li>
              <Link
                to={process.env.PUBLIC_URL + "/category/Furniture/Living-Room"}
              >
                Living Room
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/category/Furniture/Bedroom"}>
                Bedroom
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/category/Furniture/Outdoor"}>
                Outdoor
              </Link>
            </li>
            <li>
              <Link
                to={process.env.PUBLIC_URL + "/category/Furniture/Home-Decor"}
              >
                Home Decor
              </Link>
            </li>
            <li>
              <Link
                to={process.env.PUBLIC_URL + "/category/Furniture/Lighting"}
              >
                Lighting
              </Link>
            </li>
            <li>
              <Link
                to={
                  process.env.PUBLIC_URL +
                  "/category/Furniture/Home-Improvement"
                }
              >
                Home Improvement
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/category/Furniture/Rugs"}>
                Rugs
              </Link>
            </li>
            <li>
              <Link
                to={
                  process.env.PUBLIC_URL + "/category/Furniture/Furniture-Other"
                }
              >
                Other
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link>Apparel&nbsp;</Link>
          <ul className="sub-menu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/category/Apparel/Men"}>
                Men
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/category/Apparel/Women"}>
                Women
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/category/Apparel/Children"}>
                Children
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/category/Apparel/Clothes"}>
                Clothes
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/category/Apparel/Shoes"}>
                Shoes
              </Link>
            </li>
            <li>
              <Link
                to={process.env.PUBLIC_URL + "/category/Apparel/Accessories"}
              >
                Accessories
              </Link>
            </li>
            <li>
              <Link
                to={process.env.PUBLIC_URL + "/category/Apparel/Apparel-Other"}
              >
                Other
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link>Pets&nbsp;</Link>
          <ul className="sub-menu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/category/Pets/Cats"}>
                Cats
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/category/Pets/Dogs"}>
                Dogs
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/category/Pets/Other"}>
                Other
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link>Other-Deals&nbsp;</Link>
          <ul className="sub-menu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/category/Other-Deals/Toys"}>
                Toys
              </Link>
            </li>
            <li>
              <Link
                to={
                  process.env.PUBLIC_URL +
                  "/category/Other-Deals/Travel-Vacations"
                }
              >
                Travel/Vacations
              </Link>
            </li>
            <li>
              <Link
                to={
                  process.env.PUBLIC_URL + "/category/Other-Deals/Credit-Cards"
                }
              >
                Credit Cards
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link>Brands&nbsp;</Link>
          <ul className="sub-menu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/brand/Brands/Amazon"}>
                Amazon
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/brand/Brands/Dell"}>
                Dell
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/brand/Brands/Best-Buy"}>
                Best Buy
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/brand/Brands/Walmart"}>
                Walmart
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/brand/Brands/Home-Depot"}>
                Home Depot
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/brand/Brands/Other-Stores"}>
                Other Stores
              </Link>
            </li>
          </ul>
        </li>
        {/*           
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>
            {strings["contact_us"]}
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

MobileNavMenu.propTypes = {
  strings: PropTypes.object,
};

export default multilanguage(MobileNavMenu);

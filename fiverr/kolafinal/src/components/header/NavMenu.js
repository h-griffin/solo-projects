import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const NavMenu = ({ strings, menuWhiteClass, sidebarMenu }) => {
  return (
    <div
      className={` ${
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      } `}
    >
      <nav>
        <ul>
          {/* <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              {strings["home"]}
            </Link>
           </li> */}
          <li>
            <Link>
              Electronics&nbsp;
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                <Link to={process.env.PUBLIC_URL + "/category/Electronics/TVs"}>
                  TVs
                </Link>
              </li>
              <li>
                <Link
                  to={
                    process.env.PUBLIC_URL + "/category/Electronics/Computers"
                  }
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
                  to={
                    process.env.PUBLIC_URL + "/category/Electronics/Appliances"
                  }
                >
                  Appliances
                </Link>
              </li>
              <li>
                <Link
                  to={process.env.PUBLIC_URL + "/category/Electronics/Other"}
                >
                  Other
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link>
              Beauty&nbsp;
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                <Link
                  to={process.env.PUBLIC_URL + "/category/Beauty/Hair-Care"}
                >
                  Hair Care
                </Link>
              </li>
              <li>
                <Link
                  to={process.env.PUBLIC_URL + "/category/Beauty/Skin-Care"}
                >
                  Skin Care
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/category/Beauty/Makeup"}>
                  Makeup
                </Link>
              </li>
              <li>
                <Link
                  to={process.env.PUBLIC_URL + "/category/Beauty/Fragnance"}
                >
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
          <li>
            <Link>
              Furniture&nbsp;
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                <Link
                  to={
                    process.env.PUBLIC_URL + "/category/Furniture/Living-Room"
                  }
                >
                  Living Room
                </Link>
              </li>
              <li>
                <Link
                  to={process.env.PUBLIC_URL + "/category/Furniture/Bedroom"}
                >
                  Bedroom
                </Link>
              </li>
              <li>
                <Link
                  to={process.env.PUBLIC_URL + "/category/Furniture/Outdoor"}
                >
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
                    process.env.PUBLIC_URL +
                    "/category/Furniture/Furniture-Other"
                  }
                >
                  Other
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link>
              Apparel&nbsp;
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
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
                <Link to={process.env.PUBLIC_URL + "/category/Children"}>
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
                  to={
                    process.env.PUBLIC_URL + "/category/Apparel/Apparel-Other"
                  }
                >
                  Other
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link>
              Pets&nbsp;
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
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
          <li>
            <Link>
              Other-Deals&nbsp;
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                <Link
                  to={process.env.PUBLIC_URL + "/category/Other-Deals/Toys"}
                >
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
                    process.env.PUBLIC_URL +
                    "/category/Other-Deals/Credit-Cards"
                  }
                >
                  Credit Cards
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link>
              Brands&nbsp;
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
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
                <Link
                  to={process.env.PUBLIC_URL + "/brand/Brands/Other-Stores"}
                >
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
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object,
};

export default multilanguage(NavMenu);

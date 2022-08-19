import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

//Import Logos
import CloseIcon from "@mui/icons-material/Close";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);

  const handleDropdown = () => setDropdown(!dropdown);
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <Link to="/" className="navbarTitle">
          PizzaPlaza.com
        </Link>
      </div>
      <div className="navbarRight">
        <div className="navbarIconResponsive" onClick={handleDropdown}>
          {dropdown ? <CloseIcon /> : <DehazeIcon />}
        </div>
        <div className={dropdown ? "navbarMenu active" : "navbarMenu"}>
          <div className="navbarItem">
            <Link to="/menu" className="navbarLinks">
              MENU
            </Link>
          </div>
          <div className="navbarItem">
            <Link to="/orders" className="navbarLinks">
              MY ORDERS
            </Link>
          </div>
          <div className="navbarItem">
            <Link to="/about" className="navbarLinks">
              ABOUT US
            </Link>
          </div>
          {dropdown ? (
            <div className="navbarItem">
              <div className="navbarLinks">CART</div>
            </div>
          ) : (
            <div className="navbarCart">
              <div className="cartContainer">
                <ShoppingCartIcon className="navbarIcon" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

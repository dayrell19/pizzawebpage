import React, { useState } from "react";
import "./Footer.css";

//Import Icons
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  const [contacts, setContacts] = useState<boolean>(false);

  const handleContacts = () => setContacts(!contacts);
  return (
    <div className="footerContainer">
      <div className="footerSocialMedia">
        <a
          href="https://twitter.com/Atletico?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          className="footerSocialTag"
        >
          <TwitterIcon className="socialIcon" />
        </a>
        <a
          href="https://www.instagram.com/atletico/?hl=en"
          className="footerSocialTag"
        >
          <InstagramIcon className="socialIcon" />
        </a>
        <a
          href="https://www.facebook.com/atletico/"
          className="footerSocialTag"
        >
          <FacebookIcon className="socialIcon" />
        </a>
      </div>
      <div className="footerContactsTag" onClick={handleContacts}>
        CONTACT US
      </div>
      <div className={contacts ? "footerContacts" : "footerContactsHidden"}>
        <p className="footerContactInfo">+1 234 5678</p>
        <p className="footerContactInfo">pizzaplaza@goodpizza.com</p>
      </div>
      <p className="footerDisclamer">
        Products above may not appear exactly as shown. Product, pricing and
        participation may vary by location. Delivery areas and charges may vary
        by location and minimum delivery order conditions may apply. All taxes
        and delivery charges extra. Regular pizza prices still apply. On offers
        in which an item must be purchased to access a discount on a succeeding
        item(s), the discount will be applied on the item(s) of equal or lesser
        value, unless otherwise indicated. Please note that for the purpose of
        completing your order, PizzaPlaza and/or independent PizzaPlaza
        franchisees must collect customer and order information.This information
        may be retained by PizzaPlaza and/or franchisees to help serve you
        better in the future. View our Privacy Policy. Measurements are
        approximations. Pizza sizes are based on pan size estimates only and may
        vary by location
      </p>
    </div>
  );
};

export default Footer;

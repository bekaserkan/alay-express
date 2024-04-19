import React from "react";
import "./Footer.css";
import icon1 from "../../img/соцсети (5).svg";
import icon2 from "../../img/соцсети (6).svg";
import icon3 from "../../img/соцсети (7).svg";
import icon4 from "../../img/соцсети (8).svg";
import logo from "../../img/logo.jpeg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="foot">
            <div className="icons">
              <a target="blank" href="https://wa.me/+996551578773">
                <img className="icon" src={icon1} alt="" />
              </a>
              <a target="blank" href="https://t.me/+FnqNh9X0FfgwODYy">
                <img className="icon" src={icon2} alt="" />
              </a>
              <a target="blank" href="https://www.instagram.com/alay_express">
                <img className="icon" src={icon3} alt="" />
              </a>
              <a
                target="blank"
                href="https://www.tiktok.com/@alay_express_osh?_t=8lJ9LjMZue9&_r=1"
              >
                <img className="icon" src={icon4} alt="" />
              </a>
            </div>
            <img src={logo} alt="" className="logo" />
            <div>
              <p className="address">г. Ош, ул.Салиева 25</p>
              <p className="text"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

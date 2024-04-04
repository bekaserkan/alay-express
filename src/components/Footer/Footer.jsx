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
              <a href="">
                <img className="icon" src={icon1} alt="" />
              </a>
              <a href="">
                <img className="icon" src={icon2} alt="" />
              </a>
              <a href="">
                <img className="icon" src={icon3} alt="" />
              </a>
              <a href="">
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

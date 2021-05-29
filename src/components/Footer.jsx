import React from "react";
// import { withRouter } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="pb-16">
      <div
        className="flex justify-center text-lg align-center"
        onClick={() => window.open("https://www.facebook.com/teammeraxes/")}
      >
        {year} © localhost443
      </div>
    </div>
  );
};

export default Footer;

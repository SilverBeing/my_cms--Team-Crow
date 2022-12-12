import React from "react";
import { Link } from "react-router-dom";
import PortfolioTemplate from "./PortfolioTemplate";

const PortfolioCategory = () => {
  return (
    <>
      <div className="main_content">
        <h2 className="all_temlates_heading">Choose portfolio template</h2>
        <div className="create_content">
          <Link to="">
            <p>Customize your own Template</p>
          </Link>
        </div>
        <div className="create_content">
          <h2 className="choose_template">Choose Templates</h2>
        </div>
        <PortfolioTemplate />
      </div>
    </>
  );
};

export default PortfolioCategory;

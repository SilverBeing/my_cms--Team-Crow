import React from "react";
import { Link } from "react-router-dom";
import card1 from "../Assets/Images/portfolio-image-card-1.png";
import card2 from "../Assets/Images/portfolio-image-card-2.png";
import card3 from "../Assets/Images/portfolio-image-card-3.png";
import card4 from "../Assets/Images/portfolio-image-card-4.png";
import card5 from "../Assets/Images/portfolio-image-card-5.png";
import card6 from "../Assets/Images/portfolio-image-card-6.png";
import card7 from "../Assets/Images/portfolio-image-card-7.png";
import card8 from "../Assets/Images/portfolio-image-card-8.png";

const PortFolioTemplate = () => {
  return (
    <>
      <div className="templates">
        <div className="hover-info">
          <img src={card1} alt="" />
          <div className="display-link">
            <Link to="#" className="preview">
              Preview
            </Link>
            <Link to="/editor" className="edit">
              Edit Template
            </Link>
          </div>
        </div>

        <div className="hover-info">
          <img src={card2} alt="" />
          <div className="display-link">
            <Link to="#" className="preview">
              Preview
            </Link>
            <Link to="/editor" className="edit">
              Edit Template
            </Link>
          </div>
        </div>
      </div>
      <div className="templates">
        <div className="hover-info">
          <img src={card3} alt="" />
          <div className="display-link">
            <Link to="#" className="preview">
              Preview
            </Link>
            <Link to="/editor" className="edit">
              Edit Template
            </Link>
          </div>
        </div>

        <div className="hover-info">
          <img src={card4} alt="" />
          <div className="display-link">
            <Link to="#" className="preview">
              Preview
            </Link>
            <Link to="/editor" className="edit">
              Edit Template
            </Link>
          </div>
        </div>
      </div>
      <div className="templates">
        <div className="hover-info">
          <img src={card5} alt="" />
          <div className="display-link">
            <Link to="#" className="preview">
              Preview
            </Link>
            <Link to="/editor" className="edit">
              Edit Template
            </Link>
          </div>
        </div>

        <div className="hover-info">
          <img src={card6} alt="" />
          <div className="display-link">
            <Link to="#" className="preview">
              Preview
            </Link>
            <Link to="/editor" className="edit">
              Edit Template
            </Link>
          </div>
        </div>
      </div>
      <div className="templates">
        <div className="hover-info">
          <img src={card7} alt="" />
          <div className="display-link">
            <Link to="#" className="preview">
              Preview
            </Link>
            <Link to="/editor" className="edit">
              Edit Template
            </Link>
          </div>
        </div>

        <div className="hover-info">
          <img src={card8} alt="" />
          <div className="display-link">
            <Link to="#" className="preview">
              Preview
            </Link>
            <Link to="/editor" className="edit">
              Edit Template
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortFolioTemplate;

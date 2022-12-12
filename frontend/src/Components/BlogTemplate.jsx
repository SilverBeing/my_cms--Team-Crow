import React from "react";
import { Link } from "react-router-dom";

const BlogTemplate = () => {
  return (
    <>
      <div className="templates">
        <div className="hover-info">
          <img
            src="https://res.cloudinary.com/dxqgshzri/image/upload/v1670831310/IMG_1510_lsabbc.png"
            alt=""
          />
          <div className="display-link">
            <Link to="#" className="preview">
              Preview
            </Link>
            <Link to="/editor" className="edit">
              Edit Template
            </Link>
          </div>
          <figcaption>Photography</figcaption>
        </div>
        <div className="hover-info">
          <img
            src="https://res.cloudinary.com/dxqgshzri/image/upload/v1670831333/IMG_1511_tudt07.png"
            alt=""
          />
          <div className="display-link">
            <Link to="#" className="preview">
              Preview
            </Link>
            <Link to="/editor" className="edit">
              Edit Template
            </Link>
          </div>
          <figcaption>Fashion</figcaption>
        </div>
      </div>
      <div className="templates">
        <div className="hover-info">
          <img
            src="https://res.cloudinary.com/dxqgshzri/image/upload/v1670831342/IMG_1512_vbcsk9.png"
            alt=""
          />

          <div className="display-link">
            <Link to="#" className="preview">
              Preview
            </Link>
            <Link to="/editor" className="edit">
              Edit Template
            </Link>
          </div>
          <figcaption>Sport</figcaption>
        </div>
        <div className="hover-info">
          <img
            src="https://res.cloudinary.com/dxqgshzri/image/upload/v1670831344/IMG_1513_nrilft.png"
            alt=""
          />

          <div className="display-link">
            <Link to="#" className="preview">
              Preview
            </Link>
            <Link to="/editor" className="edit">
              Edit Template
            </Link>
          </div>
          <figcaption>Writing</figcaption>
        </div>
      </div>
      <div className="templates">
        <div className="hover-info">
          <img
            src="https://res.cloudinary.com/dxqgshzri/image/upload/v1670831346/IMG_1514_ipoqie.png"
            alt=""
          />
          <div className="display-link">
            <Link to="#" className="preview">
              Preview
            </Link>
            <Link to="/editor" className="edit">
              Edit Template
            </Link>
          </div>
          <figcaption>Movies</figcaption>
        </div>
        <div className="hover-info">
          <img
            src="https://res.cloudinary.com/dxqgshzri/image/upload/v1670831346/IMG_1515_vj3cvz.png"
            alt=""
          />
          <div className="display-link">
            <Link to="#" className="preview">
              Preview
            </Link>
            <Link to="/editor" className="edit">
              Edit Template
            </Link>
          </div>
          <figcaption>Travel</figcaption>
        </div>
      </div>
    </>
  );
};

export default BlogTemplate;

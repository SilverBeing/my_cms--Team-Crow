import React from "react";
import { Link } from "react-router-dom";

const BusinessTemplate = () => {
  return (
    <>
      <div className="templates">
        <div className="hover-info">
          <img
            src="https://res.cloudinary.com/dxqgshzri/image/upload/v1670829147/zuri1_tvzaoa.png"
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
        </div>
        <div className="hover-info">
          <img
            src="https://res.cloudinary.com/dxqgshzri/image/upload/v1670829148/zuri2_pv9a1f.png"
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
        </div>
      </div>
      <div className="templates">
        <div className="hover-info">
          <img
            src="https://res.cloudinary.com/dxqgshzri/image/upload/v1670832168/zuir3_z5n91f.png"
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
        </div>
        <div className="hover-info">
          <img
            src="https://res.cloudinary.com/dxqgshzri/image/upload/v1670829149/zuri4_rfhfbv.png"
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
        </div>
      </div>
      <div className="templates">
        <div className="hover-info">
          <img
            src="https://res.cloudinary.com/dxqgshzri/image/upload/v1670829144/zuri5_tlcwid.png"
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
        </div>
        <div className="hover-info">
          <img
            src="https://res.cloudinary.com/dxqgshzri/image/upload/v1670829146/zuri6_nqqac7.png"
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
        </div>
      </div>
    </>
  );
};

export default BusinessTemplate;

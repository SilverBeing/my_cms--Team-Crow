import React from "react";

import { Link } from "react-router-dom";
import profileImage from "../Assets/Images/profile-image.png";

const UserAccount = () => {
  return (
    <>
      <div class="main_content">
        <div class="add_header_box">
          <Link to="#">
            <p class="header_text ">+ Add header</p>
          </Link>
          <Link to="#">
            <img src={profileImage} alt="" class="header_profile_image" />
          </Link>
          <button class="edit_profile_btn" type="button">
            Edit Profile
          </button>
        </div>

        <div>
          <table id="user-table">
            <tr>
              <td>Name </td>
              <td>Mirabel Okoro</td>
            </tr>

            <tr>
              <td>Website </td>
              <td>http://www.crow.mirabelokoro</td>
            </tr>

            <tr>
              <td>City </td>
              <td>Porthacout, rivers state</td>
            </tr>
            <tr>
              <td>Bio </td>
              <td class="border_bio">
                <i>
                  Mirabel okoor. a ui/ux designer, content creator and loves to
                  travel
                </i>
              </td>{" "}
            </tr>
            <tr>
              <td>Social Media Links </td>
              <td>
                <Link to="#" class="facebook">
                  <i class="fa-brands fa-facebook"></i>
                </Link>
                <Link
                  to="http://instagram.com/Miraokoro_official"
                  class="instagram"
                >
                  <i class="fa-brands fa-instagram"></i>
                </Link>
              </td>{" "}
            </tr>
            <tr>
              <td class="pt-5 fw-bold">
                Private Profile <i class="fa fa-toggle-on h3 "></i> <br></br>{" "}
                <span class="fw-normal">
                  Can be seen by everyone you follow
                </span>
              </td>
            </tr>
            <tr>
              <td class="pt-3 fw-bold">Date of birth </td>
              <td class="pt-3">00/00/0000</td>
            </tr>
            <tr>
              <td class="fw-bold">Phone number </td>
              <td>+2348000000</td>
            </tr>
            <tr>
              <td class="fw-bold">Alternative contact </td>
              <td>example@example.com</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserAccount;

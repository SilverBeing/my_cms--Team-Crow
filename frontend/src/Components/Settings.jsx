import React from "react";
import { Link } from "react-router-dom";
import Frame1 from "../Assets/Images/Frame-1.png";
const Settings = () => {
  return (
    <>
      <section style={{ "background-color": "#FBF9F6" }}>
        <section class="mt-5">
          <div class="container py-5">
            <div id="box">
              <img
                src={Frame1}
                class="rounded-circle avatar"
                height="70"
                alt=""
                loading="lazy"
                id="box_img"
              />
            </div>

            <div
              class="row row-cols-1 row-cols-lg-2"
              id="card"
              style={{ "background-color": "#FBF9F6", width: "" }}
            >
              <div class="col card-left" style={{ width: "30%" }}>
                <h4 class="fw-bold mt-3">User Settings</h4>
                <p>Change your preferred settings</p>
                <div class="card mt-3">
                  <div class="card-body">
                    <h5 class="card-title fw-bold mb-4">Preferences</h5>
                    <Link to="#" class="card-link p-5 fw-bold">
                      Privacy & Display
                    </Link>
                    <br></br>
                    <Link to="#" class="card-link p-5">
                      Notification
                    </Link>
                    <br></br>
                    <Link to="#" class="card-link p-5">
                      Delete Account
                    </Link>
                  </div>
                </div>

                <div class="card mt-3" style={{ width: "" }}>
                  <div class="card-body">
                    <h5 class="card-title fw-bold">General Settings</h5>
                    <Link to="#" class="card-link p-5">
                      Privacy & Display
                    </Link>{" "}
                    <br></br>
                    <Link to="#" class="card-link p-5 fw-bold">
                      Notification
                    </Link>
                    <br></br>
                    <Link to="#" class="card-link p-5">
                      Delete Account
                    </Link>
                  </div>
                </div>

                <div class="card mt-3" style={{ width: "" }}>
                  <div class="card-body">
                    <h5 class="card-title fw-bold">General Settings</h5>
                    <Link to="#" class="card-link p-5">
                      Privacy & Display
                    </Link>{" "}
                    <br></br>
                    <Link to="#" class="card-link p-5">
                      Notification
                    </Link>
                    <br></br>
                    <Link to="#" class="card-link p-5 fw-bold">
                      Delete Account
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col border border-success rounded card-right">
                <h4 class="p-3 fw-bold">Privacy & Display Settings</h4>
                <div class="border border-success rounded">
                  <form action="#" method="POST" class="p-3 setting-form">
                    <h5 class="fw-bold">Users who can message me directly</h5>
                    <div class="form-group">
                      <input type="radio" class="f-1" />
                      <label for="#">
                        <small>Anyone</small>
                      </label>
                      <input type="radio" />
                      <label for="#">
                        <small>Only people that i follow</small>
                      </label>
                    </div>
                    <h5 class="fw-bold mt-4">
                      Users who can tag me in Link comment
                    </h5>
                    <div class="form-group">
                      <input type="radio" />
                      <label for="#">
                        <small>Anyone</small>
                      </label>
                      <input type="radio" />
                      <label for="#">
                        <small>Only people that i follow</small>
                      </label>
                      <input type="radio" />
                      <label for="#">
                        <small>No one</small>
                      </label>
                    </div>
                    <h5 class="fw-bold mt-4">Preffered theme</h5>
                    <div class="form-group">
                      <input type="radio" />
                      <label for="#">
                        <small>Light</small>
                      </label>
                      <input type="radio" />
                      <label for="#">
                        <small>Dark</small>
                      </label>
                    </div>
                    <div class="border border-success rounded p-3 mt-5">
                      <h4>Email notification</h4>
                      <h5 class="fw-bold mt-5">Email Notification</h5>
                      <p>
                        Get notifications to stay up to date with the Crow
                        Community
                      </p>
                      <div class="form-group">
                        <input type="radio" />
                        <label for="#">
                          <small>Yes</small>
                        </label>

                        <input type="radio" />
                        <label for="#">
                          <small>No</small>
                        </label>
                      </div>

                      <h5 class="fw-bold mt-4">
                        Actionable Email Notification
                      </h5>
                      <p>Email me when:</p>
                      <div class="form-group">
                        <input type="checkbox" />
                        <label for="#">
                          <small>Someone sends me Link direct message</small>
                        </label>
                        <br></br>
                        <input type="checkbox" />
                        <label for="#">
                          <small>
                            Invites me to collaborate on Link project
                          </small>
                        </label>
                        <br></br>
                        <input type="checkbox" />
                        <label for="#">
                          <small>Anyone follows me</small>
                        </label>
                      </div>
                    </div>
                    <h5 class="mt-5">Delete Account</h5>
                    <p>
                      Would you like to delete your Crow account? This action
                      will all your content and datLink associated with it.
                    </p>
                    <Link to="#" class="text-primary">
                      Delete my account
                    </Link>{" "}
                    <br></br>
                    <button type="submit" class="btn btn-primary mt-5">
                      Cancle
                    </button>
                    <button type="submit" class="btn btn-success mt-5">
                      Save Changes
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Settings;

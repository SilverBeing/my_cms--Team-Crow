import React from "react";
import UnregisteredUserNavbar from "../Components/UnregisteredUserNavbar";
import { Link } from "react-router-dom";
import FAQ from "../Components/FAQ";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <UnregisteredUserNavbar />
      <section>
        <div
          style={{ "background-color": "#bdd0bb", "border-radius": "0px" }}
          className="mb-5 hero-page"
        >
          <div className="container text-center justify-content-center align-items-center py-5">
            <h1
              className="m-auto p-3"
              style={{ "max-width": "820px", "font-weight": "bold" }}
            >
              Customize build and launch your website easily for efficient
              business and personal growth
            </h1>
            <p className="m-auto p-3" style={{ "max-width": "880px" }}>
              We help developers and writers create and customize scalable
              websites faster and easier using our unique templates according to
              your preference.We also give you the opportunity to get Link
              website for free
            </p>

            <div className="mt-4">
              <Link to="/products" className="btn btn-outline-success">
                Browse templates
              </Link>
              <Link to="/createdemo" className="btn btn-success">
                Get a Demo website
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container ">
        <div className="row col-12 mx-auto w-100 client-heading-1">
          <h2>Our Clients</h2>
        </div>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 clients-container ">
          <div className="col client-image">
            <img
              src="https://res.cloudinary.com/dxqgshzri/image/upload/v1670569833/hn_ht6sxw.png"
              alt="HNG"
            />
          </div>

          <div className="col client-image">
            <img
              src="https://res.cloudinary.com/dxqgshzri/image/upload/v1670567878/zuir_fmcowm.png"
              alt="ZURI"
              className="img-fluid ml-5"
            />
          </div>

          <div className="col client-image">
            <img
              src="https://res.cloudinary.com/dxqgshzri/image/upload/v1670567878/payoneer_uatcxu.png"
              alt="PAYONEER"
            />
          </div>

          <div className="col client-image">
            <img
              src="https://res.cloudinary.com/dxqgshzri/image/upload/v1670567878/hotels_tlb7wb.png"
              alt="HOTELS.NG"
            />
          </div>
        </div>
      </div>
      <section>
        <div className="container py-5">
          <div className="row">
            <div className="col-sm justify-content-center mt-5">
              <img
                src="https://res.cloudinary.com/dxqgshzri/image/upload/v1670567682/IMG_1487_e2eapd.png"
                alt="About-img"
                className="img-fluid"
                style={{
                  "max-width": "387px",
                  "max-height": "360px",
                  position: "relative",
                  left: "20px",
                }}
              />
            </div>

            <div className="col-sm text- mt-5">
              <h2 className="font-weight-bold">About Us</h2>
              <p
                className="font-weight-bold mt-4"
                style={{ "line-height": "2em" }}
              >
                Crows is Link content mananagement Platform that helps
                designers, developers and content creators build websites to
                showcase their work and portfolio. this helps them get connected
                to their target audience. Crow lets youstart, grow, and manage
                your business, portfolio and pesrsonal growth.
              </p>
              <Link to="" className="btn btn-success mt-5">
                Get started
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div style={{ "background-color": "#bdd0bb", color: "#000" }}>
          <div className="container py-5">
            <h2 className="text-center font-weight-bold">How it works</h2>

            <div className="row row-cols-1 row-cols-lg-2 mt-5">
              <div className="col text-center">
                <div
                  className="col-sm"
                  style={{
                    "min-width": "453px",
                    "min-height": "281px",
                    "margin-top": "150px",
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/dxqgshzri/image/upload/v1670567677/IMG_1488_mcus2s.png"
                    alt="laptop-img"
                    className="img-fluid"
                  />
                </div>
              </div>

              <div className="col">
                <h6 className="mt-4 font-weight-bold">Pick Link Template</h6>
                <p
                  className="mt-3"
                  style={{ width: "400px", "line-height": "1.2em" }}
                >
                  Pick your template of choice based on the three different
                  categories of template that we have, the personal website
                  template, the portfolio template and the blog template for
                  writers
                </p>

                <h6 className="mt-4 font-weight-bold">
                  Customize with persosnal info
                </h6>
                <p
                  className="mt-3"
                  style={{ width: "400px", "line-height": "1.2em" }}
                >
                  Start by naming your site and adding your personal
                  information, these may include, your site title, headline,
                  body copy and address. These informations helps in getting the
                  right data.
                </p>

                <h6 className="mt-4 font-weight-bold">
                  Add link and Upload Image
                </h6>
                <p
                  className="mt-3"
                  style={{ width: "400px", "line-height": "1.2em" }}
                >
                  Here is where you include Link link to an external site.
                  either an email or Link personal link.Then upload any image of
                  your choice that suits the website you are trying to create
                </p>

                <h6 className="mt-4 font-weight-bold">Publish</h6>
                <p
                  className="mt-3"
                  style={{ width: "400px", "line-height": "1.2em" }}
                >
                  The final phase where you preview details and publish your
                  site that have been built.
                </p>

                <div className="mt-5">
                  <Link to="/products" className="btn btn-outline-success">
                    Browse templates
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <div className="client-heading">
            <h2 className="text-center font-weight-bold">Value we provided</h2>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-lg-3 g-3 mt-5">
            <div className="col value-container">
              <div className="p-4 border bg-light">
                <div className="text-center">
                  <div
                    className="m-auto"
                    style={{
                      "background-color": "#bdd0bb",
                      border: "1px solid #bdd0bb",
                      "border-radius": "50px",
                      width: "60px",
                      padding: "10px",
                      color: "#2A6625",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="fa fa-menu-button"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h8A1.5 1.5 0 0 1 11 1.5v2A1.5 1.5 0 0 1 9.5 5h-8A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-8z" />
                      <path d="m7.823 2.823-.396-.396A.25.25 0 0 1 7.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                    </svg>
                  </div>

                  <h3 className="font-weight-bold mt-3">
                    Customizable templates
                  </h3>

                  <p className="mt-3">
                    We help individuals and writers create pesonal websites
                    using customized templates
                  </p>
                </div>
              </div>
            </div>

            <div className="col value-container">
              <div className="p-4 border bg-light">
                <div className="text-center">
                  <div
                    className="m-auto"
                    style={{
                      "background-color": "#bdd0bb",
                      border: "1px solid #bdd0bb",
                      "border-radius": "50px",
                      width: "60px",
                      padding: "10px",
                      color: "#2A6625",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-person-check"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                      <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
                    </svg>
                  </div>

                  <h3 className="font-weight-bold mt-3">Productivity</h3>

                  <p className="mt-3">
                    Crow will help you and your team to create and manage better
                    content.We boost effectiveness of your skill or contents
                    with our platform
                  </p>
                </div>
              </div>
            </div>

            <div className="col value-container">
              <div className="p-4 border bg-light">
                <div className="text-center">
                  <div
                    className="m-auto"
                    style={{
                      "background-color": "#bdd0bb",
                      border: "1px solid #bdd0bb",
                      "border-radius": "50px",
                      width: "60px",
                      padding: "10px",
                      color: "#2A6625",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-emoji-smile"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                    </svg>
                  </div>

                  <h3 className="font-weight-bold mt-3">
                    Safety and efficiency
                  </h3>

                  <p className="mt-3">
                    Millions of users trusts crow to manage their website. Our
                    tech team and customers services work 24/7 to provide
                    maximum safety for our users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5 client-heading">
          <h2 className="text-center font-weight-bold">
            See what our clients are saying
          </h2>

          <div className="mt-4">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-sm mt-5">
                      <img
                        src="https://res.cloudinary.com/dxqgshzri/image/upload/v1670567679/IMG_1489_jtyek8.png"
                        className="d-block img-fluid m-auto"
                        alt="first_img"
                        style={{ width: "257px", height: "257px" }}
                      />
                    </div>

                    <div className="col-sm mt-5">
                      <div style={{ width: "350px" }}>
                        <p className="font-weight-bold mt-4">
                          Crow is half the price and twice the speed. I looked
                          for a more reliable and flexible platform for creating
                          website for my contents, then i found Crow. ever since
                          then, its been a wonderful experience
                        </p>
                        <p>David West</p>
                        <p>
                          <strong>Co Host</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev "
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;

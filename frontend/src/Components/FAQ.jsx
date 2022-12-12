import React from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <>
      <section>
        <div className="container py-5">
          <h2 className="font-weight-bold text-center">
            Frequently Asked Questions
          </h2>

          <div className="accordion mt-5" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <strong>What is a website builder?</strong>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus ad totam quasi neque facilis, ducimus nulla vel at
                    hic eaque.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <strong>
                    Do i need any coding knowledge to create my website?
                  </strong>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus ad totam quasi neque facilis, ducimus nulla vel at
                    hic eaque.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <strong>
                    Is it easy to make a website with Crow website builder?
                  </strong>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus ad totam quasi neque facilis, ducimus nulla vel at
                    hic eaque.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <strong>Will my Crow website be mobile friendly?</strong>
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus ad totam quasi neque facilis, ducimus nulla vel at
                    hic eaque.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <strong>Can i host a website i created for free?</strong>
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus ad totam quasi neque facilis, ducimus nulla vel at
                    hic eaque.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <Link to="#!">
              <button type="button" className="btn btn-outline-success">
                Load More Questions
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;

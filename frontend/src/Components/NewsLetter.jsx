import React from "react";

const NewsLetter = () => {
  return (
    <>
      <section>
        <div class="container py-5  text-center ">
          <div
            style={{
              "background-color": "#BDD0BB",
              "border-radius": "20px",
              color: "#000",
            }}
            class="py-5"
          >
            <div class="m-auto" style={{ "max-width": "500px" }}>
              <h3 class="font-weight-bold mt-2">
                Let us keep you updated always{" "}
              </h3>
              <p class="mt-4">
                Subscribe to our newsletter to stay updated and notified about
                our new product and services
              </p>
            </div>

            <form action="#" method="POST" class="mt-5">
              <input
                type="email"
                placeholder="Enter email address"
                class="form-group"
                style={{
                  width: "400px",
                  padding: "7px",
                  "border-radius": "5px",
                  border: "1px solid #fff",
                  background: "transparent",
                }}
                required
              />
              <button class="btn btn-success">Subcribe Now</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;

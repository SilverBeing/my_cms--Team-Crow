import React, { useState } from "react";
import Chart from "react-apexcharts";
import blogImage1 from "../Assets/Images/blog-image-1.png";
import blogImage2 from "../Assets/Images/blog-image-2.png";
import blogImage3 from "../Assets/Images/blog-image-3.png";
import frame1 from "../Assets/Images/Frame-1.png";

const Insight = () => {
  const [graph, setgraph] = useState({
    series: [
      {
        name: "Views",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Visits",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Shares",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    yaxis: {
      title: {
        text: "Insights",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return " " + val + " thousands";
        },
      },
    },
  });

  return (
    <>
      <div className="main_content-insight">
        <div className="box-card">
          <div className="card_box_item_1">
            <i className="fa-solid fa-user-tie card_icon rounded-9"></i>
            <span className="card_title">Followers</span>
            <h2 className="fw-bold ">800.341</h2>
            <p>30.1% than last month</p>
          </div>
          <div className="card_box_item_1">
            <i className="fa-sharp fa-solid fa-eye card_icon rounded-9"></i>{" "}
            <span className="card_title">Views</span>
            <h2 className="fw-bold">400.217</h2>
            <p>30.1% than last month</p>
          </div>
          <div className="card_box_item_1">
            <i className="fa-solid fa-comment card_icon rounded-9"></i>
            <span className="card_title">Comments</span>
            <h2 className="fw-bold">2000</h2>
            <p>30.1% than last month</p>
          </div>

          <div className="profile_stats ">
            <p className="fw-bold">3000</p>
            <p className="small">Posts</p>
          </div>
          <div className="profile_stats ">
            <p className="fw-bold">800k</p>
            <p className="small">Subscribers</p>
          </div>
          <div className="profile_stats ">
            <p className="fw-bold">2000</p>
            <p className="small">Shares</p>
          </div>
        </div>
        <div className="col-lg-6 bar_chart">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title fw-bold">Account Insight Overtime</h5>
            </div>
            <div id="columnChart">
              <Chart
                series={graph.series}
                chart={graph.chart}
                options={graph.plotOptions}
              />
            </div>
          </div>
        </div>
        <div className="profile_card ">
          <div>
            <h5 className="fw-bold " style={{ "font-size": "20px" }}>
              Account
            </h5>
            <img src={frame1} alt="" />
            <p className="fw-bold mt-3" style={{ "font-size": "20px" }}>
              Mirabel Okoro
            </p>
            <p style={{ "font-size": "12px" }}>@mirabelokoro_official</p>
          </div>
        </div>
        <div className="scheduled_post">
          <h5 className="card-title fw-bold">Schedule Posts</h5>
          <div className="scheduled_post_content">
            <div className="blog_image">
              <img src={blogImage1} alt="" />
            </div>
            <div>
              <p className="blog_card_title fw-bold">
                8 hacks that will make you a better designer
              </p>
              <p className="blog_card_title_small ">Dec 10, 2022. 10.00AM</p>
            </div>
          </div>
          <div className="scheduled_post_content post_2">
            <div className="blog_image">
              <img src={blogImage2} alt="" />
            </div>
            <div>
              <p className="blog_card_title fw-bold">
                How to create moodboard for a product
              </p>
              <p className="blog_card_title_small ">Dec 10, 2022. 10.00AM</p>
            </div>
          </div>
          <div className="scheduled_post_content post_3 ">
            <div className="blog_image">
              <img src={blogImage3} alt="" />
            </div>
            <div>
              <p className="blog_card_title fw-bold">All about CMS websites</p>
              <p className="blog_card_title_small ">Dec 10, 2022. 10.00AM</p>
            </div>
          </div>
        </div>
        <div className="recent_upload">
          <div className="recent_upload_content">
            <h2>Recent Uploads</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="fw-bold">
                    Title
                  </th>
                  <th scope="col" className="fw-bold">
                    Dates
                  </th>
                  <th scope="col" className="fw-bold">
                    Views
                  </th>
                  <th scope="col" className="fw-bold">
                    Likes
                  </th>
                  <th scope="col" className="fw-bold">
                    Comments
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">How to create moodboad on figma</th>
                  <td>Dec 01, 2022</td>
                  <td>600,540</td>
                  <td>10,000</td>
                  <td>3000</td>
                </tr>
                <tr>
                  <th scope="row">How to create moodboad on figma</th>
                  <td>Dec 01, 2022</td>
                  <td>600,540</td>
                  <td>10,000</td>
                  <td>3000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insight;

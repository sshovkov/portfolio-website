import React, { useState } from "react";
import "../styles/Experience.css";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("Recurse");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <SectionTitle title="experience" />

      <div className="Experience">
        <div className="Tabs">
          <h3
            className={activeTab === "Recurse" ? "active" : ""}
            onClick={() => handleTabClick("Recurse")}
          >
            Recurse Center
          </h3>
          <h3
            className={activeTab === "Culdesac" ? "active" : ""}
            onClick={() => handleTabClick("Culdesac")}
          >
            Culdesac
          </h3>
          <h3
            className={activeTab === "Intel" ? "active" : ""}
            onClick={() => handleTabClick("Intel")}
          >
            Intel
          </h3>
        </div>
        <div className="RoleDescription">
          {activeTab === "Recurse" && (
            <span>
              <h3>Learning at Recurse Center</h3>
              <p>Fall 2023 Batch</p>
              <ul>
                <li>
                  Recurse Center is an entirely self-directed, community-driven
                  programming retreat dedicated to learning and growth.
                </li>
                <li>
                  Worked on and documented a variety of projects, including
                  implementing a handful of major ML algorithms from scratch
                  using Python and Numpy, a hand recognition model that
                  translates movement into art, and an LED display station of
                  minutes remaining until the next train using a Raspberry Pi.
                </li>
              </ul>
            </span>
          )}
          {activeTab === "Culdesac" && (
            <div className="Culdesac">
              <h3>Software Engineer at Culdesac (YC S18)</h3>
              <p>March 2020 - July 2023</p>
              <ul>
                <li>
                  Owned the architecture and implementation of the resident
                  billing and payments platform.
                </li>
                <li>
                  Integrated 10 different third-party apps and built an
                  end-to-end resident experience platform across payments,
                  utilities, customer service, safety, and maintenance.
                </li>
                <li>
                  Founded the data team. Set up the initial data warehouse, data
                  pipelines, and analytics instrumentation for early business
                  decisions. Facilitated data-driven business decisions with
                  executive leadership for two years across sales, marketing,
                  ops, and growth.
                </li>
                <li>
                  Recruited and managed a team of four interns. Provided
                  comprehensive professional and technical mentorship in
                  navigating our data infrastructure, tech stack, and platform
                  of independents approach.
                </li>
              </ul>
            </div>
          )}
          {activeTab === "Intel" && (
            <span className="Intel">
              <h3>Software Engineer Intern at Intel</h3>
              <p>January 2019 - March 2020</p>
              <ul>
                <li>
                  Developed virtual machines and software to reduce overhead and
                  increase productivity for automation engineers.
                </li>
                <li>
                  Participated in multidisciplinary research and collaborated on
                  design, development, and utilization of productivity
                  enhancement tools and electronic data processing systems
                  software.
                </li>
                <li>
                  Scaled existing enterprise software systems and built data
                  pipelines for extensive data loads.
                </li>
              </ul>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import PageHeader from "./PageHeader";
import Header from './Header'
import Footer from './Footer'

function About() {
  return (
    <>
    <Header/>
    <PageHeader/>
    <div className="about section">
      <div className="container">
        <div className="row gy-4 align-items-center justify-content-between">
          <div className="col-xl-12">
            <span className="about-meta">ABOUT THE SYMPOSIUM</span>
            <h2 className="about-title">
              The Department of Electrical Engineering, IIEST Shibpur
            </h2>
            <p className="about-description">
              The Department of Electrical Engineering, IIEST Shibpur, is proud
              to host the{" "}
              <b>
                Anusandhan National Research Foundation (ANRF) sponsored 5-Day
                National Symposium on Bridging Academia and Industry for
                NextGen Technologies in Electrical Engineering (AI-NxtGen-EE
                2024)
              </b>
              . Scheduled from <b>3rd to 7th December 2024,</b> this premier
              event is designed to strengthen academia-industry partnerships,
              foster innovation, and enable a seamless career transition for
              students from academia to industry.
              <br />
              <br />
              Aligned with the objectives of the{" "}
              <b>National Education Policy (NEP) 2020</b>, the symposium
              emphasizes experiential learning and collaboration, highlighting
              the critical role of bridging the gap between academic research
              and industrial applications. It aims to prepare students and
              young professionals for emerging opportunities in cutting-edge
              technologies, contributing to India's vision of{" "}
              <b>"Viksit Bharat 2047."</b>
            </p>

            <div className="row feature-list-wrapper">
              <div className="col-md-12">
                <ul className="feature-list">
                  <p>The symposium will feature:</p>
                  <li>
                    <i className="bi bi-fast-forward-circle" />{" "}
                    <b>Technical Sessions: </b>Delivered by leading academicians
                    from IITs, these sessions will spotlight groundbreaking
                    research in electric vehicles, smart grids, robotics,
                    satellites, and advanced control systems.
                  </li>
                  <li>
                    <i className="bi bi-fast-forward-circle" />{" "}
                    <b>Keynote Addresses:</b> Presented by eminent scientists
                    from ISRO and industry experts, these addresses will
                    explore national priorities and innovations driving India’s
                    technological future.
                  </li>
                  <li>
                    <i className="bi bi-fast-forward-circle" />{" "}
                    <b>Presentations:</b> Showcasing the latest developments in
                    electric vehicles, renewable energy integration, smart
                    grids, and control systems.
                  </li>
                  <li>
                    <i className="bi bi-fast-forward-circle" />{" "}
                    <b>Panel Discussion:</b> A high-impact dialogue titled
                    "Engineering the Future: A Joint Vision for Academia and
                    Industry" featuring leaders from industry and academia.
                  </li>
                </ul>
              </div>
            </div>

            <p className="about-description">
              The symposium is designed to facilitate meaningful exchanges
              between academicians, researchers, and industry professionals. It
              aims to bridge the knowledge-to-practice gap by encouraging
              partnerships that drive innovation, foster entrepreneurship, and
              open avenues for career growth. By emphasizing the practical
              application of advanced concepts, this event seeks to prepare
              students and researchers for future challenges and opportunities
              in evolving domains like electric mobility, smart automation, and
              intelligent systems.
            </p>

            <div className="row feature-list-wrapper">
              <div className="col-md-12">
                <ul className="feature-list">
                  <p>
                    Who Should Attend:
                    <br />
                    <span className="about-description">
                      We warmly invite academicians, industry professionals,
                      researchers, and students to participate actively in this
                      symposium. It offers a unique opportunity to:
                    </span>
                  </p>
                  <li>
                    <i className="bi bi-fast-forward-circle" /> Interact with
                    experts shaping next-generation technologies.
                  </li>
                  <li>
                    <i className="bi bi-fast-forward-circle" /> Gain insights
                    into <b>state-of-the-art research</b> and{" "}
                    <b>industrial trends.</b>
                  </li>
                  <li>
                    <i className="bi bi-fast-forward-circle" /> Explore{" "}
                    <b>collaborative opportunities</b> for{" "}
                    <b>impactful innovation.</b>
                  </li>
                </ul>
                <p className="about-description">
                  Join us at <b>AI-NxtGen-EE 2024</b> to be a part of this
                  transformative journey towards academic excellence and
                  industrial innovation, driving sustainable growth and progress
                  in electrical engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default About;

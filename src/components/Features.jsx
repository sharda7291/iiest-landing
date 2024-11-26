import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Features() {
  return (
    <section className="features section">
      {/* Section Title */}
      <div className="container section-title">
        <h4>ABOUT THE INSTITUTE</h4>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        {/* Tabs Navigation */}
        <div className="d-flex justify-content-center">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                className="nav-link active"
                data-bs-toggle="tab"
                href="#features-tab-1"
              >
                <h4>Modisit</h4>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#features-tab-2"
              >
                <h4>Praesenti</h4>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#features-tab-3"
              >
                <h4>Explica</h4>
              </a>
            </li>
          </ul>
        </div>

        {/* Tabs Content */}
        <div className="tab-content mt-4">
          <div className="tab-pane fade show active" id="features-tab-1">
            <h3>Voluptatem dignissimos provident</h3>
            <p>Tab 1 content goes here...</p>
          </div>
          <div className="tab-pane fade" id="features-tab-2">
            <h3>Neque exercitationem debitis</h3>
            <p>Tab 2 content goes here...</p>
          </div>
          <div className="tab-pane fade" id="features-tab-3">
            <h3>Voluptatibus commodi accusamu</h3>
            <p>Tab 3 content goes here...</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

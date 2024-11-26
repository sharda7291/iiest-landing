import React, { useState } from "react";
import { Link } from "react-router-dom";
import portfolioData from "../components/portfolioData.jsx"; 

function Filter() {
  const [activeCategory, setActiveCategory] = useState(portfolioData[0].category); // Set default category to the first category

  // Get unique categories from data
  const categories = [...new Set(portfolioData.map((item) => item.category))];

  // Filter portfolio items based on active category
  const filteredPortfolio = portfolioData.filter(
    (item) => item.category === activeCategory
  );

  return (
    <div className="portfolio-section about">
      <h3 className="about-title pt-5 px-5 text-justify"> ABOUT THE SYMPOSIUM</h3>
      <p className="about-description px-5 pb-5 text-justify">The Department of Electrical Engineering, IIEST Shibpur, is proud to host the  
        <b> Anusandhan National Research Foundation (ANRF) sponsored 5-Day National Symposium on Bridging Academia and Industry for NextGen Technologies in Electrical Engineering (AI-NxtGen-EE 2024)</b>. Scheduled from 3rd to 7th December 2024, this premier event is designed to strengthen academia-industry partnerships, foster innovation, and enable a seamless career transition for students from academia to industry.
     <br></br><br></br> <Link to="/aboutus" className="ai-button-primary">Read More</Link>
</p>
    
      {/* Filter Buttons */}
      <div className="portfolio-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Items */}
      <div className="portfolio-grid">
        {filteredPortfolio.map((item) => (
          <div key={item.id} className="about section">
            <div className="container">
              <div className="row gy-4 align-items-center justify-content-between">
                <div className="col-xl-12">
                  <span className="about-meta">{item.subtitle}</span>
                  <h2 className="about-title">{item.title}</h2>
                  <div className="about-description">{item.description}</div>
                  {/* <Link to={item.button}>
                    <button className="btn btn-secondary">Learn More</button>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;

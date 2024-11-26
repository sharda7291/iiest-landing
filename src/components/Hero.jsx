import React from 'react'
import hero from '../assets/img/logos/banner2.png'
import hero1 from '../assets/img/logos/banner-logo.png'
import logo1 from '../assets/img/logos/logo1.png'
import logo2 from '../assets/img/logos/logo2.png'
import logo3 from '../assets/img/logos/logo3.png'
import logo4 from '../assets/img/logos/logo4.png'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <>
    {/* Hero Section */}
<section className="hero section">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="hero-content">
          <div className="company-badge mb-4">
            <i className="bi bi-gear-fill me-2" />
            Anusandhan National Research Foundation (ANRF) sponsored
          </div>
          <h1 className="mb-4 text-white">
          5-day National
             Symposium <br />
            <span className="accent-text">3rd Dec – 7th Dec, 2024</span>
          </h1>
          <p className="mb-4 mb-md-5 text-white">
          Bridging Academia and Industry for NextGen Technologies in Electrical Engineering 


          </p>
          <div className="hero-buttons">
            <Link to='/speaker' className="ai-button-primary me-0 me-sm-2 mx-1">Our Speakers</Link>
            <Link to='/schedule' className="ai-button-secondary me-0 me-sm-2 mx-1">Schedule</Link>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="hero-image">
        <div className="company-badge mb-4 h2">
            (AI-NxtGen-EE 2024)
        </div>
          <img src={hero1} alt="Hero Image" className="img-fluid" />
          <div className="company-badge mb-4">
          Organized by <br></br>DEPARTMENT OF ELECTRICAL ENGINEERING<br></br>
          Indian Institute of Engineering Science and Technology,<br></br> Shibpur,
          Howrah, West Bengal

        </div>
        </div>
      </div>
    </div>
    <div className="row stats-row gy-2 mt-4">
      <div className="col-lg-2 col-md-6">
        <div className="stat-item">
        <h2 className="ai-button-primary me-0 me-sm-2 mx-1">TECHNICAL SPONSORS</h2>
        </div>
      </div>
      <div className="col-lg-2 col-md-6">
        <div className="">
          <div className="">
            <img src={logo4}  alt="logo1" className='sponsor-img2'/>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-6">
        <div className="stat-item">
        <img src={logo1}  alt="logo1" className='sponsor-img2'/>
        </div>
      </div>
      <div className="col-lg-2 col-md-6">
        <div className="stat-item mt-2">
        <h2 className="ai-button-primary me-0 me-sm-2 mx-1">SPONSORS</h2>
        </div>
      </div>
      <div className="col-lg-2 col-md-6">
        <div className="stat-item">
          <div className="stat-content">
            <img src={logo3}  alt="logo1" className='sponsor-img2'/>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-6">
        <div className="stat-item">
        <img src={logo2}  alt="logo1" className='sponsor-img2'/>
        </div>
      </div>
    </div>
    {/* <div className="row stats-row gy-2 mt-4">
      <div className="col-lg-4 col-md-6">
        <div className="stat-item mt-4">
        <h2 className="ai-button-primary me-0 me-sm-2 mx-1">SPONSORS</h2>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="stat-item">
          <div className="stat-content">
            <img src={logo4}  alt="logo1" className='sponsor-img'/>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="stat-item">
        <img src={logo1}  alt="logo1" className='sponsor-img2'/>
        </div>
      </div>
    </div> */}
  </div>
</section>{/* /Hero Section */}


    </>
  )
}

export default Hero
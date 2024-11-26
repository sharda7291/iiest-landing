import React from 'react'
import PageHeader from "./PageHeader";
import Header from './Header'
import Footer from './Footer'

function ContactPage() {
  return (
    <>
     <Header/>
     <PageHeader/>
     <div className='container m-4'>
     <div className="contact section">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-md-12 text-center mb-4">
            <h2 className="contact-title">
              AI-NxtGen-EE 2024: Uniting Academia and Industry
            </h2>
            <p className="contact-subtitle">
              Driving Next-Gen Electrical Engineering Innovation
            </p>
          </div>

          <div className="col-md-6">
            <div className="contact-card">
              <h3 className="contact-name">Dr. Anirudh Nath</h3>
              <p className="contact-role">Convener, AI-NxtGen_EE 2024</p>
              <p className="contact-department">
                Department of Electrical Engineering, IIEST Shibpur
              </p>
              <p className="contact-email">
                <b>Email:</b>{" "}
                <a href="mailto:anirudh.ee@faculty.iiests.ac.in">
                  anirudh.ee@faculty.iiests.ac.in
                </a>
              </p>
              <p className="contact-phone">
                <b>Phone:</b> <a href="tel:+917002585691">7002585691</a>
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="contact-card">
              <h3 className="contact-name">Dr. Mousumi Mukherjee</h3>
              <p className="contact-role">Co-Convener, AI-NxtGen_EE 2024</p>
              <p className="contact-department">
                Department of Electrical Engineering, IIEST Shibpur
              </p>
              <p className="contact-email">
                <b>Email:</b>{" "}
                <a href="mailto:mousumi.ee@faculty.iiests.ac.in">
                  mousumi.ee@faculty.iiests.ac.in
                </a>
              </p>
              <p className="contact-phone">
                <b>Phone:</b> <a href="tel:+918879048551">8879048551</a>
              </p>
            </div>
          </div>

          <div className="col-md-12 mt-4 text-center">
            <p className="contact-note">
              For any inquiries related to the symposium, please feel free to
              contact the conveners via email or phone.
            </p>
          </div>
        </div>
      </div>
    </div>
     </div>
     <Footer/></>
  )
}

export default ContactPage
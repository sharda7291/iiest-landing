import React from 'react';
import PageHeader from "./PageHeader";
import Header from './Header';
import Footer from './Footer';
import img1 from '../assets/img/mousmi.png';
import img2 from '../assets/img/anirudh.png';

function ContactPage() {
  return (
    <>
      <Header />
      <PageHeader />
      <div className="container my-4">
        <div className="contact section">
          <div className="container">
            <div className="row gy-4 align-items-center">
              {/* Title Section */}
              <div className="col-md-12 text-center mb-4">
                <h2 className="contact-title">
                  AI-NxtGen-EE 2024: Uniting Academia and Industry
                </h2>
                <p className="contact-subtitle">
                  Driving Next-Gen Electrical Engineering Innovation
                </p>
              </div>

              {/* Contact Card 1 */}
              <div className="col-md-6">
                <div className="contact-card text-center">
                  <img src={img1} alt="Dr. Anirudh Nath" className="img-fluid mb-3" style={{borderRadius: "5px"}} />
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

              {/* Contact Card 2 */}
              <div className="col-md-6">
                <div className="contact-card text-center">
                  <img src={img2} alt="Dr. Mousumi Mukherjee" className="img-fluid mb-3"  style={{borderRadius: "5px"}}/>
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

              {/* Note Section */}
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
      <Footer />
    </>
  );
}

export default ContactPage;

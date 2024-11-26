import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container copyright text-center mt-4">
        <p>© 2024 <span>Copyright</span> <strong className="px-1 sitename">IIEST Shibpur</strong> <span>All Rights Reserved</span></p>
        <div className="social-links d-flex justify-content-center mt-4">
          <a href="#" aria-label="Twitter" className="me-3"><i className="bi bi-twitter" /></a>
          <a href="#" aria-label="Facebook" className="me-3"><i className="bi bi-facebook" /></a>
          <a href="#" aria-label="Instagram" className="me-3"><i className="bi bi-instagram" /></a>
          <a href="#" aria-label="LinkedIn" className="me-3"><i className="bi bi-linkedin" /></a>
        </div>
      </div>
      
      {/* Scroll Top Button */}
      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short" />
      </a>
    </footer>
  );
}

export default Footer;

import React from "react";
import "./footer.css";

// Import icons from react-icons
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaChevronUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left */}
        <p className="footer-text">
          © 2026 Ahad Lakhani. All rights reserved.
        </p>

        {/* Right */}
        <div className="footer-icons">
          <a href="#" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="#" aria-label="Email">
            <MdEmail size={24} />
          </a>
        </div>
      </div>

      {/* Scroll to top */}
      <button className="scroll-top" onClick={scrollToTop}>
        <FaChevronUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;

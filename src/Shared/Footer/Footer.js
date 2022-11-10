import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-32 bg-primary text-primary-content">
      <div>
        <p className="text-2xl">
          Agro Services
          <br />
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a href="/" className="link link-hover">
          Organic Fresh Fruits
        </a>
        <a href="/" className="link link-hover">
          Fresh Organic Vegetable
        </a>
        <a href="/" className="link link-hover">
          Fresh Seed
        </a>
        <a href="/" className="link link-hover">
          Fresh Rice
        </a>
      </div>
      <div>
        <span className="footer-title">Owner</span>
        <a href="/" className="link link-hover">
          About us
        </a>
        <a href="/" className="link link-hover">
          Contact
        </a>
        <a href="/" className="link link-hover">
          Jobs
        </a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a href="/" className="link link-hover">
          Terms of use
        </a>
        <a href="/" className="link link-hover">
          Privacy policy
        </a>
        <a href="/" className="link link-hover">
          Cookie policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;

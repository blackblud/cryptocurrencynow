import React from "react";
import "../style/footer.scss";
import Logo from "../../public/images/Logo.webp";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Footer() {
  return (
    <footer>
      <div className="wrapper-footer">
        <div className="footer-logo">
          <LazyLoadImage src={Logo} alt="Logo" width={40} height={40} />
          <p>Cryptocurrency Prices Now</p>
        </div>

        <div className="footer-info-about">
          <div className="footer-company">
            <p>Company</p>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>

              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>

              <li>
                <Link to="/editorial-policy">Editorial Policy</Link>
              </li>

              <li>
                <Link to="/terms-and-conditions">Terms & Conditions</Link>
              </li>

              <li>
                <Link to="/consent-settings">Consent Settings</Link>
              </li>

              <li>
                <Link to="/cookies-policy">Cookies Policy</Link>
              </li>

              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>

              <li>
                <Link to="/sitemap">Sitemap</Link>
              </li>
            </ul>
          </div>
          <div className="footer-socials">
            <p>Socials:</p>
            <ul>
              <li>
                <a href="https://www.facebook.com/profile.php?id=61565411828199">Facebook</a>
              </li>
              <li>
                <a href="https://x.com/crypto_cpn">X (Twitter)</a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@cryptocurrencypricesnow?lang=en">TikTok</a>
              </li>
              <li>
                <a href="https://www.instagram.com/cryptocurrencypricesnow_off/">Instagram</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/cryptocurrency-prices-now/">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-info">
          <p className="footer-right">&copy; 2024 Cryptocurrency Prices Now. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

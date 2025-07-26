import React from "react";

import { Link } from "react-router-dom";

import { useCookies } from "react-cookie";

import { MdKeyboardArrowRight } from "react-icons/md";

export default function CookieConsent() {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);

  return (
    <div className="cookie-consent-main">
      <div className="cookie-consent-wrapper">
        <div className="cookie-consent-content-wrapper">
          <div className="cookie-consent-main-content">
            <h4>This website uses cookies</h4>

            <div className="cookie-content-scrollblock">
              We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information
              about your use of our site with our social media, advertising and analytics partners who may combine it with other information that
              you've provided to them or that they've collected from your use of their services. You consent to our cookies if you continue to use our
              website.
            </div>

            <Link className="cookie-consent-footer" to="/policy">
              Show details <MdKeyboardArrowRight className="cookie-consent-footer-arrow" />
            </Link>
          </div>
          <button onClick={() => setCookie("cookieConsent", true, { path: "/" })} className="cookie-consent-accept-btn">
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

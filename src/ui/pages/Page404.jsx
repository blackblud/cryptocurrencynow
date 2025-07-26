import React, { useEffect } from "react";
import "../style/404.scss";

export default function Page404() {
  useEffect(() => {
    document.title = "Cryptocurrency Prices Now";
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="notfound">
          <div className="notfound-404">
            <h3>Oops! Page not found</h3>
            <h1>
              <span>4</span>
              <span>0</span>
              <span>4</span>
            </h1>
          </div>
          <h2>We are sorry, but the page you requested was not found</h2>
        </div>
      </div>
    </>
  );
}

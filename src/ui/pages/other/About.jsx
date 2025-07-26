import React, { useEffect } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function About() {
  useEffect(() => {
    document.title = "About Us";

    document.getElementsByTagName("META")[2].content =
      "Cryptocurrency Prices Now is a website that provides latest news and data such as prices, trade volumes, market capitalization on cryptocurrencies.";
  }, []);

  return (
    <div className="wrapper">
      <Breadcrumbs />
      <h1>About</h1>
    </div>
  );
}

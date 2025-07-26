import React, { useEffect } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy";

    document.getElementsByTagName("META")[2].content =
      "Privacy Policy describes our policies and procedures on the collection of data, use and disclosure of Your information when You use Cryptocurrencypricesnow.com!";
  }, []);

  return (
    <div className="wrapper">
      <Breadcrumbs />
      <h1>PrivacyPolicy</h1>
    </div>
  );
}

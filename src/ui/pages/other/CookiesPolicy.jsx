import React, { useEffect } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function CookiesPolicy() {
  useEffect(() => {
    document.title = "Cookies Policy";

    document.getElementsByTagName("META")[2].content =
      "This Cookies Policy explains what cookies are and how we use them. We recommend you read this policy so you can understand what type of information we collect.";
  }, []);

  return (
    <div className="wrapper">
      <Breadcrumbs />
      <h1>CookiesPolicy</h1>
    </div>
  );
}

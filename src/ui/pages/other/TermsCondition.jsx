import React, { useEffect } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function TermsCondition() {
  useEffect(() => {
    document.title = "Terms and Conditions";

    document.getElementsByTagName("META")[2].content =
      "Read more about the terms & conditions for using the Cryptocurrency Prices Now website and your rights and responsibilities as a user.";
  }, []);

  return (
    <div className="wrapper">
      <Breadcrumbs />
      <h1>Terms and Condition</h1>
    </div>
  );
}

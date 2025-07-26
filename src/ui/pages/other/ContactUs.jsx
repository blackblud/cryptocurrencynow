import React, { useEffect } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function ContactUs() {
  useEffect(() => {
    document.title = "Contact Us";

    document.getElementsByTagName("META")[2].content =
      "We are happy to hear from our readers with suggestions, comments & ideas. Please feel free to contact us!";
  }, []);

  return (
    <div className="wrapper">
      <Breadcrumbs />
      <h1>Contact Us</h1>
    </div>
  );
}

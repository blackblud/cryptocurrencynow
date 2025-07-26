import React, { useEffect } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function ConsentSettings() {
  useEffect(() => {
    document.title = "Consent Settings";

    document.getElementsByTagName("META")[2].content = "";
  }, []);

  return (
    <div className="wrapper">
      <Breadcrumbs />
      <h1>Consent Settings</h1>
    </div>
  );
}

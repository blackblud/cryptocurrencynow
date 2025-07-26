import React, { useEffect } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function Sitemap() {
  useEffect(() => {
    document.title = "Sitemap";

    document.getElementsByTagName("META")[2].content = "";
  }, []);

  return (
    <div className="wrapper">
      <Breadcrumbs />
      <h1>Sitemap</h1>
    </div>
  );
}

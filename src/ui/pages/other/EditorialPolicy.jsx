import React, { useEffect } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function EditorialPolicy() {
  useEffect(() => {
    document.title = "Editorial Policy";

    document.getElementsByTagName("META")[2].content =
      "Our writers and analysts have the freedom to create their own original work, and nothing gets published without being thoroughly reviewed by our editors first.";
  }, []);

  return (
    <div className="wrapper">
      <Breadcrumbs />
      <h1>Editorial Policy</h1>
    </div>
  );
}

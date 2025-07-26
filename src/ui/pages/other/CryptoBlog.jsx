import React, { useEffect } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function CryptoBlog() {
  useEffect(() => {
    document.title = "Cryptocurrency Blog";

    document.getElementsByTagName("META")[2].content =
      "Cryptocurrency prices now  blog aims to provide useful trading tips, crypto wallet guides for crypto beginners & enthusiasts!";
  }, []);

  return (
    <div className="wrapper">
      <Breadcrumbs />
      <h1>Crypto Blog</h1>
    </div>
  );
}

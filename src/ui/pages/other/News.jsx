import React, { useEffect } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function News() {
  useEffect(() => {
    document.title = "Crypto News Today";

    document.getElementsByTagName("META")[2].content =
      "Stay up-to-date on crypto market news with cryptocurrency prices now - Analysis, and expert insights on Bitcoin, Ethereum, Altcoins, Blockchain, NFT!";
  }, []);

  return (
    <div className="wrapper">
      <Breadcrumbs />
      <h1>News</h1>
    </div>
  );
}

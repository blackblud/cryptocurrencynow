import React, { useEffect } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function Press() {
  useEffect(() => {
    document.title = "Press Release";

    document.getElementsByTagName("META")[2].content =
      "Read the most recent press releases on Cryptocurrency Prices Now and learn all the news about blockchain, bitcoin and other cryptocurrencies.";
  }, []);

  return (
    <div className="wrapper">
      <Breadcrumbs />
      <h1>Press</h1>
    </div>
  );
}

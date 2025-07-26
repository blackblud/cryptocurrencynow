import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/whale.scss";
import GlobalStatistics from "../components/GlobalStatistics";
import blockchainImages from "../../core/store/blockchainImages";
import Marquee from "react-fast-marquee";
import timestampDate from "../../core/services/timestampDate";
import numberCommas from "../../core/services/numberCommas";
import { FaSortDown, FaSortUp, FaSort } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import invisibleIcons from "../../core/services/invisibleIcons";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import cors from "../../public/images/cors.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function WhaleAlert() {
  const [blockchainStatus, setBlockchainStatus] = useState([]);
  const [transactionData, setTransactionData] = useState([]);
  const [currentValue, setCurrentValue] = useState();

  const [CORSLocker, setCORSLocker] = useState(false);

  useEffect(() => {
    // const myInterval = setInterval(() => (document.getElementById('transaction-map').src = document.getElementById('transaction-map').src), 30000);
    document.title = "CryptocurrencyPricesNow";

    const myTimeout = setTimeout(() => {
      document?.getElementById("stat-realtime")?.classList.add("block-visible");
      document?.getElementById("stat-map")?.classList.add("block-visible");

      document?.getElementById("whale-loader-1")?.classList.add("display-none");
      document?.getElementById("whale-loader-2")?.classList.add("display-none");
    }, 5000);

    return () => {
      // clearInterval(myInterval);
      clearTimeout(myTimeout);
    };
  }, []);

  const sortByValue = (value) => {
    var newArray = [];

    var iconsDown = document.querySelectorAll(".th-icon-updown");
    for (const icon of iconsDown) {
      icon.classList.add("hover-available");
    }

    for (const icon of iconsDown) {
      icon.classList.remove("display-none");
    }

    document
      .querySelector("#" + value)
      .querySelector(".th-icon-updown")
      .classList.remove("hover-available");

    document
      .querySelector("#" + value)
      .querySelector(".th-icon-updown")
      .classList.add("display-none");

    if (value !== currentValue) {
      newArray = [...transactionData].sort(function (a, b) {
        if (a[value] > b[value]) return 1;
        return -1;
      });

      invisibleIcons();
      document
        .querySelector("#" + value)
        .querySelector(".th-icon-up")
        .classList.remove("display-none");
      setCurrentValue(value);
    } else {
      newArray = [...transactionData].sort(function (a, b) {
        if (a[value] > b[value]) return -1;
        return 1;
      });

      invisibleIcons();
      document
        .querySelector("#" + value)
        .querySelector(".th-icon-down")
        .classList.remove("display-none");
      setCurrentValue();
    }

    setTransactionData(newArray);
  };

  useEffect(() => {
    axios
      .get("https://api.whale-alert.io/v1/status", {
        params: {
          api_key: "e9GEIDsXNh5VrsKQTp61zZgcSLGTMhSY",
        },
      })
      .then((res) => {
        setBlockchainStatus(res.data.blockchains.sort((a, b) => (a.name > b.name ? 1 : -1)));
      })
      .catch((error) => {
        console.log(error.response);
        console.log(setCORSLocker(true));
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://api.whale-alert.io/v1/transactions", {
        params: {
          api_key: "e9GEIDsXNh5VrsKQTp61zZgcSLGTMhSY",
          min_value: 500000,
        },
      })
      .then((res) => {
        setTransactionData(res.data.transactions.sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1)));
      })
      .catch((error) => {
        // console.log(error.response);
      });
  }, []);

  const TransactionHash = (blockchain, hash) => {
    var explorerLink;

    switch (blockchain) {
      case "bitcoin":
        explorerLink = "https://www.blockchain.com/btc/tx/" + hash;
        break;
      case "ethereum":
        explorerLink = "https://etherscan.io/tx/0x" + hash;
        break;
      case "tron":
        explorerLink = "https://tronscan.org/#/transaction/" + hash;
        break;
      case "binancechain":
        explorerLink = "https://binance.mintscan.io/txs/" + hash;
        break;
      case "ripple":
        explorerLink = "https://xrpscan.com/tx/" + hash;
        break;

      default:
        alert("Sorry, but we can't find more information on this transaction.\nThe transaction hash is saved to the clipboard.");
        navigator.clipboard.writeText(hash);
        return;
    }

    // eslint-disable-next-line no-restricted-globals
    const result = confirm("Want to know more about the transaction?\nYou will be redirected to the explorer site of this blockchain.");

    if (!result) return;
    window.open(explorerLink, "_blank").focus();
  };

  document?.querySelector(".button-up")?.addEventListener("click", () => {
    document.body.scrollIntoView({
      behavior: "smooth",
    });
  });

  const BootstrapTooltip = styled(({ className, ...props }) => <Tooltip {...props} arrow classes={{ popper: className }} />)(() => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: "#363636",
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#363636",
      fontSize: 14,
      maxWidth: 500,
      padding: 10,
    },
  }));

  return (
    <div className="wrapper">
      <GlobalStatistics />
      {CORSLocker ? (
        <div className="whale-error">
          <p>Please install CORS Unlocker to Access Blockchain Data</p>

          <div className="whale-plugin-block">
            <LazyLoadImage src={cors} alt="Cors Unlocker" />
            <p>CORS Unlocker</p>
            <a target="_blank" rel="noreferrer" href="https://chromewebstore.google.com/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino">
              Add to Browser
            </a>
          </div>
        </div>
      ) : (
        <>
          <div className="whale-blockchain">
            <Marquee pauseOnHover speed={50}>
              {blockchainStatus.map((blockchain) =>
                blockchain.name === "unknown" ? (
                  ""
                ) : (
                  <div
                    className="blockchain-block"
                    key={blockchain.name}
                    title={
                      blockchain.name.charAt(0).toUpperCase() +
                      blockchain.name.slice(1) +
                      " " +
                      blockchain.status.charAt(0).toUpperCase() +
                      blockchain.status.slice(1)
                    }
                  >
                    <LazyLoadImage src={blockchainImages.get(blockchain.name)} alt={blockchain.name} />
                    <p>{blockchain.name}</p>

                    {blockchain.status === "connected" ? (
                      <>
                        <div className="blockchain-status background-green"></div>
                        <div className="blockchain-palka"></div>
                      </>
                    ) : (
                      <>
                        <div className="blockchain-status background-red"></div>
                        <div className="blockchain-palka"></div>
                      </>
                    )}
                  </div>
                )
              )}
            </Marquee>
          </div>

          <div className="whale-transactions">
            <table>
              <colgroup>
                <col style={{ width: 35 + "px" }} />
                <col style={{ width: 40 + "px" }} />
                <col style={{ width: 220 + "px" }} />
                <col style={{ width: 220 + "px" }} />
                <col style={{ width: 90 + "px" }} />
                <col style={{ width: 90 + "px" }} />
              </colgroup>
              <thead>
                <tr>
                  <th onClick={() => sortByValue("timestamp")} id="timestamp">
                    <div className="th-flex-time">
                      Time
                      <div className="th-flex-icons">
                        <FaSortUp className="display-none th-icon-up" />
                        <FaSortDown className="display-none th-icon-down" />
                        <FaSort className="th-icon-updown hover-available" />
                      </div>
                    </div>
                  </th>
                  <th>Name</th>
                  <th>From</th>
                  <th>To</th>
                  <th className="align-right" onClick={() => sortByValue("amount")} id="amount">
                    <div className="th-flex">
                      <div className="th-flex-icons">
                        <FaSortUp className="display-none th-icon-up" />
                        <FaSortDown className="display-none th-icon-down" />
                        <FaSort className="th-icon-updown hover-available" />
                      </div>
                      Amount
                    </div>
                  </th>
                  <th className="align-right" onClick={() => sortByValue("amount_usd")} id="amount_usd">
                    <div className="th-flex">
                      <div className="th-flex-icons">
                        <FaSortUp className="display-none th-icon-up" />
                        <FaSortDown className="display-none th-icon-down" />
                        <FaSort className="th-icon-updown hover-available" />
                      </div>
                      Amount (USD)
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactionData.map((transaction) => (
                  <tr key={transaction.id} onClick={() => TransactionHash(transaction.blockchain, transaction.hash)} className="trans-cursor">
                    <td>{timestampDate(transaction.timestamp)}</td>
                    <td>
                      <div className="transaction-name">
                        <LazyLoadImage className="transaction-image" src={blockchainImages.get(transaction.blockchain)} alt="" />
                        <p>{transaction.blockchain.charAt(0).toUpperCase() + transaction.blockchain.slice(1)} </p>
                        <span>{transaction.symbol.toUpperCase()}</span>
                      </div>
                    </td>
                    <td>
                      <div className="transaction-address">
                        {transaction.from.owner_type === "exchange" ? (
                          <div className="owner-type">
                            <p className="owner-exchange">
                              {transaction.from.owner_type.charAt(0).toUpperCase() + transaction.from.owner_type.slice(1)}
                              {" [" + transaction.from.owner.charAt(0).toUpperCase() + transaction.from.owner.slice(1) + "]"}
                            </p>
                          </div>
                        ) : transaction.from.owner_type === "other" ? (
                          <div className="owner-type">
                            <p className="owner-other">
                              {transaction.from.owner_type.charAt(0).toUpperCase() + transaction.from.owner_type.slice(1)}
                              {" [" + transaction.from.owner.charAt(0).toUpperCase() + transaction.from.owner.slice(1) + "]"}
                            </p>
                          </div>
                        ) : transaction.from.owner_type === "token" ? (
                          <div className="owner-type">
                            <p className="owner-token">
                              {transaction.from.owner_type.charAt(0).toUpperCase() + transaction.from.owner_type.slice(1)}
                              {" [" + transaction.from.owner.charAt(0).toUpperCase() + transaction.from.owner.slice(1) + "]"}
                            </p>
                          </div>
                        ) : (
                          <div className="owner-type">
                            <p>{transaction.from.owner_type.charAt(0).toUpperCase() + transaction.from.owner_type.slice(1)}</p>
                          </div>
                        )}
                        {transaction.blockchain === "ethereum" ? (
                          <BootstrapTooltip placement="bottom" arrow title={"0×" + transaction.from.address}>
                            <p>{"0×" + transaction.from.address}</p>
                          </BootstrapTooltip>
                        ) : (
                          <BootstrapTooltip placement="bottom" arrow title={transaction.from.address}>
                            <p>{transaction.from.address}</p>
                          </BootstrapTooltip>
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="transaction-address">
                        {transaction.to.owner_type === "exchange" ? (
                          <div className="owner-type">
                            <p className="owner-exchange">
                              {transaction.to.owner_type.charAt(0).toUpperCase() + transaction.to.owner_type.slice(1)}
                              {" [" + transaction.to.owner.charAt(0).toUpperCase() + transaction.to.owner.slice(1) + "]"}
                            </p>
                          </div>
                        ) : transaction.to.owner_type === "other" ? (
                          <div className="owner-type">
                            <p className="owner-other">
                              {transaction.to.owner_type.charAt(0).toUpperCase() + transaction.to.owner_type.slice(1)}
                              {" [" + transaction.to.owner.charAt(0).toUpperCase() + transaction.to.owner.slice(1) + "]"}
                            </p>
                          </div>
                        ) : transaction.to.owner_type === "token" ? (
                          <div className="owner-type">
                            <p className="owner-token">
                              {transaction.to.owner_type.charAt(0).toUpperCase() + transaction.to.owner_type.slice(1)}
                              {" [" + transaction.to.owner.charAt(0).toUpperCase() + transaction.to.owner.slice(1) + "]"}
                            </p>
                          </div>
                        ) : (
                          <div className="owner-type">
                            <p>{transaction.to.owner_type.charAt(0).toUpperCase() + transaction.to.owner_type.slice(1)}</p>
                          </div>
                        )}
                        {transaction.blockchain === "ethereum" ? (
                          <BootstrapTooltip placement="bottom" arrow title={"0×" + transaction.to.address}>
                            <p>{"0×" + transaction.to.address}</p>
                          </BootstrapTooltip>
                        ) : (
                          <BootstrapTooltip placement="bottom" arrow title={transaction.to.address}>
                            <p>{transaction.to.address}</p>
                          </BootstrapTooltip>
                        )}
                      </div>
                    </td>
                    <td className="align-right">
                      {numberCommas(Math.trunc(transaction.amount * 100) / 100)} {transaction.symbol.toUpperCase()}
                    </td>
                    <td className="align-right">{numberCommas(Math.round(transaction.amount_usd)) + " USD"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="button-up-block">
            <div className="button-up">
              <IoIosArrowUp className="button-up-icon" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

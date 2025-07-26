import React, { useState, useEffect } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import axios from "axios";
import numberCommas from "../../core/services/numberCommas";
import timestampDate from "../../core/services/timestampDate";
import { FaEthereum } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Marquee from "react-fast-marquee";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function GlobalStatistics() {
  const [searchData, setSearchData] = useState([]);
  const location = useLocation();
  const [ethGas, setEthGas] = useState({
    result: {
      FastGasPrice: 0,
      ProposeGasPrice: 0,
      SafeGasPrice: 0,
    },
  });
  const [globalData, setGlobalData] = useState({
    data: {
      active_cryptocurrencies: 0,
      markets: 0,
      total_market_cap: {
        usd: 0,
      },
      total_volume: {
        usd: 0,
      },
      market_cap_percentage: {
        btc: 0,
        eth: 0,
      },
      market_cap_change_percentage_24h_usd: 0,
      updated_at: 1646431200,
    },
  });

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/global")
      .then((res) => {
        setGlobalData(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://api.etherscan.io/api", {
        params: {
          module: "gastracker",
          action: "gasoracle",
          apikey: "PMBK29YRB5QMSXHHE2WJFUDWBUUQTTPKPE",
        },
      })
      .then((res) => {
        setEthGas(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  const searchCoin = () => {
    const searchElement = document.getElementById("search-input").value;
    if (searchElement.trim() === "") return;

    axios
      .get("https://api.coingecko.com/api/v3/search", {
        params: {
          query: searchElement,
        },
      })
      .then((res) => {
        setSearchData(res.data.coins);
      })
      .catch((error) => {
        console.log(error.response);
      });

    document.querySelector(".search-input").focus();
  };

  const inputChange = () => {
    if (document.getElementById("search-input").value === "") {
      setSearchData([]);
    }
  };

  if (document.getElementById("search-input")) {
    var input = document.getElementById("search-input");
    input.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("search-button-click").click();
      }
    });
  }

  const BootstrapTooltip = styled(({ className, ...props }) => <Tooltip {...props} arrow classes={{ popper: className }} />)(() => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: "#fff",
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#fff",
      color: "#363636",
      fontSize: 13,
      fontWeight: 500,
      maxWidth: 125,
      padding: 10,
      textAlign: "center",
      boxShadow: "0px 3px 8px rgba(100, 100, 111, 0.2)",
    },
  }));

  return (
    <>
      <div className="global-statistics">
        <p>
          Cryptocurrencies: <span className="global-value">{globalData.data.active_cryptocurrencies}</span>
        </p>
        <p>
          Markets: <span className="global-value">{globalData.data.markets}</span>
        </p>
        <p>
          Market Cap: <span className="global-value">{"$" + numberCommas(Math.round(globalData.data.total_market_cap?.usd))}</span>
        </p>

        {globalData.data.market_cap_change_percentage_24h_usd < 0 ? (
          <p>
            Cap Change:{" "}
            <span className="global-value">
              <FaSortDown />
              {Math.abs(Math.round(globalData.data.market_cap_change_percentage_24h_usd * 100) / 100)}%
            </span>
          </p>
        ) : (
          <p>
            Cap Change:{" "}
            <span className="global-value">
              <FaSortUp className="icon-sortup" />
              {Math.abs(Math.round(globalData.data.market_cap_change_percentage_24h_usd * 100) / 100)}%
            </span>
          </p>
        )}

        <p>
          Volume 24h: <span className="global-value">{"$" + numberCommas(Math.round(globalData.data.total_volume?.usd))}</span>
        </p>
        <p>
          Dominance{" "}
          <span className="global-value">
            BTC: {Math.round(globalData.data.market_cap_percentage?.btc * 100) / 100}% &nbsp;ETH:{" "}
            {Math.round(globalData.data.market_cap_percentage?.eth * 100) / 100}%
          </span>
        </p>

        <BootstrapTooltip
          placement="bottom"
          arrow
          title={
            "Slow: " +
            ethGas.result.SafeGasPrice +
            " Gwei Standart: " +
            ethGas.result.ProposeGasPrice +
            " Gwei Fast: " +
            ethGas.result.FastGasPrice +
            " Gwei"
          }
        >
          <p>
            <FaEthereum className="icon-eth-gas" /> Gas: <span className="global-value">{ethGas.result.ProposeGasPrice} Gwei</span>
          </p>
        </BootstrapTooltip>
        <p>
          Last Updated at: <span className="global-value">{timestampDate(globalData.data.updated_at)}</span>
        </p>
      </div>

      <div className="global-stat-marquee">
        <Marquee speed={50}>
          <p className="marquee-child">
            Cryptocurrencies: <span className="global-value">{globalData.data.active_cryptocurrencies}</span>
          </p>
          <p className="marquee-child">
            Markets: <span className="global-value">{globalData.data.markets}</span>
          </p>
          <p className="marquee-child">
            Market Cap: <span className="global-value">{"$" + numberCommas(Math.round(globalData.data.total_market_cap?.usd))}</span>
          </p>

          {globalData.data.market_cap_change_percentage_24h_usd < 0 ? (
            <p className="marquee-child">
              Cap Change:{" "}
              <span className="global-value">
                <FaSortDown />
                {Math.abs(Math.round(globalData.data.market_cap_change_percentage_24h_usd * 100) / 100)}%
              </span>
            </p>
          ) : (
            <p className="marquee-child">
              Cap Change:{" "}
              <span className="global-value">
                <FaSortUp className="icon-sortup" />
                {Math.abs(Math.round(globalData.data.market_cap_change_percentage_24h_usd * 100) / 100)}%
              </span>
            </p>
          )}

          <p className="marquee-child">
            Volume 24h: <span className="global-value">{"$" + numberCommas(Math.round(globalData.data.total_volume?.usd))}</span>
          </p>
          <p className="marquee-child">
            Dominance{" "}
            <span className="global-value">
              BTC: {Math.round(globalData.data.market_cap_percentage?.btc * 100) / 100}% &nbsp;ETH:{" "}
              {Math.round(globalData.data.market_cap_percentage?.eth * 100) / 100}%
            </span>
          </p>

          <BootstrapTooltip
            className="marquee-child"
            placement="bottom"
            arrow
            title={
              "Slow: " +
              ethGas.result.SafeGasPrice +
              " Gwei Standart: " +
              ethGas.result.ProposeGasPrice +
              " Gwei Fast: " +
              ethGas.result.FastGasPrice +
              " Gwei"
            }
          >
            <p>
              <FaEthereum className="icon-eth-gas" /> Gas: <span className="global-value">{ethGas.result.ProposeGasPrice} Gwei</span>
            </p>
          </BootstrapTooltip>
          <p className="marquee-child">
            Last Updated at: <span className="global-value">{timestampDate(globalData.data.updated_at)}</span>
          </p>
        </Marquee>
      </div>

      {location.pathname !== "/" ? (
        ""
      ) : globalData.data.market_cap_change_percentage_24h_usd > 0 ? (
        <div className="data-title">
          <div className="data-title-info">
            <h1>Today&rsquo;s Cryptocurrency Prices by Market Cap</h1>
            <p className="data-title-desc font-14">
              The global crypto market cap is
              {globalData.data.total_market_cap?.usd > 999999999999 ? (
                <span className="bold-text">{" $" + numberCommas(Math.round(globalData.data.total_market_cap?.usd)).substr(0, 4) + "T"}</span>
              ) : (
                <span className="bold-text">{" $" + numberCommas(Math.round(globalData.data.total_market_cap?.usd)).substr(0, 6) + "B"}</span>
              )}
              , a{" "}
              <span className="data-title-grow">
                <FaSortUp className="icon-sortup" />
                {Math.round(globalData.data.market_cap_change_percentage_24h_usd * 100) / 100}%
              </span>{" "}
              <span className="bold-text">increase</span> over the last day.
            </p>
            <p className="data-title-desc-2">
              The total crypto market volume over the last 24 hours is{" "}
              <span className="bold-text">${numberCommas(Math.round(globalData.data.total_volume?.usd)).substr(0, 6) + "M"}</span>. Bitcoin’s
              dominance is currently <span className="bold-text">{Math.round(globalData.data.market_cap_percentage?.btc * 100) / 100}%</span> and
              Ethereum dominance is <span className="bold-text">{Math.round(globalData.data.market_cap_percentage?.eth * 100) / 100}%</span>.
              Cryptocurrency Prices Now is now tracking <span className="bold-text">{globalData.data.active_cryptocurrencies}</span> cryptocurrencies.
            </p>
          </div>
          <div className="search-box">
            <input type="text" placeholder="Type crypto coin..." className="search-input" id="search-input" onChange={inputChange} />
            <button onClick={searchCoin} className="search-btn" id="search-button-click" type="submit" aria-label="search">
              <BiSearchAlt />
            </button>
            <div className="dropdown-search">
              <hr />

              {searchData.length === 0 ? (
                <p>No results found. Please try again</p>
              ) : (
                searchData.map((search, i) =>
                  i < 5 ? (
                    <Link to={"/coin/" + search.id} key={search.id}>
                      <div className="dropdown-found">
                        <div>
                          <LazyLoadImage src={search?.large} alt="" />
                          <p>{search?.name}</p>
                          <p>{search?.symbol}</p>
                        </div>
                        {search?.market_cap_rank === null ? <p>?</p> : <p># {search?.market_cap_rank}</p>}
                      </div>
                    </Link>
                  ) : (
                    ""
                  )
                )
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="data-title">
          <div className="data-title-info">
            <h1>Today&rsquo;s Cryptocurrency Prices by Market Cap</h1>
            <p className="data-title-desc">
              The global crypto market cap is
              {globalData.data.total_market_cap?.usd > 999999999999 ? (
                <span className="bold-text">{" $" + numberCommas(Math.round(globalData.data.total_market_cap?.usd)).substr(0, 4) + "T"}</span>
              ) : (
                <span className="bold-text">{" $" + numberCommas(Math.round(globalData.data.total_market_cap?.usd)).substr(0, 6) + "B"}</span>
              )}
              , a{" "}
              <span className="data-title-fall">
                <FaSortDown className="icon-sortdown" />
                {Math.abs(Math.round(globalData.data.market_cap_change_percentage_24h_usd * 100) / 100)}%
              </span>{" "}
              <span className="bold-text">decrease</span> over the last day.
            </p>
            <p className="data-title-desc-2">
              The total crypto market volume over the last 24 hours is{" "}
              <span className="bold-text">${numberCommas(Math.round(globalData.data.total_volume?.usd)).substr(0, 6) + "M"}</span>. Bitcoin’s
              dominance is currently <span className="bold-text">{Math.round(globalData.data.market_cap_percentage?.btc * 100) / 100}%</span> and
              Ethereum dominance is <span className="bold-text">{Math.round(globalData.data.market_cap_percentage?.eth * 100) / 100}%</span>.
              Cryptocurrency Prices Now is now tracking <span className="bold-text">{globalData.data.active_cryptocurrencies}</span> cryptocurrencies.
            </p>
          </div>
          <div className="search-box">
            <input type="text" placeholder="Type crypto coin..." className="search-input" id="search-input" onChange={inputChange} />
            <button onClick={searchCoin} className="search-btn" id="search-button-click" type="submit" aria-label="search">
              <BiSearchAlt />
            </button>
            <div className="dropdown-search">
              <hr />
              {searchData.length === 0 ? (
                <p>No results found. Please try again</p>
              ) : (
                searchData.map((search, i) =>
                  i < 5 ? (
                    <Link to={"/coin/" + search.id} key={search.id}>
                      <div className="dropdown-found">
                        <div>
                          <LazyLoadImage src={search?.large} alt="" />
                          <p>{search?.name}</p>
                          <p>{search?.symbol}</p>
                        </div>
                        {search?.market_cap_rank === null ? <p>?</p> : <p># {search?.market_cap_rank}</p>}
                      </div>
                    </Link>
                  ) : (
                    ""
                  )
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

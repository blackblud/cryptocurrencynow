import axios from "axios";
import React, { useEffect, useState } from "react";
import "../style/statistics.scss";
import numberCommas from "../../core/services/numberCommas";
import GlobalStatistics from "../components/GlobalStatistics";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { FaSortDown, FaSortUp, FaSort } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import TopBlockStat from "../components/TopBlockStat";
import { IoIosArrowUp, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import invisibleIcons from "../../core/services/invisibleIcons";
import CryptocurrenciesIcon from "../../public/images/CryptocurrenciesIcon.png";
import Pagination from "@mui/material/Pagination";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { SparkLineChart } from "@mui/x-charts";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Cryptocurrencies() {
  let { pageNum } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [currentValue, setCurrentValue] = useState();

  useEffect(() => {
    document.title = "Cryptocurrency Prices Now";

    document.getElementsByTagName("META")[2].content =
      "View crypto prices live, market cap, and trading volume. Find out  today's trending coins, top crypto gainers & losers at Cryptocurrency Prices Now!";
  }, []);

  useEffect(() => {
    setData([]);
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets", {
        params: {
          vs_currency: "usd",
          per_page: 100,
          page: pageNum,
          sparkline: true,
          price_change_percentage: "1h,24h,7d",
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [pageNum]);

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
      newArray = [...data].sort(function (a, b) {
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
      newArray = [...data].sort(function (a, b) {
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

    setData(newArray);
  };

  document?.querySelector(".button-up")?.addEventListener("click", () => {
    document.body.scrollIntoView({
      behavior: "smooth",
    });
  });

  function sideScroll(element, direction, speed, distance, step) {
    let scrollAmount = 0;
    var slideTimer = setInterval(function () {
      if (direction === "left") {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  }

  return (
    <div className="wrapper">
      <GlobalStatistics />

      <Breadcrumbs />
      <TopBlockStat />

      <div className="crypto-statistics">
        <div className="crypto-categories-block">
          <div className="crypto-categories" id="scroll-categories">
            <Link to="/" className="crypto-categ crypto-categ-active">
              <LazyLoadImage className="category-image" src={CryptocurrenciesIcon} alt="Cryptocurrencies" />
              Cryptocurrencies
            </Link>
            <div className="categ-palka"></div>
            <Link to="/cryptocurrencies/decentralized-finance-defi" className="crypto-categ">
              DeFi
            </Link>
            <Link to="/cryptocurrencies/non-fungible-tokens-nft" className="crypto-categ">
              NFT
            </Link>
            <Link to="/cryptocurrencies/metaverse" className="crypto-categ">
              Metaverse
            </Link>
            <Link to="/cryptocurrencies/play-to-earn" className="crypto-categ">
              Play to Earn
            </Link>
            <Link to="/cryptocurrencies/meme-token" className="crypto-categ">
              Meme
            </Link>
            <div className="categ-palka"></div>
            <Link to="/cryptocurrencies/binance-smart-chain" className="crypto-categ">
              <LazyLoadImage
                className="category-image"
                src="https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615"
                alt="Binance Smart Chain"
              />
              Binance Smart Chain
            </Link>
            <Link to="/cryptocurrencies/solana-ecosystem" className="crypto-categ">
              <LazyLoadImage
                className="category-image"
                src="https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422"
                alt="Solana"
              />
              Solana
            </Link>
            <Link to="/cryptocurrencies/dot-ecosystem" className="crypto-categ">
              <LazyLoadImage
                className="category-image"
                src="https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1639712644"
                alt="Polkadot"
              />
              Polkadot
            </Link>
            <Link to="/cryptocurrencies/cardano-ecosystem" className="crypto-categ">
              <LazyLoadImage
                className="category-image"
                src="https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860"
                alt="Cardano"
              />
              Cardano
            </Link>
            <Link to="/cryptocurrencies/avalanche-ecosystem" className="crypto-categ">
              <LazyLoadImage
                className="category-image"
                src="https://assets.coingecko.com/coins/images/12559/large/coin-round-red.png?1604021818"
                alt="Avalanche"
              />
              Avalanche
            </Link>
            <Link to="/cryptocurrencies/polygon-ecosystem" className="crypto-categ">
              <LazyLoadImage
                className="category-image"
                src="https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912"
                alt="Polygon"
              />
              Polygon
            </Link>
          </div>
          <div className="crypto-categories-buttons">
            <div className="scroll-button" onClick={() => sideScroll(document.querySelector("#scroll-categories"), "left", 30, 100, 15)}>
              <IoIosArrowBack className="scroll-button-left" />
            </div>
            <div className="scroll-button" onClick={() => sideScroll(document.querySelector("#scroll-categories"), "right", 30, 100, 15)}>
              <IoIosArrowForward className="scroll-button-right" />
            </div>
          </div>
        </div>

        <div className="crypto-table">
          <table>
            <colgroup>
              <col style={{ width: 50 + "px" }} />
              <col style={{ width: 220 + "px" }} />
              <col style={{ width: 112 + "px" }} />
              <col style={{ width: 90 + "px" }} />
              <col style={{ width: 90 + "px" }} />
              <col style={{ width: 90 + "px" }} />
              <col style={{ width: 165 + "px" }} />
              <col style={{ width: 170 + "px" }} />
              <col style={{ width: 180 + "px" }} />
              <col style={{ width: 200 + "px" }} />
            </colgroup>

            <thead>
              <tr>
                <th onClick={() => sortByValue("market_cap_rank")} id="market_cap_rank">
                  <div className="th-flex flex-start">
                    #
                    <div className="th-flex-icons">
                      <FaSortUp className="display-none th-icon-up" />
                      <FaSortDown className="display-none th-icon-down" />
                      <FaSort className="th-icon-updown hover-available" />
                    </div>
                  </div>
                </th>
                <th onClick={() => sortByValue("name")} id="name">
                  <div className="th-flex flex-start">
                    Name
                    <div className="th-flex-icons">
                      <FaSortUp className="display-none th-icon-up" />
                      <FaSortDown className="display-none th-icon-down" />
                      <FaSort className="th-icon-updown hover-available" />
                    </div>
                  </div>
                </th>
                <th onClick={() => sortByValue("current_price")} id="current_price">
                  <div className="th-flex">
                    <div className="th-flex-icons ">
                      <FaSortUp className="display-none th-icon-up" />
                      <FaSortDown className="display-none th-icon-down" />
                      <FaSort className="th-icon-updown hover-available" />
                    </div>
                    Price
                  </div>
                </th>
                <th onClick={() => sortByValue("price_change_percentage_1h_in_currency")} id="price_change_percentage_1h_in_currency">
                  <div className="th-flex">
                    <div className="th-flex-icons ">
                      <FaSortUp className="display-none th-icon-up" />
                      <FaSortDown className="display-none th-icon-down" />
                      <FaSort className="th-icon-updown hover-available" />
                    </div>
                    1h %
                  </div>
                </th>
                <th onClick={() => sortByValue("price_change_percentage_24h_in_currency")} id="price_change_percentage_24h_in_currency">
                  <div className="th-flex">
                    <div className="th-flex-icons ">
                      <FaSortUp className="display-none th-icon-up" />
                      <FaSortDown className="display-none th-icon-down" />
                      <FaSort className="th-icon-updown hover-available" />
                    </div>
                    24h %
                  </div>
                </th>
                <th onClick={() => sortByValue("price_change_percentage_7d_in_currency")} id="price_change_percentage_7d_in_currency">
                  <div className="th-flex">
                    <div className="th-flex-icons ">
                      <FaSortUp className="display-none th-icon-up" />
                      <FaSortDown className="display-none th-icon-down" />
                      <FaSort className="th-icon-updown hover-available" />
                    </div>
                    7d %
                  </div>
                </th>
                <th onClick={() => sortByValue("market_cap")} id="market_cap">
                  <div className="th-flex">
                    <div className="th-flex-icons ">
                      <FaSortUp className="display-none th-icon-up" />
                      <FaSortDown className="display-none th-icon-down" />
                      <FaSort className="th-icon-updown hover-available" />
                    </div>
                    Market Cap
                  </div>
                </th>
                <th onClick={() => sortByValue("total_volume")} id="total_volume">
                  <div className="th-flex">
                    <div className="th-flex-icons ">
                      <FaSortUp className="display-none th-icon-up" />
                      <FaSortDown className="display-none th-icon-down" />
                      <FaSort className="th-icon-updown hover-available" />
                    </div>
                    Volume (24h)
                  </div>
                </th>
                <th onClick={() => sortByValue("circulating_supply")} id="circulating_supply">
                  <div className="th-flex">
                    <div className="th-flex-icons ">
                      <FaSortUp className="display-none th-icon-up" />
                      <FaSortDown className="display-none th-icon-down" />
                      <FaSort className="th-icon-updown hover-available" />
                    </div>
                    Circulating Supply
                  </div>
                </th>
                <th className="al-center">Chart (Last 7 Days)</th>
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr className="loader-anim-row">
                  <td colSpan="11">
                    <div className="loader-anim">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </td>
                </tr>
              ) : (
                data.map((currency) => (
                  <tr key={currency.id}>
                    <td className="currency-rank">
                      {currency.market_cap_rank == null ? <p className="currency-rank-center">?</p> : <p>{currency.market_cap_rank}</p>}
                    </td>
                    <td>
                      <Link to={"/coin/" + currency.id}>
                        <div className="currency-name">
                          <LazyLoadImage className="currency-image" width={25} height={25} src={currency.image} alt={currency.id} />
                          <p>{currency.name} </p>
                          <span>{currency.symbol.toUpperCase()}</span>
                        </div>
                      </Link>
                    </td>

                    <td className="al-right">
                      {currency.current_price === null
                        ? "?"
                        : currency.current_price < 0.01
                          ? "$" + currency.current_price.toFixed(6)
                          : "$" + numberCommas(Math.trunc(currency.current_price * 100) / 100)}
                    </td>

                    {Math.trunc(currency.price_change_percentage_1h_in_currency * 100) / 100 > 0 ? (
                      <td className="al-right chart-green">
                        <FaSortUp className="icon-sortup" />
                        {Math.abs(Math.trunc(currency.price_change_percentage_1h_in_currency * 100) / 100) + "%"}
                      </td>
                    ) : (
                      <td className="al-right chart-red">
                        <FaSortDown className="icon-sortdown" />
                        {Math.abs(Math.trunc(currency.price_change_percentage_1h_in_currency * 100) / 100) + "%"}
                      </td>
                    )}
                    {Math.trunc(currency.price_change_percentage_24h_in_currency * 100) / 100 > 0 ? (
                      <td className="al-right chart-green">
                        <FaSortUp className="icon-sortup" />
                        {Math.abs(Math.trunc(currency.price_change_percentage_24h_in_currency * 100) / 100) + "%"}
                      </td>
                    ) : (
                      <td className="al-right chart-red">
                        <FaSortDown className="icon-sortdown" />
                        {Math.abs(Math.trunc(currency.price_change_percentage_24h_in_currency * 100) / 100) + "%"}
                      </td>
                    )}
                    {Math.trunc(currency.price_change_percentage_7d_in_currency * 100) / 100 > 0 ? (
                      <td className="al-right chart-green">
                        <FaSortUp className="icon-sortup" />
                        {Math.abs(Math.trunc(currency.price_change_percentage_7d_in_currency * 100) / 100) + "%"}
                      </td>
                    ) : (
                      <td className="al-right chart-red">
                        <FaSortDown className="icon-sortdown" />
                        {Math.abs(Math.trunc(currency.price_change_percentage_7d_in_currency * 100) / 100) + "%"}
                      </td>
                    )}
                    <td className="al-right">{"$" + numberCommas(currency.market_cap)}</td>

                    <td className="al-right">
                      <p>{"$" + numberCommas(currency.total_volume)}</p>
                      <p className="crypto-addit-info">
                        {currency.current_price === null || currency.total_volume === 0
                          ? "? " + currency.symbol.toUpperCase()
                          : numberCommas(Math.round(currency.total_volume / currency.current_price)) + " " + currency.symbol.toUpperCase()}
                      </p>
                    </td>

                    <td className="al-right">
                      <p>
                        {currency.circulating_supply === 0
                          ? "? " + currency.symbol.toUpperCase()
                          : numberCommas(Math.round(currency.circulating_supply)) + " " + currency.symbol.toUpperCase()}
                      </p>
                      {Math.round(currency.total_supply) >
                      Math.round(currency.circulating_supply) + Math.round(currency.circulating_supply / 12.5) ? (
                        <p className="crypto-addit-info">{numberCommas(Math.round(currency.total_supply)) + " " + currency.symbol.toUpperCase()}</p>
                      ) : (
                        ""
                      )}
                    </td>
                    <td>
                      <Link to={"/coin/" + currency.id}>
                        <div className="currency-chart">
                          {(currency.price_change_percentage_7d_in_currency * 100) / 100 > 0 ? (
                            // <Sparklines data={currency.sparkline_in_7d.price}>
                            //   <SparklinesLine
                            //     style={{
                            //       strokeWidth: 2,
                            //       stroke: "#0ecb81",
                            //       fill: "none",
                            //     }}
                            //   />
                            // </Sparklines>
                            <SparkLineChart colors={["#0aca81"]} data={currency.sparkline_in_7d.price} height={45} />
                          ) : (
                            // <Sparklines data={currency.sparkline_in_7d.price}>
                            //   <SparklinesLine
                            //     style={{
                            //       strokeWidth: 2,
                            //       stroke: "#f6465d",
                            //       fill: "none",
                            //     }}
                            //   />
                            // </Sparklines>
                            <SparkLineChart colors={["#f6465d"]} data={currency.sparkline_in_7d.price} height={45} />
                          )}
                        </div>
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="crypto-pagination">
        <Pagination
          count={parseInt(pageNum) + 5}
          page={parseInt(pageNum)}
          color="primary"
          showFirstButton
          showLastButton
          onChange={(_e, num) => navigate(`/page/${num}`, { replace: true })}
        />
      </div>

      <div className="button-up-block">
        <div className="button-up">
          <IoIosArrowUp className="button-up-icon" />
        </div>
      </div>
    </div>
  );
}

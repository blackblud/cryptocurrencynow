import axios from "axios";
import React, { useState, useEffect } from "react";
import numberCommas from "../../core/services/numberCommas";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function TopBlockStat() {
  const [trending, setTrending] = useState({
    coins: [
      {
        item: {
          id: "",
          coin_id: 0,
          name: "",
          symbol: "",
          market_cap_rank: 0,
          small: "",
        },
      },
      {
        item: {
          id: "",
          coin_id: 0,
          name: "",
          symbol: "",
          market_cap_rank: 0,
          small: "",
        },
      },
      {
        item: {
          id: "",
          coin_id: 0,
          name: "",
          symbol: "",
          market_cap_rank: 0,
          small: "",
        },
      },
      {
        item: {
          id: "",
          coin_id: 0,
          name: "",
          symbol: "",
          market_cap_rank: 0,
          small: "",
        },
      },
      {
        item: {
          id: "",
          coin_id: 0,
          name: "",
          symbol: "",
          market_cap_rank: 0,
          small: "",
        },
      },
    ],
    exchanges: [],
  });

  const [companies, setCompanies] = useState({
    companies: [
      {
        name: "MicroStrategy Inc.",
        symbol: "NASDAQ:MSTR",
        country: "US",
        total_holdings: 121044,
      },
      {
        name: "Tesla",
        symbol: "NASDAQ: TSLA",
        country: "US",
        total_holdings: 48000,
      },
      {
        name: "Galaxy Digital Holdings",
        symbol: "TSE:GLXY",
        country: "CA",
        total_holdings: 16402,
      },
      {
        name: "Square Inc.",
        symbol: "NASDAQ:SQ",
        country: "US",
        total_holdings: 8027,
      },
      {
        name: "Marathon Patent Group",
        symbol: "NASDAQ:MARA",
        country: "US",
        total_holdings: 4813,
      },
    ],
  });
  const [btcValue, setBtcValue] = useState({
    rates: {
      usd: {
        name: "US Dollar",
        unit: "$",
        value: 38455.33,
        type: "fiat",
      },
      eur: {
        name: "Euro",
        unit: "€",
        value: 34190.634,
        type: "fiat",
      },
      gbp: {
        name: "British Pound Sterling",
        unit: "zł",
        value: 24.542,
        type: "fiat",
      },
      pln: {
        name: "Polish Zloty",
        unit: "zł",
        value: 156470.971,
        type: "fiat",
      },
      uah: {
        name: "Ukrainian Hryvnia",
        unit: "₴",
        value: 1091879.889,
        type: "fiat",
      },
    },
  });

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((res) => {
        setTrending(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
    axios
      .get("https://api.coingecko.com/api/v3/companies/public_treasury/bitcoin")
      .then((res) => {
        setCompanies(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
    axios
      .get("https://api.coingecko.com/api/v3/exchange_rates")
      .then((res) => {
        setBtcValue(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <div className="data-statistics-main">
      <div className="data-blocks">
        <div className="data-block">
          <div className="data-block-title">
            &#128293;
            <p>Trending Coins</p>
          </div>
          <div className="data-block-table">
            <Link to={"/coin/" + trending.coins[0].item.id}>
              <div className="block-table-row">
                <div className="row-title">
                  <p className="row-number">1</p>
                  <LazyLoadImage src={trending.coins[0].item.small} alt={trending.coins[0].item.name + " Crypto Coin Icon"} width={16} height={16} />
                  <p className="row-name">{trending.coins[0].item.name}</p>
                  <p className="row-ticker">{trending.coins[0].item.symbol}</p>
                </div>
                <div className="row-perc">{"# " + trending.coins[0].item.market_cap_rank}</div>
              </div>
            </Link>

            <Link to={"/coin/" + trending.coins[1].item.id}>
              <div className="block-table-row">
                <div className="row-title">
                  <p className="row-number">2</p>
                  <LazyLoadImage src={trending.coins[1].item.small} alt={trending.coins[1].item.name + " Crypto Coin Icon"} width={16} height={16} />
                  <p className="row-name">{trending.coins[1].item.name}</p>
                  <p className="row-ticker">{trending.coins[1].item.symbol}</p>
                </div>
                <div className="row-perc">{"# " + trending.coins[1].item.market_cap_rank}</div>
              </div>
            </Link>

            <Link to={"/coin/" + trending.coins[2].item.id}>
              <div className="block-table-row">
                <div className="row-title">
                  <p className="row-number">3</p>
                  <LazyLoadImage src={trending.coins[2].item.small} alt={trending.coins[2].item.name + " Crypto Coin Icon"} width={16} height={16} />
                  <p className="row-name">{trending.coins[2].item.name}</p>
                  <p className="row-ticker">{trending.coins[2].item.symbol}</p>
                </div>
                <div className="row-perc">{"# " + trending.coins[2].item.market_cap_rank}</div>
              </div>
            </Link>

            <Link to={"/coin/" + trending.coins[3].item.id}>
              <div className="block-table-row">
                <div className="row-title">
                  <p className="row-number">4</p>
                  <LazyLoadImage src={trending.coins[3].item.small} alt={trending.coins[3].item.name + " Crypto Coin Icon"} width={16} height={16} />
                  <p className="row-name">{trending.coins[3].item.name}</p>
                  <p className="row-ticker">{trending.coins[3].item.symbol}</p>
                </div>
                <div className="row-perc">{"# " + trending.coins[3].item.market_cap_rank}</div>
              </div>
            </Link>

            <Link to={"/coin/" + trending.coins[4].item.id}>
              <div className="block-table-row">
                <div className="row-title">
                  <p className="row-number">5</p>
                  <LazyLoadImage src={trending.coins[4].item.small} alt={trending.coins[4].item.name + " Crypto Coin Icon"} width={16} height={16} />
                  <p className="row-name">{trending.coins[4].item.name}</p>
                  <p className="row-ticker">{trending.coins[4].item.symbol}</p>
                </div>
                <div className="row-perc">{"# " + trending.coins[4].item.market_cap_rank}</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="data-block">
          <div className="data-block-title">
            &#128142;
            <p>Companies BTC Holders</p>
          </div>

          <div className="data-block-table">
            <a href={"https://www.microstrategy.com/en"} target="_blank" rel="noreferrer">
              <div className="block-table-row">
                <div className="row-title">
                  <div className="row-number">1</div>
                  <p className="row-country">{companies.companies[0].country}</p>
                  <p className="row-name">{companies.companies[0].name}</p>
                  <p className="row-ticker">{companies.companies[0].symbol}</p>
                </div>
                <div className="row-perc">{numberCommas(companies.companies[0].total_holdings)} BTC</div>
              </div>
            </a>
            <a href={"https://www.tesla.com/"} target="_blank" rel="noreferrer">
              <div className="block-table-row">
                <div className="row-title">
                  <p className="row-number">2</p>
                  <p className="row-country">{companies.companies[1].country}</p>
                  <p className="row-name">{companies.companies[1].name}</p>
                  <p className="row-ticker">{companies.companies[1].symbol}</p>
                </div>
                <div className="row-perc">{numberCommas(companies.companies[1].total_holdings)} BTC</div>
              </div>
            </a>
            <a href={"https://www.galaxydigital.io/"} target="_blank" rel="noreferrer">
              <div className="block-table-row">
                <div className="row-title">
                  <p className="row-number">3</p>
                  <p className="row-country">{companies.companies[2].country}</p>
                  <p className="row-name">{companies.companies[2].name}</p>
                  <p className="row-ticker">{companies.companies[2].symbol}</p>
                </div>
                <div className="row-perc">{numberCommas(companies.companies[2].total_holdings)} BTC</div>
              </div>
            </a>
            <a href={"https://squareup.com/us/en"} target="_blank" rel="noreferrer">
              <div className="block-table-row">
                <div className="row-title">
                  <p className="row-number">4</p>
                  <p className="row-country">{companies.companies[3].country}</p>
                  <p className="row-name">{companies.companies[3].name}</p>
                  <p className="row-ticker">{companies.companies[3].symbol}</p>
                </div>
                <div className="row-perc">{numberCommas(companies.companies[3].total_holdings)} BTC</div>
              </div>
            </a>
            <a href={"https://marathondh.com/"} target="_blank" rel="noreferrer">
              <div className="block-table-row">
                <div className="row-title">
                  <p className="row-number">5</p>
                  <p className="row-country">{companies.companies[4].country}</p>
                  <p className="row-name">{companies.companies[4].name}</p>
                  <p className="row-ticker">{companies.companies[4].symbol}</p>
                </div>
                <div className="row-perc">{numberCommas(companies.companies[4].total_holdings)} BTC</div>
              </div>
            </a>
          </div>
        </div>
        <div className="data-block">
          <div className="data-block-title">
            &#128184;
            <p>BTC in Fiat Currencies</p>
          </div>
          <div className="data-block-table">
            <Link to="/convert/1-bitcoin-to-usd">
              <div className="block-table-row">
                <div className="row-title">
                  <p className="row-number">1</p>
                  <LazyLoadImage className="row-flag" src="https://flagcdn.com/40x30/us.png" alt="USD" />
                  <p className="row-name">{btcValue.rates.usd.name}</p>
                  <p className="row-ticker">USD</p>
                </div>
                <div className="row-perc">{numberCommas(Math.round(btcValue.rates.usd.value)) + " " + btcValue.rates.usd.unit}</div>
              </div>
            </Link>
            <Link to="/convert/1-bitcoin-to-eur">
              <div className="block-table-row">
                <div className="row-title">
                  <p className="row-number">2</p>
                  <LazyLoadImage className="row-flag" src="https://flagcdn.com/40x30/eu.png" alt="EUR" />
                  <p className="row-name">{btcValue.rates.eur.name}</p>
                  <p className="row-ticker">EUR</p>
                </div>
                <div className="row-perc">{numberCommas(Math.round(btcValue.rates.eur.value)) + " " + btcValue.rates.eur.unit}</div>
              </div>
            </Link>
            <Link to="/convert/1-bitcoin-to-gbp">
              <div className="block-table-row">
                <div className="row-title">
                  <p className="row-number">3</p>
                  <LazyLoadImage className="row-flag" src="https://flagcdn.com/40x30/gb.png" alt="GBP" />
                  <p className="row-name">{btcValue.rates.gbp.name}</p>
                  <p className="row-ticker">GBP</p>
                </div>
                <div className="row-perc">{numberCommas(Math.round(btcValue.rates.gbp.value)) + " " + btcValue.rates.gbp.unit}</div>
              </div>
            </Link>
            <Link to="/convert/1-bitcoin-to-pln">
              <div className="block-table-row">
                <div className="row-title">
                  <p className="row-number">4</p>
                  <LazyLoadImage className="row-flag" src="https://flagcdn.com/40x30/pl.png" alt="PLN" />
                  <p className="row-name">{btcValue.rates.pln.name}</p>
                  <p className="row-ticker">PLN</p>
                </div>
                <div className="row-perc">{numberCommas(Math.round(btcValue.rates.pln.value)) + " " + btcValue.rates.pln.unit}</div>
              </div>
            </Link>
            <Link to="/convert/1-bitcoin-to-uah">
              <div className="block-table-row">
                <div className="row-title">
                  <p className="row-number">5</p>
                  <LazyLoadImage className="row-flag" src="https://flagcdn.com/40x30/ua.png" alt="UAH" />
                  <p className="row-name">Ukrainian Hryvnia</p>
                  <p className="row-ticker">UAH</p>
                </div>
                <div className="row-perc">{numberCommas(Math.round(btcValue.rates.uah.value)) + " " + btcValue.rates.uah.unit}</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={{
          mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
            slidesToSlide: 1,
          },
          desktop: {
            breakpoint: { max: 9999, min: 9999 },
            items: 3,
            slidesToSlide: 1,
          },
        }}
        ssr={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="carousel-wrapper-mobile">
          <div className="data-block-mobile">
            <div className="data-block-title">
              &#128293;
              <p>Trending Coins</p>
            </div>
            <div className="data-block-table">
              <Link to={"/coin/" + trending.coins[0].item.id}>
                <div className="block-table-row">
                  <div className="row-title">
                    <p className="row-number">1</p>
                    <LazyLoadImage
                      src={trending.coins[0].item.small}
                      alt={trending.coins[0].item.name + " Crypto Coin Icon"}
                      width={16}
                      height={16}
                    />
                    <p className="row-name">{trending.coins[0].item.name}</p>
                    <p className="row-ticker">{trending.coins[0].item.symbol}</p>
                  </div>
                  <div className="row-perc">{"# " + trending.coins[0].item.market_cap_rank}</div>
                </div>
              </Link>

              <Link to={"/coin/" + trending.coins[1].item.id}>
                <div className="block-table-row">
                  <div className="row-title">
                    <p className="row-number">2</p>
                    <LazyLoadImage
                      src={trending.coins[1].item.small}
                      alt={trending.coins[1].item.name + " Crypto Coin Icon"}
                      width={16}
                      height={16}
                    />
                    <p className="row-name">{trending.coins[1].item.name}</p>
                    <p className="row-ticker">{trending.coins[1].item.symbol}</p>
                  </div>
                  <div className="row-perc">{"# " + trending.coins[1].item.market_cap_rank}</div>
                </div>
              </Link>

              <Link to={"/coin/" + trending.coins[2].item.id}>
                <div className="block-table-row">
                  <div className="row-title">
                    <p className="row-number">3</p>
                    <LazyLoadImage
                      src={trending.coins[2].item.small}
                      alt={trending.coins[2].item.name + " Crypto Coin Icon"}
                      width={16}
                      height={16}
                    />
                    <p className="row-name">{trending.coins[2].item.name}</p>
                    <p className="row-ticker">{trending.coins[2].item.symbol}</p>
                  </div>
                  <div className="row-perc">{"# " + trending.coins[2].item.market_cap_rank}</div>
                </div>
              </Link>

              <Link to={"/coin/" + trending.coins[3].item.id}>
                <div className="block-table-row">
                  <div className="row-title">
                    <p className="row-number">4</p>
                    <LazyLoadImage
                      src={trending.coins[3].item.small}
                      alt={trending.coins[3].item.name + " Crypto Coin Icon"}
                      width={16}
                      height={16}
                    />
                    <p className="row-name">{trending.coins[3].item.name}</p>
                    <p className="row-ticker">{trending.coins[3].item.symbol}</p>
                  </div>
                  <div className="row-perc">{"# " + trending.coins[3].item.market_cap_rank}</div>
                </div>
              </Link>

              <Link to={"/coin/" + trending.coins[4].item.id}>
                <div className="block-table-row">
                  <div className="row-title">
                    <p className="row-number">5</p>
                    <LazyLoadImage
                      src={trending.coins[4].item.small}
                      alt={trending.coins[4].item.name + " Crypto Coin Icon"}
                      width={16}
                      height={16}
                    />
                    <p className="row-name">{trending.coins[4].item.name}</p>
                    <p className="row-ticker">{trending.coins[4].item.symbol}</p>
                  </div>
                  <div className="row-perc">{"# " + trending.coins[4].item.market_cap_rank}</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-wrapper-mobile">
          <div className="data-block-mobile">
            <div className="data-block-title">
              &#128142;
              <p>Companies BTC Holders</p>
            </div>

            <div className="data-block-table">
              <a href={"https://www.microstrategy.com/en"} target="_blank" rel="noreferrer">
                <div className="block-table-row">
                  <div className="row-title">
                    <div className="row-number">1</div>
                    <p className="row-country">{companies.companies[0].country}</p>
                    <p className="row-name">{companies.companies[0].name}</p>
                    <p className="row-ticker">{companies.companies[0].symbol}</p>
                  </div>
                  <div className="row-perc">{numberCommas(companies.companies[0].total_holdings)} BTC</div>
                </div>
              </a>
              <a href={"https://www.tesla.com/"} target="_blank" rel="noreferrer">
                <div className="block-table-row">
                  <div className="row-title">
                    <p className="row-number">2</p>
                    <p className="row-country">{companies.companies[1].country}</p>
                    <p className="row-name">{companies.companies[1].name}</p>
                    <p className="row-ticker">{companies.companies[1].symbol}</p>
                  </div>
                  <div className="row-perc">{numberCommas(companies.companies[1].total_holdings)} BTC</div>
                </div>
              </a>
              <a href={"https://www.galaxydigital.io/"} target="_blank" rel="noreferrer">
                <div className="block-table-row">
                  <div className="row-title">
                    <p className="row-number">3</p>
                    <p className="row-country">{companies.companies[2].country}</p>
                    <p className="row-name">{companies.companies[2].name}</p>
                    <p className="row-ticker">{companies.companies[2].symbol}</p>
                  </div>
                  <div className="row-perc">{numberCommas(companies.companies[2].total_holdings)} BTC</div>
                </div>
              </a>
              <a href={"https://squareup.com/us/en"} target="_blank" rel="noreferrer">
                <div className="block-table-row">
                  <div className="row-title">
                    <p className="row-number">4</p>
                    <p className="row-country">{companies.companies[3].country}</p>
                    <p className="row-name">{companies.companies[3].name}</p>
                    <p className="row-ticker">{companies.companies[3].symbol}</p>
                  </div>
                  <div className="row-perc">{numberCommas(companies.companies[3].total_holdings)} BTC</div>
                </div>
              </a>
              <a href={"https://marathondh.com/"} target="_blank" rel="noreferrer">
                <div className="block-table-row">
                  <div className="row-title">
                    <p className="row-number">5</p>
                    <p className="row-country">{companies.companies[4].country}</p>
                    <p className="row-name">{companies.companies[4].name}</p>
                    <p className="row-ticker">{companies.companies[4].symbol}</p>
                  </div>
                  <div className="row-perc">{numberCommas(companies.companies[4].total_holdings)} BTC</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-wrapper-mobile">
          <div className="data-block-mobile">
            <div className="data-block-title">
              &#128184;
              <p>BTC in Fiat Currencies</p>
            </div>
            <div className="data-block-table">
              <Link to="/convert/1-bitcoin-to-usd">
                <div className="block-table-row">
                  <div className="row-title">
                    <p className="row-number">1</p>
                    <LazyLoadImage className="row-flag" src="https://flagcdn.com/40x30/us.png" alt="USD" />
                    <p className="row-name">{btcValue.rates.usd.name}</p>
                    <p className="row-ticker">USD</p>
                  </div>
                  <div className="row-perc">{numberCommas(Math.round(btcValue.rates.usd.value)) + " " + btcValue.rates.usd.unit}</div>
                </div>
              </Link>
              <Link to="/convert/1-bitcoin-to-eur">
                <div className="block-table-row">
                  <div className="row-title">
                    <p className="row-number">2</p>
                    <LazyLoadImage className="row-flag" src="https://flagcdn.com/40x30/eu.png" alt="EUR" />
                    <p className="row-name">{btcValue.rates.eur.name}</p>
                    <p className="row-ticker">EUR</p>
                  </div>
                  <div className="row-perc">{numberCommas(Math.round(btcValue.rates.eur.value)) + " " + btcValue.rates.eur.unit}</div>
                </div>
              </Link>
              <Link to="/convert/1-bitcoin-to-gbp">
                <div className="block-table-row">
                  <div className="row-title">
                    <p className="row-number">3</p>
                    <LazyLoadImage className="row-flag" src="https://flagcdn.com/40x30/gb.png" alt="GBP" />
                    <p className="row-name">{btcValue.rates.gbp.name}</p>
                    <p className="row-ticker">GBP</p>
                  </div>
                  <div className="row-perc">{numberCommas(Math.round(btcValue.rates.gbp.value)) + " " + btcValue.rates.gbp.unit}</div>
                </div>
              </Link>
              <Link to="/convert/1-bitcoin-to-pln">
                <div className="block-table-row">
                  <div className="row-title">
                    <p className="row-number">4</p>
                    <LazyLoadImage className="row-flag" src="https://flagcdn.com/40x30/pl.png" alt="PLN" />
                    <p className="row-name">{btcValue.rates.pln.name}</p>
                    <p className="row-ticker">PLN</p>
                  </div>
                  <div className="row-perc">{numberCommas(Math.round(btcValue.rates.pln.value)) + " " + btcValue.rates.pln.unit}</div>
                </div>
              </Link>
              <Link to="/convert/1-bitcoin-to-uah">
                <div className="block-table-row">
                  <div className="row-title">
                    <p className="row-number">5</p>
                    <LazyLoadImage className="row-flag" src="https://flagcdn.com/40x30/ua.png" alt="UAH" />
                    <p className="row-name">Ukrainian Hryvnia</p>
                    <p className="row-ticker">UAH</p>
                  </div>
                  <div className="row-perc">{numberCommas(Math.round(btcValue.rates.uah.value)) + " " + btcValue.rates.uah.unit}</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/coin.scss";
import timeTZDate from "../../core/services/timeTZDate";
import timeTZDateFull from "../../core/services/timeTZDateFull";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import numberCommas from "../../core/services/numberCommas";
import GlobalStatistics from "../components/GlobalStatistics";
import { BsFacebook, BsTelegram, BsReddit, BsTwitter, BsGithub, BsGlobe } from "react-icons/bs";
import { IoShareSocialSharp } from "react-icons/io5";
import { HiExternalLink, HiLink } from "react-icons/hi";
import { MdForum } from "react-icons/md";
import { SiBlockchaindotcom } from "react-icons/si";
import PriceChart from "../components/PriceChart";
import VolumeChart from "../components/VolumeChart";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "../style/coin.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Breadcrumbs from "../components/Breadcrumbs";
import { Helmet } from "react-helmet";

export default function Coin() {
  const { coin_id } = useParams();

  const [chartDays, setChartDays] = useState(1);

  const [coinData, setCoinData] = useState({
    symbol: "",
    name: "",
    categories: [""],
    asset_platform_id: "",
    market_cap_rank: "",
    hashing_algorithm: "",
    market_data: {
      sparkline_7d: {
        price: [0],
      },
      circulating_supply: "",
      total_supply: "",

      ath: {
        usd: "",
      },
      ath_change_percentage: {
        usd: "",
      },
      ath_date: {
        usd: "2022-02-05T00:28:45.840Z",
      },
      atl: {
        usd: "",
      },
      atl_change_percentage: {
        usd: "",
      },
      atl_date: {
        usd: "2022-02-05T00:28:45.840Z",
      },
      total_volume: {
        usd: "",
      },
      market_cap: {
        usd: "",
      },
      market_cap_change_percentage_24h: "",
      price_change_24h: 0,
      current_price: {
        usd: "",
      },
      price_change_percentage_24h: 0,
      low_24h: {
        usd: "",
      },
      high_24h: {
        usd: "",
      },
    },
    image: {
      large: "",
    },
    last_updated: "",
    description: {
      en: "",
    },
    community_data: {
      facebook_likes: 0,
      reddit_subscribers: 0,
      telegram_channel_user_count: 0,
      twitter_followers: 0,
    },
    links: {
      facebook_username: "",
      subreddit_url: "",
      telegram_channel_identifier: "",
      twitter_screen_name: "",
      repos_url: {
        github: "",
      },
      announcement_url: [""],
      homepage: [""],
      blockchain_site: [""],
      official_forum_url: [""],
    },
    developer_data: {
      stars: 0,
    },
  });

  const [coinChart, setCoinChart] = useState({
    prices: [],
    total_volumes: [],
    market_caps: [],
  });

  useEffect(() => {
    document.title = `${coinData.name} Price: ${coinData.symbol.toUpperCase()} Live Price Chart, Market Cap & News Today`;
    document.getElementsByTagName("META")[2].content = `Current value of ${coinData.name} (${coinData.symbol.toUpperCase()}) is ${
      coinData.market_data.current_price
    }.`;
  }, [coinData]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/" + coin_id, {
        params: {
          localization: false,
          tickers: false,
          developer_data: true,
          market_data: true,
          community_data: true,
          sparkline: true,
        },
      })
      .then((res) => {
        setCoinData(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/" + coin_id + "/market_chart", {
        params: {
          vs_currency: "usd",
          days: chartDays,
        },
      })
      .then((res) => {
        console.log(res.data);
        setCoinChart(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [chartDays]);

  const activeButton = (days, element) => {
    setChartDays(days);

    var categories = document.querySelectorAll(".button-block");
    for (const categ of categories) {
      categ.classList.remove("button-block-active");
    }

    document.getElementById(element).classList.toggle("button-block-active");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="wrapper">
      <GlobalStatistics />

      <Breadcrumbs />

      <Helmet>
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="coin-main">
        <div className="main-info">
          <div className="info-basic">
            <div>
              <LazyLoadImage src={coinData.image.large} alt="" />
              <p>{coinData.name}</p>
              <p>{coinData.symbol.toUpperCase()}</p>
            </div>
          </div>
          <div className="info-tags">
            <div className="info-tag-rank">{coinData.market_cap_rank == null ? "Rank ?" : <p>Rank #{coinData.market_cap_rank}</p>}</div>

            {coinData.asset_platform_id !== null ? (
              <div className="info-tag" title="Asset Platform">
                {coinData.asset_platform_id}
              </div>
            ) : (
              ""
            )}
            {coinData.hashing_algorithm !== null ? (
              <div className="info-tag" title="Hashing Algorithm">
                {coinData.hashing_algorithm}
              </div>
            ) : (
              ""
            )}
            {coinData.categories === null
              ? ""
              : coinData.categories.map((categ, i) =>
                  i < 5 ? (
                    categ === null ? (
                      ""
                    ) : (
                      <div className="info-tag" title="Category" key={categ}>
                        {categ}
                      </div>
                    )
                  ) : (
                    ""
                  )
                )}
          </div>
        </div>

        <div className="main-price">
          <div className="price-price">
            <p>{coinData.name} Price</p>
            <div>
              <p className="price-value">${numberCommas(coinData.market_data.current_price.usd)}</p>

              {Math.trunc(coinData.market_data.price_change_percentage_24h * 100) / 100 > 0 ? (
                <p className="price-pers background-green">
                  <FaSortUp className="icon-sortup" />
                  {Math.abs(Math.trunc(coinData.market_data.price_change_percentage_24h * 100) / 100) + "%"}
                </p>
              ) : (
                <p className="price-pers background-red">
                  <FaSortDown className="icon-sortdown" />
                  {Math.abs(Math.trunc(coinData.market_data.price_change_percentage_24h * 100) / 100) + "%"}
                </p>
              )}
            </div>
          </div>
          <div className="price-stats">
            <div>
              <p>Low:</p>
              <span>${numberCommas(coinData?.market_data.low_24h?.usd)}</span>
            </div>

            {coinData.market_data.current_price.usd < 1.001 ? (
              <input
                id="range-coin"
                type="range"
                min={coinData.market_data.low_24h.usd * 100000000}
                max={coinData.market_data.high_24h.usd * 100000000}
                value={coinData.market_data.current_price.usd * 100000000}
                onChange={() => {}}
              />
            ) : coinData.market_data.current_price.usd === 1 ? (
              <input id="range-coin" type="range" min={0} max={10} value={5} onChange={() => {}} />
            ) : (
              <input
                id="range-coin"
                type="range"
                min={coinData.market_data.low_24h.usd * 100}
                max={coinData.market_data.high_24h.usd * 100}
                value={coinData.market_data.current_price.usd * 100}
                onChange={() => {}}
              />
            )}

            <div>
              <p>High:</p>
              <span>${numberCommas(coinData.market_data.high_24h?.usd)}</span>
            </div>
          </div>
        </div>

        <div className="main-desc">
          <div className="desc-updated">Last Updated at: {timeTZDate(coinData.last_updated)}</div>
        </div>

        <div className="main-socials">
          <div className="webs">
            {coinData.links.homepage[0] === "" ? (
              ""
            ) : (
              <a href={coinData.links.homepage[0]} target="_blank" rel="nofollow noreferrer" className="social-block">
                <BsGlobe className="web-icon" />
                <p>HomePage</p>
                <HiExternalLink className="web-link-icon" />
              </a>
            )}

            {coinData.links.blockchain_site[0] === "" ? (
              ""
            ) : (
              <a href={coinData.links.blockchain_site[0]} target="_blank" rel="nofollow noreferrer" className="social-block">
                <SiBlockchaindotcom className="web-icon" />
                <p>Blockchain</p>
                <HiExternalLink className="web-link-icon" />
              </a>
            )}

            {coinData.links.official_forum_url[0] === "" ? (
              ""
            ) : (
              <a href={coinData.links.official_forum_url[0]} target="_blank" rel="nofollow noreferrer" className="social-block">
                <MdForum className="web-icon" />
                <p>Forum</p>
                <HiExternalLink className="web-link-icon" />
              </a>
            )}

            {coinData.links.announcement_url[0] === "" ? (
              ""
            ) : (
              <a href={coinData.links.announcement_url[0]} target="_blank" rel="nofollow noreferrer" className="social-block">
                <HiLink className="web-icon" />
                <p>Announcement</p>
                <HiExternalLink className="web-link-icon" />
              </a>
            )}
          </div>

          <div className="socials">
            {coinData.links.facebook_username === "" || coinData.links.facebook_username === null ? (
              ""
            ) : (
              <a
                href={"https://www.facebook.com/" + coinData.links.facebook_username}
                target="_blank"
                rel="nofollow noreferrer"
                className="social-block"
              >
                <BsFacebook className="facebook-color" />
                <p>Facebook</p>
                {coinData.community_data.facebook_likes === null || coinData.community_data.facebook_likes === 0 ? (
                  ""
                ) : (
                  <span>{coinData.community_data.facebook_likes}</span>
                )}
              </a>
            )}

            {coinData.links.subreddit_url === "" || coinData.links.subreddit_url === null ? (
              ""
            ) : (
              <a href={coinData.links.subreddit_url} target="_blank" rel="nofollow noreferrer" className="social-block">
                <BsReddit className="reddit-color" />
                <p>Reddit</p>
                {coinData.community_data.reddit_subscribers === null || coinData.community_data.reddit_subscribers === 0 ? (
                  ""
                ) : (
                  <span>{numberCommas(coinData.community_data.reddit_subscribers)}</span>
                )}
              </a>
            )}

            {coinData.links.telegram_channel_identifier === "" || coinData.links.telegram_channel_identifier === null ? (
              ""
            ) : (
              <a
                href={"https://t.me/" + coinData.links.telegram_channel_identifier}
                target="_blank"
                rel="nofollow noreferrer"
                className="social-block"
              >
                <BsTelegram className="telegram-color" />
                <p>Telegram</p>
                {coinData.community_data.telegram_channel_user_count === null || coinData.community_data.telegram_channel_user_count === 0 ? (
                  ""
                ) : (
                  <span>{numberCommas(coinData.community_data.telegram_channel_user_count)}</span>
                )}
              </a>
            )}

            {coinData.links.twitter_screen_name === "" || coinData.links.twitter_screen_name === null ? (
              ""
            ) : (
              <a
                href={"https://twitter.com/" + coinData.links.twitter_screen_name}
                target="_blank"
                rel="nofollow noreferrer"
                className="social-block"
              >
                <BsTwitter className="twitter-color" />
                <p>Twitter</p>
                {coinData.community_data.twitter_followers === null || coinData.community_data.twitter_followers === 0 ? (
                  ""
                ) : (
                  <span>{numberCommas(coinData.community_data.twitter_followers)}</span>
                )}
              </a>
            )}

            {coinData.links.repos_url.github[0] === "" || coinData.links.repos_url.github.length === 0 ? (
              ""
            ) : (
              <a href={coinData.links.repos_url.github[0]} target="_blank" rel="nofollow noreferrer" className="social-block">
                <BsGithub className="github-color" />
                <p>Github</p>
                {coinData.developer_data.stars === null || coinData.developer_data.stars === 0 ? (
                  ""
                ) : (
                  <span>{numberCommas(coinData.developer_data.stars)}</span>
                )}
              </a>
            )}
          </div>
        </div>

        <div className="main-cap">
          <p className="main-stat-name">Market Cap</p>
          {coinData.market_data.market_cap.usd === 0 ? (
            <p className="main-stat-row">?</p>
          ) : (
            <p className="main-stat-row">${numberCommas(coinData.market_data.market_cap.usd)}</p>
          )}
          {Math.trunc(coinData.market_data.market_cap_change_percentage_24h * 100) / 100 > 0 ? (
            <p className="chart-green">
              <FaSortUp className="icon-sortup" />
              <span className="main-stat-row">{Math.abs(Math.trunc(coinData.market_data.market_cap_change_percentage_24h * 100) / 100) + "%"}</span>
            </p>
          ) : (
            <p className="chart-red">
              <FaSortDown className="icon-sortdown" />
              <span className="main-stat-row">{Math.abs(Math.trunc(coinData.market_data.market_cap_change_percentage_24h * 100) / 100) + "%"}</span>
            </p>
          )}
        </div>

        <div className="main-vol">
          <p className="main-stat-name">
            Volume <span className="block-24h">24h</span>
          </p>
          {coinData.market_data.total_volume.usd === 0 ? (
            <p className="main-stat-row">?</p>
          ) : (
            <p className="main-stat-row">${numberCommas(coinData.market_data.total_volume.usd)}</p>
          )}

          <p className="main-stat-name">Volume / Market Cap</p>
          {coinData.market_data.total_volume.usd === 0 ? (
            <p className="main-stat-row">?</p>
          ) : (
            <p className="main-stat-row">{(coinData.market_data.total_volume.usd / coinData.market_data.market_cap.usd).toFixed(4)}</p>
          )}
        </div>

        <div className="main-change">
          <p className="main-stat-name">Price Change</p>
          <div className="change-block">
            <span className="block-24h">7d</span>
            {Math.trunc(coinData.market_data.price_change_percentage_7d * 100) / 100 > 0 ? (
              <p className="chart-green">
                <FaSortUp className="icon-sortup" />
                <span>{Math.abs(Math.trunc(coinData.market_data.price_change_percentage_7d * 100) / 100) + "%"}</span>
              </p>
            ) : (
              <p className="chart-red">
                <FaSortDown className="icon-sortdown" />
                <span>{Math.abs(Math.trunc(coinData.market_data.price_change_percentage_7d * 100) / 100) + "%"}</span>
              </p>
            )}
          </div>

          <div className="change-block">
            <span className="block-24h">30d</span>
            {Math.trunc(coinData.market_data.price_change_percentage_30d * 100) / 100 > 0 ? (
              <p className="chart-green">
                <FaSortUp className="icon-sortup" />
                <span>{Math.abs(Math.trunc(coinData.market_data.price_change_percentage_30d * 100) / 100) + "%"}</span>
              </p>
            ) : (
              <p className="chart-red">
                <FaSortDown className="icon-sortdown" />
                <span>{Math.abs(Math.trunc(coinData.market_data.price_change_percentage_30d * 100) / 100) + "%"}</span>
              </p>
            )}
          </div>

          <div className="change-block">
            <span className="block-24h">60d</span>
            {Math.trunc(coinData.market_data.price_change_percentage_60d * 100) / 100 > 0 ? (
              <p className="chart-green">
                <FaSortUp className="icon-sortup" />
                <span>{Math.abs(Math.trunc(coinData.market_data.price_change_percentage_60d * 100) / 100) + "%"}</span>
              </p>
            ) : (
              <p className="chart-red">
                <FaSortDown className="icon-sortdown" />
                <span>{Math.abs(Math.trunc(coinData.market_data.price_change_percentage_60d * 100) / 100) + "%"}</span>
              </p>
            )}
          </div>

          <div className="change-block">
            <span className="block-24h">200d</span>
            {Math.trunc(coinData.market_data.price_change_percentage_200d * 100) / 100 > 0 ? (
              <p className="chart-green">
                <FaSortUp className="icon-sortup" />
                <span>{Math.abs(Math.trunc(coinData.market_data.price_change_percentage_200d * 100) / 100) + "%"}</span>
              </p>
            ) : (
              <p className="chart-red">
                <FaSortDown className="icon-sortdown" />
                <span>{Math.abs(Math.trunc(coinData.market_data.price_change_percentage_200d * 100) / 100) + "%"}</span>
              </p>
            )}
          </div>
        </div>

        <div className="main-sup">
          <p className="main-stat-name">Circulating Supply</p>
          <p className="main-stat-row">
            {coinData.market_data.circulating_supply === 0 ? "?" : numberCommas(Math.round(coinData.market_data.circulating_supply))}{" "}
            {coinData.symbol.toUpperCase()}
          </p>
          <p className="main-stat-name">Total Supply</p>
          <p className="main-stat-row">
            {coinData.market_data.total_supply === null ? "?" : numberCommas(Math.round(coinData.market_data.total_supply))}{" "}
            {coinData.symbol.toUpperCase()}
          </p>
        </div>
      </div>

      <div className="coin-main-mobile">
        <div className="main-info">
          <div className="info-basic">
            <div>
              <LazyLoadImage src={coinData.image.large} alt="" />
              <p>{coinData.name}</p>
              <p>{coinData.symbol.toUpperCase()}</p>
            </div>

            {/* <div className="desc-socials">
              <IoShareSocialSharp className="desc-socials-icon" />
            </div> */}

            <div>
              <Button
                className="desc-socials"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <IoShareSocialSharp className="desc-socials-icon" />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {coinData.links.homepage[0] === "" ? (
                  ""
                ) : (
                  <MenuItem className="menu-item-block" onClick={handleClose}>
                    <a href={coinData.links.homepage[0]} target="_blank" rel="nofollow noreferrer" className="social-block">
                      <BsGlobe className="web-icon" />
                      <p>HomePage</p>
                      <HiExternalLink className="web-link-icon" />
                    </a>
                  </MenuItem>
                )}{" "}
                {coinData.links.blockchain_site[0] === "" ? (
                  ""
                ) : (
                  <MenuItem className="menu-item-block" onClick={handleClose}>
                    <a href={coinData.links.blockchain_site[0]} target="_blank" rel="nofollow noreferrer" className="social-block">
                      <SiBlockchaindotcom className="web-icon" />
                      <p>Blockchain</p>
                      <HiExternalLink className="web-link-icon" />
                    </a>
                  </MenuItem>
                )}
                {coinData.links.official_forum_url[0] === "" ? (
                  ""
                ) : (
                  <MenuItem className="menu-item-block" onClick={handleClose}>
                    <a href={coinData.links.official_forum_url[0]} target="_blank" rel="nofollow noreferrer" className="social-block">
                      <MdForum className="web-icon" />
                      <p>Forum</p>
                      <HiExternalLink className="web-link-icon" />
                    </a>
                  </MenuItem>
                )}
                {coinData.links.announcement_url[0] === "" ? (
                  ""
                ) : (
                  <MenuItem className="menu-item-block" onClick={handleClose}>
                    <a href={coinData.links.announcement_url[0]} target="_blank" rel="nofollow noreferrer" className="social-block">
                      <HiLink className="web-icon" />
                      <p>Announcement</p>
                      <HiExternalLink className="web-link-icon" />
                    </a>
                  </MenuItem>
                )}
                {coinData.links.facebook_username === "" || coinData.links.facebook_username === null ? (
                  ""
                ) : (
                  <MenuItem className="menu-item-block" onClick={handleClose}>
                    <a
                      href={"https://www.facebook.com/" + coinData.links.facebook_username}
                      target="_blank"
                      rel="nofollow noreferrer"
                      className="social-block"
                    >
                      <BsFacebook className="facebook-color" />
                      <p>Facebook</p>
                      {coinData.community_data.facebook_likes === null || coinData.community_data.facebook_likes === 0 ? (
                        ""
                      ) : (
                        <span>{coinData.community_data.facebook_likes}</span>
                      )}
                    </a>
                  </MenuItem>
                )}{" "}
                {coinData.links.subreddit_url === "" || coinData.links.subreddit_url === null ? (
                  ""
                ) : (
                  <MenuItem className="menu-item-block" onClick={handleClose}>
                    <a href={coinData.links.subreddit_url} target="_blank" rel="nofollow noreferrer" className="social-block">
                      <BsReddit className="reddit-color" />
                      <p>Reddit</p>
                      {coinData.community_data.reddit_subscribers === null || coinData.community_data.reddit_subscribers === 0 ? (
                        ""
                      ) : (
                        <span>{numberCommas(coinData.community_data.reddit_subscribers)}</span>
                      )}
                    </a>
                  </MenuItem>
                )}
                {coinData.links.telegram_channel_identifier === "" || coinData.links.telegram_channel_identifier === null ? (
                  ""
                ) : (
                  <MenuItem className="menu-item-block" onClick={handleClose}>
                    <a
                      href={"https://t.me/" + coinData.links.telegram_channel_identifier}
                      target="_blank"
                      rel="nofollow noreferrer"
                      className="social-block"
                    >
                      <BsTelegram className="telegram-color" />
                      <p>Telegram</p>
                      {coinData.community_data.telegram_channel_user_count === null || coinData.community_data.telegram_channel_user_count === 0 ? (
                        ""
                      ) : (
                        <span>{numberCommas(coinData.community_data.telegram_channel_user_count)}</span>
                      )}
                    </a>
                  </MenuItem>
                )}
                {coinData.links.twitter_screen_name === "" || coinData.links.twitter_screen_name === null ? (
                  ""
                ) : (
                  <MenuItem className="menu-item-block" onClick={handleClose}>
                    <a
                      href={"https://twitter.com/" + coinData.links.twitter_screen_name}
                      target="_blank"
                      rel="nofollow noreferrer"
                      className="social-block"
                    >
                      <BsTwitter className="twitter-color" />
                      <p>Twitter</p>
                      {coinData.community_data.twitter_followers === null || coinData.community_data.twitter_followers === 0 ? (
                        ""
                      ) : (
                        <span>{numberCommas(coinData.community_data.twitter_followers)}</span>
                      )}
                    </a>
                  </MenuItem>
                )}
                {coinData.links.repos_url.github[0] === "" || coinData.links.repos_url.github.length === 0 ? (
                  ""
                ) : (
                  <MenuItem className="menu-item-block" onClick={handleClose}>
                    <a href={coinData.links.repos_url.github[0]} target="_blank" rel="nofollow noreferrer" className="social-block">
                      <BsGithub className="github-color" />
                      <p>Github</p>
                      {coinData.developer_data.stars === null || coinData.developer_data.stars === 0 ? (
                        ""
                      ) : (
                        <span>{numberCommas(coinData.developer_data.stars)}</span>
                      )}
                    </a>
                  </MenuItem>
                )}
              </Menu>
            </div>
          </div>
          <div className="info-tags">
            <div className="info-tag-rank">{coinData.market_cap_rank == null ? "Rank ?" : <p>Rank #{coinData.market_cap_rank}</p>}</div>

            {coinData.asset_platform_id !== null ? (
              <div className="info-tag" title="Asset Platform">
                {coinData.asset_platform_id}
              </div>
            ) : (
              ""
            )}
            {coinData.hashing_algorithm !== null ? (
              <div className="info-tag" title="Hashing Algorithm">
                {coinData.hashing_algorithm}
              </div>
            ) : (
              ""
            )}
            {coinData.categories === null
              ? ""
              : coinData.categories.map((categ, i) =>
                  i < 5 ? (
                    categ === null ? (
                      ""
                    ) : (
                      <div className="info-tag" title="Category" key={categ}>
                        {categ}
                      </div>
                    )
                  ) : (
                    ""
                  )
                )}
          </div>
        </div>

        <div className="main-price">
          <div className="price-price">
            <p>{coinData.name} Price</p>
            <div>
              <p className="price-value">${numberCommas(coinData.market_data.current_price.usd)}</p>

              {Math.trunc(coinData.market_data.price_change_percentage_24h * 100) / 100 > 0 ? (
                <p className="price-pers background-green">
                  <FaSortUp className="icon-sortup" />
                  {Math.abs(Math.trunc(coinData.market_data.price_change_percentage_24h * 100) / 100) + "%"}
                </p>
              ) : (
                <p className="price-pers background-red">
                  <FaSortDown className="icon-sortdown" />
                  {Math.abs(Math.trunc(coinData.market_data.price_change_percentage_24h * 100) / 100) + "%"}
                </p>
              )}
            </div>
          </div>
          <div className="price-stats">
            <div>
              <p>Low:</p>
              <span>${numberCommas(coinData?.market_data.low_24h?.usd)}</span>
            </div>

            {coinData.market_data.current_price.usd < 1.001 ? (
              <input
                id="range-coin"
                type="range"
                min={coinData.market_data.low_24h.usd * 100000000}
                max={coinData.market_data.high_24h.usd * 100000000}
                value={coinData.market_data.current_price.usd * 100000000}
                onChange={() => {}}
              />
            ) : coinData.market_data.current_price.usd === 1 ? (
              <input id="range-coin" type="range" min={0} max={10} value={5} onChange={() => {}} />
            ) : (
              <input
                id="range-coin"
                type="range"
                min={coinData.market_data.low_24h.usd * 100}
                max={coinData.market_data.high_24h.usd * 100}
                value={coinData.market_data.current_price.usd * 100}
                onChange={() => {}}
              />
            )}

            <div>
              <p>High:</p>
              <span>${numberCommas(coinData.market_data.high_24h?.usd)}</span>
            </div>
          </div>
        </div>

        <div className="main-desc">
          <div className="desc-updated-mobile">Last Updated at: {timeTZDate(coinData.last_updated)}</div>

          <div className="desc-socials">
            <IoShareSocialSharp className="desc-socials-icon" />
          </div>
        </div>

        <div className="main-cap">
          <p className="main-stat-name">Market Cap</p>
          {coinData.market_data.market_cap.usd === 0 ? (
            <p className="main-stat-row">?</p>
          ) : (
            <p className="main-stat-row">${numberCommas(coinData.market_data.market_cap.usd)}</p>
          )}
          {Math.trunc(coinData.market_data.market_cap_change_percentage_24h * 100) / 100 > 0 ? (
            <p className="chart-green">
              <FaSortUp className="icon-sortup" />
              <span className="main-stat-row">{Math.abs(Math.trunc(coinData.market_data.market_cap_change_percentage_24h * 100) / 100) + "%"}</span>
            </p>
          ) : (
            <p className="chart-red">
              <FaSortDown className="icon-sortdown" />
              <span className="main-stat-row">{Math.abs(Math.trunc(coinData.market_data.market_cap_change_percentage_24h * 100) / 100) + "%"}</span>
            </p>
          )}
        </div>

        <div className="main-vol">
          <p className="main-stat-name">
            Volume <span className="block-24h">24h</span>
          </p>
          {coinData.market_data.total_volume.usd === 0 ? (
            <p className="main-stat-row">?</p>
          ) : (
            <p className="main-stat-row">${numberCommas(coinData.market_data.total_volume.usd)}</p>
          )}

          <p className="main-stat-name">Volume / Market Cap</p>
          {coinData.market_data.total_volume.usd === 0 ? (
            <p className="main-stat-row">?</p>
          ) : (
            <p className="main-stat-row">{(coinData.market_data.total_volume.usd / coinData.market_data.market_cap.usd).toFixed(4)}</p>
          )}
        </div>

        <div className="main-change">
          <p className="main-stat-name">Price Change</p>
          <div className="change-block">
            <span className="block-24h">7d</span>
            {Math.trunc(coinData.market_data.price_change_percentage_7d * 100) / 100 > 0 ? (
              <p className="chart-green">
                <FaSortUp className="icon-sortup" />
                <span>{Math.abs(Math.trunc(coinData.market_data.price_change_percentage_7d * 100) / 100) + "%"}</span>
              </p>
            ) : (
              <p className="chart-red">
                <FaSortDown className="icon-sortdown" />
                <span>{Math.abs(Math.trunc(coinData.market_data.price_change_percentage_7d * 100) / 100) + "%"}</span>
              </p>
            )}
          </div>

          <div className="change-block">
            <span className="block-24h">30d</span>
            {Math.trunc(coinData.market_data.price_change_percentage_30d * 100) / 100 > 0 ? (
              <p className="chart-green">
                <FaSortUp className="icon-sortup" />
                <span>{Math.abs(Math.trunc(coinData.market_data.price_change_percentage_30d * 100) / 100) + "%"}</span>
              </p>
            ) : (
              <p className="chart-red">
                <FaSortDown className="icon-sortdown" />
                <span>{Math.abs(Math.trunc(coinData.market_data.price_change_percentage_30d * 100) / 100) + "%"}</span>
              </p>
            )}
          </div>

          <div className="change-block">
            <span className="block-24h">60d</span>
            {Math.trunc(coinData.market_data.price_change_percentage_60d * 100) / 100 > 0 ? (
              <p className="chart-green">
                <FaSortUp className="icon-sortup" />
                <span>{Math.abs(Math.trunc(coinData.market_data.price_change_percentage_60d * 100) / 100) + "%"}</span>
              </p>
            ) : (
              <p className="chart-red">
                <FaSortDown className="icon-sortdown" />
                <span>{Math.abs(Math.trunc(coinData.market_data.price_change_percentage_60d * 100) / 100) + "%"}</span>
              </p>
            )}
          </div>

          <div className="change-block">
            <span className="block-24h">200d</span>
            {Math.trunc(coinData.market_data.price_change_percentage_200d * 100) / 100 > 0 ? (
              <p className="chart-green">
                <FaSortUp className="icon-sortup" />
                <span>{Math.abs(Math.trunc(coinData.market_data.price_change_percentage_200d * 100) / 100) + "%"}</span>
              </p>
            ) : (
              <p className="chart-red">
                <FaSortDown className="icon-sortdown" />
                <span>{Math.abs(Math.trunc(coinData.market_data.price_change_percentage_200d * 100) / 100) + "%"}</span>
              </p>
            )}
          </div>
        </div>

        <div className="main-sup">
          <p className="main-stat-name">Circulating Supply</p>
          <p className="main-stat-row">
            {coinData.market_data.circulating_supply === 0 ? "?" : numberCommas(Math.round(coinData.market_data.circulating_supply))}{" "}
            {coinData.symbol.toUpperCase()}
          </p>
          <p className="main-stat-name">Total Supply</p>
          <p className="main-stat-row">
            {coinData.market_data.total_supply === null ? "?" : numberCommas(Math.round(coinData.market_data.total_supply))}{" "}
            {coinData.symbol.toUpperCase()}
          </p>
        </div>
      </div>

      <div className="coin-addit">
        <div className="coin-addit-graph">
          {coinChart.prices.length === 0 ? (
            <div className="animation-chart">
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
            </div>
          ) : (
            <>
              <div className="chart-buttons">
                <div className="buttons-blocks">
                  <div
                    className="button-block button-block-active"
                    id="1d"
                    onClick={() => {
                      activeButton(1, "1d");
                    }}
                  >
                    <p>1D</p>
                  </div>
                  <div
                    className="button-block"
                    id="7d"
                    onClick={() => {
                      activeButton(7, "7d");
                    }}
                  >
                    7D
                  </div>
                  <div
                    className="button-block"
                    id="1m"
                    onClick={() => {
                      activeButton(30, "1m");
                    }}
                  >
                    1M
                  </div>
                  <div
                    className="button-block"
                    id="3m"
                    onClick={() => {
                      activeButton(90, "3m");
                    }}
                  >
                    3M
                  </div>
                  <div
                    className="button-block"
                    id="6m"
                    onClick={() => {
                      activeButton(182, "6m");
                    }}
                  >
                    6M
                  </div>
                  <div
                    className="button-block"
                    id="1y"
                    onClick={() => {
                      activeButton(365, "1y");
                    }}
                  >
                    1Y
                  </div>
                  <div
                    className="button-block"
                    id="max"
                    onClick={() => {
                      activeButton("max", "max");
                    }}
                  >
                    MAX
                  </div>
                </div>
              </div>
              <div className="chart-price">
                <PriceChart data={coinChart} days={chartDays} />
              </div>
              <div className="chart-volume">{<VolumeChart data={coinChart} days={chartDays} />}</div>
            </>
          )}
        </div>
        <div className="coin-addit-info">
          <p>{coinData.symbol.toUpperCase()} Statistics</p>
          <div className="info-blocks">
            <div className="info-block">
              <div className="info-left">Price</div>
              <div className="info-right">${numberCommas(coinData.market_data.current_price.usd)}</div>
            </div>
            <div className="info-block">
              <div className="info-left">
                <p>
                  Price Change <span className="block-24h">24h</span>
                </p>
              </div>
              <div className="info-right">
                {coinData.market_data.price_change_24h > 0.01 ? (
                  <p>${numberCommas(Math.trunc(coinData.market_data.price_change_24h * 100) / 100)}</p>
                ) : coinData.market_data.price_change_24h === null ? (
                  "?"
                ) : (
                  <p>{coinData.market_data.price_change_24h.toFixed(6)}$</p>
                )}

                {Math.trunc(coinData.market_data.price_change_percentage_24h * 100) / 100 > 0 ? (
                  <p className="chart-green font-12">
                    <FaSortUp className="icon-sortup" />
                    {Math.abs(Math.trunc(coinData.market_data.price_change_percentage_24h * 100) / 100) + "%"}
                  </p>
                ) : (
                  <p className="chart-red font-12">
                    <FaSortDown className="icon-sortdown" />
                    {Math.abs(Math.trunc(coinData.market_data.price_change_percentage_24h * 100) / 100) + "%"}
                  </p>
                )}
              </div>
            </div>
            <div className="info-block">
              <div className="info-left">
                <p>
                  High <span className="block-24h">24h</span>
                </p>
                <p>
                  Low <span className="block-24h">24h</span>
                </p>
              </div>
              <div className="info-right">
                {coinData.market_data.high_24h.USD === null ? <p>?</p> : <p>${numberCommas(coinData.market_data.high_24h.usd)}</p>}
                {coinData.market_data.low_24h.USD === null ? <p>?</p> : <p>${numberCommas(coinData.market_data.low_24h.usd)}</p>}
              </div>
            </div>
            <div className="info-block">
              <div className="info-left">Market Cap</div>
              <div className="info-right">
                {coinData.market_data.market_cap.usd === 0 ? <p>?</p> : <p>${numberCommas(coinData.market_data.market_cap.usd)}</p>}

                {Math.trunc(coinData.market_data.market_cap_change_percentage_24h * 100) / 100 > 0 ? (
                  <p className="chart-green font-12">
                    <FaSortUp className="icon-sortup" />
                    {Math.abs(Math.trunc(coinData.market_data.market_cap_change_percentage_24h * 100) / 100) + "%"}
                  </p>
                ) : (
                  <p className="chart-red font-12">
                    <FaSortDown className="icon-sortdown" />
                    {Math.abs(Math.trunc(coinData.market_data.market_cap_change_percentage_24h * 100) / 100) + "%"}
                  </p>
                )}
              </div>
            </div>
            <div className="info-block">
              <div className="info-left">
                <p>
                  Trading Volume <span className="block-24h">24h</span>
                </p>
              </div>
              <div className="info-right">${numberCommas(coinData.market_data.total_volume.usd)}</div>
            </div>
            <div className="info-block">
              <div className="info-left">
                <p>All Time High</p>
                <p className="font-12">{timeTZDateFull(coinData.market_data.ath_date.usd)}</p>
              </div>
              <div className="info-right">
                <p>${numberCommas(coinData.market_data.ath.usd)}</p>

                {Math.trunc(coinData.market_data.ath_change_percentage.usd * 100) / 100 > 0 ? (
                  <p className="chart-green font-12">
                    <FaSortUp className="icon-sortup" />
                    {Math.abs(Math.trunc(coinData.market_data.ath_change_percentage.usd * 100) / 100) + "%"}
                  </p>
                ) : (
                  <p className="chart-red font-12">
                    <FaSortDown className="icon-sortdown" />
                    {Math.abs(Math.trunc(coinData.market_data.ath_change_percentage.usd * 100) / 100) + "%"}
                  </p>
                )}
              </div>
            </div>
            <div className="info-block">
              <div className="info-left">
                <p>All Time Low</p>
                <p className="font-12">{timeTZDateFull(coinData.market_data.atl_date.usd)}</p>
              </div>
              <div className="info-right">
                <p>${coinData.market_data.atl.usd}</p>

                {Math.trunc(coinData.market_data.atl_change_percentage.usd * 100) / 100 > 0 ? (
                  <p className="chart-green font-12">
                    <FaSortUp className="icon-sortup" />
                    {Math.abs(Math.trunc(coinData.market_data.atl_change_percentage.usd * 100) / 100) + "%"}
                  </p>
                ) : (
                  <p className="chart-red font-12">
                    <FaSortDown className="icon-sortdown" />
                    {Math.abs(Math.trunc(coinData.market_data.atl_change_percentage.usd * 100) / 100) + "%"}
                  </p>
                )}
              </div>
            </div>
            <div className="info-block">
              <div className="info-left">
                <p>Circulating Supply</p>
                <p>Total Supply</p>
              </div>
              <div className="info-right">
                <p>
                  {coinData.market_data.circulating_supply === 0
                    ? "?"
                    : numberCommas(Math.round(coinData.market_data.circulating_supply)) + " " + coinData.symbol.toUpperCase()}
                </p>
                <p>
                  {coinData.market_data.total_supply === null ? "?" : numberCommas(Math.round(coinData.market_data.total_supply))}{" "}
                  {coinData.symbol.toUpperCase()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="coin-info-text">
        <h1>
          {coinData.name} ({coinData.symbol.toUpperCase()}) Price
        </h1>
        <p>
          The price of {coinData.name} ({coinData.symbol.toUpperCase()}) is ${numberCommas(coinData.market_data.current_price.usd)} at present with a
          24-hour trading volume of ${numberCommas(coinData.market_data.total_volume.usd)}. This shows a{" "}
          {Math.trunc(coinData.market_data.price_change_percentage_24h * 100) / 100 > 0 ? (
            <span className="chart-green ">
              <FaSortUp className="icon-sortup" />
              {Math.abs(Math.trunc(coinData.market_data.price_change_percentage_24h * 100) / 100) + "%"}
            </span>
          ) : (
            <span className="chart-red ">
              <FaSortDown className="icon-sortdown" />
              {Math.abs(Math.trunc(coinData.market_data.price_change_percentage_24h * 100) / 100) + "%"}
            </span>
          )}{" "}
          of price in the last 24 hours and a{" "}
          {Math.trunc(coinData.market_data.price_change_percentage_7d * 100) / 100 > 0 ? (
            <span className="chart-green">
              <FaSortUp className="icon-sortup" />
              <span>{Math.abs(Math.trunc(coinData.market_data.price_change_percentage_7d * 100) / 100) + "%"}</span>
            </span>
          ) : (
            <span className="chart-red">
              <FaSortDown className="icon-sortdown" />
              <span>{Math.abs(Math.trunc(coinData.market_data.price_change_percentage_7d * 100) / 100) + "%"}</span>
            </span>
          )}{" "}
          in the past 7 days.{" "}
        </p>
      </div>
    </div>
  );
}

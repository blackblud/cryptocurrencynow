import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useCookies } from "react-cookie";

import Coin from "../pages/Coin";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Page404 from "../pages/Page404";
import WhaleAlert from "../pages/WhaleAlert";
import Cryptocurrencies from "../pages/Cryptocurrencies";
import CryptocurrenciesCategory from "../pages/CryptocurrenciesCategory";
import CryptocurrenciesPagination from "../pages/CryptocurrenciesPagination";
import CryptocurrenciesCategoryPagination from "../pages/CryptocurrenciesCategoryPagination";
import Converter from "../pages/Converter";
import CookieConsent from "../components/CookieConsent";

import News from "../pages/other/News";
import CryptoBlog from "../pages/other/CryptoBlog";
import Press from "../pages/other/Press";
import ContactUs from "../pages/other/ContactUs";
import About from "../pages/other/About";
import PrivacyPolicy from "../pages/other/PrivacyPolicy";
import EditorialPolicy from "../pages/other/EditorialPolicy";
import TermsCondition from "../pages/other/TermsCondition";
import CookiePolicy from "../pages/other/CookiesPolicy";
import ConsentSettings from "../pages/other/ConsentSettings";
import Sitemap from "../pages/other/Sitemap";

export default function Index() {
  const [cookies] = useCookies(["cookieConsent"]);

  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Cryptocurrencies />} />
          <Route path="/page" element={<Navigate to="/" />} />
          <Route path="/page/:pageNum" element={<CryptocurrenciesPagination />} />

          <Route path="/cryptocurrencies" element={<Navigate to="/" />} />
          <Route path="/cryptocurrencies/:category" element={<CryptocurrenciesCategory />} />
          <Route path="/cryptocurrencies/:category/:pageNum" element={<CryptocurrenciesCategoryPagination />} />

          <Route path="/coin" element={<Navigate to="/" />} />
          <Route path="/coin/:coin_id" element={<Coin />} />

          <Route path="/whale-alert" element={<WhaleAlert />} />

          <Route path="/convert" element={<Converter />} />
          <Route path="/convert/:convert_id" element={<Converter />} />

          <Route path="/news" element={<News />} />
          <Route path="/crypto-blog" element={<CryptoBlog />} />
          <Route path="/press" element={<Press />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/editorial-policy" element={<EditorialPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsCondition />} />
          <Route path="/cookies-policy" element={<CookiePolicy />} />
          <Route path="/consent-settings" element={<ConsentSettings />} />
          <Route path="/sitemap" element={<Sitemap />} />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>

      {!cookies.cookieConsent && <CookieConsent />}
      <Footer />
    </BrowserRouter>
  );
}

import React, { useEffect } from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link, useLocation } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa"; // Імпорт іконки

export default function Breadcrumbs() {
  const breadcrumbs = useBreadcrumbs();
  const location = useLocation(); // Отримуємо поточний шлях

  // Функція для форматування тексту
  const formatBreadcrumb = (text) => {
    if (!isNaN(text)) {
      return `Page #${text}`;
    }
    return text.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  useEffect(() => {
    // Перевірка: якщо шлях відповідає "/convert/...", не створюємо JSON-LD
    if (location.pathname.startsWith("/convert/")) {
      return;
    }

    const breadcrumbList = breadcrumbs
      .filter(({ breadcrumb }) => breadcrumb.props.children.toLowerCase() !== "cryptocurrencies") // Фільтрація "Cryptocurrencies"
      .map(({ breadcrumb, match }, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: formatBreadcrumb(breadcrumb.props.children),
        item: `${window.location.origin}${match.pathname}`,
      }));

    const breadcrumbsJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbList,
    };

    const jsonLdArray = [breadcrumbsJsonLd];

    // Додаємо SearchBox лише на головній сторінці
    if (location.pathname === "/") {
      const searchBoxJsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: "https://www.cryptocurrencypricesnow.com/",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.cryptocurrencypricesnow.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      };
      jsonLdArray.push(searchBoxJsonLd);
    }

    // Додаємо інформацію про організацію
    const organizationJsonLd = {
      "@context": "https://schema.org",
      "@type": "NewsMediaOrganization",
      name: "Cryptocurrency Prices Now",
      alternateName: "CPN",
      url: "https://www.cryptocurrencypricesnow.com/",
      logo: "https://www.cryptocurrencypricesnow.com/logo.png", // Замість цього URL використайте URL вашого логотипу
      sameAs: [
        "https://x.com/crypto_cpn",
        "https://www.facebook.com/profile.php?id=61565411828199",
        "https://www.instagram.com/cryptocurrencypricesnow_off/",
        "https://www.tiktok.com/@cryptocurrencypricesnow?lang=en",
        "https://www.linkedin.com/company/cryptocurrency-prices-now/",
      ],
    };

    jsonLdArray.push(organizationJsonLd);

    // Створення або оновлення тега <script> для JSON-LD
    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    script.innerHTML = JSON.stringify(jsonLdArray);

    // Очищення при демонтуванні компонента
    return () => {
      document.head.removeChild(script);
    };
  }, [breadcrumbs, location.pathname]);

  return location.pathname === "/" ? (
    <></>
  ) : (
    <div className="bread-block">
      {breadcrumbs
        .filter(({ breadcrumb }) => breadcrumb.props.children.toLowerCase() !== "cryptocurrencies") // Фільтрація "Cryptocurrencies"
        .map(({ breadcrumb, match }, index, filteredBreadcrumbs) => {
          let breadcrumbText = formatBreadcrumb(breadcrumb.props.children);

          return (
            <div key={match.pathname}>
              <Link to={match.pathname} className="breadcrumb-link">
                {breadcrumbText}
              </Link>
              {index < filteredBreadcrumbs.length - 1 && <FaChevronRight className="breadcrumb-icon" />}
            </div>
          );
        })}
    </div>
  );
}

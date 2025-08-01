const supportedCurrencies = [
  { group: 'Cryptocurrencies', sign: '₿', ticker: 'btc', label: 'Bitcoin', image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579' },
  {
    group: 'Cryptocurrencies',
    sign: 'ETH',
    ticker: 'eth',
    label: 'Ethereum',
    image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
  },
  {
    group: 'Cryptocurrencies',
    sign: 'LTC',
    ticker: 'ltc',
    label: 'Litecoin',
    image: 'https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580',
  },
  {
    group: 'Cryptocurrencies',
    sign: 'BCH',
    ticker: 'bch',
    label: 'Bitcoin Cash',
    image: 'https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1594689492',
  },
  {
    group: 'Cryptocurrencies',
    sign: 'BNB',
    ticker: 'bnb',
    label: 'Binance Coin',
    image: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850',
  },
  {
    group: 'Cryptocurrencies',
    sign: 'EOS',
    ticker: 'eos',
    label: 'EOS',
    image: 'https://assets.coingecko.com/coins/images/738/large/eos-eos-logo.png?1547034481',
  },
  {
    group: 'Cryptocurrencies',
    sign: 'XRP',
    ticker: 'xrp',
    label: 'Ripple',
    image: 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731',
  },
  {
    group: 'Cryptocurrencies',
    sign: 'XLM',
    ticker: 'xlm',
    label: 'Stellar',
    image: 'https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1552356157',
  },
  {
    group: 'Cryptocurrencies',
    sign: 'LINK',
    ticker: 'link',
    label: 'Chainlink',
    image: 'https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1547034700',
  },
  {
    group: 'Cryptocurrencies',
    sign: 'DOT',
    ticker: 'dot',
    label: 'Pokadot',
    image: 'https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1639712644',
  },
  {
    group: 'Cryptocurrencies',
    sign: 'YFI',
    ticker: 'yfi',
    label: 'Yearn Finance',
    image: 'https://assets.coingecko.com/coins/images/11849/large/yfi-192x192.png?1598325330',
  },
  { group: 'Cryptocurrencies', sign: '₿', ticker: 'bits', label: 'Bits', image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579' },
  { group: 'Cryptocurrencies', sign: '₿', ticker: 'sats', label: 'Satoshi', image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579' },
  { group: 'Fiat Currencies', sign: '$', ticker: 'usd', label: 'United States Dollar', image: '', code: 'US' },
  { group: 'Fiat Currencies', sign: 'د.إ', ticker: 'aed', label: 'United Arab Emirates Dirham', image: '', code: 'AE' },
  { group: 'Fiat Currencies', sign: '$', ticker: 'ars', label: 'Argentina Peso', image: '', code: 'AR' },
  { group: 'Fiat Currencies', sign: '$', ticker: 'aud', label: 'Australia Dollar', image: '', code: 'AU' },
  { group: 'Fiat Currencies', sign: '৳', ticker: 'bdt', label: 'Bangladesh Taka', image: '', code: 'BD' },
  { group: 'Fiat Currencies', sign: 'د.ب', ticker: 'bhd', label: 'Bahrain Dinar', image: '', code: 'BH' },
  { group: 'Fiat Currencies', sign: '$', ticker: 'bmd', label: 'Bermuda Dollar', image: '', code: 'BM' },
  { group: 'Fiat Currencies', sign: 'R$', ticker: 'brl', label: 'Brazil Real', image: '', code: 'BR' },
  { group: 'Fiat Currencies', sign: '$', ticker: 'cad', label: 'Canada Dollar', image: '', code: 'CA' },
  { group: 'Fiat Currencies', sign: 'CHF', ticker: 'chf', label: 'Switzerland Franc', image: '', code: 'CH' },
  { group: 'Fiat Currencies', sign: '$', ticker: 'clp', label: 'Chile Peso', image: '', code: 'CL' },
  { group: 'Fiat Currencies', sign: '¥', ticker: 'cny', label: 'China Yuan Renminbi', image: '', code: 'CN' },
  { group: 'Fiat Currencies', sign: 'Kč', ticker: 'czk', label: 'Czech Republic Koruna', image: '', code: 'CZ' },
  { group: 'Fiat Currencies', sign: 'kr', ticker: 'dkk', label: 'Denmark Krone', image: '', code: 'DK' },
  { group: 'Fiat Currencies', sign: '€', ticker: 'eur', label: 'Euro', image: '', code: 'EU' },
  { group: 'Fiat Currencies', sign: '£', ticker: 'gbp', label: 'United Kingdom Pound', image: '', code: 'GB' },
  { group: 'Fiat Currencies', sign: '$', ticker: 'hkd', label: 'Hong Kong Dollar', image: '', code: 'HK' },
  { group: 'Fiat Currencies', sign: 'Ft', ticker: 'huf', label: 'Hungary Forint', image: '', code: 'HU' },
  { group: 'Fiat Currencies', sign: 'Rp', ticker: 'idr', label: 'Indonesia Rupiah', image: '', code: 'ID' },
  { group: 'Fiat Currencies', sign: '₪', ticker: 'ils', label: 'Israel Shekel', image: '', code: 'IL' },
  { group: 'Fiat Currencies', sign: '₹', ticker: 'inr', label: 'India Rupee', image: '', code: 'IN' },
  { group: 'Fiat Currencies', sign: '¥', ticker: 'jpy', label: 'Japan Yen', image: '', code: 'JP' },
  { group: 'Fiat Currencies', sign: '₩', ticker: 'krw', label: 'Korea (South) Won', image: '', code: 'KR' },
  { group: 'Fiat Currencies', sign: 'د.ك', ticker: 'kwd', label: 'Kuwait Dinar', image: '', code: 'KW' },
  { group: 'Fiat Currencies', sign: '₨', ticker: 'lkr', label: 'Sri Lanka Rupee', image: '', code: 'LK' },
  { group: 'Fiat Currencies', sign: 'K', ticker: 'mmk', label: 'Myanmar (Burma) Kyat', image: '', code: 'MM' },
  { group: 'Fiat Currencies', sign: '$', ticker: 'mxn', label: 'Mexico Peso', image: '', code: 'MX' },
  { group: 'Fiat Currencies', sign: 'RM', ticker: 'myr', label: 'Malaysia Ringgit', image: '', code: 'MY' },
  { group: 'Fiat Currencies', sign: '₦', ticker: 'ngn', label: 'Nigeria Naira', image: '', code: 'NG' },
  { group: 'Fiat Currencies', sign: 'kr', ticker: 'nok', label: 'Norway Krone', image: '', code: 'NO' },
  { group: 'Fiat Currencies', sign: '$', ticker: 'nzd', label: 'New Zealand Dollar', image: '', code: 'NZ' },
  { group: 'Fiat Currencies', sign: '₱', ticker: 'php', label: 'Philippines Peso', image: '', code: 'PH' },
  { group: 'Fiat Currencies', sign: '₨', ticker: 'pkr', label: 'Pakistan Rupee', image: '', code: 'PK' },
  { group: 'Fiat Currencies', sign: 'zł', ticker: 'pln', label: 'Poland Zloty', image: '', code: 'PL' },
  { group: 'Fiat Currencies', sign: '﷼', ticker: 'sar', label: 'Saudi Arabia Riyal', image: '', code: 'SA' },
  { group: 'Fiat Currencies', sign: 'kr', ticker: 'sek', label: 'Sweden Krona', image: '', code: 'SE' },
  { group: 'Fiat Currencies', sign: '$', ticker: 'sgd', label: 'Singapore Dollar', image: '', code: 'SG' },
  { group: 'Fiat Currencies', sign: '฿', ticker: 'thb', label: 'Thailand Baht', image: '', code: 'TH' },
  { group: 'Fiat Currencies', sign: '₺', ticker: 'try', label: 'Turkey Lira', image: '', code: 'TR' },
  { group: 'Fiat Currencies', sign: 'NT$', ticker: 'twd', label: 'Taiwan New Dollar', image: '', code: 'TW' },
  { group: 'Fiat Currencies', sign: '₴', ticker: 'uah', label: 'Ukraine Hryvnia', image: '', code: 'UA' },
  { group: 'Fiat Currencies', sign: 'Bs', ticker: 'vef', label: 'Venezuela Bolívar', image: '', code: 'VE' },
  { group: 'Fiat Currencies', sign: '₫', ticker: 'vnd', label: 'Viet Nam Dong', image: '', code: 'VN' },
  { group: 'Fiat Currencies', sign: 'R', ticker: 'zar', label: 'South Africa Rand', image: '', code: 'US' },
  { group: 'Valuable Materials', sign: 'XAU', ticker: 'xau', label: 'Gold', image: '', code: '' },
  { group: 'Valuable Materials', sign: 'XAG', ticker: 'xag', label: 'Silver', image: '', code: '' },
  { group: 'Other', sign: 'SDR', ticker: 'xdr', label: 'International Monetary Fund', image: '', code: '' },
];

export default supportedCurrencies;

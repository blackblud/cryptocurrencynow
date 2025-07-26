const tableConverter = (mode, priceData, amount) => {
  switch (mode) {
    case 1:
      let leftPrice = priceData[0];
      let rightPrice = priceData[1];
      return ((amount * leftPrice) / rightPrice).toFixed(3);

    case 2:
      return (amount * priceData).toFixed(3);

    case 3:
      return (amount / priceData).toFixed(3);

    case "1R":
      let leftPriceRev = priceData[0];
      let rightPriceRev = priceData[1];
      return ((amount * rightPriceRev) / leftPriceRev).toFixed(2);

    case "2R":
      return (amount / priceData).toFixed(3);

    case "3R":
      return (amount * priceData).toFixed(3);

    default:
      break;
  }
};

export default tableConverter;

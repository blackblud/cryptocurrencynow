export default function numberCommas(number) {
  if (number === undefined) return;
  if (number === null) return;
  if (number < 999) return number.toString();
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

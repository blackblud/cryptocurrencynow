export default function timeTZDate(timetz) {
  if (timetz === null || timetz === undefined) {
    return 'N/A';
  }
  const date = new Date(timetz);
  const year = date.getFullYear();
  var month = date.getMonth() + 1;
  var dt = date.getDate();

  if (dt < 10) {
    dt = '0' + dt;
  }
  if (month < 10) {
    month = '0' + month;
  }

  return Intl.DateTimeFormat('en', { month: 'short' }).format(new Date(month)) + ' ' + dt + ', ' + year;
}

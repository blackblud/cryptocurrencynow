export default function timestampDate(timestamp) {
  var date = new Date(timestamp);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var year = date.getFullYear();
  var month = months[date.getMonth()];
  var day = date.getDate();
  var hour;

  if (date.getHours() < 10) {
    hour = '0' + date.getHours();
  } else {
    hour = date.getHours();
  }

  return day + ' ' + month + ' ' + year + ', ' + hour + ':00';
}

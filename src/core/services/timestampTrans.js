export default function timestampTrans(timestamp) {
  var date = new Date(timestamp);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var month = months[date.getMonth()];
  var year = date.getFullYear();
  var day = date.getDate();
  var hour;
  var min;

  if (date.getHours() < 10) {
    hour = '0' + date.getHours();
  } else {
    hour = date.getHours();
  }

  if (date.getMinutes() < 10) {
    min = '0' + date.getMinutes();
  } else {
    min = date.getMinutes();
  }

  return day + ' ' + month + ' ' + year + ', ' + hour + ':' + min + '';
}

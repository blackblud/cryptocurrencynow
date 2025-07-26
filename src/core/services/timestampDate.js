export default function timestampDate(timestamp) {
  var date = new Date(timestamp * 1000);
  var hours = date.getHours();

  var ampm = false;
  var minutes;

  if (ampm) {
    minutes = date.getMinutes();
    var ampmt = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampmt;

    return strTime;
  } else {
    minutes = '0' + date.getMinutes();
    var seconds = '0' + date.getSeconds();
    if (date.getHours() < 10) {
      hours = '0' + date.getHours();
    } else {
      hours = date.getHours();
    }

    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  }
}

export default function timeTZDate(timetz) {
  return new Date(timetz).toLocaleTimeString('uk-UA', { hour12: false, timeZone: 'Europe/Kiev' });
}

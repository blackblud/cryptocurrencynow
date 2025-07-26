export default function ethAddressFormatTrans(text) {
  if (text === undefined) return;
  if (text === null) return;

  text = text.substring(0, 2) + text.substring(2, text.length);
  text = text.substr(0, 1) + '×' + text.substr(2);

  return text.substring(0, 8) + '...' + text.substring(text.length - 6, text.length);
}

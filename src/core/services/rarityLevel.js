export default function rarityLevel(metadata) {
  const textColor = metadata.attributes[0]['value'];
  const backgroundColor = metadata.attributes[1]['value'];
  const textLanguage = metadata.attributes[2]['value'];

  var rarityLevel = 0.01;

  switch (textColor) {
    case 'Red':
      rarityLevel += 9.16;
      break;
    case 'Green':
      rarityLevel += 7.24;
      break;
    case 'Blue':
      rarityLevel += 5.77;
      break;
    case 'Cyan':
      rarityLevel += 13.83;
      break;
    case 'Magenta':
      rarityLevel += 15.97;
      break;
    case 'Yellow':
      rarityLevel += 11.6;
      break;
    case 'Black':
      rarityLevel += 1.56;
      break;
    case 'White':
      rarityLevel += 3.58;
      break;
    default:
      break;
  }

  switch (backgroundColor) {
    case 'White':
      rarityLevel += 5.63;
      break;
    case 'Black':
      rarityLevel += 20.24;
      break;
    case 'Gradient #7':
      rarityLevel += 25.91;
      break;
    case 'Gradient #3':
      rarityLevel += 32.51;
      break;
    case 'Gradient #5':
      rarityLevel += 40.8;
      break;
    case 'Gradient #4':
      rarityLevel += 47.59;
      break;
    case 'Gradient #6':
      rarityLevel += 55.82;
      break;
    case 'Gradient #2':
      rarityLevel += 62.51;
      break;
    case 'Gradient #1':
      rarityLevel += 70.83;
      break;
    case 'Ukraine Flag':
      rarityLevel += 80.68;
      break;
    case 'UPA Flag':
      rarityLevel += 80.97;
      break;
    case 'Lapis Lazuli':
      rarityLevel += 90.96;
      break;
    case 'Rubellite':
      rarityLevel += 86.54;
      break;
    case 'Tanzanite':
      rarityLevel += 87.81;
      break;
    default:
      break;
  }

  switch (textLanguage) {
    case 'English':
      rarityLevel += 2.77;
      break;

    case 'Ukrainian':
      rarityLevel += 5.43;
      break;
    default:
      break;
  }

  return rarityLevel.toFixed(2);
}

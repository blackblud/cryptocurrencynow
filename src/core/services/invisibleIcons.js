export default function invisibleIcons() {
  var iconsUp = document.querySelectorAll('.th-icon-up');
  for (const icon of iconsUp) {
    icon.classList.add('display-none');
  }

  var iconsDown = document.querySelectorAll('.th-icon-down');
  for (const icon of iconsDown) {
    icon.classList.add('display-none');
  }
}

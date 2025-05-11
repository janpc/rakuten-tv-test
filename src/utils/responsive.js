/* eslint-disable import/prefer-default-export */
export function getCurrentMargin() {
  const width = window.innerWidth;

  if (width >= 1100) {
    return 64;
  }

  if (width >= 800) {
    return 40;
  }

  if (width >= 450) {
    return 24;
  }

  return 16;
}

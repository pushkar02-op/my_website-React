export function convertPXToVH(px) {
  return px * (100 / document.documentElement.clientHeight);
}

export function convertPXToVW(px) {
  return px * (100 / document.documentElement.clientWidth);
}

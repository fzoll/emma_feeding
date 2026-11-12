// "1 feed today", "0 feeds today", "3 feeds today".
export function feedCountLabel(count) {
  return `${count} feed${count === 1 ? "" : "s"} today`;
}

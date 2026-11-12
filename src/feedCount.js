// "1 feed today", "0 feeds today", "3 feeds today".
export function feedCountLabel(count) {
  return `${count} feed${count === 1 ? "" : "s"} today`;
}

// "Emma feeding (3)": the page title with the same count as the footer.
export function pageTitle(count) {
  return `Emma feeding (${count})`;
}

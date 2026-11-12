export const STOCK_SIZE_ERROR = "Enter a whole number of 1 or more.";

// Parses the stock size field. Returns the number, or null when the value is
// not a whole number of 1 or more.
export function parseStockSize(raw) {
  const text = String(raw ?? "").trim();
  if (!/^\d+$/.test(text)) return null;
  const value = Number(text);
  return Number.isSafeInteger(value) && value >= 1 ? value : null;
}

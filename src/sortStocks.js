// Returns the stocks ordered by date made, oldest first, so the stock to use
// next is on top. `madeAt` is a YYYY-MM-DD string, so plain string comparison
// orders it by date. Stocks without a date go last; ties keep their order.
export function sortStocksOldestFirst(stocks) {
  return [...stocks].sort((a, b) => {
    if (!a.madeAt && !b.madeAt) return 0;
    if (!a.madeAt) return 1;
    if (!b.madeAt) return -1;
    if (a.madeAt < b.madeAt) return -1;
    if (a.madeAt > b.madeAt) return 1;
    return 0;
  });
}

// Returns the stocks ordered by date made, oldest first, so the stock to use
// next is on top. `madeAt` is a YYYY-MM-DD string, so plain string comparison
// orders it by date; stocks made on the same day keep their order.
export function sortStocksOldestFirst(stocks) {
  return [...stocks].sort((a, b) =>
    a.madeAt < b.madeAt ? -1 : a.madeAt > b.madeAt ? 1 : 0
  );
}

import { sortStocksOldestFirst } from "./sortStocks";

test("orders stocks by date made, oldest first", () => {
  const stocks = [
    { id: "b", madeAt: "2026-03-02" },
    { id: "c", madeAt: "2026-11-01" },
    { id: "a", madeAt: "2025-12-31" },
  ];
  expect(sortStocksOldestFirst(stocks).map((s) => s.id)).toEqual(["a", "b", "c"]);
});

test("keeps the order of stocks made on the same day", () => {
  const stocks = [
    { id: "x", madeAt: "2026-03-02" },
    { id: "y", madeAt: "2026-03-02" },
  ];
  expect(sortStocksOldestFirst(stocks).map((s) => s.id)).toEqual(["x", "y"]);
});

test("puts stocks without a date last", () => {
  const stocks = [
    { id: "n", madeAt: null },
    { id: "a", madeAt: "2026-03-02" },
    { id: "e", madeAt: "" },
  ];
  expect(sortStocksOldestFirst(stocks).map((s) => s.id)).toEqual(["a", "n", "e"]);
});

test("does not change the input array", () => {
  const stocks = [{ id: "b", madeAt: "2026-03-02" }, { id: "a", madeAt: "2025-01-01" }];
  sortStocksOldestFirst(stocks);
  expect(stocks.map((s) => s.id)).toEqual(["b", "a"]);
});

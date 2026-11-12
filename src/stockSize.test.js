import { parseStockSize } from "./stockSize";

test("accepts whole numbers of 1 or more", () => {
  expect(parseStockSize("1")).toBe(1);
  expect(parseStockSize("12")).toBe(12);
  expect(parseStockSize(" 3 ")).toBe(3);
});

test("rejects zero, negative and fractional values", () => {
  for (const raw of ["0", "-2", "1.5", "2.0", "1e3", "abc", "", null, undefined]) {
    expect(parseStockSize(raw)).toBeNull();
  }
});

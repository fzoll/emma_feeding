import { feedCountLabel } from "./feedCount";

test("uses the singular for one feed", () => {
  expect(feedCountLabel(1)).toBe("1 feed today");
});

test("uses the plural for zero and many feeds", () => {
  expect(feedCountLabel(0)).toBe("0 feeds today");
  expect(feedCountLabel(2)).toBe("2 feeds today");
  expect(feedCountLabel(11)).toBe("11 feeds today");
});

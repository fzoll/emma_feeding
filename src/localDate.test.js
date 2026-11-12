import { localDateKey } from "./localDate";

test("uses the local date, not the UTC date", () => {
  // Local time 00:30 on Nov 12: in a UTC+ zone the UTC date is still Nov 11.
  expect(localDateKey(new Date(2026, 10, 12, 0, 30))).toBe("2026-11-12");
  // Local time 23:30 on Nov 12: in a UTC- zone the UTC date is already Nov 13.
  expect(localDateKey(new Date(2026, 10, 12, 23, 30))).toBe("2026-11-12");
});

test("pads month and day", () => {
  expect(localDateKey(new Date(2026, 0, 5))).toBe("2026-01-05");
});

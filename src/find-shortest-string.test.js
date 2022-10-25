const findLongestString = require("./find-shortest-string");

test("findShortesttString finds the shortest string in an array", () => {
  expect(findLongestString(["it", "is", "a", "nice", "day"])).toBe("a");
  expect(findLongestString(["why", "hello", "to", "you"])).toBe("to");
});

test("findShortestString returns the earlier string in cases of joint shortest strings", () => {
  expect(findLongestString(["brave", "dance"])).toBe("brave");
  expect(findLongestString(["hello", "jest", "hallo"])).toBe("hello");
});

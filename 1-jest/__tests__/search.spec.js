const { search } = require("../search.js");

describe("search", () => {
  it("finds no matches in an empty array", () => {
    expect(search("", [])).toEqual([]);
    expect(search("test", [])).toEqual([]);
  });

  it("returns all items when given the empty string", () => {
    const items = ["first", "second", "third"];
    expect(search("", items)).toEqual(items);
  });

  it("ignores case", () => {
    const items = ["item", "ITEM", "ItEm"];
    expect(search("item", items)).toEqual(items);
  });

  it("looks for substrings", () => {
    const items = ["long string that contains a word"];
    expect(search("word", items)).toEqual(items);
  });

  it("returns an empty array when no matches are found", () => {
    const items = ["none", "of", "these", "match"];
    expect(search("filter", items)).toHaveLength(0);
  });
});

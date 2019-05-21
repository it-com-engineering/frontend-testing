const fs = require("fs").promises;
const { createDatabase, get, put } = require("../database");

const databasePath = "test.db";

beforeAll(async () => {
  await createDatabase(databasePath);
});

afterAll(async () => {
  await fs.unlink(databasePath);
});

describe("get", () => {
  it("gives null when the database is empty", async () => {
    const response = await get("does not exist", databasePath);
    expect(response).toBeUndefined();
  });
});

describe("put", () => {
  it("stores a value in the database", async () => {
    const key = "key";
    const value = "value";
    await put(key, value, databasePath);
    expect(await get(key, databasePath)).toEqual(value);
  });
});

const fs = require("fs").promises;

async function createDatabase(path) {
  const contents = JSON.stringify({});
  return fs.writeFile(path, contents, "utf8");
}

async function get(key, path) {
  const dictionary = await readAll(path);
  return dictionary[key];
}

async function put(key, value, path) {
  const dictionary = await readAll(path);
  dictionary[key] = value;
  return fs.writeFile(path, JSON.stringify(dictionary), "utf8");
}

async function readAll(path) {
  const contents = await fs.readFile(path, "utf8");
  return JSON.parse(contents);
}

module.exports = { createDatabase, get, put };

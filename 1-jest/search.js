/**
 * Find elements in an array that contain a given substring.
 * @param {string} filter - search term
 * @param {string[]} items - array of documents to search
 */
function search(filter, items) {
  return items.filter(item => item.toLowerCase().includes(filter.toLowerCase()));
}

module.exports = { search };

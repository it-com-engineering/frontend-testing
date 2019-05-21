const React = require("react");

/**
 * Taken from https://reactjs.org/docs/lists-and-keys.html
 */
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(number => <li key={number.toString()}>{number}</li>);
  return <ul>{listItems}</ul>;
}

module.exports = NumberList;

const jokes = [
  "My dad was washing the car with my brother. I asked, why can't you use a sponge?",
  "How do you stop a fish from smelling? Cut off its nose.",
  "What happened to the grape when the elephant stepped on it? It let out a little wine.",
];

function run(slack) {
  const joke = pickRandom(jokes);
  slack.post(joke);
}

function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

module.exports = { run, jokes };

module.exports = (a, b) => {
  if (a == b) return true;

  throw new Error(`The values are not equivalent.\n\nFound: ${a}\nWanted: ${b}`);
};

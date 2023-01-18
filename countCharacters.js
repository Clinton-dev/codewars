function count(string) {
  // A function that counts characters in a string and returns an object with number of occurances
  const occuringCharacters = {};
  if (string.length == 0) return occuringCharacters;

  string.split("").forEach((character) => {
    // check to see if character exist in occuringCharacters
    occuringCharacters[character]
      ? (occuringCharacters[character] += 1)
      : (occuringCharacters[character] = 1);
  });
  return occuringCharacters;
}

console.log(count("aba")); // -> { a: 2, b: 1 }
console.log(count("")); // -> {}

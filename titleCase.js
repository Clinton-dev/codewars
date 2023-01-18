function capitalizeWord(word, isFirst = false) {
  // capitalize the first word on each word phrase
  return word
    .split("")
    .map((character, index) =>
      index === 0 ? character.toUpperCase() : character
    )
    .join("");
}

function titleCase(title, minorWords) {
  // convert words to lowercase
  let titleLowercase = title.toLowerCase();
  let exceptionWords = minorWords.toLowerCase().split(" ");
  // split title words into an array
  // loop over the array
  return titleLowercase
    .split(" ")
    .map((character, index) => {
      // check if word is not the first in the sentence and does not exist in exception list if so capitalize
      if (index === 0) {
        return capitalizeWord(character);
      } else if (index > 0 && !exceptionWords.includes(character)) {
        return capitalizeWord(character);
      } else {
        // otherwise return the uncapitalized word
        return character;
      }
    })
    .join(" ");
}

// console.log(titleCase("", ""));
// titleCase("", ""); // -> ''
console.log(titleCase("a clash of KINGS", "a an the of"));
titleCase("a clash of KINGS", "a an the of"); // -> 'A Clash of Kings'
console.log(titleCase("THE WIND IN THE WILLOWS", "The In"));
// titleCase("THE WIND IN THE WILLOWS", "The In"); // -> 'The Wind in the Willows'
console.log(titleCase("The quick brown fox", "The Quick Brown Fox"));
// titleCase("the quick brown fox", "The Quick Brown Fox"); // -> ''

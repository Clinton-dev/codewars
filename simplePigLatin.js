/*
    write a function that takes first letter of each and add to the end.
    add ay to the end of each word
*/

function firstLetterLast(str) {
  return str.substr(1) + str[0];
}

function pigIt(str) {
  return str
    .split(" ")
    .map((word) => {
      // console.log(word != '!')
      if (word != "!") {
        return firstLetterLast(word) + "ay";
      }
      console.log(word);
      return word;
    })
    .join(" ");
}

console.log(pigIt("Pig latin is cool")); // igPay atinlay siay oolcay
console.log(pigIt("Hello world !")); // elloHay orldway !
console.log(pigIt("Oay emporatay oay oresmay !")); // Oay emporatay oay oresmay !

/*
    solution that splits a string into pairs of two characters.
    If the string contains an odd number of characters then
    it should replace the missing second character of
    the final pair with an underscore ('_').

    abc => ['ab', 'c_']
    abcdef => ['ab','cd', 'ef']
*/

function solution(str) {
  if (str.length == 0) return [];
  const pairs = [];

  for (let i = 0; i < str.length; i += 2) {
    let secondCharacter = str[i + 1] || "_";
    pairs.push(str[i] + secondCharacter);
  }
  return pairs;
}

console.log(solution(""));
console.log(solution("abcdef"));
console.log(solution('abc'))

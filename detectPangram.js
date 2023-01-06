/*
A pangram is a sentence that contains every single letter of the alphabet at least once.
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
because it uses the letters A-Z at least once (case is irrelevant). Given a string,
detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 */
function isPangram(string){
  let alphabet = {}

  const words = string.split("")
  for(let i= 0; i < words.length; i++){

    if (words[i] == " " | words[i] == ".") {
      continue
    } else {
      if(words[i] in alphabet) {
        alphabet[words[i]] += 1

      } else {
        alphabet[words[i].toLowerCase()] = 0
      }
    }

  }

  const allAlphabetsEqualTo1 = Object.values(alphabet).every(value => value >= 1)

  return allAlphabetsEqualTo1

}

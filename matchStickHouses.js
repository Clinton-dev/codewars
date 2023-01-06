/*
 Create a function that takes a number (step) as an argument and
returns the number of matchsticks in that step.
Create a function that takes a number (step) as an argument and
returns the number of matchsticks in that step.

    matchHouses(1) ➞ 6
    matchHouses(4) ➞ 21
    matchHouses(87) ➞ 436
*/

const {log} = console


function matchHouses(step) {
    const defaultMatches = 6
    let removedMatches = 0
    let totalMatches = 0

    for(let i=1; i<=step; i++) {
        totalMatches = (defaultMatches * i) - removedMatches
        removedMatches = removedMatches + 1
    }

    return totalMatches
}

log(matchHouses(1))
log(matchHouses(4))
log(matchHouses(87))

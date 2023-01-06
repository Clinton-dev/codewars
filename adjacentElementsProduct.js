/*
Given an array of integers, find the pair of adjacent elements that has the largest product
and return that product.
    [3, 6, -2, -5, 7, 3] -> 21
    [-1, -2] -> 2
    [5, 1, 2, 3, 1, 4] -> 6
    [9, 5, 10, 2, 24, -1, -48] -> 50
    [1, 0, 1, 0, 1000] -> 0
    [-23, 4, -3, 8, -12] -> -12
    [5, 6, -4, 2, 3, 2, -23] -> 30
*/

function solution(inputArray) {
    let product = 0
    let negProducts = []
    let index = 0
    const pairs = inputArray.length / 2
    const numberOfPairs = (pairs % 2 == 0) ? Math.ceil(pairs) : Math.ceil(pairs) + 1

    for(let i = 0; i <= numberOfPairs; i++) {
        console.log(inputArray[index], inputArray[index+1])
        const adjacentProduct = inputArray[index] * inputArray[index+1]

        if(adjacentProduct > product) {
            product = adjacentProduct
        } else if(adjacentProduct < 0) {
            // handle negative numbers
            negProducts.push(adjacentProduct)
        }

        index = index + 1
    }


    if(product) {
        return product
    } else {
        return negProducts.length ? Math.max(...negProducts) : 0
    }
}

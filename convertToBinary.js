function binary(decimal) {
    let reminder = 0
	let quotient = null
	let binary = []
	let binaryString = ''

	do {
		quotient = decimal / 2
		reminder = decimal % 2
		binary.push(reminder)
	} while (quotient >= 0)
	
	return binary
}

console.log(binary(100))
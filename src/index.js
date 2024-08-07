module.exports = function reverse (n) {
  const textN = String(Math.abs(n))
	const arrayN = textN.split('')
	const reverseArrayN = arrayN.reverse()
	const reverseTextN = reverseArrayN.join('')
	return +reverseTextN
}

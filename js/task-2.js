function makeArray(firstArray = [], secondArray = [], maxLength = 15) {
  if (
    !Array.isArray(firstArray) ||
    !Array.isArray(firstArray) ||
    typeof maxLength !== 'number'
  )
    return 'First argument is not array or second argument is not array or last argument is not number!';

  const mainArray = firstArray.concat(secondArray);

  if (mainArray.length > maxLength) {
    return mainArray.slice(0, maxLength);
  } else {
    return mainArray;
  }
}

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []
console.log(makeArray(23, 35, 34, 67, 8, true));

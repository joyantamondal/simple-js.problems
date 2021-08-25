// array sum of total elements
const numbers = [44, 23, 34, 32, 54, 5, 78];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  // console.log(element);
  sum = sum + element;
}
console.log(sum);

// array element sum calculate using function

function arrayTotal(number) {
  let sumArray = 0;
  for (let i = 0; i < number.length; i++) {
    const elements = number[i];
    sumArray = sumArray + elements;
  }
  return sumArray;
}
// direclty  pass array  into function
const totalSum = arrayTotal([30, 40, 50, 100]);
console.log(totalSum);

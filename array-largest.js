// highest number from an array
function largestElement(numbers) {
  // array first index numbers[0] , first index 0
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}
const ages = [12, 54, 55, 6, 9, 10, 22, 30];
const oldest = largestElement(ages);
console.log("Oldest", oldest);
const oldest2 = largestElement([-2, -6, -17]);
console.log("Oldest2", oldest2);

// lowest number from an array

function lowestElement(number) {
  // array first index numbers[0] , first index 0
  let lowest = number[0];
  for (let i = 0; i < number.length; i++) {
    const ele = number[i];
    if (ele < lowest) {
      lowest = ele;
    }
  }
  return lowest;
}
const age = [12, 54, 55, 6, 9, 10, 22, 30];
const young = lowestElement(age);
console.log("Youngest", young);
const young1 = lowestElement([-0.122, -0.121, -0.1]);
console.log("Youngest1", young1);

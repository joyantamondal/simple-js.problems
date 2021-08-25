const business = 450;
const minister = 550;
const army = 600;
// max number find normal process

if (business > minister) {
  console.log("Business is Bigger Power");
} else {
  console.log("Minister is Bigger Power");
}

//compare 3 max normal process if else

if (business > minister && business > army) {
  console.log("Business is Bigger");
} else if (minister > business && minister > army) {
  console.log("Minister is Bigger");
} else {
  console.log("Army is Bigger");
}

//max number find using max founction

var max = Math.max(business, minister, army);
console.log(max);

// find largest number from 3 number  using function
function findLargest(first, second, third) {
  if (first > second && first > third) {
    let biggerNumber = first + " is Bigger";
    return biggerNumber;
  } else if (second > first && second > third) {
    let biggerNumber = second + " is Bigger";
    return biggerNumber;
  } else {
    let biggerNumber = third + " is Bigger";
    return biggerNumber;
  }
}
const boroVai = findLargest(100, 40, 500);
console.log(boroVai);

// find the smallest number from 3 value using function

function findSmalest(first, second, third) {
  if (first < second && first < third) {
    let smallerNumber = first + " is Smaller";
    return smallerNumber;
  } else if (second < first && second < third) {
    let smallerNumber = second + " is Smaller";
    return smallerNumber;
  } else {
    let smallerNumber = third + " is Smaller";
    return smallerNumber;
  }
}
const sotoVai = findSmalest(100, 40, 5);
console.log(sotoVai);

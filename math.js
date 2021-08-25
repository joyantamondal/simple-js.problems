// absoulate Value COnvert any positve or negative number
const myNumber = -5;
const output = Math.abs(myNumber);
console.log(output);

// celling a number 
const myNumber1 = 6.0398;
const output1 = Math.ceil(myNumber1);
console.log(output1);

// floor a number
const myNumber2 = 6.0398;
const output2 = Math.floor(myNumber2);
console.log(output2);

//round figure a number 
const myNumber3 = 6.52;
const output3 = Math.round(myNumber3);
console.log(output3);

//random number
const output4 = Math.random() *10;
// rounded random number ignore dot by doing floor/ceeling /  round function
const randomNumber = Math.floor(output4);
// const randomNumber = Math.round(output4);
// const randomNumber = Math.ceil(output4);
console.log(randomNumber);
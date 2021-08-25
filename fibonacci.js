// Fibonacchi Series
// [0	1	1	2	3	5	8	13	21	34	55	89	144	233	377	610	987	1597	2584	4181	6765]

// us the bidirectional sequence is
// F−8	F−7	F−6	F−5	F−4	F−3	F−2	F−1	F0	F1	F2	F3	F4	F5	F6	F7	F8
// −21	13	−8	5	−3	2	−1	1	0	1	1	2	3	5	8	13	21

/*
3rd = 2nd + 1st
4th = 3rd + 2nd
5th = 4th + 3rd
6th = 5th + 4th
nth = (n-1)th + (n-2)th
ith = (i-1)th + (i-2)th
*/

const fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
  // nth = (n-1)th + (n-2)th
  // ith = (i-1)th + (i-2)th
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);

// fibonacchi series function

function fibonacciSeries(num) {
  const fibo = [0, 1];
  for (let i = 2; i <= num; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}
const fiboSeries = fibonacciSeries(13);
console.log(fiboSeries);

// fibonacchi series function validation input

function fibonacciSeries(num) {
  if (typeof num != "number") {
    return "Please Input A Number";
  }
  if (num < 2) {
    return "Please Enter a Positive number greater than 2";
  }
  const fibo = [0, 1];
  for (let i = 2; i <= num; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}
const fiboSeries = fibonacciSeries(10);
console.log(fiboSeries);

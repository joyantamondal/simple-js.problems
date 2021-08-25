/*
3rd = 2nd + 1st
4th = 3rd + 2nd
5th = 4th + 3rd
6th = 5th + 4th
nth = (n-1)th + (n-2)th
ith = (i-1)th + (i-2)th
*/
fibonacchi  using recursion
function fibonacci(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
const fiboElement = fibonacci(50);
console.log(fiboElement);

// fibonacchi series  using recursion
function fiboSeries(num){
    if(num == 0){
       
        return [0];
    }
    if(num == 1){
        return [0, 1];
    }
    const fibo = fiboSeries(num-1);
     fibo[num] = fibo[num-1] + fibo[num-2];
    return fibo;

}
const fiboEle = fiboSeries(5);
console.log(fiboEle);
# Project-Euler
In this repo i'm gonna post my solutions;

1.Multiples of 3 or 5 : Problem 1;
## If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.;

### My Solution : 

const res = (num) => {
let result = [];
const thousand = num;

for (let i = 0;i < thousand;i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      result.push(i);
    }  
}
const value = 0;
const sum = result.reduce((acc,curr) => acc + curr, value);
return sum;
};
Answer:  233168;

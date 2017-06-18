// Find the sum of all the multiples of 3 or 5 below 1000.

var sum = 0;
var adder = 0;

while(adder < 1000) {
  if(adder % 5 === 0 || adder % 3 === 0) {
    sum += adder;
    adder++;
  } else {
    adder++;
  }
}

console.log(sum);

// a recersive function to countdown and log the number
const countDown = (number) => {
  if (number <= 0) {
    console.log("All is done");
    return;
  }
  console.log(number);
  number--;
  countDown(number);
};

//countDown(10); <--------------------  invoking the function









// factorial in common way
function commonFactorial(number) {
  // outpul should be a total  number
  //loop start from input till 2
  total = 1;

  console.log(total);
  for (i = number; i >= 2; i--) {
    total *= i;
  }
  console.log(total);
}
//commonFactorial(5);  <--------------------  invoking the function

//factorial using recursive function
function recursiveFactorial(num) {
  if (num === 1) return 1;
  return num * recursiveFactorial(num - 1);
}

//console.log( recursiveFactorial(5))  <--------------------  invoking the function

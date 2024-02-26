/*

8 way to get undefine
1.variable that is not initialized will give undefined
2.function with no return
3.parameter that is not passed will be undefined
4.if return has nothing on the right side will return undefined

*/

let first;
//console.log(first);

function second(a, b) {
  const total = a + b;
}
const result = second();
//console.log(result);

function third(a, b, c, d) {
  const total = a + b + c + d;
  console.log(a, b, c, d);
}
third(2, 5);

//4no
function noNegative(a, b) {
  if (a < 0 || b < 0) {
    return;
  }
  return a + b;
}
const total = noNegative(2, -5);
console.log(total);

/*
truthy:
1.true
2.any number(+ve, _ve)will be truthy other than 0
3.any string other than empty string
4.'0'
5.{}(empty object)
6.[](empty array)

falsy:
1.false
2.0
3.''(empty string)
4.undefined 
5.null
*/

let x;
console.log(x);
if (x) {
  console.log("value of x is truthy");
} else {
  console.log("value of x is falsy");
}

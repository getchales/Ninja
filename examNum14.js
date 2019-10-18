function filtered(arr, mod) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray[i] = mod(arr[i]);
  }
  return newArray;
}
function multiply(value) {
  return value * 10;
}
function add(item) {
  return item + 10;
}
function division(item) {
  return item / 10;
}
function sub(item) {
  return item - 10;
}
let mul = filtered([1, 2, 3, 4, 5], multiply);
let added = filtered([1, 2, 3, 4, 5], add);
let div = filtered([1, 2, 3, 4, 5], division);
let subt = filtered([1, 2, 3, 4, 5], sub);
alert(mul);
alert(added);
alert(div);
alert(subt);

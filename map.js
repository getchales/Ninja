function mapped(arr, mod) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray[i] = mod(arr[i]);
  }
  return newArray;
}
function multiply(value) {
  return value * 1000;
}
function squared(item) {
  return item * item;
}
function negative(item) {
  return item * -1;
}
function divided(item) {
  return item / 10;
}
let mul = mapped([1, 2, 3, 4, 5], multiply);
let seq = mapped([1, 2, 3, 4, 5], squared);
let neg = mapped([1, 2, 3, 4, 5], negative);
let div = mapped([1, 2, 3, 4, 5], divided);
alert(mul);
alert(seq);
alert(neg);
alert(div);

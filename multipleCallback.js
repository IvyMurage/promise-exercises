function multiples(num1, num2) {
  return (() => num1 * num2)();
}

console.log(multiples(2, 3));

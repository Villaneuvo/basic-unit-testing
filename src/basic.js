function sumAndPlusTen(a, b) {
  return a + b + 10;
}

function maxNum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("All of the arguments must be a number!");
  }

  return a >= b ? a : b;
}

function factorialNum(n) {
  // Checking if its not a number
  if (typeof n !== "number") {
    throw new Error("All of the arguments must be a number!");
  }

  //   Checking if its float
  if (n % 1 !== 0) {
    throw new Error("All of the arguments must be a number!");
  }

  if (n >= 170) {
    throw new Error("The number is too big!");
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  //   for (let i = n - 1; i >= 1; i--) {
  //     n *= i;
  //   }
  //   return n;

  return n * factorialNum(n - 1);
}

export { sumAndPlusTen, maxNum, factorialNum };

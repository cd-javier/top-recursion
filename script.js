function fib(n) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    if (i < 2) {
      arr.push(i);
    } else {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }

  return arr;
}

function fibRec(n) {
  // Handles edge cases
  if (n === 0) return [];
  if (n === 1) return [0];
  // Returns the first two numbers of the Fibonacci sequence
  if (n === 2) return [0, 1];

  // Recursively calculates the Fibonacci sequence of n-1
  const fib = fibRec(n - 1);

  // Adds the next Fibonacci number by summing the last two elements of the the sequence
  fib.push(fib[fib.length - 1] + fib[fib.length - 2]);

  return fib;
}

function mergeSort(arr) {
  // If the array only has 1 number, it's returned as is
  if (arr.length === 1) return arr;
  // If the array has two numbers, it's returned sorted
  if (arr.length === 2) return arr[0] < arr[1] ? arr : [arr[1], arr[0]];

  // If the array contains 3 or more elements:
  const half = Math.floor(arr.length / 2); // Splits the array in two equal parts

  // They are recursively sorted through this same function
  const firstHalf = mergeSort(arr.slice(0, half));
  const secondHalf = mergeSort(arr.slice(half, arr.length));

  const result = [];

  // While both halves aren't empty
  while (firstHalf.length && secondHalf.length) {
    // Compares the first index of both halves and pushes the lowest to the result
    if (firstHalf[0] < secondHalf[0]) {
      result.push(firstHalf.shift());
    } else {
      result.push(secondHalf.shift());
    }
  }

  // Returns the result, and appends the remaining half that isn't empty
  return result.concat(firstHalf, secondHalf);
}

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
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const fib = fibRec(n - 1);
  fib.push(
    fib[fib.length - 1] + fib[fib.length - 2]
  );

  return fib;
}

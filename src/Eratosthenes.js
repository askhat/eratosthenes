export function eratosthenes(n) {
  let N = new Array(n + 1).fill(true);

  for (let i = 2; i <= Math.sqrt(N.length); i++) {
    if (N[i]) {
      for (let j = i ** 2; j <= N.length; j += i) {
        N[j] = false;
      }
    }
  }

  return N;
}

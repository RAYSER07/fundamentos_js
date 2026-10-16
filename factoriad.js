let factorialw = 1;
let i = 1;
let n = 5;
while (i <= n) {
  factorialw *= i;
  i++;
}
console.log("el factorial de 5 es", n, "es :", factorialw);

do {
  factorialw *= 1;

  i++;
} while (i <= n);
console.log("el factorial es ", n, "es :", factorialw);

const factorialIterative = function(n) {
    let result = 1;
    for(let i = 1; i <= n; i += 1) {
        result *= i;
    }
    return result;
}

const factorial = function(n, acum = 1) {
    return n < 2 ? acum : factorial(n-1, acum * n);
}

console.log(
    factorialIterative(5),
    factorial(5)
);
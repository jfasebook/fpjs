const factorialIterative = function(n) {
    let result = 1;
    for(let i = 1; i <= n; i += 1) {
        result *= i;
    }
    return result;
}

const factorial = function(n) {
    const auxFactorial = (n, acum) => n < 2 ? 
                                                acum : 
                                                auxFactorial(n-1, acum * n);
    return auxFactorial(n,1);
} 

console.log(
    factorialIterative(5),
    factorial(5)
);
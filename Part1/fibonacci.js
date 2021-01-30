const fibonacciIterative = function(n) {
    let current = 1;
    let next = 1;
    for(let i = 2; i < n; i += 1) {
        next = current + next;
        current = next - current;
    }
    return next;
};

const fibonacci = function(n, current = 1, next = 1) {
    return n < 3 ? next : fibonacci(n - 1, next, current + next);
}

console.log(
    fibonacciIterative(10),
    fibonacci(10)
)
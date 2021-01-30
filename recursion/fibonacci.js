const fibonacciIterative = function(n) {
    let current = 1;
    let next = 1;
    for(let i = 2; i < n; i += 1) {
        next = current + next;
        current = next - current;
    }
    return next;
};

const fibonacci = function(n) {
    const auxFibonacci = (n, current, next) =>  n < 3 ? 
                                                    next : 
                                                    auxFibonacci(n - 1, next, current + next);
    return auxFibonacci(n,1,1);
}

if(module && !module.parent) {
    console.log(
        fibonacciIterative(10),
        fibonacci(10)
    )
}

module.exports = {
    fibonacci,
    fibonacciIterative
};
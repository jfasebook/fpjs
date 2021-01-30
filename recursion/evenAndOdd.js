function evenIterative(n) {
    let absN = n < 0 ? -n : n;
    let base = absN;
    while(base > 0) {
        base -= 2;
    }
    return base >= 0;
}

function even(n) {
    const evenAux = (n) => n > 0 ? 
                            evenAux(n-2):
                            n === 0;
    return evenAux(n >= 0 ? n : -n );
}

function oddIterative(n) {
    let absN = n < 0 ? -n : n;
    let base = absN;
    while(base > 1) {
        base -= 2;
    }
    return base  >= 1;
}

function odd(n) {
    const oddAux = (n) => n > 1 ? 
                            oddAux(n-2):
                            n !== 0;

    return oddAux(n >= 0 ? n : -n );
}

if(module && !module.parent) {
    console.log(
        evenIterative(-4) === even(-4),
        evenIterative(0) === even(0),
        evenIterative(-3) === evenIterative(-3),
        evenIterative(3) === evenIterative(3)
    );
    
    console.log(
        oddIterative(0) === odd(0),
        oddIterative(1) === odd(1),
        oddIterative(-1) === odd(-1),
        oddIterative(-3) === odd(-3)
    );
}


/** Indirect recursivity */
function anotherEven(n) {
    const auxEven = n => n === 0 ? true: anotherOdd(n-1);
    return auxEven(n >= 0 ? n : -n);
}

function anotherOdd(n) {
    const auxOdd = n => n === 0 ? false : anotherEven(n-1);
    return auxOdd(n >= 0 ? n : -n);
}

module.exports = {
    even,
    odd
}

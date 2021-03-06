function addUp(n) {
    const addUpAux = (n, a) => n === 0 ? a : addUpAux(n-1, a + n);
    return addUpAux(n, 0); 
}

if(module && !module.parent) {
    console.log(
        addUp(100),
        addUp(5)
    );
}

module.exports = addUp;
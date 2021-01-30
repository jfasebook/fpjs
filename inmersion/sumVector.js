const sumVector = function(v) {

    const addVFrom = (v, a, i) => i > v.length - 1  ?
                                        a :
                                        addVFrom(v, a + v[i], i + 1);
    return addVFrom(v, 0, 0);
};

const sumVectorReverse = function(v) {
    const addVUp = (v, a, i) => i < 0 ? 
                                        a :
                                        addVUp(v, a + v[i], i - 1);

    return addVUp(v, 0, v.length - 1);
}

if(module && !module.parent) {
    console.log (
        sumVector ([1,2,3,4,5]), // 15
        sumVectorReverse ([1,2,3,4,5])  // 15
    );
}

module.exports = {
    sumVector,
    sumVectorReverse
}
const sumAll = function(x, y) {
    if (x < 0 || y < 0 || typeof(x) !== 'number' || typeof(y) !== 'number') {
        return 'ERROR';
    }

    let sum = 0;
    for (let i = Math.min(x, y); i <= Math.max(x, y); i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

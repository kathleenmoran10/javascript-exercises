const removeFromArray = function(a, ...args) {
    const isNotInArgs = function(x) {
        return !args.includes(x);
    }
    return a.filter(isNotInArgs);
};

// Do not edit below this line
module.exports = removeFromArray;

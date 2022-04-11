const palindromes = function (s) {
    const strippedS = s.match(/\w/g).join('');
    for (let i = 0, j = strippedS.length - 1; i < strippedS.length / 2; i++, j--) {
        if (!(strippedS[i].toLowerCase() === strippedS[j].toLowerCase())) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

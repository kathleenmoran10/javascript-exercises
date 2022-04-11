const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
  return arr.reduce((total, curr) => total + curr, 0);
};

const multiply = function(arr) {
  return (arr.length === 0) ? 0 : arr.reduce((total, curr) => total * curr, 1);
};

const power = function(x, y) {
	return x**y;
};

const factorial = function(x) {
	if (x === 0) {
    return 1;
  }
  
  let result = 1;
  while (x > 1) {
    result *= x;
    x--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

const squareRoot = (num) => {
  return Math.sqrt(num);
};

const square = (num) => {
  return num ** 2;
};

const distance = (x1, y1, x2, y2) => {
  const x = x2 - x1;
  const y = y2 - y1;
  const resultSquare = square(x) + square(y);
  const resultSqrt = squareRoot(resultSquare);
  return parseInt(resultSqrt);
};

module.exports = { distance };

function fibonacciGenerator(n) {
  var sequence = [];

  if (n === 1) {
    sequence.push(0);
  } else if (n > 1) {
    sequence.push(0);
    sequence.push(1);

    for (var i = 3; i <= n; i++) {
      var nextNum = sequence.slice(-1)[0] + sequence.slice(-2)[0];
      sequence.push(nextNum);
    }
  }

  return sequence;
}
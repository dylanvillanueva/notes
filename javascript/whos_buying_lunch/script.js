function whosPaying(names) {
  var randomNum = Math.random() * names.length;
  var personPaying = names[Math.floor(randomNum)];
  var result = personPaying + " is going to buy lunch today!";
  return result;
}
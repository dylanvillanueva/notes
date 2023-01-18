var bottles = 99;
var bottlesLeft = 98

while (bottles >= 0) {
  var firstLine = bottles + " bottles of beer on the wall, " + bottles + " bottles of beer.";
  var secondLine = "Take one down and pass it around, " + bottlesLeft + " bottles of beer on the wall.";

  if (bottles === 2) {
    secondLine = "Take one down and pass it around, " + bottlesLeft + " bottle of beer on the wall.";
  } else if (bottles === 1) {
    firstLine = bottles + " bottle of beer on the wall, " + bottles + " bottle of beer.";
    secondLine = "Take one down and pass it around, no more bottles of beer on the wall.";
  } else if (bottles === 0) {
    firstLine = "No more bottles of beer on the wall, no more bottles of beer.";
    secondLine = "Go to the store and buy some more, 99 bottles of beer on the wall.";
  }

  console.log(firstLine);
  console.log(secondLine);
  bottles--;
  bottlesLeft--;
}
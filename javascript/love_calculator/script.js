prompt("What is your name? ");
prompt("What is their name? ");

var loveScore = Math.random() * 101;
loveScore = Math.floor(loveScore);

if (loveScore === 100) {
  alert("Your love score is " + loveScore + "%. You love each other like Kanye love Kanye.");
}

if (loveScore > 30 && loveScore <= 70) {
  alert("Your love score is " + loveScore + "%.");
}

else {
  alert("Your love score is " + loveScore + "%. You go together like oil and water.");
}
function bmiCalculator(height, weight) {
  var bmi = weight / (Math.pow(height, 2));
  var bmiRounded = Math.round(bmi);
  return bmiRounded;
}
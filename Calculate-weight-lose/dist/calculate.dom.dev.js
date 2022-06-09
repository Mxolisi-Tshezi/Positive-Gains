"use strict";

var calculateButton1 = document.querySelector('.Calculate1');
var currentWeight = document.getElementById('weight');
var goalWeight = document.getElementById('goal');
var goaltime = document.getElementById('time');
var DisplayCalculate = document.querySelector('.Text_Goal');
var myWeightG = calculateMyGoal();
calculateButton1.addEventListener("click", function () {
  myWeightG.getCurrentWeight(Number(currentWeight.value));
  myWeightG.getCurrentGoal(Number(goalWeight.value));
  myWeightG.timeFrame(Number(goaltime.value));
  DisplayCalculate.innerHTML = myWeightG.returnDifference();
});
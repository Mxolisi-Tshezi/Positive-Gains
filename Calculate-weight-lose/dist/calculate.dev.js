"use strict";

function calculateMyGoal() {
  var takemyWeight = 0;
  var takemyGoal = 0;
  var returnTotal1 = 0;
  var goalTime = 0;

  function getCurrentWeight(Weight1) {
    takemyWeight = Weight1;
  }

  function getCurrentGoal(Goal1) {
    takemyGoal = Goal1;
  }

  function timeFrame(setTime) {
    goalTime = setTime;
  }

  function returnTime() {
    return goalTime;
  }

  function returnDifference() {
    returnTotal1 = takemyWeight - takemyGoal;
    return "You have to lose " + returnTotal1 + "kg" + " in " + goalTime + " weeks";
  }

  return {
    getCurrentGoal: getCurrentGoal,
    getCurrentWeight: getCurrentWeight,
    returnDifference: returnDifference,
    timeFrame: timeFrame,
    returnTime: returnTime
  };
}
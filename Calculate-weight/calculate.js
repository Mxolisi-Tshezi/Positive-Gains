function calculateGoal(){

var currentWeight = 0;
var goalWeight = 0;
var timeInDays = 0;
var weightDifference = 0;

function weightGain(){
    weightDifference = goalWeight - currentWeight;
    return "You need to gain " + weightDifference + " in order to reach your goal";
}

function weightLoss(){
    weightDifference = currentWeight - goalWeight;
    return "You need to lose " + weightDifference + " in order to reach your goal";
}
 return {
     weightGain,
     weightLoss
 }
}
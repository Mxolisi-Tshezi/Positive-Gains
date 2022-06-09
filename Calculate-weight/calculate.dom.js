const calculateButton = document.querySelector('.Calculate1');
const currentWeight = document.getElementById('weight');
const goalWeight = document.getElementById('goal');
const DisplayCalculate = document.querySelector('.Text_Goal');

const  myCalculateGoal = calculateGoal();

calculateButton.addEventListener("click", function(){
    myCalculateGoal.currentWeight(Number(currentWeight.value));
    myCalculateGoal.goalWeight(Number(goalWeight.value));
    DisplayCalculate.innerHTML = myCalculateGoal();
})
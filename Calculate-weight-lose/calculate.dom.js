const calculateButton1 = document.querySelector('.Calculate1');
const currentWeight1 = document.getElementById('weight');
const goalWeight1 = document.getElementById('goal');
const DisplayCalculate1 = document.querySelector('.Text_Goal');

const  myCalculateGoal1 = calculateGoal();

calculateButton.addEventListener("click", function(){
    myCalculateGoal1.currentWeight(Number(currentWeight.value));
    myCalculateGoal1.goalWeight(Number(goalWeight.value));
    DisplayCalculate1.innerHTML = myCalculateGoal();
})
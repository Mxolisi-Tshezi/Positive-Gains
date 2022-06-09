const calculateButton1 = document.querySelector('.Calculate1');
const currentWeight = document.getElementById('weight');
const goalWeight = document.getElementById('goal');
const goaltime = document.getElementById('time');
const DisplayCalculate = document.querySelector('.Text_Goal')

const myWeightG = calculateMyGoal()
calculateButton1.addEventListener("click", function(){
    myWeightG.getCurrentWeight(Number(currentWeight.value));
    myWeightG.getCurrentGoal(Number(goalWeight.value));
    myWeightG.timeFrame(Number(goaltime.value))
    DisplayCalculate.innerHTML = myWeightG.returnDifference();

})
const calculateButtonForGain = document.querySelector('.CalculateGain');
const massForGain = document.getElementById('mass_Gain');
const heightForGain = document.getElementById('height_Gain');
const DisplayForGain = document.querySelector('.Text_BMIGain');

const  myPositiveGain = positiveGains();

calculateButtonForGain.addEventListener('click', function(){
    myPositiveGain.enterHeight(Number(heightForGain.value));
    myPositiveGain.enterMass(Number(massForGain.value));
    DisplayForGain.innerHTML = myPositiveGain.returnBMI();

} )

const calculateButtonForLoss = document.querySelector(".CalculateLoss");
const massForLoss = document.getElementById(".massLoss");
const heightForLoss = document.getElementById(".heightLoss");
const DisplayForLoss = document.querySelector(".Text_BMILoss");

calculateButtonForLoss.addEventListener("click", function(){
    myPositiveGain.enterHeight(Number(heightForLoss.value));
    myPositiveGain.enterMass(Number(massForLoss.value));
    DisplayForLoss.innerHTML = myPositiveGain.returnBMI();
})
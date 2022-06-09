const calculateButtonForLoss = document.querySelector(".CalculateLoss");
const massForLoss = document.getElementById(".massLoss");
const heightForLoss = document.getElementById(".heightLoss");
const DisplayForLoss = document.querySelector(".Text_BMILoss");

calculateButtonForLoss.addEventListener("click", function(){
    myPositiveGain.enterHeight(Number(heightForLoss.value));
    myPositiveGain.enterMass(Number(massForLoss.value));
    DisplayForLoss.innerHTML = myPositiveGain.returnBMI();
})
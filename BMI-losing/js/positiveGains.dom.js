const calculateButtonForLoss = document.querySelector(".CalculateLoss");
const massForLoss = document.getElementById("massLoss");
const heightForLoss = document.getElementById("heightLoss");
const DisplayForLoss = document.querySelector(".Text_BMILoss");

const myPositiveGain = positiveGains1()

calculateButtonForLoss.addEventListener("click", function(){
    myPositiveGain.enterHeight1(Number(heightForLoss.value));
    myPositiveGain.enterMass1(Number(massForLoss.value));
    DisplayForLoss.innerHTML = myPositiveGain.returnBMI1();
})


const calculateButtonForGain = document.querySelector('.CalculateGain');
const massForGain = document.getElementById('mass_Gain');
const heightForGain = document.getElementById('height_Gain');
const DisplayForGain = document.querySelector('.Text_BMIGain')

const  myPositiveGain = positiveGains();

calculateButtonForGain.addEventListener('click', function(){
    myPositiveGain.enterHeight(Number(heightForGain.value));
    myPositiveGain.enterMass(Number(massForGain.value));
    DisplayForGain.innerHTML = myPositiveGain.returnBMI();

} )
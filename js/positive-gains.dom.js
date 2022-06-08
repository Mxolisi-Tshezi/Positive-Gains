const calculateButton = document.querySelector('.Calculate');
const mass = document.getElementById('mass');
const height = document.getElementById('height');
const Display = document.querySelector('.Text_BMI')

const  myPositiveGain = positiveGains();

calculateButton.addEventListener('click', function(){
    myPositiveGain.enterHeight(Number(height.value));
    myPositiveGain.enterMass(Number(mass.value));
    Display.innerHTML = myPositiveGain.retrurnBMI();

} )
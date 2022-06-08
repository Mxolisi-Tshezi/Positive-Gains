function positiveGains() {
    var massIn = 0;
    var heightIn = 0;
    var calculatedBMI = 0;

    function enterMass(myMass){
        massIn = myMass

    }
    function enterHeight(myHeight){
        heightIn = myHeight
    }
    function returnBMI(){
         calculatedBMI = (massIn/heightIn).toFixed(2);
         if(calculatedBMI <= 18.50){
         return calculatedBMI + "    Underweight";
         }
         if(18.50 < calculatedBMI && calculatedBMI <= 25.00){
            return calculatedBMI + "    Optimal";
         }
         if(25.00 < calculatedBMI && calculatedBMI <= 30.00){
            return calculatedBMI + "    Overweight";
         }
         if(30.00< calculatedBMI){
            return calculatedBMI + "    Obese";
         }

    }
    return{
        enterHeight,
        enterMass,
        returnBMI

    }

}
function positiveGains() {
    var WeightIn = 0;
    var heightIn = 0;
    var calculatedBMI = 0;

    function enterMass(myMass){
        WeightIn = myMass;

    }
    function enterHeight(myHeight){
        heightIn = (myHeight**2)
    }
    function returnBMI(){
         calculatedBMI = (WeightIn/heightIn).toFixed(2);
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
            return calculatedBMI + "     Significantly Overweight";
         }

    }
    return{
        enterHeight,
        enterMass,
        returnBMI

    }

}
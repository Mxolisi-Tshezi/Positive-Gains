function positiveGains1() {
    var WeightIn1 = 0;
    var heightIn1 = 0;
    var calculatedBMI1 = 0;

    function enterMass1(myMass1){
        WeightIn1 = myMass1;

    }
    function enterHeight1(myHeight1){
        heightIn1 = (myHeight1**2)
    }
    function returnBMI1(){
         calculatedBMI1 = (WeightIn1/heightIn1).toFixed(2);
         if(calculatedBMI1 <= 18.50){
         return calculatedBMI1 + "    Underweight" ;
         }
         if(18.50 < calculatedBMI1 && calculatedBMI1 <= 25.00){
            return calculatedBMI1 + "    Optimal";
         }
         if(25.00 < calculatedBMI1 && calculatedBMI1 <= 30.00){
            return calculatedBMI1 + "    Overweight";
         }
         if(30.00< calculatedBMI1){
            return calculatedBMI1 + "     Significantly Overweight";
         }

    }
    return{
        enterHeight1,
        enterMass1,
        returnBMI1

    }

}
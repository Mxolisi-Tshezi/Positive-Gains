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
    function retrurnBMI(){
         calculatedBMI = massIn/heightIn;
         if(calculatedBMI< 18.5){
         return calculatedBMI.toFixed(2);
         }
         else if(){
             
         }

    }
    return{
        enterHeight,
        enterMass,
        retrurnBMI

    }

}
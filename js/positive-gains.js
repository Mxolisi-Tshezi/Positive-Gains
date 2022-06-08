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
         return calculatedBMI;
    }
    return{
        enterHeight,
        enterMass,
        retrurnBMI

    }

}
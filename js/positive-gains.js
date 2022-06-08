function positiveGains() {
    var massIn = 0;
    var heightIn = 0;

    function enterMass(myMass){
        massIn = myMass

    }
    function enterHeight(myHeight){
        heightIn = myHeight
    }
    function retrurnBMI(){
         massIn/heightIn;
    }
    return{
        enterHeight,
        enterMass,
        retrurnBMI

    }

}
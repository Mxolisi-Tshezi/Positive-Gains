const calculateButton1 = document.querySelector('.Calculate1');
const currentWeight = document.getElementById('weight');
const goalWeight = document.getElementById('goal');
const goaltime = document.getElementById('time');
const DisplayCalculate = document.querySelector('.Text_Goal')

const myWeightG = calculateMyGoal()
calculateButton1.addEventListener("click", function(){
    myWeightG.getCurrentWeight(Number(currentWeight.value));
    myWeightG.getCurrentGoal(Number(goalWeight.value));
    myWeightG.timeFrame(Number(goaltime.value))
    DisplayCalculate.innerHTML = myWeightG.returnDifference();

})


var xValues = [];
var yValues = [];

var mychart = new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
        label: "Weight (kg)",
          fill: false,
          lineTension: 0.2,
          backgroundColor: "rgba(255,255,255)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(255,255,255)",
          pointBackgroundColor: "#ffffff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(255,255,255)",
          pointHoverBorderColor: "rgba(255,255,255)",
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          pointHitRadius: 10,
      data: yValues
    }]
  },
})
var count = 0;
        function add2array(item){
            xValues.push(item + count++);
            console.log(xValues)
            mychart.update();
        }
var count2 = 0;
        function add2array2(){
            var inputForG = document.getElementById("numberInput").value
            yValues.push(Number(inputForG) + count2++);
            console.log(yValues)
            mychart.update();
        }

        const xValues = JSON.parse(localStorage.getItem("weeksIn"));
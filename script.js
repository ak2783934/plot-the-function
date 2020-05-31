var parameters={
  target:'#myFunction',
  data:[{
    fn:'sin(x)',
    color:'red'
 }],
  grid: false,
  yAxis:{domain:[-1, 1]},
  xAxis:{domain:[0, 2*Math.PI]}
};
function plot(){

  var f = document.querySelector("#function").value;
  var xMin = document.querySelector("#xMin").value;
  var xMax = document.querySelector("#xMax").value;
  var yMin = document.querySelector("#yMin").value;
  var yMax = document.querySelector("#yMax").value;
  var color = document.querySelector("#color").value;
  var checkbox=document.getElementById("checkbox");;
  console.log(checkbox);
  parameters.data[0].fn = f;
  parameters.xAxis.domain = [xMin, xMax];
  parameters.yAxis.domain = [yMin, yMax];
  parameters.data[0].color = color;
 if(checkbox.checked===false){
     parameters.grid=false;
  }
  else{
     parameters.grid=true;
  }
  functionPlot(parameters);
}

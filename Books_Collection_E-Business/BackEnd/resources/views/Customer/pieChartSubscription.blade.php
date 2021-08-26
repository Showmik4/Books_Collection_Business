

<!DOCTYPE html>
<title>ADMIN</title>
<html lang="en-US">
<body style="text-align: center;">
   @include('.NavBar')
<h1>Statistics Page</h1>
<div style="margin: auto;width: 40%;padding: 10px;">
<div id="piechart"></div>

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

<script type="text/javascript">
// Load google charts

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['', ''],
  ['Standard ', {{$Standerd}}],
  ['Premium',  {{$Premium}}],
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'User Subscription ', 'width':550, 'height':400};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
</script>

<script type="text/javascript">
  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ["Element", "Density", { role: "style" } ],
      ["Not Banned",  {{$NotBanned}}, "#138D75"],
      ["Banned", {{$Banned}}, "#BA4A00"],
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                    { calc: "stringify",
                      sourceColumn: 1,
                      type: "string",
                      role: "annotation" },
                    2]);

    var options = {
      title: "Banned And Not Banned Statistics",
      width: 600,
      height: 400,
      bar: {groupWidth: "95%"},
      legend: { position: "none" },
    };
    var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
    chart.draw(view, options);
}
</script>
<div id="barchart_values" style="width: 900px; height: 300px;"></div>
</div>
</body>
</html>

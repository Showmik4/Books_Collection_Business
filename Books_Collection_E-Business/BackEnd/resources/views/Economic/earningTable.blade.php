<!DOCTYPE html>
<html>
<head>
	<title>Economic</title>
</head>
<body>

      @include('..NavBar')
      <h3> Earning Economic </h3>

   <br/><br/> 

   <span>Show List of : </span>
   <a href="/user/economic/2020"><button type="button" class="btn btn-outline-primary">2020</button></a> 
   <a href="/user/economic/2021"><button type="button" class="btn btn-outline-dark">2021</button></a>  
   <a href="/user/economic/2022"><button type="button" class="btn btn-outline-info">2022</button></a>

   <br/>
   <br/>
   <form method="get">
      <table class="table">
            <tr>
               <th>Year</th>
               <th>January</th>
               <th>February</th>
               <th>March</th>
               <th>April</th>
               <th>May</th>
               <th>June</th>
               <th>July</th>
               <th>August</th>
               <th>September</th>
               <th>October</th>
            </tr>
            @foreach ($allEesult as $user)
            <tr>
               <td>{{$user['Year']}}</td>
               <td>{{$user['January']}}</td>
               <td>{{$user['February']}}</td>
               <td>{{$user['March']}}</td>
               <td>{{$user['April']}}</td>
               <td>{{$user['May']}}</td>
               <td>{{$user['June']}}</td>
               <td>{{$user['July']}}</td>
               <td>{{$user['August']}}</td>
               <td>{{$user['September']}}</td>
               <td>{{$user['October']}}</td>
            </tr>
            @endforeach
      </table>
	</form>
   @foreach ($allEesult as $user)
   <div>
      <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
      <script type="text/javascript">
        google.charts.load("current", {packages:['corechart']});
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
          var data = google.visualization.arrayToDataTable([
            ["Element", "Density", { role: "style" } ],
            ["January", {{$user['January']}}, "#b87333"],
            ["February",{{$user['February']}}, "silver"],
            ["March", {{$user['March']}}, "gold"],
            ["April", {{$user['April']}}, "color: #e5e4e2"],
            ["May", {{$user['May']}}, "color: #229954"],
            ["June",{{$user['June']}}, "color: #AF601A"],
            ["July", {{$user['July']}}, "color: #2874A6"],
            ["August", {{$user['August']}}, "color: #F1948A "],
            ["September", {{$user['September']}}, "color:#6C3483"],
            ["October", {{$user['October']}}, "color: #6E2C00"],
          ]);
    
          var view = new google.visualization.DataView(data);
          view.setColumns([0, 1,
                           { calc: "stringify",
                             sourceColumn: 1,
                             type: "string",
                             role: "annotation" },
                           2]);
    
          var options = {
            title: "Earning of {{$user['Year']}}",
            width: 1200,
            height: 600,
            bar: {groupWidth: "95%"},
            legend: { position: "none" },
          };
          var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
          chart.draw(view, options);
      }
   </script>
    <div id="columnchart_values" style="margin: auto; padding: 10px;width: 60%; height: 300px;"></div>
  
   















  
      <script>
window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light1",
	title:{
		text: "Earning of {{$user['Year']}}"
	},
	data: [{        
		type: "line",
      	indexLabelFontSize: 16,
		dataPoints: [
			{ y: {{$user['January']}} },
			{ y: {{$user['February']}}},
			{ y: {{$user['March']}}},
			{ y: {{$user['April']}} },
			{ y: {{$user['May']}} },
			{ y: {{$user['June']}} },
			{ y: {{$user['July']}} },
			{ y: {{$user['August']}} },
			{ y: {{$user['September']}} },
			{ y: {{$user['October']}} },
		]
	}]
});
chart.render();

}
</script>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<div id="chartContainer" style="margin: auto; padding:10px;height: 310px; width: 60%;"></div>
<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
   </div>
   @endforeach
</body>
</html>
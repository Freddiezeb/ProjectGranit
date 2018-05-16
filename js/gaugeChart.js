//Takes an array of data, the element is where we want to display the chart,
//and its possible to send in other options if the user dont want the default.
function gaugeChart(array, element, options)
{
    google.charts.load('current', {'packages':['gauge']});
    google.charts.setOnLoadCallback(drawChart);

    if(array === null){
        array = [
            ["Label", "Value"],
            ["" , 0]
        ];
    }

    function drawChart() {
        var data = google.visualization.arrayToDataTable(array);
        var chart = new google.visualization.Gauge(document.getElementById(element));
        
        //If we don't send in any options then we use the default options
        if(options === null)
        {
            options = {
                width: 400, height: 120,
                redFrom: 90, redTo: 100,
                yellowFrom: 75, yellowTo: 90,
                minorTicks: 5
            };
        }
        chart.draw(data, options);
    }   
}
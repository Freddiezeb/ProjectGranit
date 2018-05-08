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
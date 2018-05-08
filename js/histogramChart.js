function histogramChart(array, element, options)
{
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);

    if(array === null){
        array = [
            ["", ""],
            [NaN , NaN]
        ];
    }

    function drawChart() {
        var data = google.visualization.arrayToDataTable(array);
        var chart = new google.visualization.Histogram(document.getElementById(element));

        if(options === null)
            chart.draw(data);
        else
            chart.draw(data, options);
    }
}
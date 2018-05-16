//Takes an array of data, the element is where we want to display the chart,
//and its possible to send in other options if the user dont want the default.
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

        //If we don't send in any options then we use the default options
        if(options === null)
            chart.draw(data);
        else
            chart.draw(data, options);
    }
}
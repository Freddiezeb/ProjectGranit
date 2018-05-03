function lineChart(array1, array2, names)
{
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            [names[0]   ,   names[1] ],
            [array1[0]    ,    array2[0] ],
            [array1[1]    ,    array2[1] ],
            [array1[2]    ,    array2[2] ],
            [array1[3]    ,    array2[3] ],  
            [array1[4]    ,    array2[4] ],  
            [array1[5]    ,    array2[5] ],  
            [array1[6]    ,    array2[6] ],  
            [array1[7]    ,    array2[7] ]  
        ]);
        var options = {
            title: names[1],
            curveType: '',
        };
        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
        chart.draw(data, options);
    }
}




function steppedAreaChart(array, element, options)
{
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

        if(array === null){
            array = [
                ["Watching", "Amount of People"],
                ["Detected faces" , NaN],
                ["Eye Contacts" , NaN],
                ["Looking towards camera" , NaN]
            ];
        }
    //

    function drawChart() 
    {
                var data = google.visualization.arrayToDataTable(array);
//        var data = google.visualization.arrayToDataTable([
//            ['Director (Year)',  'Rotten Tomatoes', 'IMDB'],
//            ['Alfred Hitchcock (1935)', 8.4,         7.9],
//            ['Ralph Thomas (1959)',     6.9,         6.5],
//            ['Don Sharp (1978)',        6.5,         6.4],
//            ['James Hawes (2008)',      4.4,         6.2]
//        ]);

        var options = {
            title: 'Number of People Watching',
            vAxis: {title: 'Number of People'},
            isStacked: true,
            backgroundColor: 'transparent'
        };
        var chart = new google.visualization.SteppedAreaChart(document.getElementById(element));

        chart.draw(data, options);
    }
}
//Takes an array of data, the element is where we want to display the chart,
//and its possible to send in other options if the user dont want the default.
function lineChart(array, element, options)
{
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    if(array === null){
        array = [
            ["", "", ""],
            [NaN , NaN, NaN]
        ];
    }

    function drawChart() {
        var data = google.visualization.arrayToDataTable(array);
        var chart = new google.visualization.LineChart(document.getElementById(element));

        //If we don't send in any options then we use the default options
        if(options === null){
          options = {
            //Backgroundcolor for linecharts
            backgroundColor:'transparent',
            //Horisontal axis
            hAxis:{
              //textstyle
              textStyle: {
              fontName: 'Times-Roman',
              fontSize: 12,
              // The color of the text.
              color: '#fff'
            }
          },
            //vertical axis
            vAxis:{
              //textstyle
              textStyle: {
              fontName: 'Times-Roman',
              fontSize: 12,
              // The color of the text.
              color: '#fff'
            }
          }
        }
          chart.draw(data, options);
        }
        else{
            chart.draw(data, options);
          }
    }
}

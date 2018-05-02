//var temperatureArray = [];
//var soundArray = [];
//var timeArray = [];
//
//function temperatureCharttt(result, temperatureArray, timeArray, soundArray)
//{
//    google.charts.load('current', {'packages':['corechart']});
//    google.charts.setOnLoadCallback(drawChart);
//
//    function drawChart() {
//        var myDate = new Date(result.timestamp * 1000);
//
//        //Use AddToArray to load in all the data 
//        AddToArray(temperatureArray, result.data.temperature, 8);
//        AddToArray(soundArray, result.data.sound_level, 8);
//        AddToArray(timeArray, myDate, 8);
//
//
//        console.log(result.data.temperature);
//        var data = google.visualization.arrayToDataTable([
//            ['Time'   ,   'Temperature' ],
//            [timeArray[0]    ,    soundArray[0] ],
//            [timeArray[1]    ,    soundArray[1] ],
//            [timeArray[2]    ,    soundArray[2] ],
//            [timeArray[3]    ,    soundArray[3] ],  
//            [timeArray[4]    ,    soundArray[4] ],  
//            [timeArray[5]    ,    soundArray[5] ],  
//            [timeArray[6]    ,    soundArray[6] ],  
//            [timeArray[7]    ,    soundArray[7] ]  
//        ]);
//
//        var options = {
//            title: 'Temperature',
//            curveType: '',
//
//        };
//        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
//        chart.draw(data, options);
//    }
//
//}
//
//function AddToArray(array, data, maxLenght)
//{
//    array.push(data);
//    if(array.length > maxLenght)
//    {
//        array.shift();
//    }
//}

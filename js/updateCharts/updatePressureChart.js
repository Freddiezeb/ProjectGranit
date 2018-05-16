function updatePressureChart(sensmitter_1_result, sensmitter_2_result, sensmitter_3_result)
{
    //Simpel array with the lables and values for now
    var array = [
        ["Label", "Value"],
        ["Pressure" , 90]
    ];

    //Options for the pressure chart, these will override the default options
    var options = {
        max: 200, 
        width: 400, height: 120,
        redFrom: 180, redTo: 200,
        yellowFrom: 150, yellowTo: 180,
        minorTicks: 5
    };

    //Draw the chart
    gaugeChart(array, "pressure_chart", options);
}
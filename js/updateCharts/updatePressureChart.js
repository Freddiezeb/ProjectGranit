function updatePressureChart(sensmitter_1_result, sensmitter_2_result, sensmitter_3_result)
{
    var array = [
        ["Label", "Value"],
        ["Pressure" , 90]
    ];

    var options = {
        max: 200, 
        width: 400, height: 120,
        redFrom: 180, redTo: 200,
        yellowFrom: 150, yellowTo: 180,
        minorTicks: 5
    };

    gaugeChart(array, "pressure_chart", options);
}
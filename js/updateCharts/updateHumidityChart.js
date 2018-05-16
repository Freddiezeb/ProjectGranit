//This function gets data from all the sources that have anything "Humidity" related to it
function updateHumidityChart(arduino_due_1_result, sensmitter_1_result, sensmitter_2_result, sensmitter_3_result)
{
    //Gets the current date from when we got our response
    var myDate = new Date(arduino_due_1_result.timestamp * 1000);

    //Sets the length of how much data will be displayed
    var maxLength = 8;  

    //Use AddToArray to load in all the data 
    AddToArray(humidityArray, arduino_due_1_result.data.humidity, maxLength);
    AddToArray(humidityTimeArray, myDate, maxLength);

    //Array with colum and row names 
    var names = [
        "Time",
        "arduino_due_1"
    ]

    //Array that start with the names from above
    //Then we fill it with the data from arduino_due_1
    var arduino_due_1_Array = [];
    for(var i = 0; i < maxLength + 1; i++)
    {
        if(i == 0)
        {
            arduino_due_1_Array.push([names[0], names[1]]);
        }
        else
        {
            arduino_due_1_Array.push([humidityTimeArray[i - 1], humidityArray[i - 1]]);        
        }
    }

    //Draw the chart
    lineChart(arduino_due_1_Array, "humidity_chart", null);
}
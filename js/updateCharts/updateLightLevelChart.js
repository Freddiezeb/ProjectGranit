

function updateLightLevelChart(arduino_due_1_result, sensmitter_1_result, sensmitter_2_result, sensmitter_3_result, maxLength)
{
    //Gets the current date from when we got our response
    var myDate = new Date(arduino_due_1_result.timestamp * 1000);

    //Sets the length of how much data will be displayed
        if(maxLength === null)
     maxLength = 8;  

    //Use AddToArray to load in all the data 
    AddToArray(lightLevelArray, arduino_due_1_result.data.x_light_level--, maxLength);
    AddToArray(lightLevelTimeArray, myDate, maxLength);

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
            arduino_due_1_Array.push([lightLevelTimeArray[i - 1], lightLevelArray[i - 1]]);   
        }
    }

    //Draw the chart
    lineChart(arduino_due_1_Array, "x_level_light_chart", null);
}


function startLightLevelChart(result, maxLength)
{
    //Gets the current date from when we got our response
    var myDate = new Date(result.timestamp * 1000);

    //Sets the length of how much data will be displayed
        if(maxLength === null)
     maxLength = 8;  

    //Use AddToArray to load in all the data 
    AddToArray(lightLevelArray, result.data.x_light_level--, maxLength);
    AddToArray(lightLevelTimeArray, myDate, maxLength);

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
            arduino_due_1_Array.push([lightLevelTimeArray[i - 1], lightLevelArray[i - 1]]);   
        }
    }

    //Draw the chart
    lineChart(arduino_due_1_Array, "x_level_light_chart", null);
}
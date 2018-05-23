function updateSoundLevelChart(arduino_due_1_result, phone_1_result, maxLength)
{
    //Gets the current date from when we got our response
    var myDate = new Date(arduino_due_1_result.timestamp * 1000);

    //Sets the length of how much data will be displayed
    if(maxLength === null)
     maxLength = 8;  

    //Use AddToArray to load in all the data 
    AddToArray(soundArray, arduino_due_1_result.data.sound_level, maxLength);
    AddToArray(soundTimeArray, myDate, maxLength);

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
            arduino_due_1_Array.push([soundTimeArray[i - 1], soundArray[i - 1]]);   
        }
    }

    //Draw the chart
    lineChart(arduino_due_1_Array, "sound_level_chart", null);
}

function startSoundLevelChart(result, maxLength)
{
    //Gets the current date from when we got our response
    var myDate = new Date(result.timestamp * 1000);

    //Sets the length of how much data will be displayed
    if(maxLength === null)
     maxLength = 8;  

    //Use AddToArray to load in all the data 
    AddToArray(soundArray, result.data.sound_level, maxLength);
    AddToArray(soundTimeArray, myDate, maxLength);

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
            arduino_due_1_Array.push([soundTimeArray[i - 1], soundArray[i - 1]]);   
        }
    }

    //Draw the chart
    lineChart(arduino_due_1_Array, "sound_level_chart", null);
}
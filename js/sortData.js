var temperatureArray = [];
var soundArray = [];
var timeArray = [];
lineChart(null, 'temperature_chart');

function CallFunction(functionName, functionArgument)
{
    var func = window[functionName](functionArgument)
    if(typeof func === "function")
    {
        func.apply(window, functionArgument)
    }
    else
    {
        return
    } 
}

function arduino_due_1(result)
{
    console.log("arduino_due_1")
    
    //Gets the current date from when we got our response
    var myDate = new Date(result.timestamp * 1000);
    
    //Sets the length of how much data will be displayed
    var maxLength = 8;  

    //Use AddToArray to load in all the data 
    AddToArray(temperatureArray, result.data.temperature, maxLength);
    //AddToArray(soundArray, result.data.sound_level, maxLength);
    AddToArray(timeArray, myDate, maxLength);

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
            arduino_due_1_Array.push([timeArray[i - 1], temperatureArray[i - 1]]);        
        }
    }
    
    //Draw the chart
    lineChart(arduino_due_1_Array, "temperature_chart");
}

function hue_1(result)
{
    console.log("hue_1")
}

function blinds_1(result)
{
    console.log("blinds_1")
}

function person_count(result)
{
    console.log("person_count")
}

function lab_state(result)
{
    console.log("lab_state")
}

function phone_1(result)
{
    console.log("phone_1")
}

function axis_old_camera(result)
{
    console.log("axis_old_camera")
}

function sensmitter_1(result)
{
    console.log("sensmitter_1")
}

function sensmitter_2(result)
{
    console.log("sensmitter_2")
}

function sensmitter_3(result)
{
    console.log("sensmitter_3")
}

function cameraACCC8E7E6E9F(result)
{
    console.log("cameraACCC8E7E6E9F")
}

function eye_contact_1(result)
{
    console.log("eye_contact_1")
}

function user_feedback(result)
{
    console.log("user_feedback")
}

function AddToArray(array, data, maxLenght)
{
    array.push(data);
    if(array.length > maxLenght)
    {
        array.shift();
    }
}
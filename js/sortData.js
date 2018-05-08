//Arrays that are being used in update...chart.js
var temperatureArray = [];
var temperatureTimeArray = [];

var pressureArray = [];

var humidityArray = [];
var humidityTimeArray = [];

var lightLevelArray = [];
var lightLevelTimeArray = [];

var soundArray = [];
var soundTimeArray = [];

var movementArray = [];
var movementTimeArray = [];

//var numberOfPeopleArray = [];
//var numberOfPeopleTimeArray = [];
//var peopleCounter = 0;

//Gives us the name of the current HTML.
//Must check if we are in the correct HTML file 
//Otherwise errors will occur
var path = window.location.pathname;
var page = path.split("/").pop();
console.log( page );

//Initializing empty charts
if(page == "air.html")
{
    lineChart(null, 'temperature_chart', null);
    lineChart(null, 'humidity_chart', null);
    gaugeChart(null, "pressure_chart", null);
}

if(page == "activity.html")
{
    lineChart(null, "x_level_light_chart", null);
    lineChart(null, "movement_chart", null);
    lineChart(null, "sound_level_chart", null);
}

if(page == "divs.html")
{
    histogramChart(null, "number_of_people_chart", null);
}
if(page == "custom.html")
{
    lineChart(null, 'temperature_chart', null);
    lineChart(null, 'humidity_chart', null);
    gaugeChart(null, "pressure_chart", null);
    lineChart(null, "x_level_light_chart", null);
    lineChart(null, "movement_chart", null);
    lineChart(null, "sound_level_chart", null);
    histogramChart(null, "number_of_people_chart", null);
}

function CallFunction(functionName, functionArgument)
{
    var func = window[functionName](functionArgument)
    if(typeof func === "function")
    {
        func.apply(window, functionArgument);
    }
    else
    {
        return;
    } 
}

function arduino_due_1(result)
{
    console.log("arduino_due_1");
    console.log(result);

    if(page == "air.html")
    {
        updateTemperatureChart(result, null, null, null);
        
        //FIXME: Pressure needs the right results from sensmitters
        updatePressureChart(null, null, null);
        updateHumidityChart(result, null, null, null);
    }

    if(page == "activity.html")
        {
          updateLightLevelChart(result, null, null, null);  
          updateSoundLevelChart(result, null, null, null);  
          updateMovementChart(result, null, null, null);  
        }
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
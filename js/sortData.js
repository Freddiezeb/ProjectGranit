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
    //All the charts displayed in air.html
    lineChart(null, 'temperature_chart', null);
    lineChart(null, 'humidity_chart', null);
    gaugeChart(null, "pressure_chart", null);
}

if(page == "activity.html")
{
    //All the charts displayed in activity.html
    lineChart(null, "x_level_light_chart", null);
    lineChart(null, "movement_chart", null);
    lineChart(null, "sound_level_chart", null);
}

if(page == "divs.html")
{
    //All the charts displayed in divs.html
    histogramChart(null, "number_of_people_chart", null);
}

if(page == "custom.html")
{
    //All the charts displayed in custom.html
    lineChart(null, 'temperature_chart', null);
    lineChart(null, 'humidity_chart', null);
    gaugeChart(null, "pressure_chart", null);
    lineChart(null, "x_level_light_chart", null);
    lineChart(null, "movement_chart", null);
    lineChart(null, "sound_level_chart", null);
    histogramChart(null, "number_of_people_chart", null);
}

//Comment
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

//This method gives us all the data from arduino_due_1
//So this is where we do everything related to this data
//The update...Chart methods is placed in a seperate .js for more feasable stucture
function arduino_due_1(result)
{
    console.log("arduino_due_1");
    console.log(result);

    //Everything displayed in air.html
    if(page == "air.html")
    {
        updateTemperatureChart(result, null, null, null);
        
        //FIXME: Pressure needs the right results from sensmitters
        updatePressureChart(null, null, null);
        updateHumidityChart(result, null, null, null);
    }

    //Everything displayed in activity.html
    if(page == "activity.html")
    {
          updateLightLevelChart(result, null, null, null);  
          updateSoundLevelChart(result, null, null, null);  
          updateMovementChart(result, null, null, null);  
    }
    
    //Everything displayed in custom.html
    if(page == "custom.html")
    {
        updateTemperatureChart(result, null, null, null);
        updatePressureChart(null, null, null);
        updateHumidityChart(result, null, null, null);
        updateLightLevelChart(result, null, null, null);  
        updateSoundLevelChart(result, null, null, null);  
        updateMovementChart(result, null, null, null);
    }
}

//This method gives us all the data from hue_1
//So this is where we do everything related to this data
function hue_1(result)
{
    console.log("hue_1")
}

//This method gives us all the data from blinds_1
//So this is where we do everything related to this data
function blinds_1(result)
{
    console.log("blinds_1")
}

//This method gives us all the data from person_count
//So this is where we do everything related to this data
function person_count(result)
{
    console.log("person_count")
}

//This method gives us all the data from lab_state
//So this is where we do everything related to this data
function lab_state(result)
{
    console.log("lab_state")
}

//This method gives us all the data from phone_1
//So this is where we do everything related to this data
function phone_1(result)
{
    console.log("phone_1")
}

//This method gives us all the data from axis_old_camera
//So this is where we do everything related to this data
function axis_old_camera(result)
{
    console.log("axis_old_camera")
}

//This method gives us all the data from sensmitter_1
//So this is where we do everything related to this data
function sensmitter_1(result)
{
    console.log("sensmitter_1")
}

//This method gives us all the data from sensmitter_2
//So this is where we do everything related to this data
function sensmitter_2(result)
{
    console.log("sensmitter_2")
}

//This method gives us all the data from sensmitter_3
//So this is where we do everything related to this data
function sensmitter_3(result)
{
    console.log("sensmitter_3")
}

//This method gives us all the data from cameraACCC8E7E6E9F
//So this is where we do everything related to this data
function cameraACCC8E7E6E9F(result)
{
    console.log("cameraACCC8E7E6E9F")
}

//This method gives us all the data from eye_contact_1
//So this is where we do everything related to this data
function eye_contact_1(result)
{
    console.log("eye_contact_1")
}

//This method gives us all the data from user_feedback
//So this is where we do everything related to this data
function user_feedback(result)
{
    console.log("user_feedback")
}

//This function takes in an empty array, the data that we want to store 
//and a max lenght for the array and then just fill the array with the data
//Used in all of the update...Chart.js
function AddToArray(array, data, maxLenght)
{
    array.push(data);
    if(array.length > maxLenght)
    {
        array.shift();
    }
}


var first = true
var hudituihdsg = Date.now();
//lightLevelContainer.push([new Date((hudituihdsg - 3600000) * 1000), 10, 37, 34]);


var options = {
    legend:{position:'top'},
    //Backgroundcolor for linecharts
    backgroundColor:'transparent',
    //Horisontal axis
    hAxis:{
        //textstyle
        textStyle: {
            fontName: 'Roboto',
            fontSize: 12,
            // The color of the text.
            color: '#fff'
        }
    },
    //vertical axis
    vAxis:{
        //textstyle
        textStyle: {
            fontName: 'Roboto',
            fontSize: 12,
            // The color of the text.
            color: '#fff'
        }
    }
}



fill("SensorsIOTAPLab");

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
    lineChart(null, "pressure_chart", null);
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
    lineChart(null, "hue_chart", null)
    lineChart(null, "blinds_chart", null)
    lineChart(null, "distance_chart", null)
    
   

}
if(page == "camera.html")
{
    steppedAreaChart(null, "eye_chart", null);
}

if(page == "custom.html")
{
    //All the charts displayed in custom.html
    lineChart(null, 'temperature_chart', null);
    lineChart(null, 'humidity_chart', null);
    lineChart(null, "pressure_chart", null);
    lineChart(null, "x_level_light_chart", null);
    lineChart(null, "movement_chart", null);
    lineChart(null, "sound_level_chart", null);
    steppedAreaChart(null, "eye_chart", null);
    lineChart(null, "blinds_chart", null)
    lineChart(null, "hue_chart", null)
    lineChart(null, "distance_chart", null)
   

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
    var date = new Date(1528214746 *999);
    console.log("arduino_due_1");
    console.log(result);
    if(first)
    {
        fakehistoricadata(date.toString().substr(0,24))
        first = false
    }


    updateMovement(result, 1, options)
    updateHumidity(result, 4, options )
    updateDistance(result, options)
    updateTemperature(result,4, options)
    updateSoundLevel(result, 1, options)
}

//This method gives us all the data from hue_1
//So this is where we do everything related to this data
function hue_1(result)
{
    console.log("hue_1")
    console.log(result);
    var date = new Date(1528214746 *999);
    if(first)
        {
            fakehistoricadata(date.toString().substr(0,24))
            first = false;
        }
    
    updateHue(result);
}

//This method gives us all the data from blinds_1
//So this is where we do everything related to this data
function blinds_1(result)
{
    console.log("blinds_1")
    console.log(result);
      var date = new Date(1528214746 *999);
    if(first)
        {
            fakehistoricadata(date.toString().substr(0,24))
            first = false;
        }
    
    updateBlinds(result);
}

//This method gives us all the data from person_count
//So this is where we do everything related to this data
function person_count(result)
{
    console.log("person_count")
    console.log(result);
}

//This method gives us all the data from lab_state
//So this is where we do everything related to this data
function lab_state(result)
{
    console.log("lab_state")
    console.log(result);
    updateLabState(result);
}

//This method gives us all the data from phone_1
//So this is where we do everything related to this data
function phone_1(result)
{
    var date = new Date(1528214746 *999);
    if(first)
    {
        fakehistoricadata(date.toString().substr(0,24))
        first = false
    }
    console.log("phone_1")
    console.log(result);

    updateMovement(result, 2, options)
    updateSoundLevel(result, 2, options)
}

//This method gives us all the data from axis_old_camera
//So this is where we do everything related to this data
function axis_old_camera(result)
{
    console.log("axis_old_camera")
    console.log(result);
}


//This method gives us all the data from sensmitter_1
//So this is where we do everything related to this data
function sensmitter_1(result)
{
    var date = new Date(1528214746 *999);
    if(first)
    {
        fakehistoricadata(date.toString().substr(0,24))
        first = false
    }
    updateLightLevel(result, 1, options)
    updateTemperature(result,1, options)
    updateHumidity(result, 1, options)
    updatePressure(result, 1, options)
    console.log(result)
}

//This method gives us all the data from sensmitter_2
//So this is where we do everything related to this data
function sensmitter_2(result)
{
    var date = new Date(1528214746 *999);
    if(first)
    {
        fakehistoricadata(date.toString().substr(0,24))
        first = false
    }
    updateLightLevel(result, 2, options)
    updateTemperature(result,2, options)
    updateHumidity(result, 2, options)

    console.log(result)

}

//This method gives us all the data from sensmitter_3
//So this is where we do everything related to this data
function sensmitter_3(result)
{
    var date = new Date(1528214746 *999);
    if(first)
    {
        fakehistoricadata(date.toString().substr(0,24))
        first = false
    }
    updateLightLevel(result, 3, options)
    updateTemperature(result,3, options)
    updateHumidity(result, 3, options)

    console.log(result)

}

//This method gives us all the data from cameraACCC8E7E6E9F
//So this is where we do everything related to this data
function cameraACCC8E7E6E9F(result)
{
    var date = new Date(1528214746 *999);
    if(first)
    {
        fakehistoricadata(date.toString().substr(0,24))
        first = false
    }
    console.log("cameraACCC8E7E6E9F")
    console.log(result);
    updatePeopleCount(result)
}

//This method gives us all the data from eye_contact_1
//So this is where we do everything related to this data
function eye_contact_1(result)
{
    console.log("eye_contact_1")
    console.log(result);
    
    var date = new Date(1528214746 *999);
    if(first)
    {
        fakehistoricadata(date.toString().substr(0,24))
        first = false
    }
    
   updateEyeContact(result);
}

//This method gives us all the data from user_feedback
//So this is where we do everything related to this data
function user_feedback(result) //nbr_of_people
{
    console.log("user_feedback")
    console.log(result);
    updateUserFeedback(result);
}

//This function takes in an empty array, the data that we want to store 
//and a max lenght for the array and then just fill the array with the data
//Used in all of the update...Chart.js
function AddToArray(array, data, maxLenght)
{

    array.push(data);

    if(array.length > maxLenght)
    {
        for(var i = 1; i < array.length - 1; i++)
        {
            for(var j = 0; j < array[i].length; j++)
            {
                array[i][j] = array[i + 1][j]
            }
        }
        array.pop()
    }
}
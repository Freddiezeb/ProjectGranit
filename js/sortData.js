var temperatureArray = [];
var soundArray = [];
var timeArray = [];

var first = true;

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
    if(first)
    {
        var x = document.createElement("TABLE");
        x.setAttribute("id", "table");
        document.body.appendChild(x);

        var yTemperature = document.createElement("TH");
        var yMovement = document.createElement("TH");
        var ySound = document.createElement("TH");

        yTemperature.setAttribute("id", "temperature");
        document.getElementById("table").appendChild(yTemperature);
        yTemperature.append("temperature")

        yMovement.setAttribute("id", "movement");
        document.getElementById("table").appendChild(yMovement);
        yMovement.append("movement")

        ySound.setAttribute("id", "sound");
        document.getElementById("table").appendChild(ySound);
        ySound.append("sound")

        first =false
    }
    
        //Start here
        var myDate = new Date(result.timestamp * 1000);

        //Use AddToArray to load in all the data 
        AddToArray(temperatureArray, result.data.temperature, 8);
        AddToArray(soundArray, result.data.sound_level, 8);
        AddToArray(timeArray, myDate, 8);
    
    var names = [
        "Time",
        "Sound"
    ]
    
    lineChart(timeArray, soundArray, names);

    var zTemperature = document.createElement("TR");
    var zMovement = document.createElement("TR");
    var zSound = document.createElement("TR");

    document.getElementById("temperature").appendChild(zTemperature); 
    document.getElementById("movement").appendChild(zMovement);         
    document.getElementById("sound").appendChild(zSound);

    var temperature = document.createTextNode(result.data.temperature);
    zTemperature.appendChild(temperature);
    document.getElementById("temperature").appendChild(zTemperature);

    var movement = document.createTextNode(result.data.movement);
    zMovement.appendChild(movement);
    document.getElementById("movement").appendChild(zMovement);

    var sound = document.createTextNode(result.data.sound_level);
    zSound.appendChild(sound);
    document.getElementById("sound").appendChild(zSound);
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
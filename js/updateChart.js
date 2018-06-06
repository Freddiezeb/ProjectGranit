


var temperatureContainer = [];
temperatureContainer.push(["Time","Sensmitter1", "Sensmitter2", "Sensmitter3", "arduino"]);

var lightLevelContainer = [];
lightLevelContainer.push(["Time", "Sensmitter1", "Sensmitter2", "Sensmitter3"]);

var humidityContainer = [];
humidityContainer.push(["Time", "Sensmitter1", "Sensmitter2", "Sensmitter3", "arduino"]);

var movementContainer = [];
movementContainer.push(["Time",  "arduino","phone_1" ]);

var soundLevelContainer = [];
soundLevelContainer.push(["Time", "arduino","phone_1" ]);

var pressureContainer = [];
pressureContainer.push(["Time", "Sensmitter1"]);

var numPeopleContainer = [];
numPeopleContainer.push(["Time", "camera"]);

function fakehistoricadata(date)
{
    
      lightLevelContainer.push([date, 0, 0 , 0 ]);
      temperatureContainer.push([date, 20, 23 , 25, 24]);
      humidityContainer.push([date, 20, 25 , 19, 20]);
      movementContainer.push([date, 0, 0]);
      soundLevelContainer.push([date, 66, 56]);
      pressureContainer.push([date, 1000]);
      numPeopleContainer.push([date, 2]);
        
  
}

function updateLightLevel(result, index, options)
{
     var element = document.getElementById('x_level_light_chart')
    if(typeof(element) != 'undefined' && element != null)
         {
    
    var sensmitter1
    var sensmitter2
    var sensmitter3
    
    var date = new Date(result.timestamp * 1000);
        if(index ==1)
        {
            sensmitter1 = result.data.light_level;
            sensmitter2 = lightLevelContainer[lightLevelContainer.length -1][2];
            sensmitter3 = lightLevelContainer[lightLevelContainer.length -1][3];
        }
     if(index ==2)
        {
            sensmitter2 = result.data.light_level;
            sensmitter1 = lightLevelContainer[lightLevelContainer.length -1][1];
            sensmitter3 = lightLevelContainer[lightLevelContainer.length -1][3];
        }
      if(index ==3)
        {
            sensmitter3 = result.data.light_level;
            sensmitter1 = lightLevelContainer[lightLevelContainer.length -1][1];
            sensmitter2 = lightLevelContainer[lightLevelContainer.length -1][2];
        }
    

             Add(lightLevelContainer, [date.toString().substr(0,24), parseFloat(sensmitter1), parseFloat(sensmitter2) , parseFloat(sensmitter3) ], 20)
    lineChart(lightLevelContainer, "x_level_light_chart", options);
            
         }
}

function Add(array, data, maxLenght)
{
    
                
    array.push(data)
                           
    if(array.length > maxLenght)
    {

            array.splice(1,1);
    }
}



function updateTemperature(result, index, options)
{
    var element = document.getElementById('temperature_chart')
    if(typeof(element) != 'undefined' && element != null)
         {
           var sensmitter1
    var sensmitter2
    var sensmitter3
    
    var arduino
    
    
    var date = new Date(result.timestamp * 1000);
             
             
        if(index ==1)
        {
            sensmitter1 = result.data.temperature;
            sensmitter2 = temperatureContainer[temperatureContainer.length -1][2];
            sensmitter3 = temperatureContainer[temperatureContainer.length -1][3];
            arduino = temperatureContainer[temperatureContainer.length -1][4];
        }
     if(index ==2)
        {
            sensmitter2 = result.data.temperature;
            sensmitter1 = temperatureContainer[temperatureContainer.length -1][1];
            sensmitter3 = temperatureContainer[temperatureContainer.length -1][3];
            arduino = temperatureContainer[temperatureContainer.length -1][4];
        }
      if(index ==3)
        {
            sensmitter3 = result.data.temperature;
            sensmitter1 = temperatureContainer[temperatureContainer.length -1][1];
            sensmitter2 = temperatureContainer[temperatureContainer.length -1][2];
            arduino = temperatureContainer[temperatureContainer.length -1][4];
        }
    
        if(index==4)
        {
            
            arduino = result.data.temperature;
            sensmitter3 = temperatureContainer[temperatureContainer.length -1][3];
            sensmitter1 = temperatureContainer[temperatureContainer.length -1][1];
            sensmitter2 = temperatureContainer[temperatureContainer.length -1][2];
            
            
        }
    
    //temperatureContainer.push([date, sensmitter1, sensmitter2 , sensmitter3, arduino]);
             Add(temperatureContainer,[date.toString().substr(0,24), parseFloat(sensmitter1), parseFloat(sensmitter2) , parseFloat(sensmitter3), arduino],20)
    lineChart(temperatureContainer, "temperature_chart", options);
              console.log(temperatureContainer)
             console.log(result.data.temperature)
             console.log(sensmitter1)
             console.log(sensmitter2)
             console.log(sensmitter3)
         }
  

}

function updateHumidity(result, index, options)
{
     var element = document.getElementById('humidity_chart')
    if(typeof(element) != 'undefined' && element != null)
         {
    var sensmitter1
    var sensmitter2
    var sensmitter3
    
    var arduino
    
    
    var date = new Date(result.timestamp * 1000);
        if(index ==1)
        {
            sensmitter1 = result.data.humidity;
            sensmitter2 = humidityContainer[humidityContainer.length -1][2];
            sensmitter3 = humidityContainer[humidityContainer.length -1][3];
            arduino = humidityContainer[humidityContainer.length -1][4];
        }
     if(index ==2)
        {
            sensmitter2 = result.data.humidity;
            sensmitter1 = humidityContainer[humidityContainer.length -1][1];
            sensmitter3 = humidityContainer[humidityContainer.length -1][3];
            arduino = humidityContainer[humidityContainer.length -1][4];
        }
      if(index ==3)
        {
            sensmitter3 = result.data.humidity;
            sensmitter1 = humidityContainer[humidityContainer.length -1][1];
            sensmitter2 = humidityContainer[humidityContainer.length -1][2];
            arduino = humidityContainer[humidityContainer.length -1][4];
        }
    
        if(index==4)
        {
            arduino = result.data.humidity;
            sensmitter3 = humidityContainer[humidityContainer.length -1][3];
            sensmitter1 = humidityContainer[humidityContainer.length -1][1];
            sensmitter2 = humidityContainer[humidityContainer.length -1][2];
            
            
        }
    
    //humidityContainer.push([date, sensmitter1, sensmitter2 , sensmitter3, arduino]);
             Add(humidityContainer,[date.toString().substr(0,24),parseFloat(sensmitter1), parseFloat(sensmitter2) , parseFloat(sensmitter3), arduino], 20)
    lineChart(humidityContainer, "humidity_chart", options);
         }

}

function updateMovement(result, index, options)
{
     var element = document.getElementById('movement_chart')
    if(typeof(element) != 'undefined' && element != null)
         {
    var arduino
    var phone_1
    
    
    
    var date = new Date(result.timestamp * 1000);
        if(index ==1)
        {
            arduino = result.data.movement;
            phone_1 = movementContainer[movementContainer.length -1][2];
           
        }
     if(index ==2)
        {
            phone_1 = result.data.device_movement;
            arduino = movementContainer[movementContainer.length -1][1];
         
        }
  
    
    
             Add(movementContainer, [date.toString().substr(0,24), arduino, parseFloat(phone_1)])
    lineChart(movementContainer, "movement_chart", options);
         }

}

function updateSoundLevel(result, index, options)
{
     var element = document.getElementById('sound_level_chart')
    if(typeof(element) != 'undefined' && element != null)
         {
    var arduino
    var phone_1
    
    
    
    var date = new Date(result.timestamp * 1000);
        if(index ==1)
        {
            arduino = result.data.sound_level;
            phone_1 = soundLevelContainer[soundLevelContainer.length -1][2];
           
        }
     if(index ==2)
        {
            phone_1 = result.data.sound_level;
            arduino = soundLevelContainer[soundLevelContainer.length -1][1];
         
        }
  
    
  
             
             Add(soundLevelContainer, [date.toString().substr(0,24), arduino, parseFloat(phone_1)])
    lineChart(soundLevelContainer, "sound_level_chart", options);
         }

}


function updatePressure(result, index, options)
{
     var element = document.getElementById('pressure_chart')
    if(typeof(element) != 'undefined' && element != null)
         {
    var sensmitter1
    var sensmitter2
    var sensmitter3
    
    var date = new Date(result.timestamp * 1000);
       
            sensmitter1 = result.data.pressure;

    Add(pressureContainer, [date.toString().substr(0,24), parseFloat(sensmitter1)], 20);
    lineChart(pressureContainer, "pressure_chart", options);
         }

}

function updateLabState(result)
{
   
    if(typeof(element) != 'undefined' && element != null)
         {
             
             
         }
}

function updatePeopleCount(result) 
{
     var element = document.getElementById('chart_div')
    if(typeof(element) != 'undefined' && element != null)
         {
     var date = new Date(result.timestamp * 1000);
        var camera = result.data.peoplecount
        var options = {
          title: 'Number of people in room',
          vAxis: {title: ''},
          isStacked: true,
          backgroundColor: 'transparent'
        };

      numPeopleContainer.push([date, camera ]);
    
    
    
        var chart = new google.visualization.SteppedAreaChart(document.getElementById('chart_div'));
          chart.draw(numPeopleContainer, options);
         }
       
      }


var queryType = [];

function GetHistDataByDate(startDate, endDate)
{
    
    if(page == "air.html")
        {
            GetHistAir(startDate, endDate);
        }
    if(page == "activity.html")
        {
            
        }
    if(page == "custom.html")
        {
            
        }
}

function GetHistAir(startDate, endDate)
{
    var temperatureContainer = [];
    temperatureContainer.push(["Time","Sensmitter1", "Sensmitter2", "Sensmitter3", "arduino"]);
    
    var humidityContainer = [];
    humidityContainer.push(["Time", "Sensmitter1", "Sensmitter2", "Sensmitter3", "arduino"]);
    
    var pressureContainer = [];
    pressureContainer.push(["Time", "Sensmitter1"]);
    
    queryType = ["temp", "press", "humi"];
    
    QueryHistDataByDate("SensorsIOTAPLab", startDate, endDate, "sensmitter_1");
    QueryHistDataByDate("SensorsIOTAPLab", startDate, endDate, "sensmitter_2");
    QueryHistDataByDate("SensorsIOTAPLab", startDate, endDate, "sensmitter_3");
    QueryHistDataByDate("SensorsIOTAPLab", startDate, endDate, "arduino_due_1");
    displayCharts();
}

function storeArduinoData(result)
{
    for (i = 0; i < queryType.length; i++) 
    {
        switch(queryType[i])
            {
                case temp:
                    updateTemperature(result,4, options);
                    break;
                case humi:
                    updateHumidity(result,4, options);
                    break;
                default:
                    break;
            }
    } 
}
function storeSensmitter1Data(result)
{
    for (i = 0; i < queryType.length; i++) 
    {
        switch(queryType[i])
            {
                case temp:
                    updateTemperature(result,1, options);
                    break;
                case humi:
                    updateHumidity(result,1, options);
                    break;
                case press:
                    updatePressure(result, 1, options);
                    break;
                default:
                    break;
            }
    }
}
function storeSensmitter2Data(result)
{
    for (i = 0; i < queryType.length; i++) 
    {
        switch(queryType[i])
            {
                case temp:
                    updateTemperature(result,2, options);
                    break;
                case humi:
                    updateHumidity(result,2, options);
                    break;
                default:
                    break;
            }
    }
}
function storeSensmitter3Data(result)
{
    for (i = 0; i < queryType.length; i++) 
    {
        switch(queryType[i])
            {
                case temp:
                    updateTemperature(result,3, options);
                    break;
                case humi:
                    updateHumidity(result,3, options);
                    break;
                default:
                    break;
            }
    }
}
       

//function updateNumberOfPeopleChart(cameraACCC8E7E6E9F_result)
//{
//    //Sets the length of how much data will be displayed
//    var maxLength = 8;  
//
//    //Use AddToArray to load in all the data 
//    AddToArray(numberOfPeopleArray, cameraACCC8E7E6E9F_result.data.movement_direction, maxLength);
//    
//    peopleCounter = 6;
//
//    //Array with colum and row names 
//    var names = [
//        "Time",
//        "cameraACCC8E7E6E9F"
//    ]
//
//    //Array that start with the names from above
//    //Then we fill it with the data from arduino_due_1
//    var arduino_due_1_Array = [];
//    for(var i = 0; i < maxLength + 1; i++)
//    {
//        if(i == 0)
//        {
//            arduino_due_1_Array.push([names[0], names[1]]);
//        }
//        else
//        {
//            arduino_due_1_Array.push([numberOfPeopleTimeArray[i - 1], numberOfPeopleArray+-[i - 1]]);   
//        }
//    }
//
//    //Draw the chart
//    lineChart(arduino_due_1_Array, "x_level_light_chart", null);
//}
AWS.config.update({
    region: "us-east-1",
    //    endpoint: 'a1y7d41s0oj85v.iot.us-east-1.amazonaws.com',
    // accessKeyId default can be used while using the downloadable version of DynamoDB.
    // For security reasons, do not store AWS Credentials in your files. Use Amazon Cognito instead.
    accessKeyId: "AKIAIVBVKDOAE3AASRHA",
    // secretAccessKey default can be used while using the downloadable version of DynamoDB.
    // For security reasons, do not store AWS Credentials in your files. Use Amazon Cognito instead.
    secretAccessKey: "Z46irEIjQf4JUF8fqH3n0mhiDGgbqI+LdyFYq6Hk"
});


var docClient = new AWS.DynamoDB.DocumentClient();

function fill(table)
{
    var params = {
        TableName: table
    };

    docClient.scan(params, onScan);

    function onScan(err, data){
        if(err)
        {
            console.log(err);
        }
        else{
            var arr = [];
            for(let index = 0; index < data.Items.length; index++){
//                if(page == "air.html")
//                {
////                    startTemperatureChart(data.Items[index].payload, null);
////                    startHumidityChart(data.Items[index].payload, null);
//
//                }
//
//                if(page == "activity.html")
//                {
//                    startLightLevelChart(data.Items[index].payload, null);
//                    startSoundLevelChart(data.Items[index].payload, null);
//                    startMovementChart(data.Items[index].payload, null);
//                }
//
//                if(page == "custom.html")
//                {
//                    startTemperatureChart(data.Items[index].payload, null);
//                    startHumidityChart(data.Items[index].payload, null);
//                    startLightLevelChart(data.Items[index].payload, null);
//                    startSoundLevelChart(data.Items[index].payload, null);
//                    startMovementChart(data.Items[index].payload, null);
//                }
//      console.log(data.Items[index].uid);
            }
            // when chars got data: display charts
            displayCharts();
        }

    }
}

function fillScatterChartWithHistoricalData(table, scatterChart)
{
    var params = { TableName: table};
    docClient.scan(params, onScan);

    function onScan(err, data)
    {
        if(err)
        {
        }
        else
        {
            var arr = []
            for(let index = 0; index < data.Items.length; index++)
            {
                var t = new Date(0);
                t.setSeconds(data.Items[index].payload.timestamp);
                arr.push([[t.getHours(), t.getMinutes(), t.getSeconds()], data.Items[index].payload.data.sound_level])
            }
            //            scatterChart.addData(arr);
            console.log(arr);
        }
    }
}

function QueryHistDataByDate(table, startDate, endDate, uid)
{
    console.log(startDate);
    console.log(endDate);
    var params = {
        TableName: table,
        KeyConditionExpression: "#PID = :id AND #DTimestamp BETWEEN :start AND :end",
        ExpressionAttributeNames:{
            '#PID' : 'uid',
            '#DTimestamp': 'timestamp'
        },
        ExpressionAttributeValues:{
            ":id": uid,
            ":start": startDate,
            ":end": endDate
        }
    };
    docClient.query(params, function(err, data){
        if (err)
        {
            console.log(err);
        }
        else
        {
            for(let index = 0; index < data.Items.length; index++)
            {                        
                if(uid == "arduino_due_1")
                {
                    storeArduinoData(data.Items[index].payload);
                }
                if(uid == "sensmitter_1")
                {
                    storeSensmitter1Data(data.Items[index].payload);
                }
                if(uid == "sensmitter_2")
                {
                    storeSensmitter2Data(data.Items[index].payload);
                }
                if(uid == "sensmitter_3")
                {
                    storeSensmitter3Data(data.Items[index].payload);
                }         
            }
        }
    })
}

//Takes an array of data, the element is where we want to display the chart,
//and its possible to send in other options if the user dont want the default.
function lineChart(array, element, options, lenght)
{
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    if(array === null){
        array = [
            ["", "", ""],
            [NaN , NaN, NaN]
        ];
    }


    function drawChart() {
        var data = google.visualization.arrayToDataTable(array);

        var chart = new google.visualization.ChartWrapper({
            chartType: 'LineChart',
            containerId: element,
            dataTable: data,
            options: {legend:{position:'top'},
                      backgroundColor:'transparent',
                      width: 700,
                      height: 400
                     }

        });

        var columnsTable = new google.visualization.DataTable();
        columnsTable.addColumn('number', 'colIndex');
        columnsTable.addColumn('string', 'colLabel');
        var initState= {selectedValues: []};
        
        for (var i = 1; i < data.getNumberOfColumns(); i++)
        {
            columnsTable.addRow([i, data.getColumnLabel(i)]);
            initState.selectedValues.push(data.getColumnLabel(i));
        }

        var columnFilter = new google.visualization.ControlWrapper({
            controlType: 'CategoryFilter',
            containerId: element+'filter',
            dataTable: columnsTable,
            options: {
                filterColumnLabel: 'colLabel',
                ui: {
                    label:'',
                    allowTyping: false,
                    allowMultiple: true,
                    allowNone: false,
                    selectedValuesLayout: 'belowStacked'
                }
            },
            state: initState
        });

        function setChartView () {
            var state = columnFilter.getState();
            var row;
            var view = {
                columns: [0]
            };
            for (var i = 0; i < state.selectedValues.length; i++) {
                row = columnsTable.getFilteredRows([{column: 1, value: state.selectedValues[i]}])[0];
                view.columns.push(columnsTable.getValue(row, 0));
            }

            view.columns.sort(function (a, b) {
                return (a - b);
            });
            chart.setView(view);

            chart.draw();

            google.visualization.events.addListener(columnFilter, 'statechange', setChartView);



        }

        setChartView();
        columnFilter.draw();


    }


}


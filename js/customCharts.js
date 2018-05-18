//Toggles if charts should be visible or not when clicking a chart type button
function toggleChart(chartName, btnName){
    var element = document.getElementById(chartName);
    var btn = document.getElementById(btnName);
    //console.log(btn);
    if(element.style.display ==="none")
        {
            element.style.display = "block";
            btn.style.border = "2px solid #c42f59";
        }
    else
        {
            element.style.display = "none";
            btn.style.border = "2px solid transparent";
        }
    //console.log(btn.className);
}

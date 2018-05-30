"use strict";
var headline=document.getElementsByClassName('headline1');
var loadBubble=document.getElementById('load');
var ldLabel=document.getElementsByClassName('ldBar-label');
var wrapp=document.getElementById('wrapper');

var bar = new ldBar(loadBubble, {
// storlek på de små bubblorna
 "pattern-size": "40",
// Bakgrunds färg av bubbla
 "fill-background": "transparent",
 // preset Form: bubbla
 "preset": "bubble",
 // laddningstyp: fyll bubbla
 "type":"fill",
 //Fyll bubbla färg, färg för mindre bubblor, antal bubblor i mönster, hastighet
 "fill":"data:ldbar/res,bubble(#a0d7e3,#fff,40,5)",
 //Fyllnads tid 5 sec
 "duration":"20"
});
//fyll till hundra
bar.set(100)
displayCharts();

function displayCharts() {
  setTimeout(function(){
    wrapp.classList.replace("wrapper_display_none","wrapper_display");
    loadBubble.remove();
    headline.classList.replace("headline1","headline2");
 }, 20500);

}
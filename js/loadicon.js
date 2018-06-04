"use strict";
var headline=document.getElementById('headline');
var loadBubble=document.getElementById('load');
var ldLabel=document.getElementsByClassName('ldBar-label');
var wrapp=document.getElementById('wrapper');
//Specifik färg för specifik sida
if (page=="air.html"){
  var bubbleColor="#245861";
}
if (page=="activity.html"){
  var bubbleColor="#517984";
}
if (page=="camera.html"){
  var bubbleColor="#a3708d";
}
if (page=="divs.html"){
  var bubbleColor="#a8648b";
}
if (page=="custom.html"){
  var bubbleColor="#f883a4";
}
//https://loading.io/progress/
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
 "fill":"data:ldbar/res,bubble("+bubbleColor+",#fff,40,5)",
 //Fyllnads tid 10 sec
 "duration":"10"
});
//fyll till hundra
bar.set(100);
//När data kommit in i formulär startas denna funktion
function displayCharts() {

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
   "fill":"data:ldbar/res,bubble("+bubbleColor+",#fff,40,5)",
   //Fyllnads tid 2 sec
   "duration":"2"
  });
  bar.set(100);

  setTimeout(function(){
    wrapp.classList.replace("wrapper_display_none","wrapper_display");
    loadBubble.remove();
    headline.remove();

  }, 1500);
}

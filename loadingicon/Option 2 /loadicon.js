"use strict";
var loadBubble=document.getElementById('load');

var bar = new ldBar(loadBubble, {
// storlek på de små bubblorna
 "pattern-size": "30",
// Bakgrunds färg av bubbla
 "fill-background": "grey",
 // preset Form: bubbla
 "preset": "text",
 // laddningstyp: fyll bubbla
 "type":"fill",
 //Fyll bubbla färg, färg för mindre bubblor, antal bubblor i mönster, hastighet
 //"fill":"data:ldbar/res,text(0,1,#ff9)",
 //Fyllnads tid 5 sec
 "duration":"5"
});
//fyll till hundra
bar.set(50)

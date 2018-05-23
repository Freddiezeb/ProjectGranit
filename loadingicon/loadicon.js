"use strict";
var loadBubble=document.getElementById('load');

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
 "duration":"5"
});
//fyll till hundra
bar.set(100)

"use strict";
//Select dropdown date_from
var date_from = document.getElementById("date_from");
//Select dropdown date_to
var date_to = document.getElementById("date_to");
//dagens datum
var today = new Date();

//Loopar igenom 30 dagar bak i tiden
for (var i = 0; i < 31; i++) {
  //Skapa variabel för föredetta datum. Sparar datumet i millisekunder sen 1970
  var priorDate = new Date().setDate(today.getDate()-i);
  //Variabel som sparar datumet i vanlig datumform
  //exempel: "Sun Apr 15 2018 13:58:46 GMT+0200 (CEST)"
  var pastDate = new Date(priorDate);
  //Gör pastDate till sträng
  var str=pastDate.toString();
  //Tar bort del av sträng som ej behövs. Så det blir t.ex. "Sun Apr 15 2018"
  str = str.substr(0,15);
  //Lägger till nya option element i select dropownmenyn
  date_from.appendChild(document.createElement("option")).innerHTML = str;
  date_to.appendChild(document.createElement("option")).innerHTML = str;
}

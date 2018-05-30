"use strict";
//animations reference
//http://jaukia.github.io/zoomooz/
//delay link reference
//https://stackoverflow.com/questions/14434604/i-want-to-delay-a-link-for-a-period-of-500-with-javascript

//When document ready and bubble clicked: remove text in bubble and zoom to bubble
$(document).ready(function() {
    $("#air").click(function(evt) {
      $("#air_text").remove();
      //Change id so bubble stays in hover position
      $("#air").attr("id","air_clicked");
      //Change id to rest of bubbles so they don´t hover
      $("#activity").attr("id","activity_noHover");
      $("#camera").attr("id","camera_noHover");
      $("#divs").attr("id","divs_noHover");
      $("#create").attr("id","create_noHover");
        $(this).zoomTo({targetsize:10.75, duration:7000});
        evt.stopPropagation();
        setTimeout( function() { window.location.href = 'air.html' }, 1500 );
    });
});

$(document).ready(function() {
    $("#activity").click(function(evt) {
      $("#activity_text").remove();
      //Change id so bubble stays in hover position
      $("#activity").attr("id","activity_clicked");
      //Change id to rest of bubbles so they don´t hover
      $("#air").attr("id","air_noHover");
      $("#camera").attr("id","camera_noHover");
      $("#divs").attr("id","divs_noHover");
      $("#create").attr("id","create_noHover");
        $(this).zoomTo({targetsize:10.75, duration:7000});
        evt.stopPropagation();
        setTimeout( function() { window.location.href = 'activity.html' }, 1500 );
    });
});

$(document).ready(function() {
    $("#camera").click(function(evt) {
      $("#camera_text").remove();
      //Change id so bubble stays in hover position
      $("#camera").attr("id","camera_clicked");
      //Change id to rest of bubbles so they don´t hover
      $("#air").attr("id","air_noHover");
      $("#activity").attr("id","activity_noHover");
      $("#divs").attr("id","divs_noHover");
      $("#create").attr("id","create_noHover");
        $(this).zoomTo({targetsize:10.75, duration:7000});
        evt.stopPropagation();
        setTimeout( function() { window.location.href = 'camera.html' }, 1500 );
    });
});

$(document).ready(function() {
    $("#divs").click(function(evt) {
      $("#divs_text").remove();
      //Change id so bubble stays in hover position
      $("#divs").attr("id","divs_clicked");
      //Change id to rest of bubbles so they don´t hover
      $("#air").attr("id","air_noHover");
      $("#activity").attr("id","activity_noHover");
      $("#camera").attr("id","camera_noHover");
      $("#create").attr("id","create_noHover");
        $(this).zoomTo({targetsize:10.75, duration:7000});
        evt.stopPropagation();
        setTimeout( function() { window.location.href = 'divs.html' }, 1500 );
    });
});

$(document).ready(function() {
    $("#create").click(function(evt) {
      $("#create_text").remove();
      //Change id so bubble stays in hover position
      $("#create").attr("id","create_clicked");
      //Change id to rest of bubbles so they don´t hover
      $("#air").attr("id","air_noHover");
      $("#activity").attr("id","activity_noHover");
      $("#divs").attr("id","divs_noHover");
      $("#camera").attr("id","camera_noHover");
        $(this).zoomTo({targetsize:10.75, duration:7000});
        evt.stopPropagation();
        setTimeout( function() { window.location.href = 'custom.html' }, 1500 );
    });
});

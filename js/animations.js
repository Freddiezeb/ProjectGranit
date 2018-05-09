"use strict";
//animations reference
//http://jaukia.github.io/zoomooz/
//delay link reference
//https://stackoverflow.com/questions/14434604/i-want-to-delay-a-link-for-a-period-of-500-with-javascript
//When document ready and bubble clicked:remove text in bubble and zoom to bubble
$(document).ready(function() {
    $("#air").click(function(evt) {
      $("#air_text").remove();
        $(this).zoomTo({targetsize:10.75, duration:7000});
        evt.stopPropagation();
        setTimeout( function() { window.location.href = 'air.html' }, 1500 );
    });
});

$(document).ready(function() {
    $("#activity").click(function(evt) {
      $("#activity_text").remove();
        $(this).zoomTo({targetsize:10.75, duration:7000});
        evt.stopPropagation();
        setTimeout( function() { window.location.href = 'activity.html' }, 1500 );
    });
});

$(document).ready(function() {
    $("#camera").click(function(evt) {
      $("#camera_text").remove();
        $(this).zoomTo({targetsize:10.75, duration:7000});
        evt.stopPropagation();
        setTimeout( function() { window.location.href = 'camera.html' }, 1500 );
    });
});

$(document).ready(function() {
    $("#divs").click(function(evt) {
      $("#divs_text").remove();
        $(this).zoomTo({targetsize:10.75, duration:7000});
        evt.stopPropagation();
        setTimeout( function() { window.location.href = 'divs.html' }, 1500 );
    });
});

$(document).ready(function() {
    $("#create").click(function(evt) {
      $("#create_text").remove();
        $(this).zoomTo({targetsize:10.75, duration:7000});
        evt.stopPropagation();
        setTimeout( function() { window.location.href = 'custom.html' }, 1500 );
    });
});

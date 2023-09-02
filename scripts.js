// Created on iPad.
    var now = new Date();
    var y2k = new Date("April 26, 2028 00:00:00");
    var seconds = (y2k - now) / 1000;
    var years = seconds / 3600 / 24 / 365;
    var roundedYears = Math.round(years);
    document.getElementById("years").textContent = roundedYears;

/*jslint browser: true*/

var seconds_p = document.getElementById('seconds'),
    minutes_p = document.getElementById('minutes'),
    hours_p = document.getElementById('hours'),
    days_p = document.getElementById('days'),
    weeks_p = document.getElementById('weeks'),
    months_p = document.getElementById('months'),
    years_p = document.getElementById('years'),
    decades_p = document.getElementById('decades');

function updateValues() {
    "use strict";
    var date = new Date(),
        he_arrived = new Date('2014/07/13 00:00:00'),
        difference = date - he_arrived;

    seconds_p.innerHTML = (difference / 1000).toFixed(2) + ' seconds';
    minutes_p.innerHTML = (difference / 1000 / 60).toFixed(2) + ' minutes';
    hours_p.innerHTML = (difference / 1000 / 60 / 60).toFixed(2) + ' hours';
    days_p.innerHTML = (difference / 1000 / 60 / 60 / 24).toFixed(2) + ' days';
    weeks_p.innerHTML = (difference / 1000 / 60 / 60 / 24 / 7).toFixed(2) + ' weeks';
    months_p.innerHTML = (difference / 1000 / 60 / 60 / 24 / 30.4375).toFixed(2) + ' months';
    years_p.innerHTML = (difference / 1000 / 60 / 60 / 24 / 365.25).toFixed(2) + ' years';
    decades_p.innerHTML = (difference / 1000 / 60 / 60 / 24 / 365.25 / 10).toFixed(2) + ' decades';
}

// document.ready(updateValues());
window.addEventListener('load', updateValues);
setInterval(updateValues, 100);

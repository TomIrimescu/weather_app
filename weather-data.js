"use strict";

function Weather(cityName, description) {
    this.cityName = cityName.toUpperCase();
    this.description = description;
    this._temperature = '';
    this._humidity = '';
}

Object.defineProperty(Weather.prototype, 'temperature', {
    get: function() {
        return this._temperature;
    },
    set: function(value) {
        this._temperature = (value * 1.8 + 32).toFixed(2) + ' F';
    }
});

Object.defineProperty(Weather.prototype, 'humidity', {
    get: function() {
        return this._humidity;
    },
    set: function(value) {
        this._humidity = value + '% HUMIDITY';
    }
});
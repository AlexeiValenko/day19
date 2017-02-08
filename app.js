'use strict'

function OrderedMap() {
    this._supportArray = [];
    this._dataObject = {};
}

OrderedMap.prototype.push = function(key, value) {
    this._supportArray.push(key);
    this._dataObject[key]  = value;
}

OrderedMap.prototype.pop = function() {
    var key = this._supportArray.pop();
    var value = this._dataObject[key];
    delete this._dataObject[key];
    var obj = {key, value};
    return obj;
}

OrderedMap.prototype.shift = function() {
    var key = this._supportArray.shift();
    var value = this._dataObject[key];
    delete this._dataObject[key];
    var obj = {key, value};
    return obj;
}

OrderedMap.prototype.unshift = function(key,value) {
    this._supportArray.unshift(key);
    this._dataObject[key] = value;
}

OrderedMap.prototype.forEach = function(callback) {
    for(var i = 0; i < this._supportArray.lenght; i++) {
        callback(this._supportArray[i], this._dataObject[this._supportArray[i]]);
    }
}

OrderedMap.prototype.toString = function() {
    var result = '';
    this._supportArray.forEach(function(key) {
        result += ' {' + 'key = ' + key + ' value = ' + this._dataObject[key] + '} ';
    }.bind(this));
    return result;
}

OrderedMap.prototype.add = function(key, value) {
    this.push(key, value);
}

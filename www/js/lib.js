/*#region localStorage */

function checkLocalStorage() {
    return typeof (Storage) !== "undefined";
}

function clearLocalStorage() {
    localStorage.clear();
}

function getFromLocalStorage(_key, _defaultValue) {
    var value = jQuery.parseJSON(localStorage.getItem(_key));
    if (value == null) {
        return _defaultValue;
    }
    return value;
}

function setToLocalStorage(_key, _value) {
    localStorage.setItem(_key, angular.toJson(_value));
}

function removeFromLocalStorage(_key) {
    localStorage.removeItem(_key);
}

/*#endregion */

function js_yyyy_mm_dd_hh_mm_ss (now) {
  year = "" + now.getFullYear();
  month = "" + (now.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
  day = "" + now.getDate(); if (day.length == 1) { day = "0" + day; }
  hour = "" + now.getHours(); if (hour.length == 1) { hour = "0" + hour; }
  minute = "" + now.getMinutes(); if (minute.length == 1) { minute = "0" + minute; }
  second = "" + now.getSeconds(); if (second.length == 1) { second = "0" + second; }
  return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}
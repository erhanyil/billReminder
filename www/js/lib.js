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
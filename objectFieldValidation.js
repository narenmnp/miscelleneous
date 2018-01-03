const CLIENT = [{
    firstName : "XXXXXXXXXXXX",
    lastName : "XXXXXXXXXXX",
    mobile : "XXXXXXXXXX"
}, {
    firstName : "XXXXXXXXXX",
    lastName : "XXXXXXXXXXX",
    mobile : "XXXXXXXXXX",
    email : null
}]

validateArray(CLIENT);

function checkProperties(obj) {
    var state = true;
      for (var key in obj) {
        if ( obj[key] === null || obj[key] === "") {
            state = key;
            break;
        }
      }
      return state;
}

function validateArray(_CLIENT) {
    var isValid = true;
    for (var obj in _CLIENT) {
        var isError = checkProperties(_CLIENT[obj]);
        if(isError !== true) {
            var data = {
                index : obj,
                fieldName : isError,
                fieldValue : _CLIENT[obj][isError]
            }
            isValid = data;
            break;
        }
    }
    alert(JSON.stringify(isValid));
    return isValid;
}

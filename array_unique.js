var array_unique = function (array, property) {
    message('ontdubbelen van array');
    var tempArray = [];
    if (array !== undefined && array.length > 1 ) {
        if (property !== undefined && property instanceof String) {
            for (var i = 0; i < array.length; i++) {
                var existing = false;
                for (var d = 0; d < tempArray.length; d++) {
                    if (tempArray[d][property] === array[i][property])
                        existing = true;
                }
                if (!existing)
                    tempArray.push(array[i]);
            }
        } else {
            for (var i = 0; i < array.length; i++) {
                var existing = false;
                for (var d = 0; d < tempArray.length; d++) {
                    if (tempArray[d] === array[i])
                        existing = true;
                }
                if (!existing)
                    tempArray.push(array[i]);
            }
        }
    }
    return tempArray;
};
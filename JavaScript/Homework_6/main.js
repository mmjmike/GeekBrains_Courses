

function arrayToList(array) {
    var obj = {
        value: null,
        rest: null
    }
    for (i = array.length - 1; i >= 0 ; i--) {
        obj.value = array[i];
        if (i > 0) {
            obj = {
                value : null,
                rest : obj
            }
        }
        
    }
    return obj;
}

function listToArray(list) {
    var array = [];
    var obj = list
    while (true) {
        array.push(obj.value);
        obj = obj.rest;
        if (obj == null) {break;}
    }
    return array;
}


console.log(listToArray(arrayToList([1,2,3])));

function reverseArray(array) {
    var newArray = [];
    for (i = 0; i < array.length; i++) {
        newArray.push(array[array.length - i - 1]);
    }
    return newArray;
}

function reverseArrayInPlace(array) {
    for (i = 0; i < array.length / 2; i++) {
        var temp = array[i];
        array [i] = array [array.length - i - 1];
        array [array.length - i - 1] = temp;
        
    }
    return array;
}

console.log(reverseArray([1,2,3,4,5]));
console.log(reverseArray([1,2,4,5]));

console.log(reverseArrayInPlace([1,2,3,4,5]));
console.log(reverseArrayInPlace([1,2,4,5]));

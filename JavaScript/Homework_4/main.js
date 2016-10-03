// Minimal value

function min(a, b) {
    return (a < b) ? a : b;
}

console.log(min(20, 17));


//Count Char

function countChar(string, char) {
    var count = 0;
    for (i = 0; i < string.length; i++) {
        if (string.charAt(i) == char) {
            count++;
        }
    }
    return count;
}

var myString = "auqwfakdsl;nvai";
var myChar = "a";
console.log("symbol " + myChar + " is found " + countChar(myString, myChar) + " times in string: " + myString);

// Чёт-нечёт

function evenOdd(N) {
    if (N == 0) {
        console.log("Чётное");
    } else if (N == 1) {
        console.log("Нечётное");          
    } else if (N > 0){
        evenOdd(N - 2);
    } else {
        evenOdd(N + 2);
    }
}

evenOdd(-75)

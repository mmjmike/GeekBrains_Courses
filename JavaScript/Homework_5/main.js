

function colorToHash(r, g, b) {
    var hash = '#';
    hash += oneToHash(r);
    hash += oneToHash(g);
    hash += oneToHash(b);
    return hash;
}


function oneToHash(number) {
    var rem = number % 16;
    var div = (number - rem) / 16;
    return tenToSixteen(div) + tenToSixteen(rem);
}

function tenToSixteen (number) {
    if (number < 10) {
        return number.toString();
    }
    switch (number) {
        case 10: return 'A';
        case 11: return 'B';
        case 12: return 'C';
        case 13: return 'D';
        case 14: return 'E';
        case 15: return 'F';
    }
    
}

console.log(colorToHash(9, 255, 16));


function numToObject (number) {
    if (number > 999) {
        alert("число больше 999");
        return {};
    }
    var one = number % 10;
    var ten = ((number - one) / 10) % 10;
    var hundred = (number - one - 10 * ten) / 100;
    return {ones: one, tens: ten, hundreds: hundred};
}

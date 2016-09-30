//Выполнил Михаил Мышкин


// Дублирую задание с прошлого урока

console.log("Задание с прошлого урока")

for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");   
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


// задание с лесенкой

console.log("Задание с лесенкой")

var n = 7;
var string = '';
var symbol = '#'

for (i = 1; i <= n; i++) {
    string += symbol;
    console.log(string);
}

// задание с шахматной доской

console.log("Задание с шахматной доской")

var symbol_1 = ' ';
var symbol_2 = '#';
var board_size = 8;
var output_string;

for (i = 1; i <= board_size; i++) {
    output_string = '';
    for (j = 1; j <= board_size; j++) {
        if ((i + j) % 2 == 0) {
            output_string += symbol_1;
        } else {
            output_string += symbol_2;
        }
    }
    console.log(output_string);
}

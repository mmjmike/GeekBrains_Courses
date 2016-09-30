//Выполнил Михаил Мышкин


// Задание с прошлого урока с тернарным оператором

console.log("Задание с прошлого урока")

for (i = 1; i <= 100; i++) {
    var output = "";
    output += (i % 3 == 0) ? "Fizz" : "";
    output += (i % 5 == 0) ? "Buzz" : "";
    var final_output = (output == "") ? i : output;
    console.log(final_output);
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

for (i = 1; i <= board_size; i++) {
    var output_string = '';
    for (j = 1; j <= board_size; j++) {
        output_string += ((i + j) % 2 == 0) ? symbol_1 : symbol_2;
    }
    console.log(output_string);
}

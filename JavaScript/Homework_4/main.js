// Minimal value

function min(a, b) {
    return (a < b) ? a : b;
}

console.log(min(20, 17));

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

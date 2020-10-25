// Испольльзуя for или while или do while

// task 1 (Подсчитать сумму всех чисел в заданном пользователем диапазоне)
let startRange = +process.argv[2];
let endRange = +process.argv[3];
let sum = 0;

while(startRange <= endRange) {
    sum += startRange;
    startRange++;
}

console.log(sum);

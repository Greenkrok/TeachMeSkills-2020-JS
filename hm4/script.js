// TASK-1 (Запросить у пользователя число и определить, оно положительное, отрицательное или ноль)
// let a = +prompt('Введите число');

// if(isNaN(a)) {
//     alert('Это не число');
// }

// else if(a > 0) {
//     alert('Число положительное');
// }

// else if(a < 0) {
//     alert('Число отрицательное');
// }

// else {
//     alert('Число 0');
// }

// TASK-2 (Запросить у пользователя его возраст и проверить корректность введенных данных (0–120 лет))
// let userYear = +prompt("Введите свой возраст");

// switch(true) {
//     case (userYear <= 0 || userYear > 120 || isNaN(userYear)):
//         alert('Кто-то врот');
//         break;
//     default:
//         alert('Нормас');
//         break;
// }

// TASK-3 (Запросить у пользователя число и вывести его модуль (|7| = 7, |-7| = 7))
// let num = process.argv[2];
// if(isNaN(num)) {
//     console.log('Это не число');
// }

// else {
//     console.log(`|${num}| = `,Math.abs(num));
// }

// TASK-4 (Запросить у пользователя время (часы, минуты, секунды) и проверить корректность введенных данных)
let hours = process.argv[2];

if(hours < 0 || hours >24 || isNaN(hours)) {
    console.log('Столько часов на часах не бывает');
}

else {
    console.log(hours + ' часов');
}

let minutes = process.argv[3];

if(minutes < 0 || minutes >59 || isNaN(minutes)) {
    console.log('Столько минут на часах не бывает');
}

else {
    console.log(minutes + ' минут');
}

let seconds = process.argv[4];

if(seconds < 0 || seconds >59 || isNaN(seconds)) {
    console.log('Столько секунд на часах не бывает');
}

else {
    console.log(seconds + ' секунд');
}

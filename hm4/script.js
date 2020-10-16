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
let num = process.argv[2];
if(isNaN(num)) {
    console.log('Это не число');
}

else {
    console.log(`|${num}| = `,Math.abs(num));
}

// TASK-1
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

// TASK-2
let userYear = +prompt("Введите свой возраст");

switch(true) {
    case (userYear <= 0 || userYear > 120 || isNaN(userYear)):
        alert('Кто-то врот');
        break;
    default:
        alert('Нормас');
        break;
}

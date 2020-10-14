// TASK-1
let a = +prompt('Введите число');

if(isNaN(a)) {
    alert('Это не число');
}

else if(a > 0) {
    alert('Число положительное');
}

else if(a < 0) {
    alert('Число отрицательное');
}

else {
    alert('Число 0');
}

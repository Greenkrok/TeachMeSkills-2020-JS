// TASK-1
// let a = +prompt ('Введите число, которое нужно возвести во вторую степень');
// let b = a ** 2;
// alert(a + ' во второй степени = ' + b);

// TASK-2
// let a = +prompt('Введите первое число для нахождения среднего арифметического');
// let b = +prompt('Введите второе число для нахождения среднего арифметического');
// let c = (a + b) / 2;
// alert('Среднее арифметическое чисел ' + a + " и " + b + ' = ' + c);

// TASK-3
// let a = +prompt('Введите длину квадрата, чтобы узнать его площадь');
// let b = a * a;
// alert('Площадь квадрата со стороной ' + a + ' = ' + b);

// TASK-4
// let a = +prompt('Введите КМ, чтобы перевести их в МИЛИ');
// const b = 0.621371;
// let c = a * b;
// alert(a + 'км' + ' = ' + c + 'миль');

// TASK-5
// let a = +prompt('Введите первое число');
// let b = +prompt('Введите второе число');
// let c = a + b;
// let d = a - b;
// let e = a * b;
// let f = a / b;

// alert(a + ' + ' + b + ' = ' + c + '\n' +
//     a + ' - ' + b + ' = ' + d + '\n' + 
//     a + ' * ' + b + ' = ' + e + '\n' +
//     a + ' / ' + b + ' = ' + f);

// TASK-6
// a * x + b = 0

// let a = +process.argv[2];
// let b = +process.argv[3];
// let x = -b / a;
// console.log(x);

// TASK-7
// const MINUTES_IN_DAY = 24 * 60;
// let hours = +process.argv[2];
// let minutes = +process.argv[3];

// let minutesSum = hours * 60 + minutes;
// let minutesDiff = MINUTES_IN_DAY - minutesSum;

// if (hours>24 || hours < 0 || minutes > 60 || minutes < 0) {
//     console.log('неправильное время');
// }

// else {
//     console.log(`hours ${Math.floor(minutesDiff / 60)} min ${minutesDiff % 60}`);
// }

// TASK-8
let a = +process.argv[2];
let b = Math.floor(a / 10 % 10);
if (a<100 || a>999) {
    console.log('Нужно ввести трехзначное число')
}
else {
    console.log(b)
}

let year = +(prompt("Введите год"));

switch (year % 12) {
    case 0:
        alert ("Обезяна");
        break;
    case 1:
        alert ("Петух");
        break;
    case 2:
        alert ("Собака");
        break;
    case 3:
        alert ("Свинья");
        break;
    case 4:
        alert ("Крыса");
        break;
    case 5:
        alert ("Бык");
        break;
    case 6:
        alert ("Тигр");
        break;
    case 7:
        alert ("Кролик");
        break;
    case 8:
        alert ("Дракон");
        break;
    case 9:
        alert ("Змея");
        break;
    case 10:
        alert ("Лошадь");
        break;
    case 11:
        alert ("Коза");
        break;
    default:
        alert ("Недопустимый формат");
        break;
}

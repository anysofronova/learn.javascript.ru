// ----------------------Переменные----------------------
// let name = 'Джон';
// let admin = name;
// alert(admin);

// ----------------------Взаимодействие: alert, prompt, confirm----------------------
// let name = prompt('Введите ваше Имя', '');
// alert(`Привет, ${name}`);

// ----------------------Преобразование типов----------------------
// Number(undefined)    	NaN
// Number(null)	            0
// Number(true / false)	    1 / 0
// Number(string)	        Пробельные символы по краям обрезаются. Далее, если остаётся пустая строка, то получаем 0,
//                          иначе из непустой строки «считывается» число. При ошибке результат NaN.

// Boolean -    Значения, которые интуитивно «пустые», вроде 0, пустой строки, null, undefined и NaN, становятся false.
//              Все остальные значения становятся true.
// Boolean("0")  - true

// ----------------------Базовые операторы, математика----------------------
// + преобразует строку в число
// let apples = "2";
// let oranges = "3";
// alert( +apples + +oranges ); //5

// Оператор «запятая» предоставляет нам возможность вычислять несколько выражений, разделяя их запятой ,.
// Каждое выражение выполняется, но возвращается результат только последнего
// let a = (1 + 2, 3 + 4);
// alert( a ); // 7 (результат вычисления 3 + 4)

// "" + 1 + 0 // "10"
// "" - 1 + 0 // -1
// true + false // 1
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" // "9px"
// "$" + 4 + 5 // "$45"
// "4" - 2 // 2
// "4px" - 2 // NaN
// 7 / 0 // infinity
// "  -9  " + 5 //" -9 5"
// "  -9  " - 5 // -14
// null + 1 // 1
// undefined + 1 //NaN
// " \t \n" - 2 // -2 так как пробельные символы, такие как \t и \n, по краям строки игнорируются
//             // при преобразовании в число

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
//
// alert(+a + +b); // 12

// ----------------------Операторы сравнения----------------------
// alert( null > 0 );  // (1) false
// alert( null == 0 ); // (2) false
// alert( null >= 0 ); // (3) true
// Значения null и undefined равны == друг другу и не равны любому другому значению.

// 5 > 4 // true
// "ананас" > "яблоко" // false
// "2" > "12" // true
// undefined == null //true
// undefined === null // false
// null == "\n0\n" // false
// null === +"\n0\n" // false

// ----------------------Условное ветвление: if, '?'----------------------
// const age = 15;
// let accessAllowed = (age > 18) ? true : false;
// alert(accessAllowed);

// let name = prompt("Какое официальное название JavaScript?", '');
// if (name === 'ECMAScript') alert('Правильно!')
// else alert('Не знаете? “ECMAScript”!')
// let answer = (name === 'ECMAScript') ? alert('Правильно!') : alert('Не знаете? “ECMAScript”!')

// let value = prompt("Введите число:", '');
// if (value > 0) alert(1);
// else if (value < 0) alert(-1);
// else alert(0);

// let result;
// let a = 1, b = 2
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Много';
// }
// result = (a + b < 4) ? 'Мало' : 'Много';
// alert(result);

// let message;

// if (login == 'Сотрудник') {
//     message = 'Привет';
// } else if (login == 'Директор') {
//     message = 'Здравствуйте';
// } else if (login == '') {
//     message = 'Нет логина';
// } else {
//     message = '';
// }

// let login = '';
// message = (login === 'Сотрудник') ? 'Привет' :
//     (login === 'Директор') ? 'Здравствуйте' :
//         (login === '') ? 'Нет логина' : '';
// alert(message)

// ----------------------Логические операторы----------------------
// Двойное НЕ используют для преобразования значений к логическому типу:
// alert( !!"non-empty string" ); // true
// alert( !!null ); // false

// let age = 90;
// if (age >= 14 && age <= 90) alert(true)
// else alert(false)

// if (!(age >= 14 && age <= 90)) alert(true)
// else alert(false)

// if (age < 14 || age > 90) alert(true)
// else alert(false)

// if (-1 || 0) alert( 'first' ); //-1
// if (-1 && 0) alert( 'second' ); // 0
// if (null || -1 && 1) alert( 'third' ); // null || 1 // 1
//

// let login = prompt("Кто там?", '');
// if (login === '' || login == null) alert('Отменено')
// else if(login === 'Админ'){
//     let password = prompt('Пароль?', '');
//     if (password === '' || password == null){
//         alert('Отменено')
//     }
//     else if(password === 'Я Главный') alert('Здравствуйте!')
//     else alert('Неверный пароль')
// }
// else alert('Я вас не знаю')

//----------------------Оператор объединения с null '??'----------------------
// Запрещено использовать вместе с || или && без явно указанных круглых скобок.
// let user;
// alert(user ?? "Аноним"); // Аноним
// let name = "Иван";
// alert(name ?? "Аноним"); // Иван

//----------------------Циклы while и for----------------------
// завершение цикла по названию
// outer: for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         let input = prompt(`Значение на координатах (${i},${j})`, '');
//         // если пустая строка или Отмена, то выйти из обоих циклов
//         if (!input) break outer;
//     }
// }
// alert('Готово!');
// for (let i = 2; i <= 10; i++){
//     if (i % 2 === 0) alert(i);
// }

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
// }
// let i = 0;
// while (i < 3){
//     alert( `number ${i}!` );
//     i++;
// }
// let i;
// do {
//     i = prompt("Пожалуйста введите число больше 100", '');
// }while (i <= 100 && i);

// let n = 10;
//
// nextPrime:
//     for (let i = 2; i <= n; i++) { // Для всех i...
//         for (let j = 2; j < i; j++) { // проверить, делится ли число..
//             if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//         }
//         alert( i ); // простое число
//     }

// ----------------------Конструкция "switch"----------------------

// let a = 2 + 2;
// switch (a) {
//     case 4:
//         alert('Правильно!');
//         break;
//     case 3: // (*) группируем оба case
//     case 5:
//         alert('Неправильно!');
//         alert("Может вам посетить урок математики?");
//         break;
//     default:
//         alert('Результат выглядит странновато. Честно.');
// }
// let browser = prompt('','')
// switch (browser) {
//     case 'Edge':
//         alert( "You've got the Edge!" );
//         break;
//
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//         alert( 'Okay we support these browsers too' );
//         break;
//
//     default:
//         alert( 'We hope that this page looks ok!' );
// }

// if( browser === 'Edge')
//     alert( "You've got the Edge!" );
// else if(browser === 'Chrome'
//     || browser === 'Firefox'
//     || browser === 'Safari'
//     || browser === 'Opera')
//     alert( 'Okay we support these browsers too' );
// else
//     alert( 'We hope that this page looks ok!' );

// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//     alert('Вы ввели число 0');
// }
//
// if (number === 1) {
//     alert('Вы ввели число 1');
// }
//
// if (number === 2 || number === 3) {
//     alert('Вы ввели число 2, а может и 3');
// }

// switch (number){
//     case 0:
//         alert('Вы ввели число 0');
//         break;
//     case 1:
//         alert('Вы ввели число 1');
//         break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//         break;
// }

// ----------------------Функции----------------------
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Родители разрешили?');
//     }
// }

// function checkAge(age) {
//     return age > 18 ? true : confirm('Родители разрешили?');
// }
// function checkAge(age) {
//     return age > 18 || confirm('Родители разрешили?');
// }
//
// let age = prompt('Some', '');
// checkAge(age);

// function min(a,b){
//     if(a < b) return a
//     else return b
// }
// alert(min(2,5))
// alert(min(3,-1))
// alert(min(1,1))

// function pow(x, n){
//     let i = 0;
//     let mult = 1;
//     while (i < n){
//         mult *= x;
//         i++;
//     }
//     return mult;
// }
//
// let x = +prompt("Введите x", '');
// let n = +prompt("Введите n", '');
// if (n < 1) {
//     alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// } else alert(pow(x, n));

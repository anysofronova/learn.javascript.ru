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

// ----------------------Объекты----------------------
// let user = {     // объект
//     name: "John",  // под ключом "name" хранится значение "John"
//     age: 30        // под ключом "age" хранится значение 30
// };
// // получаем свойства объекта:
// alert( user.name ); // John
// alert( user.age ); // 30
// user.isAdmin = true;
// delete user.age;
// let key = prompt("Что вы хотите узнать о пользователе?", "name");
// // доступ к свойству через переменную
// alert( user[key] ); // John (если ввели "name")
//
// let user1 = { name: "John", age: 30 };
//
// alert( "age" in user1 ); // true, user.age существует
// alert( "blabla" in user1 ); // false, user.blabla не существует
//
// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
// };
//
// for (let key in user) {
//     // ключи
//     alert( key );  // name, age, isAdmin
//     // значения ключей
//     alert( user[key] ); // John, 30, true
// }
//Задача 1
// Напишите код, выполнив задание из каждого пункта отдельной строкой:
//
//     Создайте пустой объект user.
//     Добавьте свойство name со значением John.
//     Добавьте свойство surname со значением Smith.
//     Измените значение свойства name на Pete.
//     Удалите свойство name из объекта.

// let user = {
//     name: "John",
//     surname: "Smith",
// }
// user.name = "Pete";
// delete user.name;
// for (let key in user){
//     alert(key + ': ' +  user[key])
// }

// Задача 2
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// function isEmpty(obj){
//     for (let key in obj){
//         return false
//     }
//     return true
// }
// let user = {}
// alert(isEmpty(user));
// user['some'] = 'some';
// alert(isEmpty(user));

// Задача 3
// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

// const user = {
//     name: "John"
// };
//
// // это будет работать?
// user.name = "Pete";
// можно, нельзя присвоить user другое значение

// Задача 4
// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
//
// // Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// // Если объект salaries пуст, то результат должен быть 0.
// function sumOfSalaries(obj){
//     let sum = 0;
//     for (let key in obj){
//         sum += obj[key];
//     }
//     return sum;
// }
// alert(sumOfSalaries(salaries));

// Задача 5
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// function multiplyNumeric(obj){
//     for (let key in obj){
//         if (typeof obj[key] == "number"){
//             obj[key] *= 2;
//         }
//     }
// }
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
//
// for (let key in menu){
//     alert(key + ': ' +  menu[key])
// }
// multiplyNumeric(menu);
//
// for (let key in menu){
//     alert(key + ': ' +  menu[key])
// }

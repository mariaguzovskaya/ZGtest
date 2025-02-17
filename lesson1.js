//*Тема 1: Вывод в консоль
// console.log("Привет2")
// alert("hello")
//*Тема 2: Переменные 
//ES6=ES2015
//Переменная-именованное хранилище данных
//let, const - переменные 

/*let user="Masha"
const user2="Artem"
console.log(user,"описание к юзеру")
console.log(user2,"описание к юзеру2")
user="Shestakova" */

//const нельзя изменять никогда!
/*const user3="Andrey"
console.log("------------------------")
console.log(user,"описание к юзеру")
console.log(user3,"описание к юзеру3") */
//*Тема 3: Типы данных
//В JS есть 8 основных типов данных, переменная может содержать любые данные 
//1-ый тип: number (число)
let n=5
let n2=5.17
//infinity
console.log(5/0, "бесконечность")
//Nan - not a number
console.log("Masha"/7, "фигня")
//2-ый тип: string (строка)
let str="Всем привет, меня зовут Маша"
let str2="Всем привет, меня зовут Артем"
console.log(str, "выводим строку")
console.log(str2, "выводим строку2")
//3-ый тип: boolean (логический тип, значения: true/false, чаще всего используется для условий)
let isRegistration=true
let isFemale=false
console.log(isRegistration)
console.log(isFemale)
//4-ый тип: null (отдельный тип, "пустая переменная", нулевой указатель)
let age=null
console.log(age)
//5-ый тип: undefined (отсутствует значение=у переменной нет значения)
let age2
console.log(age2)
//6-ой тип: BigInt (большое число, большой диапазон, больше чем ((2 в 53 степени)-1) или меньше -(2 в 53 степени)-1))
//7-ой тип: symbol (для уникальных идентификаторов в объектах)
let symb=Symbol("Id")
console.log(symb)
let bigInt =905805640558242523569852465224682n
console.log(bigInt, "второй тип числовых данных")

//Все типы выше с 1 по 7 относятся к примитивам, примитивный тип)
//8-ой тип: object (он хранит коллекции данных и сложные структуры)
let exampleObj={
    keyOne:5,
    keyTwo:true,
    keyThree:"Hello"
}
console.log(exampleObj)
console.log(exampleObj.keyTwo)

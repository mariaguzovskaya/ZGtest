// Урок 2: Преобразование типов
// Тема 1: Строковое преобразование 
let n=5
let bl=true 
// n="test"
n=String(n)
console.log(typeof n, n)
console.log(typeof bl)
let test=5+n
let test1=typeof test
//typeof имя переменной возвращает "number", "string", "boolean" и тд.
console.log(test1, test)
bl=String(bl)
console.log(typeof bl)
let bg=1010929982837465656n
// bg=String(bg)
console.log(typeof bg, bg, "я вывожу bg и его значение")

// Тема 2: Численное образование 
let st="Объявляю строку"
let st2="1200"
let st3="1200Привет"
// - Варианты численного преобразования 
// let stToNumber=Number(st)
// let stToNumber2=Number(st2)
// let stToNumber3=Number(st3)
let stToNumber=+st
let stToNumber2=+st2
let stToNumber3=+st3
console.log(stToNumber, stToNumber2, stToNumber3)
// Преобразовать к числу 4 типа (srting, boolean, null, undefined) и вывести их на экран
// Преобразование boolean в число: true- 1, false- 0
let stTest="Задание1"
let blTest=true
let nullTest=null
let unfTest=undefined

let stTestToNumber=Number(stTest)
let blTestToNumber=Number(blTest)
let nullTestToNumber=Number(nullTest)
let unfTestToNumber=Number(unfTest)
console.log(stTestToNumber, blTestToNumber, nullTestToNumber, unfTestToNumber)

// Тема 3: Логическое образование 
let stTest1="Задание1"
let nullTest1=null
let unfTest1=undefined
let a=1
let b=0
let stTest2=""

let stTest1ToBoolean=Boolean(stTest1)
let nullTest1ToBoolean=Boolean(nullTest1)
let unfTest1ToBoolean=Boolean(unfTest1)
let aToBoolean=Boolean(a)
let bToBoolean=Boolean(b)
let stTest2ToBoolean=Boolean(stTest2)
console.log(stTest1ToBoolean, nullTest1ToBoolean, unfTest1ToBoolean, aToBoolean, bToBoolean, stTest2ToBoolean)
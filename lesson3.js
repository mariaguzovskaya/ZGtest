// Тема 1: Операторы сравнения 
// 1-ое > (больше)
// 2-ое < (меньше)
// 3-е >= (больше или равно)
// 4-е <= (меньше или равно)
// 5-е == (равно)
// 6-е != (неравно)

let op1=12>30
let op2=12==12
let op3=12!=12
let op4=30<=40
console.log(op1, op2, op3, op4)

let str1="Привет"
let str2="Пока"
let op5=str1==str2
let op6=str1!=str2
console.log(op5, op6)

let test1="7">15
console.log(test1)

let test2="25A">15
console.log(test2)

let test3=1>=true
console.log(test3)

let test4=0==false
console.log(test4)

// Есть нестрогое сравнение (с приведением типов, ==) 
// Строгое сравнение (без приведения типов, ===)

let test5="8" === 8
let test6= 8 === 8
console.log(test5, "строгое сравнение")
console.log(test6, "строгое сравнение 2")

let test7= "15" !== 15
console.log(test7, "нестрогое сравнение")

// 5 > 4
console.log(5>4, "Я думаю, true")
// "ананас" == "я"
console.log("ананас" == "я", "Я думаю, false")
// "2" > "12"
console.log("2" > "12", "Я думаю, false!")
// "4" == 4
console.log("4" == 4, "Я думаю, true")
// 1 === true
console.log(1 === true, "Я думаю, false")
// undefined == null
console.log(undefined == null, "Я думаю, true")
// undefined === null
console.log(undefined === null, "Я думаю, false")
// null == "\n0\n"
console.log(null == "\n0\n", "Я думаю, false")
// !!!Через == null всегда равен только undefined

// Тема 2: Условное ветвление If, else 
// Когда нужно выполнить различные действия, в зависимости от каких-либо условий, приходит инструкция if, else
let testIf1=5>4
if (testIf1) {
    console.log("Мы зашли в if")
}


let testElse=4>5
if (testElse) {
    console.log("Мы зашли в if2")
} else {
    console.log("Мы зашли в else")
}


let name=prompt("Как тебя зовут?")
debugger
let age=prompt(`Сколько тебе лет, ${name}?`) //Строка будет формироваться динамически от значения выше, интерполяция (динамическое формирование строк)
debugger
if (age>=18) {
    console.log(`${name}, тебе продали сигареты`)
} else {
    console.log(`${name}, мы не продадим тебе сигареты, тебе нет 18`)
}

if (age>=18 || name==="Артем") {
    console.log(`${name}, тебе продали сигареты`)
} else {
    console.log(`${name}, мы не продадим тебе сигареты, тебе нет 18`)
}
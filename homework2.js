// Задание 1
// let number= prompt("Введите число")
// debugger
// if (number % 2 === 0) {
//  console.log("Четное число")
// } else {
//  console.log("Нечетное число")
// }

// Задание 2
let number1= Number(prompt("Введите первое число"))
let number2= Number(prompt("Введите второе число"))
let operation= prompt("Введите операцию")
console.log(typeof number1, typeof number2)
debugger
if (isNaN(number1) || isNaN(number2)) {
    console.log("Ошибка: введите корректные числа!")
} else {
    if (operation === '+') {
        let result = number1 + number2
        console.log(`Результат сложения: ${result}`)
    } else if (operation === '-') {
        let result = number1 - number2
        console.log(`Результат вычитания: ${result}`)
    } else {
        console.log("Ошибка: введена неверная операция. Доступны только '+' и '-'.")
    }
}


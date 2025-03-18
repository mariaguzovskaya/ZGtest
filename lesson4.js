// Урок 4: Конструкция SWITCH

// const a = 2 + 2;

// switch (a) {
//   case 3:
//     alert( 'Маловато' );
//     break;
//   case 4:
//     alert( 'В точку!' );
//     break;
//   case 5:
//     alert( 'Перебор' );
//     break;
//   default:
//     alert( "Нет таких значений" );
// }

// alert - выводит информацию в окошко на экране
// break - выкидывает из switch после первого совпадения 
// default - в случае, если нет нужного ответа

// let number1= Number(prompt("Введите первое число"))
// let number2= Number(prompt("Введите второе число"))
// let operation= prompt("Введите операцию")

// switch (operation) {
//     case "+":
//         console.log(number1+number2, 'Результат сложения')
//         break;

//     case "-":
//         console.log(number1-number2,'Результат вычитания')
//         break;

//     case "*":
//         console.log(number1*number2,'Результат умножения')
//         break;

//     case "/":
//         console.log(number1/number2,'Результат деления')
//         break;

//     default:
//         console.log('Фигня какая-то')
//         break;
// }
// debugger

// let browser = navigator.userAgent
// console.log(navigator)
// switch (browser) {
//     case "browserChrome":
//     case "Edge":
//     case "FireFox":
//         console.log("Да, мы поддерживаем этот браузер")
//         break;

//     case "Opera":
//         console.log("Нет, мы не поддерживаем этот браузер")
//         break;
//     default:
//         console.log("Такого браузера не существует")
//         break;
// }
// debugger

// switch (true) {
//     case (navigator.userAgent.indexOf("Opera") !== -1 || navigator.userAgent.indexOf('OPR') !== -1):
//         alert('Opera');
//         break;
//     case (navigator.userAgent.indexOf("Chrome") !== -1):
//         alert('Chrome');
//         break;
//     case (navigator.userAgent.indexOf("Safari") !== -1):
//         alert('Safari');
//         break;
//     case (navigator.userAgent.indexOf("Firefox") !== -1):
//         alert('Firefox');
//         break;
//     case (navigator.userAgent.indexOf("MSIE") !== -1 || !!document.documentMode === true):
//         alert('IE');
//         break;
//     default:
//         alert('unknown');
//         break;
// }

// Тема 2: Логические операторы

let numb = 1013
if ((numb>8 && numb<100) || numb %2 !== 0) {

    console.log("Да, он входит в промежуток между 8 и 100")
    
} else {
    console.log("Да, он не входит в промежуток между 8 и 100")
}

// || - должно отработать хотя бы одно условие true
// && - должны отработать ВСЕ уловия true
// && и || можно комбинировать в одном условии, заключая в скобки 

if (numb!==100) {
    console.log("Не равно 100")
}
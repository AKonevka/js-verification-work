console.log("-----------1-----------");

let inch1 = 17;
let inch2 = 19;
let inch3 = 25;
console.log(`${inch1} дюймов = ${inch1 * 2.54} см`);
console.log(`${inch2} дюймов = ${inch2 * 2.54} см`);
console.log(`${inch3} дюймов = ${inch3 * 2.54} см`);

console.log("-----------2-----------");

let a = 123456789;
console.log(`Остаток от деления ${a} на 3 = ${a % 3}`);

//console.log("-----------3-----------");

let sum2 = 500 + 600 + 700;

//console.log("-----------4-----------");

let count = 3;

console.log("-----------5-----------");

const average = sum2 / count;
console.log(`Среднее арефметическое: ${average}`);

console.log("-----------6-----------");

let signal = "red"; // yellow or green
if (signal === "red") {
    console.log("Надо стоять")
} else if (signal === "yellow") {
    console.log("Надо приготовиться")
} else {
    console.log("Можно идти")
}

console.log("-----------7-----------");

let number1 = prompt("Введите первое число")
let number2 = prompt("Введите второе число")

if (number1 > number2) {
    console.log(`число ${number1} большее`);
} else if (number2 > number1) {
    console.log(`число ${number2} большее`);
} else {
    console.log("Числа равны");
};

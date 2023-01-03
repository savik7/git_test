
function myFunction() {
  alert("Вы нажали кнопку");
}
/*
console.log("Вывод чего-либо в консоль");

alert("Вывод в модальное окно");

console.log(5*5);

let userName = "Alex";
let userSurname = "Smith";

let result = prompt("Введете что нибудь?", 20);
console.log(result);
alert(`Вы ввели ${result}`);

let agreement = confirm("Принять правила соглашения?");
console.log(agreement);

let password = prompt("Введите пароль ");
if (password === "1234") {
  alert("Вход выполнен");
} else {
  alert("Вход запрещен!");
}

for (let i = 0; i < 5; i++) {
  console.log(`i = ${i}`)
}

let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}*/

document.body.style.background = 'red'; // сделать фон красным
setTimeout(() => document.body.style.background = '', 3000); // вернуть назад

//let elem = document.getElementById('btn');
let elem = document.querySelector('#btn');
elem.style.background = 'red';

document.querySelector('.btn').addEventListener("click", () =>
  myFunction()
);

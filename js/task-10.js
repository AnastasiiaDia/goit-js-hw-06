const input = document.querySelector("input");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
const div = document.createElement("div");

// create.addEventListener("click", onClick);
// function onClick(event) {
//   boxes.append(input.value);
// }
// destroy.addEventListener("click", onClickDestroy);
// function onClickDestroy(event) {
//   boxes.remove();
// }

function createBoxes(amount) {
  boxes.append(div);
}

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Напиши скрипт створення і очищення колекції елементів.
//  Користувач вводить кількість елементів в input і
//   натискає кнопку Створити, після чого рендериться колекція.
//    Натисненням на кнопку Очистити,
// колекція елементів очищається.

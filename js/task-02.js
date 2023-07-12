const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

// console.dir(list);
// const li = document.createElement(`li`);
// console.log(li);
const newIngridients = ingredients.map((ingredient) => {
  const li = document.createElement(`li`);
  li.textContent = ingredient;
  li.classList.add("item");

  return li;
});
// console.dir(ingredients);
list.append(...newIngridients);

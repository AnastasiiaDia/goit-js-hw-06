const categories = document.querySelector("#categories");
console.log(`Number of categories : ${categories.children.length} `);
const liArrey = [...categories.children];
console.log(liArrey);
liArrey.forEach((li) => {
  console.log(`Category: ${li.querySelector(`h2`).textContent}`);
  console.log(`Elements: ${li.querySelectorAll(`li`).length}`);
});

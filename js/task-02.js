const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
const listElement = [];
for (let i = 0; i < ingredients.length; i++) {
  listElement[i] = document.createElement("li");
  listElement[i].classList.add("item");
  listElement[i].textContent = ingredients[i];
}

list.append(...listElement);

const categoriesList = document.querySelectorAll("#categories .item");
const categoriesNames = document.querySelectorAll("#categories .item > h2");
const itemsList = document.querySelectorAll("#categories .item ul");

const categoriesItemList = categoriesList.length;

console.log(`Number of categories: ${categoriesItemList}`);

categoriesNames.forEach((name, idx) => {
  const elementItemsList = itemsList[idx].getElementsByTagName("li").length;
  console.log(`Category: ${name.textContent}`);
  console.log(`Elements: ${elementItemsList}`);
});

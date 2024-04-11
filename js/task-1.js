const categoriesList = document.querySelector("#categories");
const categoriesItems = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesItems.length);

categoriesItems.forEach((categoryItem) => {
  const categoryTitleElement = categoryItem.querySelector("h2");
  const categoryItemsList = categoryItem.querySelectorAll("ul > li");

  const categoryTitle = categoryTitleElement.textContent;
  console.log("Category:", categoryTitle);
  console.log("Elements:", categoryItemsList.length);
});

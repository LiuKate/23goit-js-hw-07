// В HTML есть пустой список ul#ingredients.

// < ul id = "ingredients" ></ul >
//   В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM - узлов используй document.createElement().

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsRef = document.querySelector("#ingredients");

console.log(ingredientsRef);

const ingredientRefItem = ingredients.map((item) => {
  const ingredientRef = document.createElement("li");
  ingredientRef.textContent = item;

  return ingredientRef;
});

ingredientsRef.append(...ingredientRefItem);

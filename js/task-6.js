// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// < input
// type = "text"
// id = "validation-input"
// data-length="6"
// placeholder = "Введи 6 символов"
//     />
//     Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid.

//     #validation - input {
//     border: 3px solid #bdbdbd;
// }

// #validation - input.valid {
//     border - color: #4caf50;
// }

// #validation - input.invalid {
//     border - color: #f44336;
// }

const validationInputRef = document.querySelector("#validation-input");

function onInputCheckBlur(event) {
  event.currentTarget.value.length ===
  Number(event.currentTarget.dataset.length)
    ? validationInputRef.classList.add("valid") ||
      validationInputRef.classList.remove("invalid")
    : validationInputRef.classList.add("invalid") ||
      validationInputRef.classList.remove("valid");
}

validationInputRef.addEventListener("blur", onInputCheckBlur);

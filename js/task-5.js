// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input), подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// < input type = "text" placeholder = "Ваше имя?" id = "name-input" />
//     <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

// console.log(inputRef);
// console.log(outputRef);

inputRef.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value === "") {
    outputRef.textContent = "незнакомец";
  } else {
    outputRef.textContent = event.currentTarget.value;
  }
}

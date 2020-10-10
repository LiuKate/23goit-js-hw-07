// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании ползунка будет меняться размер текста.

// < input id = "font-size-control" type = "range" />
// <br />
// <span id="text">Абракадабра!</span>

const fontSizeControlRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

fontSizeControlRef.addEventListener("input", onFontSizeControlChanger);

function onFontSizeControlChanger(event) {
  event.currentTarget.min = 1;
  //   event.currentTarget.max = 100;
  //   event.currentTarget.step = 1;

  textRef.style.fontSize = `${event.currentTarget.value}px`;
}

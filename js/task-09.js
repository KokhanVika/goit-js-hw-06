function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColorEl = document.querySelector('.change-color');
const textColorEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

const onbtnChangeColorClick = () => {
  bodyEl.style.background = getRandomHexColor();
  textColorEl.textContent = getRandomHexColor();
}

btnChangeColorEl.addEventListener("click", onbtnChangeColorClick);

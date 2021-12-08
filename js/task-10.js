function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('[type="number"]'),
  renderBtn:document.querySelector('[data-create]'),
  clearBtn: document.querySelector('[data-destroy]'),
  boxesContainer:document.getElementById ('boxes'),
};

refs.renderBtn.addEventListener ('click', onRenderBtn);
refs.clearBtn.addEventListener('click', destroyBoxes);
refs.input.addEventListener('input', onInputFill);

function onInputFill (event) {
return refs.input.value;
}


function onRenderBtn(event) {
  const amount = refs.input.value;
  createBoxes(amount) ;
};

function createBoxes (amount) {
  let divSize = 30;
  for (let i = 1; i <= amount; i += 1){
        let divColor = getRandomHexColor();
        divSize += 10;
        const boxEl = `<div class = "box" style="background-color: ${divColor}; width: ${divSize}px; margin: 10px; height:${divSize}px;"></div>`
        refs.boxesContainer.insertAdjacentHTML('beforeend', boxEl);
    }
};

function destroyBoxes() {
    refs.boxesContainer.innerHTML = '';
};
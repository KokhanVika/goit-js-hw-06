const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
    console.log("Down:",counterValue)
 };
function onIncrementBtnClick() {
    counterValue += 1;
    valueEl.textContent = counterValue;
    console.log("Up:",counterValue)
};
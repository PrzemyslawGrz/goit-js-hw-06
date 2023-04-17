const counterValueElement = document.querySelector("#counterValue");
let counterValue = 0;

const displayCounter = document.querySelector("#value");

const buttonPlus = document.querySelector('button[data-action="increment"]');

buttonPlus.addEventListener("click", () => {
  counterValue++;
  displayCounter.textContent = counterValue;
});

const buttonMinus = document.querySelector('button[data-action="decrement"]');

buttonMinus.addEventListener("click", () => {
  counterValue--;
  displayCounter.textContent = counterValue;
});

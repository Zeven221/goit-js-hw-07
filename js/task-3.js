const inputElem = document.querySelector('#name-input');
const labelElem = document.querySelector('#name-output');
inputElem.addEventListener('input', event => {
  if (event.currentTarget.value.trim().length !== 0) {
    labelElem.textContent = event.currentTarget.value;
  } else {
    labelElem.textContent = 'Anonymous';
  }
});

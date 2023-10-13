import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector('.form');

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  let delayInput = Number(form.elements.delay.value);
  const stepInput = Number(form.elements.step.value);
  const amountInput = Number(form.elements.amount.value);

  for (let i = 0; i < amountInput; i++){
    createPromise(i + 1, delayInput);
    delayInput += stepInput;
  }
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({position: position, delay: delay});
      } else {
        // Reject
        reject({position: position, delay: delay});
      }
    }, delay);
  }).then((obj) => Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`))
  .catch((obj) => Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`))
}
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
// function createPromise(position, delay) {
  
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     if (shouldResolve) {
//       // Fulfill
//       resolve(console.log(`${position} promise is resolve`));
//     } else {
//       // Reject
//       reject(console.log(`${position} promise is reject`));
//     }
//     }, delay);
//   })
//   return promise;
// }
// 
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
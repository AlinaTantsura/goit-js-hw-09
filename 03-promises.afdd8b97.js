const e=document.querySelector(".form");e.addEventListener("submit",(function(t){t.preventDefault();let n=Number(e.elements.delay.value);const u=Number(e.elements.step.value),l=Number(e.elements.amount.value);for(let e=0;e<l;e++)createPromise(e+1,n),n+=u}));
//# sourceMappingURL=03-promises.afdd8b97.js.map

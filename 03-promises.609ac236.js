!function(){var e=document.querySelector(".form");e.addEventListener("submit",(function(t){t.preventDefault();for(var r=Number(e.elements.delay.value),u=Number(e.elements.step.value),n=Number(e.elements.amount.value),m=0;m<n;m++)createPromise(m+1,r),r+=u}))}();
//# sourceMappingURL=03-promises.609ac236.js.map

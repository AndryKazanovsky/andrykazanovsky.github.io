"use strict";window.onload=function(){const t=document.querySelector(".values"),e=document.querySelector(".calculator-button"),n=document.querySelector(".clear-button"),o=document.querySelector(".calculator-input");e.addEventListener("click",(function(){const e=o.value.toString();let n=[],c=[],u=-1;for(;-1!==(u=e.indexOf(1,u+1));)n.push(u);for(let t=1;t<n.length;++t)c.push(n[t]-n[t-1]);return t.textContent=`${c.toString()?Math.max(...c)-1:"0"}`})),n.addEventListener("click",(function(){o.value="",t.textContent=0}))};
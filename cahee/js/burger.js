"use strict";!function(){function e(){n.classList.toggle("open"),t.classList.toggle("open");for(var e=0;e<o.length;e++)o[e].classList.toggle("hidden")}var t=document.getElementById("burger-button"),n=document.querySelector(".burger"),o=document.getElementsByTagName("section");t.addEventListener("click",function(t){t.preventDefault(),e()});for(var r=document.querySelector(".burger__menu"),c=r.getElementsByTagName("a"),l=0;l<c.length;l++)c[l].onclick=function(t){t.preventDefault(),e(),window.location=t.target.href}}();
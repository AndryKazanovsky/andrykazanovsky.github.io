var langs=document.querySelectorAll("[data-lang] a"),ul=document.getElementsByClassName("language-select")[0],li=ul.getElementsByTagName("li");ul.onclick=function(){ul.classList.toggle("open")};for(var i=0;i<langs.length;i++)langs[i].onclick=function(e){e.preventDefault(),e.stopImmediatePropagation();for(var t=0;t<li.length;t++)li[t].classList.remove("active");e.target.parentNode.classList.toggle("active"),ul.classList.toggle("open");var l=new XMLHttpRequest;return l.open("POST",this.getAttribute("href"),!0),l.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),l.send({}),!1};
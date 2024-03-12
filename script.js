const bars = document.querySelector(".fa-bars");
const sidebar= document.querySelector(".sidebar");
const mark = document.querySelector(".fa-xmark");

bars.addEventListener("click",function(){ 
    sidebar.classList.toggle("show-sidebar") 
})

mark.addEventListener("click", function(){  
    sidebar.classList.remove("show-sidebar")
})
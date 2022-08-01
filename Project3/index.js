const MenuItem = document.querySelector(".menuitem");
const pages = document.querySelector(".otherPage");

window.addEventListener('scroll',()=>{
  if(window.scrollY > pages.offsetTop - MenuItem.offsetHeight){
    MenuItem.classList.add("active");
  }else{
    MenuItem.classList.remove("active");
  }
})
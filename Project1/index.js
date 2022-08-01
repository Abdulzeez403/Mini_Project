let btn=document.querySelector(".btn");
btn.addEventListener( "mouseover", (event)=>{
  const y = event.pageY - btn.offsetTop;
  const x = event.pageX - btn.offsetLeft;

btn.style.setProperty("--xpos", x +'px');
btn.style.setProperty("--ypos", y +'px');
})


var lastScrollTop;
navbar = document.getElementById("BarraNav");
document.body.addEventListener('scroll',function(){
var scrollTop = document.body.pageYOffset || document.documentElement.scrollTop;
if(scrollTop > lastScrollTop){
navbar.style.top='-80px';
}
else{
navbar.style.top='0';
}
lastScrollTop = scrollTop;
});







function TrocaSkill() {
  document.getElementById("corpo").style.display="block";
  document.getElementById("corpo2").style.display="none";
  
}
  
  function TrocaSkill2() {
    document.getElementById("corpo").style.display="none";
  document.getElementById("corpo2").style.display="block";


    }

  function changeDivContent(btn) {
      content.innerHTML = btn.value
    }



    
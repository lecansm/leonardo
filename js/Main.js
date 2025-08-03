window.addEventListener('load', AOS.refresh)
AOS.init();


if (navigator.userAgent.includes("Instagram")) {
  document.getElementById("TituloNav").style.fontSize = "16px";
  document.getElementById("imgLogo").style.width = "40px";
  document.getElementById("imgLogo").style.height = "40px";
  document.getElementById("txtApre").style.fontSize = "20px";
  document.getElementById("cardHabilidades").style.height = "280px !important";
  document.getElementById("cardHabilidades2").style.height = "280px !important";
}

 document.addEventListener('DOMContentLoaded', function() {
    const sonic = document.getElementById('sonic');
    const ring = document.getElementById('ring');
    const ring2 = document.getElementById('ring2');
    const ring3 = document.getElementById('ring3');
    const html = document.getElementById('html');
    const css = document.getElementById('css');
    const js = document.getElementById('js');
    const brilho = document.getElementById('brilho');
    const brilho2 = document.getElementById('brilho2');
    const brilho3 = document.getElementById('brilho3');
    
    ring.addEventListener('click', function() {
      sonic.classList.add('sonic-run');
      sonic.src = 'img/sonic4.gif';

      html.classList.add('girar-trocar');
      setTimeout(function() {
        html.src = 'img/linguagens/programing.png'; 
        html.classList.add('invertida');
      }, 500);

      html.addEventListener('animationend', function trocarImg() {
        html.classList.remove('girar-trocar');
        html.removeEventListener('animationend', trocarImg);
        ring.style.display = 'none';
        brilho.style.display = 'block';
        setTimeout(function() {
        brilho.style.display = 'none';
      }, 300);
      });
    });
    sonic.addEventListener('animationend', function() {
      sonic.src = 'img/sonic3.gif';
      ring
    });
    
    ring2.addEventListener('click', function() {
      sonic.classList.add('sonic-run2');
      sonic.src = 'img/sonic4.gif';

      css.classList.add('girar-trocar');
      setTimeout(function() {
      css.src = 'img/linguagens/react.png'; 
      }, 500);

      css.addEventListener('animationend', function trocarImg() {
        css.classList.remove('girar-trocar');
        css.removeEventListener('animationend', trocarImg);
        css.classList.add('invertida'); 
        ring2.style.display = 'none';
        brilho2.style.display = 'block';
        setTimeout(function() {
        brilho2.style.display = 'none';
      }, 300);
        });
    });

    ring3.addEventListener('click', function() {
      sonic.classList.add('sonic-run3');
      sonic.src = 'img/sonic4.gif';

      js.classList.add('girar-trocar');
      setTimeout(function() {
      js.src = 'img/linguagens/brands.png'; 
      }, 500);

      js.addEventListener('animationend', function trocarImg() {
        js.classList.remove('girar-trocar');
        js.removeEventListener('animationend', trocarImg);
        js.classList.add('invertida');
        ring3.style.display = 'none'; 
        brilho3.style.display = 'block';
        setTimeout(function() {
        brilho3.style.display = 'none';
      }, 300);
        });
    });
  
});



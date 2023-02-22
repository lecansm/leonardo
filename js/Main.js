window.addEventListener('load', AOS.refresh)
AOS.init();

function TrocaSkill() {
  document.getElementById("corpo").style.display = "block";
  document.getElementById("corpo2").style.display = "none";
  document.getElementById("botaosoft").style.backgroundImage = "linear-gradient(to right, #212121, #1d1d1d, #181818, #141414, #0f0e0e)";
  document.getElementById("botaohard").style.backgroundImage = "linear-gradient(to right, #000000, #2a0d13, #4d0b17, #6f0712, #8e0e00)";
  document.getElementById("botaohard").style.border = "2px solid #000";
}

function TrocaSkill2() {
  document.getElementById("corpo").style.display = "none";
  document.getElementById("corpo2").style.display = "block";
  document.getElementById("botaosoft").style.backgroundImage = "linear-gradient(to right, #000428, #031a40, #062a5a, #073b75, #004e92)";
  document.getElementById("botaohard").style.backgroundImage = "linear-gradient(to right, #212121, #1d1d1d, #181818, #141414, #0f0e0e)";
  document.getElementById("botaosoft").style.border = "2px solid #000";
}

function changeDivContent(btn) {
  content.innerHTML = btn.value
}

/*
var eixoAnterior = window.pageYOffset;
window.onscroll = function() {
  var atualEixo = window.pageYOffset;
  if (eixoAnterior > atualEixo) {
    document.getElementById("BarraNav").style.top = "0";
  } else {
    document.getElementById("BarraNav").style.top = "-100px";
  }
  eixoAnterior = atualEixo;
}*/
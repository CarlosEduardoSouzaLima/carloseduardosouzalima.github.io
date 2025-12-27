document.addEventListener("DOMContentLoaded", () => {
  // === MENU MOBILE ===
  const menuToggle = document.getElementById("menuToggle");
  const menuNav = document.getElementById("menuNav");

  if (menuToggle && menuNav) {
    menuToggle.addEventListener("click", () => {
      menuNav.classList.toggle("active");
    });
  }

  // === FUNÇÃO PARA CALCULAR TEMPO ===
  function calcularTempo(dataInicial) {
    const agora = new Date();

    let anos = agora.getFullYear() - dataInicial.getFullYear();
    let meses = agora.getMonth() - dataInicial.getMonth();
    let dias = agora.getDate() - dataInicial.getDate();

    if (dias < 0) {
      meses--;
      const mesAnterior = new Date(
        agora.getFullYear(),
        agora.getMonth(),
        0
      ).getDate();
      dias += mesAnterior;
    }

    if (meses < 0) {
      anos--;
      meses += 12;
    }

    return { anos, meses, dias };
  }

  // === CONTADORES ===
  // Casamento
  const dataCasamento = new Date(2024, 4, 11); // Maio = 4
  const contadorCasados = document.getElementById("contador-casados");
  if (contadorCasados) {
    const t = calcularTempo(dataCasamento);
    contadorCasados.innerText = `Estamos juntos há ${t.anos} anos, ${t.meses} meses e ${t.dias} dias ❤️`;
  }

  // Doguinho
  const dataDog = new Date(2025, 1, 2); // Fevereiro = 1
  const contadorDog = document.getElementById("contador-dog");
  if (contadorDog) {
    const t = calcularTempo(dataDog);
    contadorDog.innerText = `Nosso doguinho está conosco há ${t.anos} anos, ${t.meses} meses e ${t.dias} dias 🐾`;
  }

  // === LIGHTBOX PARA TODAS AS IMAGENS ===
  const todasImagens = document.querySelectorAll(
    ".galeria img, .galeria-dog img, .galeria-completa img"
  );
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (lightbox && lightboxImg) {
    todasImagens.forEach((img) => {
      img.addEventListener("click", (e) => {
        e.stopPropagation();
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
      });
    });

    // Fecha lightbox ao clicar no fundo
    lightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  }
});

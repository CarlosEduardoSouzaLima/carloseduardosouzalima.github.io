// ==========================
// MENU MOBILE
// ==========================
const menuToggle = document.getElementById("menuToggle");
const menuNav = document.getElementById("menuNav");

if (menuToggle && menuNav) {
  menuToggle.addEventListener("click", () => {
    menuNav.classList.toggle("active");
  });
}

// ==========================
// FUNÇÃO PARA CALCULAR TEMPO
// ==========================
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

// ==========================
// CONTADOR CASADOS
// ==========================
const contadorCasados = document.getElementById("contador-casados");
if (contadorCasados) {
  const dataCasamento = new Date(2024, 4, 11);
  const t = calcularTempo(dataCasamento);
  contadorCasados.innerText = `Estamos juntos há ${t.anos} anos, ${t.meses} meses e ${t.dias} dias ❤️`;
}

// ==========================
// CONTADOR DOGUINHO
// ==========================
const contadorDog = document.getElementById("contador-dog");
if (contadorDog) {
  const dataDog = new Date(2025, 1, 2);
  const t = calcularTempo(dataDog);
  contadorDog.innerText = `Nosso doguinho está conosco há ${t.anos} anos, ${t.meses} meses e ${t.dias} dias 🐾`;
}

// ==========================
// LIGHTBOX COM ZOOM
// ==========================
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
let zoomLevel = 1;

function ativarLightbox() {
  const imagens = document.querySelectorAll(
    ".galeria img, .galeria-dog img, .galeria-completa img"
  );

  imagens.forEach((img) => {
    img.addEventListener("click", (e) => {
      e.stopPropagation();
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
      zoomLevel = 1;
      lightboxImg.style.transform = `scale(${zoomLevel})`;
    });
  });

  lightboxImg.addEventListener("wheel", (e) => {
    e.preventDefault();
    if (e.deltaY < 0) zoomLevel += 0.1;
    else zoomLevel -= 0.1;

    zoomLevel = Math.min(Math.max(zoomLevel, 1), 3);
    lightboxImg.style.transform = `scale(${zoomLevel})`;
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
    zoomLevel = 1;
    lightboxImg.style.transform = `scale(${zoomLevel})`;
  });
}

// ==========================
// ADICIONAR IMAGENS AUTOMÁTICAS
// ==========================
function adicionarImagensAutomaticas() {
  const galeriaCompleta = document.querySelector(".galeria-completa");
  if (!galeriaCompleta) return;

  galeriaCompleta.innerHTML = "";

  const pagina = window.location.pathname;

  let prefixo = "";
  let quantidade = 0;

  // Página do doguinho
  if (pagina.includes("todas-fotos-doguinho")) {
    prefixo = "d";
    quantidade = 25; // 🔴 AJUSTE se tiver mais ou menos
  }

  // Página do casal
  else if (pagina.includes("todas-fotos")) {
    prefixo = "";
    quantidade = 29; // 🔴 AJUSTE se necessário
  }

  for (let i = 1; i <= quantidade; i++) {
    const img = document.createElement("img");
    img.src = `fotos/${prefixo}${String(i).padStart(2, "0")}.jpeg`;
    img.alt = `Foto ${i}`;
    galeriaCompleta.appendChild(img);
  }
}

// ==========================
// INICIALIZAÇÃO
// ==========================
adicionarImagensAutomaticas();
ativarLightbox();

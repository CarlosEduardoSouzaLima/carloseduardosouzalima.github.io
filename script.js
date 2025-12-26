// MENU MOBILE
const menuToggle = document.getElementById("menuToggle");
const menuNav = document.getElementById("menuNav");

menuToggle.addEventListener("click", () => {
  menuNav.classList.toggle("active");
});

// FUNÇÃO CORRETA PARA CALCULAR TEMPO
function calcularTempo(dataInicial) {
  const agora = new Date();

  let anos = agora.getFullYear() - dataInicial.getFullYear();
  let meses = agora.getMonth() - dataInicial.getMonth();
  let dias = agora.getDate() - dataInicial.getDate();

  // Ajuste de dias
  if (dias < 0) {
    meses--;

    const mesAnterior = new Date(
      agora.getFullYear(),
      agora.getMonth(),
      0
    ).getDate();

    dias += mesAnterior;
  }

  // Ajuste de meses
  if (meses < 0) {
    anos--;
    meses += 12;
  }

  return { anos, meses, dias };
}

// ⏳ DATA DO CASAMENTO — 2024-05-11
const dataCasamento = new Date(2024, 4, 11); // Maio = 4
const contadorCasados = document.getElementById("contador-casados");

function atualizarCasados() {
  const t = calcularTempo(dataCasamento);
  contadorCasados.innerText = `Estamos juntos há ${t.anos} anos, ${t.meses} meses e ${t.dias} dias ❤️`;
}

atualizarCasados();

// 🐶 DATA DO DOGUINHO — 2025-02-02
const dataDog = new Date(2025, 1, 2); // Fevereiro = 1
const contadorDog = document.getElementById("contador-dog");

function atualizarDog() {
  const t = calcularTempo(dataDog);
  contadorDog.innerText = `Nosso doguinho está conosco há ${t.anos} anos, ${t.meses} meses e ${t.dias} dias 🐾`;
}

atualizarDog();

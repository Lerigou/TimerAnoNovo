// Seleciona o elemento do timer
const timerElement = document.getElementById("timer");

// Define a data do próximo Ano Novo
const nextYear = new Date().getFullYear() + 1;
const newYearDate = new Date(`January 1, ${nextYear} 00:00:00`);

// Função para atualizar o timer
function updateTimer() {
  const now = new Date();
  const timeRemaining = newYearDate - now;

  if (timeRemaining <= 0) {
    timerElement.textContent = "Feliz Ano Novo!";
    clearInterval(timerInterval);
    return;
  }

  // const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  // const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  // const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  document.getElementById("days").innerText = Math.floor(
    timeRemaining / (1000 * 60 * 60 * 24)
  );
  document.getElementById("hours").innerText = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  document.getElementById("minutes").innerText = Math.floor(
    (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
  );
  document.getElementById("seconds").innerText = Math.floor(
    (timeRemaining % (1000 * 60)) / 1000
  );
  document.getElementById("nextYear").innerText = nextYear;
}

// Atualiza o timer a cada segundo
const timerInterval = setInterval(updateTimer, 1000);

// Inicializa o timer
updateTimer();

// Adiciona um evento de estrelinhas ao mouse
window.addEventListener(
  "mousemove",
  function (e) {
    var arr = [1, 0.9, 0.8, 0.5, 0.2];

    arr.forEach(function (i) {
      var x = (1 - i) * 75;
      var star = document.createElement("div");

      star.className = "star";
      star.style.top = e.pageY + Math.round(Math.random() * x - x / 2) + "px";
      star.style.left = e.pageX + Math.round(Math.random() * x - x / 2) + "px";

      document.body.appendChild(star);

      window.setTimeout(function () {
        document.body.removeChild(star);
      }, Math.round(Math.random() * i * 600));
    });
  },
  false
);

// Adiciona uma animação de estrelinhas ao span
function createStarAnimation(targetElement) {
  setInterval(() => {
    const rect = targetElement.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const top = rect.top;
    const left = rect.left;

    const numStars = 10; // Número de estrelas por ciclo
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      const randomX = Math.random() * width; // Posição aleatória no eixo X
      const randomY = Math.random() * height; // Posição aleatória no eixo Y

      star.className = "star";
      star.style.top = top + randomY + "px";
      star.style.left = left + randomX + "px";

      document.body.appendChild(star);

      // Remove a estrela após um tempo
      setTimeout(() => {
        document.body.removeChild(star);
      }, Math.random() * 800); // 
    }
  }, 500);
}

const nextYearElement = document.getElementById("nextYear");
createStarAnimation(nextYearElement);

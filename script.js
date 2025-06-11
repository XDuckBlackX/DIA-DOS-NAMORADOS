// Data de início
const startDate = new Date('2024-12-08T17:00:00');
// Offset Brasília (−3 h em minutos)
const BR_OFFSET = -3 * 60;

// Retorna agora em Brasília
function nowInBrasilia() {
  const utcMs = Date.now() + new Date().getTimezoneOffset() * 60000;
  return new Date(utcMs - BR_OFFSET * 60000);
}

function updateTimer() {
  const now = nowInBrasilia();
  // diferença total em segundos (sempre positiva, crescente)
  let diff = Math.floor((now - startDate) / 1000);

  // anos (365 dias cada)
  const years = Math.floor(diff / (365 * 24 * 3600));
  diff -= years * 365 * 24 * 3600;

  // meses (30 dias cada)
  const months = Math.floor(diff / (30 * 24 * 3600));
  diff -= months * 30 * 24 * 3600;

  // dias
  const days = Math.floor(diff / (24 * 3600));
  diff -= days * 24 * 3600;

  // horas
  const hours = Math.floor(diff / 3600);
  diff -= hours * 3600;

  // minutos e segundos
  const minutes = Math.floor(diff / 60);
  const seconds = diff - minutes * 60;

  // atualiza o HTML
  document.getElementById('current-time').textContent =
    `${years} anos ${months} meses ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// dispara a cada segundo
setInterval(updateTimer, 1000);
updateTimer();

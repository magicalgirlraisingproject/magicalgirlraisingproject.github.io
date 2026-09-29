document.addEventListener("DOMContentLoaded", function() {
  // 1. Tworzymy lub znajdujemy pasek informacyjny
  let bar = document.querySelector(".announcement-bar");
  if (!bar) {
    bar = document.createElement("div");
    bar.className = "announcement-bar";
    const content = document.querySelector(".content") || document.querySelector("main");
    if (content) {
      content.parentNode.insertBefore(bar, content);
    } else {
      document.body.prepend(bar);
    }
  }

  // 2. Data docelowa w formacie ISO ze strefą GMT+9 (+09:00)
  const targetDate = new Date("2026-10-06T02:00:00+09:00").getTime();

  // 3. Funkcja przeliczająca czas
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Po upływie czasu
    if (distance <= 0) {
      bar.innerHTML = "✨ Magical Girl Raising Project is NOW AVAILABLE! ✨";
      return;
    }

    // Obliczanie dni, godzin, minut i sekund
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Formatowanie dwucyfrowe (np. 05 zamiast 5)
    const dStr = String(days).padStart(2, '0');
    const hStr = String(hours).padStart(2, '0');
    const mStr = String(minutes).padStart(2, '0');
    const sStr = String(seconds).padStart(2, '0');

    // Wstawianie tekstu do paska
    bar.innerHTML = `✨ Magical Girl Raising Project Restart Releasing In: <strong>${dStr}d:${hStr}h:${mStr}m:${sStr}s</strong> ✨`;
  }

  // Uruchomienie odliczania od razu i odświeżanie co 1 sekundę
  updateCountdown();
  setInterval(updateCountdown, 1000);
});

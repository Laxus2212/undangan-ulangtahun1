// Tombol buka undangan
const openBtn = document.getElementById("openBtn");
const cover = document.getElementById("cover");
const mainContent = document.getElementById("mainContent");

if (openBtn) {
    openBtn.addEventListener("click", function () {

        // Sembunyikan cover
        if (cover) {
            cover.style.display = "none";
        }

        // Tampilkan isi undangan
        if (mainContent) {
            mainContent.style.display = "block";
        }

        // Scroll ke atas
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ======================
// Countdown
// ======================

const targetDate = new Date("2026-08-15T19:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if (distance < 0) return;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (document.getElementById("days"))
        document.getElementById("days").innerHTML = String(days).padStart(2, "0");

    if (document.getElementById("hours"))
        document.getElementById("hours").innerHTML = String(hours).padStart(2, "0");

    if (document.getElementById("minutes"))
        document.getElementById("minutes").innerHTML = String(minutes).padStart(2, "0");

    if (document.getElementById("seconds"))
        document.getElementById("seconds").innerHTML = String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);

updateCountdown();

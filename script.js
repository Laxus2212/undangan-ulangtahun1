// ==============================
// BUKA UNDANGAN
// ==============================

const openBtn = document.getElementById("openBtn");
const cover = document.getElementById("cover");
const mainContent = document.getElementById("mainContent");

if (openBtn) {
    openBtn.addEventListener("click", function () {

        // Sembunyikan cover
        cover.style.display = "none";

        // Tampilkan isi undangan
        mainContent.style.display = "block";

        // Scroll ke atas
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}


// ==============================
// COUNTDOWN
// ==============================

const targetDate = new Date("2026-08-15T19:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if (distance < 0) return;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = String(days).padStart(2, "0");
    document.getElementById("hours").innerHTML = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerHTML = String(minutes).padStart(2, "0");
    document.getElementById("seconds").innerHTML = String(seconds).padStart(2, "0");
}
// Jalankan countdown pertama kali
updateCountdown();

// Perbarui setiap 1 detik
setInterval(updateCountdown, 1000);

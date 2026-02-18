// USTAW TUTAJ SWOJĄ DATĘ (Rok, Miesiąc-1, Dzień, Godzina, Minuta)
const startDate = new Date(2024, 8, 15,0, 0); 

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;
}

function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();
    button.appendChild(circle);
}

document.getElementById('actionBtn').addEventListener('click', function(e) {
    createRipple(e);
    
    // Uruchom animacje
    const heart = document.getElementById('heart');
    heart.classList.add('spinning');
    
    const content = document.getElementById('hiddenContent');
    content.classList.add('show-content');
    
    // Zablokuj przycisk i zmień tekst
    this.disabled = true;
    this.innerText = "❤️ Kocham Cię bardzo mocno ❤️";
    
    // Start licznika
    updateTimer();
    setInterval(updateTimer, 1000);
});
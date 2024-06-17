// Fireworks effect
function createFirework(x, y) {
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = `${x}px`;
    firework.style.top = `${y}px`;
    document.body.appendChild(firework);
    setTimeout(() => {
        firework.remove();
    }, 1500);
}

document.body.addEventListener('click', (e) => {
    createFirework(e.clientX, e.clientY);
});

// Confetti effect
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.body.appendChild(confetti);
    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

setInterval(createConfetti, 300);

// Fireworks and confetti styles
const style = document.createElement('style');
style.innerHTML = `
.firework {
    position: absolute;
    width: 10px;
    height: 10px;
    background: #ff1493;
    border-radius: 50%;
    animation: explode 1.5s linear;
    pointer-events: none;
}

@keyframes explode {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(5); opacity: 0; }
}

.confetti {
    position: fixed;
    top: 0;
    width: 10px;
    height: 30px;
    background: #ff69b4;
    opacity: 0.7;
    animation: fall linear infinite;
    pointer-events: none;
}

@keyframes fall {
    0% { transform: translateY(0); }
    100% { transform: translateY(100vh); }
}
`;
document.head.appendChild(style);


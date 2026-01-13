/* =========================================
   SISTEMA PARTICELLARE: CENERE (ASHFALL)
   ========================================= */

const canvas = document.getElementById('ashCanvas');
const ctx = canvas.getContext('2d');

// Imposta il canvas a schermo intero
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Gestione ridimensionamento finestra
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Configurazione Particelle
const particlesArray = [];
const numberOfParticles = 100; // Numero di particelle (aumenta per più cenere, diminuisci per meno)

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        // Dimensione casuale tra 1px e 3px
        this.size = Math.random() * 2 + 1; 
        // Velocità di caduta casuale
        this.speedY = Math.random() * 1 + 0.5; 
        // Oscillazione laterale (Vento)
        this.speedX = (Math.random() - 0.5) * 0.5; 
        // Opacità casuale per dare profondità
        this.opacity = Math.random() * 0.5 + 0.1;
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX;

        // Se la particella esce dal fondo, resettala in alto
        if (this.y > canvas.height) {
            this.y = 0 - this.size;
            this.x = Math.random() * canvas.width;
            this.speedY = Math.random() * 1 + 0.5;
        }
        
        // Se esce dai lati, rientra dall'altro lato
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
    }

    draw() {
        ctx.fillStyle = `rgba(192, 192, 192, ${this.opacity})`; // Colore Grigio Argenteo (Cenere)
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Inizializza le particelle
function init() {
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}

// Loop di animazione
function animate() {
    // Pulisce il canvas mantenendo la trasparenza
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    
    requestAnimationFrame(animate);
}

init();
animate();

/* =========================================
   SISTEMA DI TRANSIZIONE: FOG GATE
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Crea dinamicamente l'elemento nebbia se non esiste
    let fogGate = document.createElement('div');
    fogGate.classList.add('fog-gate');
    document.body.appendChild(fogGate);

    // 2. TRANSIZIONE IN INGRESSO (Dissolvi la nebbia quando la pagina è pronta)
    // Piccolo ritardo per assicurare che l'animazione si veda
    setTimeout(() => {
        fogGate.classList.add('fog-open');
    }, 100);

    // 3. TRANSIZIONE IN USCITA (Gestione click sui link)
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const target = this.getAttribute('target');

            // Ignora i link che aprono nuove schede (target="_blank") o ancore interne (#)
            if (target === '_blank' || href.startsWith('#') || href.startsWith('mailto:')) {
                return;
            }

            e.preventDefault(); // Ferma il caricamento immediato

            // Riporta la nebbia (copre lo schermo)
            fogGate.classList.remove('fog-open');

            // Aspetta la fine dell'animazione (0.8s) poi cambia pagina
            setTimeout(() => {
                window.location.href = href;
            }, 800);
        });
    });
});

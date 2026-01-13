/* =========================================
   EFFETTO SOUL IMPACT (CLICK)
   ========================================= */

document.addEventListener('click', function(e) {
    // Crea il contenitore dell'esplosione
    const burst = document.createElement('div');
    burst.classList.add('soul-burst');
    
    // Posiziona l'esplosione esattamente dove hai cliccato
    burst.style.left = e.clientX + 'px';
    burst.style.top = e.clientY + 'px';
    
    document.body.appendChild(burst);

    // Rimuovi l'elemento dal DOM dopo l'animazione per non appesantire il sito
    setTimeout(() => {
        burst.remove();
    }, 600); // Deve durare quanto l'animazione CSS
});

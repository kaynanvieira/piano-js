const teclas = document.querySelectorAll('.tecla')

function tocarNota(tecla) {
    const nota = tecla.dataset.nota;
    const audio = new Audio(`audios/${nota}.mp3`);
    
    audio.play();
}

teclas.forEach(tecla => {
    tecla.addEventListener('click', () => {
        tocarNota(tecla);
    });
});
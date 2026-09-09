const teclas = document.querySelectorAll('.tecla')

const mapaTeclas = {
    // ==========================================
    // 1ª OITAVA (GRAVE)
    // ==========================================
    // Brancas
    'Tab': 'C3',
    'KeyQ': 'D3',
    'KeyW': 'E3',
    'KeyE': 'F3',
    'KeyR': 'G3',
    'KeyT': 'A3',
    'KeyY': 'B3',

    // Pretas (Teclas numéricas logo acima)
    'Backquote': 'Db3', // Tecla do acento ´
    'Digit1': 'Eb3',
    /* E3 não tem preta */
    'Digit3': 'Gb3',
    'Digit4': 'Ab3',
    'Digit5': 'Bb3',

    // ==========================================
    // 2ª OITAVA (MÉDIA)
    // ==========================================
    // Brancas
    'KeyU': 'C4',
    'KeyI': 'D4',
    'KeyO': 'E4',
    'KeyP': 'F4',
    'BracketLeft': 'G4',  // Tecla [ (ou ´ dependendo do mapa físico)
    'BracketRight': 'A4', // Tecla ]
    'Backslash': 'B4',    // Tecla \

    // Pretas
    'Digit7': 'Db4',
    'Digit8': 'Eb4',
    /* E4 não tem preta */
    'Digit0': 'Gb4',
    'Minus': 'Ab4',
    'Equal': 'Bb4',

    // ==========================================
    // 3ª OITAVA (AGUDA)
    // ==========================================
    // Brancas
    'Delete': 'C5',
    'End': 'D5',
    'PageDown': 'E5',
    'Numpad7': 'F5',
    'Numpad8': 'G5',
    'Numpad9': 'A5',
    'NumpadAdd': 'B5',

   'Insert': 'Db5',
    'Home': 'Eb5',
    /* E5 não tem preta */
    'NumLock': 'Gb5',
    'NumpadDivide': 'Ab5', // Tecla / do teclado numérico
    'NumpadMultiply': 'Bb5' // Tecla * do teclado numérico
};

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

document.addEventListener('keydown', (event) => {
    if (event.repeat) return;

    // Usamos event.code para ignorar problemas de acentuação/Dead Keys
    const nota = mapaTeclas[event.code];

    if (nota) {
        event.preventDefault(); // Impede comportamento padrão como o Tab pular foco

        const elementoTecla = document.querySelector(`[data-nota="${nota}"]`);
        if (elementoTecla) {
            tocarNota(elementoTecla);
            elementoTecla.classList.add('ativa');
        }
    }
});

// Evento keyup atualizado
document.addEventListener('keyup', (event) => {
    const nota = mapaTeclas[event.code];

    if (nota) {
        const elementoTecla = document.querySelector(`[data-nota="${nota}"]`);
        if (elementoTecla) {
            elementoTecla.classList.remove('ativa');
        }
    }
});
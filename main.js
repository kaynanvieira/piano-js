const teclas = document.querySelectorAll('.tecla');
const tecladoContainer = document.querySelector('.teclado');
const btnLegendas = document.getElementById('btn-legendas');

const mapaTeclas = {
    // ==========================================
    // 1ª OITAVA (GRAVE)
    // ==========================================
    'Tab': 'C3',
    'KeyQ': 'D3',
    'KeyW': 'E3',
    'KeyE': 'F3',
    'KeyR': 'G3',
    'KeyT': 'A3',
    'KeyY': 'B3',

    'Backquote': 'Db3',
    'Digit1': 'Eb3',
    'Digit3': 'Gb3',
    'Digit4': 'Ab3',
    'Digit5': 'Bb3',

    // ==========================================
    // 2ª OITAVA (MÉDIA)
    // ==========================================
    'KeyU': 'C4',
    'KeyI': 'D4',
    'KeyO': 'E4',
    'KeyP': 'F4',
    'BracketLeft': 'G4',
    'BracketRight': 'A4',
    'Backslash': 'B4',

    'Digit7': 'Db4',
    'Digit8': 'Eb4',
    'Digit0': 'Gb4',
    'Minus': 'Ab4',
    'Equal': 'Bb4',

    // ==========================================
    // 3ª OITAVA (AGUDA)
    // ==========================================
    'Delete': 'C5',
    'End': 'D5',
    'PageDown': 'E5',
    'Numpad7': 'F5',
    'Numpad8': 'G5',
    'Numpad9': 'A5',
    'NumpadAdd': 'B5',

    'Insert': 'Db5',
    'Home': 'Eb5',
    'NumLock': 'Gb5',
    'NumpadDivide': 'Ab5',
    'NumpadMultiply': 'Bb5'
};

// --- FUNÇÃO PARA TOCAR O SOM (PIANO REAL) ---
function tocarNota(tecla) {
    const nota = tecla.dataset.nota;
    
    // Cria um novo objeto de áudio a cada toque.
    // Isso permite sobrepor sons e deixar o caimento (decay) natural da nota acontecer!
    const audio = new Audio(`audios/${nota}.mp3`);
    audio.play();
}

// --- EVENTOS DO MOUSE ---
teclas.forEach(tecla => {
    tecla.addEventListener('mousedown', () => {
        tocarNota(tecla);
        tecla.classList.add('ativa');
    });

    // Ao soltar ou tirar o mouse, apenas remove o efeito visual (o som continua até o fim)
    tecla.addEventListener('mouseup', () => {
        tecla.classList.remove('ativa');
    });

    tecla.addEventListener('mouseleave', () => {
        tecla.classList.remove('ativa');
    });
});

// --- EVENTOS DO TECLADO ---
document.addEventListener('keydown', (event) => {
    if (event.repeat) return; // Evita metralhadora de áudio enquanto segura a tecla

    const nota = mapaTeclas[event.code];

    if (nota) {
        event.preventDefault(); // Impede ações do navegador (como Tab)

        const elementoTecla = document.querySelector(`[data-nota="${nota}"]`);
        if (elementoTecla) {
            tocarNota(elementoTecla);
            elementoTecla.classList.add('ativa');
        }
    }
});

document.addEventListener('keyup', (event) => {
    const nota = mapaTeclas[event.code];

    if (nota) {
        const elementoTecla = document.querySelector(`[data-nota="${nota}"]`);
        if (elementoTecla) {
            // Apenas remove a cor de tecla pressionada
            elementoTecla.classList.remove('ativa');
        }
    }
});

// --- TOGGLE DA FLAG DE LEGENDAS ---
if (btnLegendas) {
    btnLegendas.addEventListener('click', () => {
        tecladoContainer.classList.toggle('mostrar-legendas');
        btnLegendas.classList.toggle('ativo');
    });
}
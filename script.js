// Inicialização
const video = document.getElementById('bgVideo');
const audio = document.getElementById('bgMusic');
const cursor = document.querySelector('.cursor');
const buttons = document.querySelectorAll('.btn');

// Configura volume
audio.volume = 0.3;

// Ativa áudio na interação
function enableAudio() {
    video.muted = false;
    audio.play().catch(e => console.log("Audio error:", e));
    document.body.removeEventListener('click', enableAudio);
}

document.body.addEventListener('click', enableAudio);

// Efeito do cursor
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Efeitos nos botões
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(2)';
        cursor.style.backgroundColor = 'rgba(255, 0, 255, 0.7)';
    });
    
    btn.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.backgroundColor = 'rgba(0, 255, 255, 0.7)';
    });
});

// Funções dos botões
document.getElementById('btn1').addEventListener('click', () => {
    alert('Welcome to the virtual plaza');
});

document.getElementById('btn2').addEventListener('click', () => {
    alert('This is a vaporwave experience\nCreated with aesthetic in mind');
});

document.getElementById('btn3').addEventListener('click', () => {
    alert('Leaving so soon?');
});
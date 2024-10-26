document.addEventListener('DOMContentLoaded', () => {
    const titulo = document.getElementById('titulo');
    const usernameInput = document.getElementById('username');
    const textoOriginal = titulo.textContent;
    let animacaoAtiva = false;

    usernameInput.addEventListener('input', () => {
        if (!animacaoAtiva) {
            animacaoAtiva = true;
            animarTitulo();
        }
    });

    function animarTitulo() {
        let index = 0;
        titulo.textContent = '';
        
        function escreverCaractere() {
            if (index < textoOriginal.length) {
                titulo.textContent += textoOriginal.charAt(index);
                index++;
                setTimeout(escreverCaractere, 100);
            } else {
                animacaoAtiva = false;
            }
        }

        escreverCaractere();
    }
});
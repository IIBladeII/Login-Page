/* © [Blade](https://github.com/IIBladeII), [2024]. All rights reserved. */

document.addEventListener('DOMContentLoaded', function() {
    const loginContainer = document.querySelector('.container');
    const registerArea = document.getElementById('registerArea');
    const toggleRegister = document.getElementById('toggleRegister');
    const toggleLogin = document.getElementById('toggleLogin');

    toggleRegister.addEventListener('click', function(e) {
        e.preventDefault();
        loginContainer.style.display = 'none';
        registerArea.style.display = 'block';
    });

    toggleLogin.addEventListener('click', function(e) {
        e.preventDefault();
        registerArea.style.display = 'none';
        loginContainer.style.display = 'block';
    });

    
    animatePageLoad();
});

function animatePageLoad() {
    const elements = document.querySelectorAll('.container, #registerArea');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    });

    setTimeout(() => {
        elements.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }, 100);
}

document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title');
    const usernameInput = document.getElementById('username');
    const originalText = title.textContent;
    let animationActive = false;

    usernameInput.addEventListener('input', () => {
        if (!animationActive) {
            animationActive = true;
            animateTitle();
        }
    });

    function animateTitle() {
        let index = 0;
        title.textContent = '';
        
        function writeCharacter() {
            if (index < originalText.length) {
                title.textContent += originalText.charAt(index);
                index++;
                setTimeout(writeCharacter, 100);
            } else {
                animationActive = false;
            }
        }

        writeCharacter();
    }
});
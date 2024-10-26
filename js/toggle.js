/* © [Blade](https://github.com/IIBladeII), [2024]. Todos os direitos reservados. */

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
});
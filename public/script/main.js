(function () {
    var menu = document.getElementById('scrollMenu')
    var buttonMenu = document.getElementById('btn')
    var logo = document.getElementById('logo')

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            menu.classList.add('menuFixo')
            buttonMenu.classList.add('shadow-black')
            logo.src = "/public/assets/logo-white.svg"
            
        } else { 
            menu.classList.remove('menuFixo');
            buttonMenu.classList.remove('shadow-black')
            buttonMenu.classList.add('shadow-white')
            logo.src = "/public/assets/logo.svg"

    }
    });
})();
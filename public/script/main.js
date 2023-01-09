(function () {
    var bgHeader = document.getElementById('bg-header')
    var logo = document.getElementById('logo')
    var textLogo = document.getElementById('text-logo')
    var navMenu1 = document.getElementById('list-nav')
    var textA = document.getElementById('a-text')
    var header = document.getElementById('header')



    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            bgHeader.classList.add('bg-dark')
            navMenu1.classList.add('d-none')
            textA.classList.remove('col-md-3')
            textA.classList.add('col-md-6')
            header.classList.remove('mb-4')


            logo.src = "/public/assets/logo-white.svg"
            textLogo.textContent = 'Conectando negócios a quem precisa da solução. Vamos juntos?'

        } else { 
            bgHeader.classList.remove('bg-dark')
            logo.src = "/public/assets/logo.svg"
            textLogo.textContent = ''
            navMenu1.classList.remove('d-none')

            textA.classList.remove('col-md-6')
            textA.classList.add('col-md-3')
    }
    });
})();


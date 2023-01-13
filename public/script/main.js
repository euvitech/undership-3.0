(function () {
    var bgHeader = document.getElementById('bg-header')
    var logo = document.getElementById('logo')
    var textLogo = document.getElementById('text-logo')
    var navMenu1 = document.getElementById('list-nav')
    var textA = document.getElementById('a-text')
    var header = document.getElementById('header')
    var textli = document.getElementById('text-li')
    var textli2 = document.getElementById('text-li2')
    var textli3 = document.getElementById('text-li3')
    var textli4 = document.getElementById('text-li4')




    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            textli.classList.replace('text-dark','text-light')
            textli2.classList.replace('text-dark','text-light')
            textli3.classList.replace('text-dark','text-light')
            textli4.classList.replace('text-dark','text-light')


            bgHeader.classList.add('bg-dark')
            navMenu1.classList.add('d-none', 'd-lg-block')
            navMenu1.classList.remove('d-md-flex', 'd-lg-block')

            textA.classList.remove('col-md-3')
            textA.classList.add('col-md-6')
            header.classList.remove('mb-4')


            logo.src = "/public/assets/logo-white.svg"
            textLogo.textContent = 'Conectando negócios a quem precisa da solução. Vamos juntos?'

        } else { 
            textli.classList.replace('text-light','text-dark')
            textli2.classList.replace('text-light','text-dark')
            textli3.classList.replace('text-light','text-dark')
            textli4.classList.replace('text-light','text-dark')

            bgHeader.classList.remove('bg-dark')
            logo.src = "/public/assets/logo.svg"
            textLogo.textContent = ''
            navMenu1.classList.remove('d-sm-block')
            navMenu1.classList.add('d-md-flex')


            textA.classList.remove('col-md-6')
            textA.classList.add('col-md-3')
    }
    });
})();


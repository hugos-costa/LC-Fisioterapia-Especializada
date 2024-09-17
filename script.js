$(document).ready(function(){
    $('.seventh-carousel').slick({
        infinite: true,
        slidesToShow: 1, // Exibe 1 slide por vez em telas menores
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1366, // Para telas menores que 1366px
                settings: {
                    slidesToShow: 1, // Continua mostrando 1 slide por vez
                }
            },
            {
                breakpoint: 9999, // Para telas maiores ou iguais a 1366px
                settings: {
                    slidesToShow: 3, // Exibe 3 slides por vez
                }
            }
        ]
    });
});



function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function checkVisibility() {
    const sections = document.querySelectorAll('.scroll-reveal');
    sections.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('show');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

function enviarWhatsApp() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var mensagem = document.getElementById("mensagem").value;

    var texto = `Nome: ${nome}%0AEmail: ${email}%0ATelefone: ${telefone}%0AMensagem: ${mensagem}`;

    var numeroWhatsApp = "5581989733530";

    var url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${texto}`;

    window.open(url, '_blank');
}
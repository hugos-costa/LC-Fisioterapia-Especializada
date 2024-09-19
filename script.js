$('.seventh-carousel').slick({
    infinite: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

// $(document).ready(function(){
//     $('.seventh-carousel').slick({
//         
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 5000,
//         dots: true,

//         responsive: [
//             {
//                 breakpoint: 1366,
//                 settings: {
//                     slidesToShow: 1,
//                 }
//             },
//             {
//                 breakpoint: 9999,
//                 settings: {
//                     slidesToShow: 3,
//                 }
//             }
//         ]
//     });
// });



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
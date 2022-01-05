$('section#domingo-perfeito').waypoint(
    function(direcao) {
        if (direcao == "down") {
            $('div.folha1').addClass('animate__animated animate__fadeInUp')
            $('div.folha3').addClass('animate__animated animate__fadeInUp')
            $('div.camarao').addClass('animate__animated animate__fadeInUp animate__slow')
            $('div.tomate').addClass('animate__animated animate__fadeInUp animate__slow')
            $('div.folha2').addClass('animate__animated animate__fadeInUp animate__slower')
            $('div.queijo').addClass('animate__animated animate__fadeInUp animate__slower')
        }
        if (direcao == "up") {
            $('div.folha1').removeClass('animate__animated animate__fadeInUp')
            $('div.folha3').removeClass('animate__animated animate__fadeInUp')
            $('div.camarao').removeClass('animate__animated animate__fadeInUp animate__slow')
            $('div.tomate').removeClass('animate__animated animate__fadeInUp animate__slow')
            $('div.folha2').removeClass('animate__animated animate__fadeInUp animate__slower')
            $('div.queijo').removeClass('animate__animated animate__fadeInUp animate__slower')
        }

    }, {
        offset: '450px;'
    })
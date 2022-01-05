$('section#domingo-perfeito').waypoint(
    function (direcao) {
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

$('div#transicao-testemunha-plano').waypoint(
    function (direcao) {
        if (direcao == "down") {
            $('div#decoracao1').addClass('animate__animated animate__fadeInLeft')
            $('div#decoracao2').addClass('animate__animated animate__fadeInUp')
            $('div#decoracao3').addClass('animate__animated animate__fadeInRight')
        }
        if (direcao == "up") {
            $('div#decoracao1').removeClass('animate__animated animate__fadeInLeft')
            $('div#decoracao2').removeClass('animate__animated animate__fadeInUp')
            $('div#decoracao3').removeClass('animate__animated animate__fadeInRight')
        }
    }, {
        offset: '450px;'
    })
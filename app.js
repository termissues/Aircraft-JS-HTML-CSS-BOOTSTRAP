function Funkcija() {
    const pgrmeniu = document.querySelector(".pgrmeniu");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    pgrmeniu.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Animation
        pgrmeniu.classList.toggle("toggle");
    });

}

Funkcija();

$(document).ready(function () {
    $('#paveikslas').css({
        'opacity': '0.5'
    })
    $('#paveikslas2').css({
        'opacity': '0.5'
    })
    $('#paveikslas3').css({
        'opacity': '0.5'
    })
    $('#paveikslas4').css({
        'opacity': '0.5'
    })
    $('#paveikslas').on('mouseover', function () {
        $('#paveikslas').css({
            'opacity': '1'
        })
    })
    $('#paveikslas').mouseout(function () {
        $('#paveikslas').css({
            'opacity': '0.5'
        })
    })
    $('#paveikslas2').on('mouseover', function () {
        $('#paveikslas2').css({
            'opacity': '1'
        })
    })
    $('#paveikslas2').mouseout(function () {
        $('#paveikslas2').css({
            'opacity': '0.5'
        })
    })
    $('#paveikslas3').on('mouseover', function () {
        $('#paveikslas3').css({
            'opacity': '1'
        })
    })
    $('#paveikslas3').mouseout(function () {
        $('#paveikslas3').css({
            'opacity': '0.5'
        })
    })
    $('#paveikslas4').on('mouseover', function () {
        $('#paveikslas4').css({
            'opacity': '1'
        })
    })
    $('#paveikslas4').mouseout(function () {
        $('#paveikslas4').css({
            'opacity': '0.5'
        })
    })
    $('#pirmasis-air').mouseover(function () {
        $('#modalas').modal({
            show: true
        });
    });
    $('#antrasis-air').mouseover(function () {
        $('#modalas2').modal({
            show: true
        });
    });
    $('#treciasis-air').mouseover(function () {
        $('#modalas3').modal({
            show: true
        });
    });
    $('#ketvirtasis-air').mouseover(function () {
        $('#modalas4').modal({
            show: true
        });
    });
    $('#img_button').on("click", function (e) { //Show ir Hide img
        $('#galerija').toggle('slow');
    });
    $("#img_button").click(function () {
        $('#aircraft').fadeIn(5000);
        $('#img_button').animate({
            top: '350px'
        })
    })
    $('#aircraft').click(function () {
        $('#aircraft').stop();
        alert("Aprašymo įžanga buvo sustabdyta.")
    })
});

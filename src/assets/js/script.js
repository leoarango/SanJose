var mouseout = false;
var mouseover = false;
var btnClicked = false;
var layerNaranjaClicked = false;
var layerRojoClicked = false;
var layerAzulClicked = false;
var layerAzulGaleriaClicked = false;
var layerVerdeClicked = false;
var click = false;
var numImg = 1;


var valoresDefecto = function() {
    $('#contenedor').addClass("background-default");
    $('#logo').attr("src", "assets/Images/Logo%20San%20José%20en%20colores/amarillo.png");
    $('#header').css("background-color", "gray");
    $('#botones').addClass("hide");


};
// -----------------------------naranja
var btnNaranjaClick = function() {
    if (!btnClicked) {
        btnClicked = true;
        $('#imgNaranja').removeClass("hide");
        $('#lnkSgte').removeClass("hide");
        $('#logo').addClass("hide");
        $('#contenedor').removeClass('background-naranja');
        $('#contenedor').addClass('background-naranja1');

    }
};

var btnNaranjaOver = function() {
    $('#contenedor').removeClass("background-default");
    $('#contenedor').addClass("background-naranja");
    $('#logo').attr("src", "assets/Images/Logo%20San%20José%20en%20colores/rojo.png");
    valoresDefecto();

};

var btnNaranjaOut = function() {
    $('#contenedor').removeClass('background-naranja');
    valoresDefecto();
};

// var animationDone = function() {
//     if (mouseover) {
//         $('#imgNaranja2').removeClass("animated once slideInLeft");
//         $('#imgrojo2').removeClass("animated once slideInLeft");
//         mouseover = false;
//     }
//     if (mouseout) {
//         // $('#imgNaranja2').addClass("hide");
//         // $('#imgNaranja2').removeClass("animated once slideOutLeft");
//         mouseout = false;
//     }
// };


// -------------------rojo
var btnRojoClick = function() {
    if (!btnClicked) {
        btnClicked = true;
        $('#imgRojo').removeClass("hide");
        $('#logo').addClass("hide");
        //$('#botones').addClass("hide");
        $('#contenedor').removeClass('background-rojo');
        $('#contenedor').addClass('background-rojo1');

    }
};
var btnRojoOver = function() {
    if (!btnClicked) {
        $('#contenedor').removeClass("background-default");
        $('#contenedor').addClass("background-rojo");
        $('#logo').attr("src", "assets/Images/Logo%20San%20José%20en%20colores/azul.png");
        // $('#header').css("background-color", "rgb(197, 69, 55)");
        $('#imgRojo2').removeClass("hide");
    }
};

var btnRojoOut = function() {
    $('#contenedor').removeClass("background-rojo");
    //$('#imgRojo2').addClass('hide');
    valoresDefecto();

};

var btnVerdeClick = function() {
    if (!btnClicked) {
        btnClicked = true;
        $('#imgVerde').removeClass("hide");
        $('#logo').addClass("hide");
        $('#contenedor').removeClass('background-verde');
        $('#contenedor').addClass('background-verde1');
        //$('#botones').addClass("hide");


    }
};

var btnVerdeOver = function() {
    if (!btnClicked) {
        $('#contenedor').removeClass("background-default");
        $('#contenedor').addClass("background-verde");
        $('#logo').attr("src", "assets/Images/Logo%20San%20José%20en%20colores/naranja.png");
        $('#header').css("background-color", "rgb(111, 159, 61)");
    }

};

var btnVerdeOut = function() {
    $('#contenedor').removeClass("background-verde");
    valoresDefecto();
};

var btnAzulClick = function() {
    if (!btnClicked) {
        btnClicked = true;
        $('#imgAzul').removeClass("hide");
        $('#galeria_1').removeClass("hide");
        //galeria-1- imagenminiatura
        $('#logo').addClass("hide");
        $('#contenedor').removeClass('background-azul');
        $('#contenedor').addClass('background-azul1');
        //$('#botones').addClass("hide");




    }
};
// var btnAzulGaleriaclic = function() {
//     alert("hola");
//     btnClicked = true;
//     $('#imgAzulimagenes').removeClass("hide");
//     $('#contenedor').addClass('background-azulimagen');
//     $('#contenedor').addClass('background-azul1');
//     //$('#contenedor').addClass('background-azulimagen');


// };

var btnAzulOver = function() {
    if (!btnClicked) {

        $('#contenedor').removeClass("background-default");
        $('#contenedor').addClass("background-azul");
        $('#logo').attr("src", "assets/Images/Logo%20San%20José%20en%20colores/rosado.png");
        $('#header').css("background-color", "rgb(51, 138, 192)");

    }
};

var btnAzulOut = function() {
    $('#contenedor').removeClass("background-azul");

    valoresDefecto();
};
// ----------------rosa
var btnRosaOver = function() {
    if (!btnClicked) {
        $('#contenedor').removeClass("background-default");
        $('#contenedor').addClass("background-rosa");
        $('#logo').attr("src", "assets/Images/Logo%20San%20José%20en%20colores/verde.png");
        $('#header').css("background-color", "rgb(212, 132, 60)");
    }
};

var btnRosaOut = function() {
    $('#contenedor').removeClass("background-rosa");
    valoresDefecto();
};

var lnkSgteClick = function(event) {
    event.preventDefault();
    numImg++;
    if (numImg > 4) {
        numImg = 1;
    }

    var textLink = "Siguiente><br>" + numImg + "/4";
    if (numImg == 4) {
        textLink = "Vuelve a la página principal<br>" + numImg + "/4";
    }

    $('#imgNaranja').prop('src', "assets/Images/Elementos%20%20Qué%20proponemos/elemento-0" + numImg + ".png");
    $('#lnkSgte').html(textLink);
};


var layerNaranjaClick = function() {
    layerNaranjaClicked = true;
};

var layerRojoClick = function() {
    layerRojoClicked = true;
};
var layerAzulClick = function() {
    layerAzulClicked = true;
};
var layerAzulGaleriaClick = function() {
    layerAzulGaleriaClicked = true;
};

var layerVerdeClick = function() {
    layerVerdeClicked = true;
};

var contenedorClick = function() {
    deshacer_click_btnNaranja();
    //     //devolverRojo();
};

var deshacer_click_btnNaranja = function() {
    if (!layerNaranjaClicked) {
        btnClicked = false;
        $('#contenedor').removeClass("background-naranja1");
        $('#imgNaranja').addClass("hide");
        $('#lnkSgte').addClass("hide");
        $('#logo').removeClass("hide");
        $('#botones').removeClass("hide");

        //valoresDefecto();
    }
    layerNaranjaClicked = false;

    if (!layerRojoClicked) {
        btnClicked = false;
        $('#contenedor').removeClass("background-rojo1");
        $('#imgRojo').addClass("hide");
        //$('#logo').removeClass("hide");
        //$('#botones').removeClass("hide");
        //valoresDefecto();
    }
    layerRojoClicked = false;

    if (!layerAzulClicked) {
        btnClicked = false;
        $('#contenedor').removeClass('background-azul1');
        $('#imgAzul').addClass("hide");
        $('#galeria_1').addClass("hide");
        //$('#logo').removeClass("hide");
        //$('#botones').removeClass("hide");
        //valoresDefecto();
    }
    layerAzulClicked = false;

    if (!layerVerdeClicked) {
        btnClicked = false;
        $('#imgVerde').addClass("hide");
        $('#contenedor').removeClass('background-verde1');
        //$('#logo').removeClass("hide");
        //$('#botones').removeClass("hide");
        //valoresDefecto();


    }
    layerVerdeClicked = false;
    $('#botones').removeClass("hide");
};

var btnFacebookClick = function() {
    window.open("https://www.facebook.com");
};

var btnInstagramClick = function() {
    window.open("https://www.instagram.com");
};

var btnYoutubeClick = function() {
    window.open("https://www.youtube.com");
};
$(document).ready(function() {
    $('.modal').modal();

    //añadiendo acciones a los botones
    $('#btnNaranja').on("click", btnNaranjaClick);
    $('#btnNaranja').on("mouseover", btnNaranjaOver);
    $('#btnNaranja').on("mouseout", btnNaranjaOut);

    $('#btnRojo').on("click", btnRojoClick);
    $('#btnRojo').on("mouseover", btnRojoOver);
    $('#btnRojo').on("mouseout", btnRojoOut);

    $('#btnVerde').on("click", btnVerdeClick);
    $('#btnVerde').on("mouseover", btnVerdeOver);
    $('#btnVerde').on("mouseout", btnVerdeOut);

    $('#btnAzul').on("click", btnAzulClick);
    $('#btnAzul').on("mouseover", btnAzulOver);
    $('#btnAzul').on("mouseout", btnAzulOut);
    // $('#btnAzulGaleria').on("click", btnAzulGaleriaclic);

    $('#btnRosa').on("mouseover", btnRosaOver);
    $('#btnRosa').on("mouseout", btnRosaOut);

    $('#contenedor').on("click", contenedorClick);

    $('#layerNaranja').on("click", layerNaranjaClick);
    $('#layerRojo').on("click", layerRojoClick);
    $('#layerAzul').on("click", layerAzulClick);
    $('#layerVerde').on("click", layerVerdeClick);
    $('#layerAzulGaleria').on("click", layerAzulGaleriaClick);


    $('#btnFacebook').on("click", btnFacebookClick);
    $('#btnInstagram').on("click", btnInstagramClick);
    $('#btnYoutube').on("click", btnYoutubeClick);
    //añadiendo animaciones

});

$('#contenedor').ready(function() {

    var isFirefox = typeof InstallTrigger !== 'undefined';

    /* if(isFirefox){
         var array = ['default','rojo','naranja', 'rosa', 'verde', 'azul'];
         var i = 1;
         setInterval(function () {
             if(i == array.length)
                 clearInterval(this);
             $('#contenedor').removeClass("background-"+array[i-1]);
             $('#contenedor').addClass("background-"+array[i]);
             i++;
         },1);

         $('#contenedor').ready(function () {
             $('#contenedor').addClass("background-default");
             $("#preloader").addClass("hide");
         })
     }*/

    $("#preloader").addClass("hide");

});
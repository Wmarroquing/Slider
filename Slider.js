$('#slider section:last').insertBefore('#slider section:first');
$('#slider').css('margin-left','-100%');


function MoverDerecha(){
    $('#slider').animate({
        marginLeft: '-200%'
    },1000, function(){
        $('#slider section:first').insertAfter('#slider section:last');
        $('#slider').css('margin-left','-100%');
    });
}

function MoverIzquierda(){
    $('#slider').animate({
        marginLeft: '0%'
    },1000, function(){
        $('#slider section:last').insertBefore('#slider section:first');
        $('#slider').css('margin-left','-100%');
    });
}

function Automatico(){
    interval = setInterval(function(){
        MoverDerecha();
    }, 5000);
}

Automatico();
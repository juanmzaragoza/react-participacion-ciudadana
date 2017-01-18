$(document).ready(function(){

    //Funcionamiento: despues de determinado % de scroll, aparece el buscador
    /*$('.box-btn-miBA').fadeOut();
    $(window).scroll(function(){
        if ($(this).scrollTop() > 80) {
            $('.box-btn-miBA').fadeIn();
        } else {
            $('.box-btn-miBA').fadeOut();
        }
    });*/
    
    setInterval(function(){
        $('.box-btn-miBA').fadeIn();
    },2000);
    
    $.datepicker.regional['es'] = {
        closeText: 'Cerrar',
        prevText: '<Ant',
        nextText: 'Sig>',
        currentText: 'Hoy',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
        dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
     };

    $.datepicker.setDefaults($.datepicker.regional['es']);
    $(function () {
        $("#fecha").datepicker();
    });

    $( "#datepicker" ).datepicker({
        inline: true
    });
 
});

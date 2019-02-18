$(document).ready(function(){
    $('#submit').on('click', function(){
        if($('#choixChat').val() == "") {
            alert("Choissiez un chat, s'il vous plaît");
        };
    
        if($('#raisonText').val().length < 15) {
            alert("Exprimez plus vos motivations, s'il vous plaît");
        };
    });
    
    $('.info').hover(function(){
        $('#teteChat').css("background-color", "#061339");
    }, function(){
        $('#teteChat').css("background-color", "#7885A5");
    });
});
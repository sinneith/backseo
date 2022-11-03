//map
$(document).ready(function(){
    $('.tab_button a').click(function(e){
        e.preventDefault();

        $(this).addClass('active');
    });
});


//whole_book
$(document).ready(function(){
    var btn = '.whole_btn';
    var content = '.whole_conwrap';

    $(btn).find('li:first a').addClass('active');
    $(content).find('> div:first').fadeIn(0);

    $(btn).find('a').click(function(e){
        e.preventDefault();

        $(btn).find('a').removeClass('active');
        $(this).addClass('active');

        var index = $(this).parent().index(); 

        $(content).find('> div').stop().fadeOut(0);   
        $(content).find('> div').eq(index).stop().fadeIn(600);
    });
    $(content).find('> div:first').fadeIn(0);
    $(content).find('> div:last').fadeOut(0);
});


//category
$(document).ready(function(){
    var btn = '#sub_contents .btn';
    var content = '#sub_contents .conwrap .btn_wrap';

    $(content).find('> div:first').fadeIn(0);

    $(btn).find('a').click(function(e){
        e.preventDefault();

        var index = $(this).parent().index();

        $(content).find('> div').stop().fadeOut(0);
        $(content).find('> div').eq(index).stop().fadeIn(0);
    });
});


$(document).ready(function(){
    var btn = '#sub_contents .conwrap .btn_wrap';
    var content = '#sub_contents .sub_conwrap';

    $(btn).find('> .btn01 a').click(function(e){
        e.preventDefault();

        var index = $(this).parent().index();

        $(content).find('> div > div').stop().fadeOut(0);
/*         $(content).find('> .s_wrap01 > div').stop().fadeOut(0); */
        $(content).find('> .s_wrap01 > div').eq(index).stop().fadeIn(0);
    });



    $(btn).find('> .btn02 a').click(function(e){
        e.preventDefault();

        var index = $(this).parent().index();

        $(content).find('> div > div').stop().fadeOut(0);
        $(content).find('> .s_wrap02 > div').eq(index).stop().fadeIn(0);
    });



    $(btn).find('> .btn03 a').click(function(e){
        e.preventDefault();

        var index = $(this).parent().index();

        $(content).find('> div > div').stop().fadeOut(0);
        $(content).find('> .s_wrap03 > div').eq(index).stop().fadeIn(0);
    });



    $(btn).find('> .btn04 a').click(function(e){
        e.preventDefault();

        var index = $(this).parent().index();

        $(content).find('> div > div').stop().fadeOut(0);
        $(content).find('> .s_wrap04 > div').eq(index).stop().fadeIn(0);
    });
});